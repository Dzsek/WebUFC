return {
    type = 'F-15ESE',
    ufc = {
        center01='UFC_CC_01',
        left01="UFC_SC_01",
        left02="UFC_SC_02",
        left02deg='UFC_SC_02A',
        left02min='UFC_SC_02B',
        left03="UFC_SC_03",
        left03deg='UFC_SC_03L1',
        left03min='UFC_SC_03L2',
        left04="UFC_SC_04",
        left05="UFC_SC_05",
        left06="UFC_SC_06",
        right01="UFC_SC_12",
        right02="UFC_SC_11",
        right03="UFC_SC_10",
        right04="UFC_SC_09",
        right05="UFC_SC_08",
        right06="UFC_SC_07",
        scratchpad="UFC_CC_04",
        deg="UFC_LL_INPUT_DEG",
        min="UFC_LL_INPUT_MIN"
    },
    switches = {
    },
    fixCoords = function(text, deg, min)
        local out = text
        if (out:sub(1,1) == "N" or out:sub(1,1) == "S") and #deg > 0 and #min > 0 then
            if #out < 8 then out = out..string.rep(' ', 8-#out) end
            out = out:sub(1,3)..deg..out:sub(4,5)..min..out:sub(6)
        end

        if (out:sub(1,1) == "E" or out:sub(1,1) == "W") and #deg > 0 and #min > 0 then
            if #out < 9 then out = out..string.rep(' ', 9-#out) end
            out = out:sub(1,4)..deg..out:sub(5,6)..min..out:sub(7)
        end

        return out
    end,
    export = function(ufcdata, wsoufcdata, cockpitSwitches)
        local ufc = WebUFC.aircraft.f15e.ufc

        ufcdata = ufcdata:gsub("UFC_CC_04\n\n","")
        wsoufcdata = wsoufcdata:gsub("UFC_CC_04\n\n","")

		local output = {}
		for key,value in pairs(ufc) do
			output[key] = WebUFC.getString(value, ufcdata)
		end

        local output2 = {}
		for key,value in pairs(ufc) do
			output2[key] = WebUFC.getString(value, wsoufcdata)
		end
		
		local tosend = {
			aircraft = WebUFC.aircraft.f15e.type,
		}

        output.scratchpad = WebUFC.aircraft.f15e.fixCoords(output.scratchpad, output.deg, output.min)
        output.left02 = WebUFC.aircraft.f15e.fixCoords(output.left02, output.left02deg, output.left02min)
        output.left03 = WebUFC.aircraft.f15e.fixCoords(output.left03, output.left03deg, output.left03min)

        output2.scratchpad = WebUFC.aircraft.f15e.fixCoords(output2.scratchpad, output2.deg, output2.min)
        output2.left02 = WebUFC.aircraft.f15e.fixCoords(output2.left02, output2.left02deg, output2.left02min)
        output2.left03 = WebUFC.aircraft.f15e.fixCoords(output2.left03, output2.left03deg, output2.left03min)
        
        tosend['PLT'] = {}
        for key,value in pairs(output) do
            tosend['PLT'][key] = value
        end

        tosend['WSO'] = {}
        for key,value in pairs(output2) do
            tosend['WSO'][key] = value
        end
        
		for key,value in pairs(cockpitSwitches) do
			tosend[key] = value
		end
	
		return tosend
    end
}