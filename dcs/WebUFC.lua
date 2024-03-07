package.path = package.path..";.\\LuaSocket\\?.lua"
package.cpath = package.cpath..";.\\LuaSocket\\?.dll"

local JSON = loadfile("Scripts\\JSON.lua")()
local socket = require("socket")

WebUFC = {}

WebUFC.luaSocket = {}
WebUFC.luaSocket.host = "*"
WebUFC.luaSocket.port = 18809

WebUFC.aircraft = loadfile(lfs.writedir()..'Scripts/WebUFC/aircraft.lua')()
WebUFC.resendDelay = 1

function WebUFC.getACType()
	local data = LoGetSelfData()
    if data then
        return data["Name"];
    end
end

function WebUFC.getString(key, data)
	local _, _, data = string.find(data, key.."\n([^\n]*)\n")
	
	return data or ""
end

function WebUFC.debug(text)
	log.write("WebUFC", log.INFO, "debug: \n"..text)
end

function WebUFC.exportSwitches(list)
	local switches = "";
	local dev = GetDevice(0)
	local cockpitSwitches = {}
	for key,value in pairs(list) do
		cockpitSwitches[key] = string.format('%.2f',dev:get_argument_value(value))
		switches = switches..' '..cockpitSwitches[key]
	end

	return cockpitSwitches, switches
end

function WebUFC.sendData(tosend)
	local snd = JSON:encode(tosend)

	for index,cl in ipairs(WebUFC.luaSocket.clients) do
		cl:settimeout(.0001)
		local sent, error = cl:send(snd)
		if sent then
			log.write("WebUFC", log.INFO, "sent:"..snd)
		elseif error == 'closed' or error == 'timeout' then
			table.remove(WebUFC.luaSocket.clients, index)
			log.write("WebUFC", log.INFO, "client closed "..index)
		end
	end
end

WebUFC.last_data = {
	reportTime = 0
}

WebUFC.send_data = nil

function LuaExportStart()
	WebUFC.luaSocket.server = socket.bind(WebUFC.luaSocket.host, WebUFC.luaSocket.port)
	WebUFC.luaSocket.server:settimeout(.0001)
	WebUFC.luaSocket.clients = {}
	WebUFC.last_data.reportTime = LoGetModelTime()
end

function LuaExportActivityNextEvent(t)
	if WebUFC.send_data then
		WebUFC.sendData(WebUFC.send_data)
		WebUFC.send_data = nil
	end

	return t+0.033
end

function LuaExportBeforeNextFrame()
	local client = WebUFC.luaSocket.server:accept()
    if client then
		table.insert(WebUFC.luaSocket.clients, client)
		log.write("WebUFC", log.INFO, "new client")
    end

	for index,cl in ipairs(WebUFC.luaSocket.clients) do
        cl:settimeout(.0001)
        local package, error = cl:receive()
		if package then
			log.write("WebUFC", log.INFO, "message recieve "..package)
			local data = JSON:decode(package)
			if data.type == 'command' then
				local device = tonumber(data.device)
				local code = tonumber(data.code)
				local action = tonumber(data.action)
				if device ~=nil and code~=nil and action~=nil then
					GetDevice(device):performClickableAction(code, action)
				end
			end
		elseif error == 'closed' then
			table.remove(WebUFC.luaSocket.clients, index)
			log.write("WebUFC", log.INFO, "client closed: "..index)
		end
	end
end

