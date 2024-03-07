return {
    type = 'AH-64D_BLK_II',
    ku = {
        text='Standby_text'
    },
    switches = {
    },
    export = function (kudata, kudata_cpg, cockpitSwitches)
		local ku = WebUFC.aircraft.ah64.ku
		local output = {}
		for key,value in pairs(ku) do
			output[key] = WebUFC.getString(value, kudata)
		end

		for key,value in pairs(ku) do
			output[key..'_cpg'] = WebUFC.getString(value, kudata_cpg)
		end
		
		local tosend = {
			aircraft = WebUFC.aircraft.ah64.type,
			text = output.text,
			text_cpg = output.text_cpg
		}
	
		for key,value in pairs(cockpitSwitches) do
			tosend[key] = value
		end
	
		return tosend
	end
}