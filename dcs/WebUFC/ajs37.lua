return {
    type = 'AJS37',
    ck={
        data1="data1",
        data2="data2",
        data3="data3",
        data4="data4",
        data5="data5",
        data6="data6",
    },
    switches = {
		inout = 201,
		ckrotary = 200,
		rensa_cover = 300
    },
    export = function (ckdata, cockpitSwitches)
		local ck = WebUFC.aircraft.ajs37.ck
		local output = {}
		for key,value in pairs(ck) do
			output[key] = WebUFC.getString(value, ckdata)
		end
		
		local tosend = {
			aircraft = WebUFC.aircraft.ajs37.type,
			text = output.data1..output.data2..output.data3..output.data4..output.data5..output.data6
		}
        
		for key,value in pairs(cockpitSwitches) do
			tosend[key] = value
		end
	
		return tosend
	end
}