function LuaExportAfterNextFrame()
	local current_time = LoGetModelTime()
	local ac = WebUFC.getACType()
	if ac == WebUFC.aircraft.fa18.type then
		local ufc_data = list_indication(6)
		
		local cockpitSwitches, switches = WebUFC.exportSwitches(WebUFC.aircraft.fa18.switches)
		
		if (current_time - WebUFC.last_data.reportTime > WebUFC.resendDelay) or ufc_data ~= WebUFC.last_data.ufc or switches ~= WebUFC.last_data.switches then 
			
			WebUFC.send_data = WebUFC.aircraft.fa18.export(ufc_data, cockpitSwitches)
			
			WebUFC.last_data.ufc = ufc_data
			WebUFC.last_data.switches = switches
			WebUFC.last_data.reportTime = current_time
		end
	elseif ac == WebUFC.aircraft.ah64.type then
		local kudata = list_indication(15)
		local kudata_cpg = list_indication(14)

		local cockpitSwitches, switches = WebUFC.exportSwitches(WebUFC.aircraft.ah64.switches)
		
		if (current_time - WebUFC.last_data.reportTime > WebUFC.resendDelay) or 
			kudata ~= WebUFC.last_data.kudata or 
			kudata_cpg ~= WebUFC.last_data.kudata_cpg or 
			switches ~= WebUFC.last_data.switches then 
			
			WebUFC.send_data = WebUFC.aircraft.ah64.export(kudata, kudata_cpg, cockpitSwitches)
			
			WebUFC.last_data.kudata = kudata
			WebUFC.last_data.kudata_cpg = kudata_cpg
			WebUFC.last_data.switches = switches
			WebUFC.last_data.reportTime = current_time
		end
	elseif ac == WebUFC.aircraft.f16.type then
		-- f16 indication 6 paged
	elseif ac == WebUFC.aircraft.a10c2.type then
		-- a10 indication 3 paged
	elseif ac == WebUFC.aircraft.ajs37.type then
		local ckdata = list_indication(2)
		local cockpitSwitches, switches = WebUFC.exportSwitches(WebUFC.aircraft.ajs37.switches)
		
		if (current_time - WebUFC.last_data.reportTime > WebUFC.resendDelay) or 
			ckdata ~= WebUFC.last_data.ckdata or 
			switches ~= WebUFC.last_data.switches then 
			
			WebUFC.send_data = WebUFC.aircraft.ajs37.export(ckdata, cockpitSwitches)
			
			WebUFC.last_data.ckdata = ckdata
			WebUFC.last_data.switches = switches
			WebUFC.last_data.reportTime = current_time
		end
	elseif ac == WebUFC.aircraft.av8b.type then
		local ufcdata = list_indication(5)
		local odudata = list_indication(6)

		local cockpitSwitches, switches = WebUFC.exportSwitches(WebUFC.aircraft.av8b.switches)
		
		if (current_time - WebUFC.last_data.reportTime > WebUFC.resendDelay) or 
			ufcdata ~= WebUFC.last_data.ufcdata or
			odudata ~= WebUFC.last_data.odudata or
			switches ~= WebUFC.last_data.switches then
			
			WebUFC.send_data = WebUFC.aircraft.av8b.export(ufcdata, odudata, cockpitSwitches)
			
			WebUFC.last_data.ufcdata = ufcdata
			WebUFC.last_data.odudata = odudata
			WebUFC.last_data.switches = switches
			WebUFC.last_data.reportTime = current_time
		end
	elseif ac == WebUFC.aircraft.jf17.type then
		local line1 = list_indication(3)
		local line2 = list_indication(4)
		local line3 = list_indication(5)
		local line4 = list_indication(6)

		local cockpitSwitches, switches = WebUFC.exportSwitches(WebUFC.aircraft.jf17.switches)
		
		if (current_time - WebUFC.last_data.reportTime > WebUFC.resendDelay) or 
			line1 ~= WebUFC.last_data.line1 or
			line2 ~= WebUFC.last_data.line2 or
			line3 ~= WebUFC.last_data.line3 or
			line4 ~= WebUFC.last_data.line4 or
			switches ~= WebUFC.last_data.switches then
			
			WebUFC.send_data = WebUFC.aircraft.jf17.export(line1, line2, line3, line4, cockpitSwitches)
			
			WebUFC.last_data.line1 = line1
			WebUFC.last_data.line2 = line2
			WebUFC.last_data.line3 = line3
			WebUFC.last_data.line4 = line4
			WebUFC.last_data.switches = switches
			WebUFC.last_data.reportTime = current_time
		end
	elseif ac == WebUFC.aircraft.m2k.type then
		
		local top_data = list_indication(9)
		local bottom_data = list_indication(10)

		local cockpitSwitches, switches = WebUFC.exportSwitches(WebUFC.aircraft.m2k.switches)

		if (current_time - WebUFC.last_data.reportTime > WebUFC.resendDelay) or 
			top_data ~= WebUFC.last_data.top_data or
			bottom_data ~= WebUFC.last_data.bottom_data or
			switches ~= WebUFC.last_data.switches then
			
			WebUFC.send_data = WebUFC.aircraft.m2k.export(top_data, bottom_data, cockpitSwitches)
			
			WebUFC.last_data.top_data = top_data
			WebUFC.last_data.bottom_data = bottom_data
			WebUFC.last_data.switches = switches
			WebUFC.last_data.reportTime = current_time
		end
	elseif ac == WebUFC.aircraft.f15e.type then
		local ufcdata = list_indication(9)
		local wsoufcdata = list_indication(18)

		local cockpitSwitches, switches = WebUFC.exportSwitches(WebUFC.aircraft.f15e.switches)
		
		if (current_time - WebUFC.last_data.reportTime > WebUFC.resendDelay) or 
			ufcdata ~= WebUFC.last_data.ufcdata or
			wsoufcdata ~= WebUFC.last_data.wsoufcdata or
			switches ~= WebUFC.last_data.switches then
			
			WebUFC.send_data = WebUFC.aircraft.f15e.export(ufcdata, wsoufcdata, cockpitSwitches)
			
			WebUFC.last_data.ufcdata = ufcdata
			WebUFC.last_data.wsoufcdata = wsoufcdata
			WebUFC.last_data.switches = switches
			WebUFC.last_data.reportTime = current_time
		end
	elseif ac == WebUFC.aircraft.mf1ce.type then
		--mirage f1 indication higher then 15 ?
	elseif ac == WebUFC.aircraft.mf1ee.type then
		--mirage f1 indication higher then 15 ?
	elseif ac == WebUFC.aircraft.mf1be.type then
		--mirage f1 indication higher then 15 ?
	elseif ac == WebUFC.aircraft.sa342.type or ac == WebUFC.aircraft.sa342.alt_type1 or ac == WebUFC.aircraft.sa342.alt_type2 then
		local nadirdata = list_indication(2)

		local cockpitSwitches, switches = WebUFC.exportSwitches(WebUFC.aircraft.sa342.switches)
		
		if (current_time - WebUFC.last_data.reportTime > WebUFC.resendDelay) or 
			nadirdata ~= WebUFC.last_data.nadirdata or
			switches ~= WebUFC.last_data.switches then
			
			WebUFC.send_data = WebUFC.aircraft.sa342.export(nadirdata, cockpitSwitches)
			
			WebUFC.last_data.pvidata = nadirdata
			WebUFC.last_data.switches = switches
			WebUFC.last_data.reportTime = current_time
		end
	elseif ac == WebUFC.aircraft.ka50.type or ac == WebUFC.aircraft.ka50.alt_type then
		local pvidata = list_indication(5)

		local cockpitSwitches, switches = WebUFC.exportSwitches(WebUFC.aircraft.ka50.switches)
		
		if (current_time - WebUFC.last_data.reportTime > WebUFC.resendDelay) or 
			pvidata ~= WebUFC.last_data.pvidata or
			switches ~= WebUFC.last_data.switches then
			
			WebUFC.send_data = WebUFC.aircraft.ka50.export(pvidata, cockpitSwitches)
			
			WebUFC.last_data.pvidata = pvidata
			WebUFC.last_data.switches = switches
			WebUFC.last_data.reportTime = current_time
		end
	elseif ac == WebUFC.aircraft.uh60l.type then

	end
end
