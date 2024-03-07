return {
    type = 'AV8BNA',
    ufc = {
        com1='ufc_chnl_1_m',
        com2='ufc_chnl_2_m',
        scratchpad_left='ufc_left_position',
        scratchpad_right='ufc_right_position',
    },
    odu = {
        odu1='ODU_Option_1_Text',
        odu2='ODU_Option_2_Text',
        odu3='ODU_Option_3_Text',
        odu4='ODU_Option_4_Text',
        odu5='ODU_Option_5_Text',
        odu1s='ODU_Option_1_Slc',
        odu2s='ODU_Option_2_Slc',
        odu3s='ODU_Option_3_Slc',
        odu4s='ODU_Option_4_Slc',
        odu5s='ODU_Option_5_Slc',
    },
    switches = {
    },
    export = function(ufcdata, odudata, cockpitSwitches)
        local ufc = WebUFC.aircraft.av8b.ufc
        local odu = WebUFC.aircraft.av8b.odu

		local output = {}
		for key,value in pairs(ufc) do
			output[key] = WebUFC.getString(value, ufcdata)
		end

		local output2 = {}
		for key,value in pairs(odu) do
			output2[key] = WebUFC.getString(value, odudata)
		end

        output2.odu1s = string.format("%1s", output2.odu1s)
        output2.odu2s = string.format("%1s", output2.odu2s)
        output2.odu3s = string.format("%1s", output2.odu3s)
        output2.odu4s = string.format("%1s", output2.odu4s)
        output2.odu5s = string.format("%1s", output2.odu5s)
		
		local tosend = {
			aircraft = WebUFC.aircraft.av8b.type,
			scratchpad_left = output.scratchpad_left,
			scratchpad_right = output.scratchpad_right:gsub('@','°'),
			com1 = output.com1,
			com2 = output.com2,
            odu1= output2.odu1s..output2.odu1,
            odu2= output2.odu2s..output2.odu2,
            odu3= output2.odu3s..output2.odu3,
            odu4= output2.odu4s..output2.odu4,
            odu5= output2.odu5s..output2.odu5,
		}
        
		for key,value in pairs(cockpitSwitches) do
			tosend[key] = value
		end
	
		return tosend
    end
}