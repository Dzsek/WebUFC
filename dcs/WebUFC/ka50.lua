return {
    type = 'Ka-50_3',
    alt_type = 'Ka-50',
    pvi = {
        top_sign = 'txt_VIT_sign',
        top_scratchpad = 'txt_VIT',
        top_ap1 = 'txt_VIT_apostrophe1',
        top_ap2 = 'txt_VIT_apostrophe2',
        top_num = 'txt_OIT_PPM',
        bottom_sign = 'txt_NIT_sign',
        bottom_scratchpad = 'txt_NIT',
        bottom_ap1 = 'txt_NIT_apostrophe1',
        bottom_ap2 = 'txt_NIT_apostrophe2',
        bottom_num='txt_OIT_NOT'
    },
    switches = { -- 0.10 or >= 0.30
        wpt = 315,
        fixpnt = 316,
        airfld = 317, 
        navtgt = 318,
        selfcoor = 319,
        dtadh = 320,
        winddisp = 321,
        thead = 322,
        brgra = 323,
        enter = 313,
        clear = 314,
        inu_reset = 519,
        inu_prec = 520,
        inu_norm = 521, 
        init_pnt = 522,
        mode = 324,
        source = 325,
        dl = 326
    },
    export = function(pvidata, cockpitSwitches)
        local pvi = WebUFC.aircraft.ka50.pvi

		local output = {}
		for key,value in pairs(pvi) do
			output[key] = WebUFC.getString(value, pvidata)
		end

        output.top_ap1 = string.format("%1s", output.top_ap1)
        output.top_ap2 = string.format("%1s", output.top_ap2)
        output.top_num = string.format("%1s", output.top_num)
        output.top_sign = string.format("%1s", output.top_sign)
        output.top_scratchpad = output.top_scratchpad..string.rep(' ',6-#output.top_scratchpad)

        output.bottom_ap1 = string.format("%1s", output.bottom_ap1)
        output.bottom_ap2 = string.format("%1s", output.bottom_ap2)
        output.bottom_num = string.format("%1s", output.bottom_num)
        output.bottom_sign = string.format("%1s", output.bottom_sign)
        output.bottom_scratchpad = output.bottom_scratchpad..string.rep(' ',6-#output.bottom_scratchpad)

        output.top_scratchpad = output.top_scratchpad:sub(1,3)..output.top_ap1..output.top_scratchpad:sub(4,5)..output.top_ap2..output.top_scratchpad:sub(6,6)
        output.bottom_scratchpad = output.bottom_scratchpad:sub(1,3)..output.bottom_ap1..output.bottom_scratchpad:sub(4,5)..output.bottom_ap2..output.bottom_scratchpad:sub(6,6)
		
		local tosend = {
			aircraft = WebUFC.aircraft.ka50.type,
            top_sign = output.top_sign,
            top_scratchpad = output.top_scratchpad,
            top_num = output.top_num,
            bottom_sign = output.bottom_sign,
            bottom_scratchpad = output.bottom_scratchpad,
            bottom_num = output.bottom_num
		}
        
		for key,value in pairs(cockpitSwitches) do
			tosend[key] = value
		end
	
		return tosend
    end
}