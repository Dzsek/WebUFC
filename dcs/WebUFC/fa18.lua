return {
    type = 'FA-18C_hornet',
    ufc = {
        o1 = 'UFC_OptionDisplay1',
        o2 = 'UFC_OptionDisplay2',
        o3 = 'UFC_OptionDisplay3',
        o4 = 'UFC_OptionDisplay4',
        o5 = 'UFC_OptionDisplay5',
        oc1 = 'UFC_OptionCueing1',
        oc2 = 'UFC_OptionCueing2',
        oc3 = 'UFC_OptionCueing3',
        oc4 = 'UFC_OptionCueing4',
        oc5 = 'UFC_OptionCueing5',
        sp1 = 'UFC_ScratchPadString1Display',
        sp2 = 'UFC_ScratchPadString2Display',
        spNum = 'UFC_ScratchPadNumberDisplay',
        c1 = 'UFC_Comm1Display',
        c2 = 'UFC_Comm2Display',
    },
    switches = {
        adf_switch = 107,
        comm1Volume = 108,
        comm2Volume = 123,
        ufcBrightness = 109
    },
    export = function (ufc_data, cockpitSwitches)
		local ufc = WebUFC.aircraft.fa18.ufc
		local output = {}
		for key,value in pairs(ufc) do
			output[key] = WebUFC.getString(value, ufc_data)
		end
		
		output.sp1 = output.sp1:gsub('`', '1'):gsub('~', '2'):gsub('_', '-')
		output.sp2 = output.sp2:gsub('`', '1'):gsub('~', '2'):gsub('_', '-')
		output.spNum = output.spNum:gsub("pww0w","ERROR"):gsub('@','°')
		output.spNum  = string.format("%7s", output.spNum)
		output.c1 = output.c1:gsub('`', '1'):gsub('~', '2')
		output.c2 = output.c2:gsub('`', '1'):gsub('~', '2')
		
		local tosend = {
			aircraft = WebUFC.aircraft.fa18.type,
			scratchpad = string.format("%10s",output.sp1..output.sp2..output.spNum),
			option1 = string.format("%1s", output.oc1)..output.o1,
			option2 = string.format("%1s", output.oc2)..output.o2,
			option3 = string.format("%1s", output.oc3)..output.o3,
			option4 = string.format("%1s", output.oc4)..output.o4,
			option5 = string.format("%1s", output.oc5)..output.o5,
			com1 = output.c1,
			com2 = output.c2
		}
	
		for key,value in pairs(cockpitSwitches) do
			tosend[key] = value
		end
	
		return tosend
	end
}