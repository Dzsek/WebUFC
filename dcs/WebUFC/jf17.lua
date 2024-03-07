return {
    type = 'JF-17',
    line1 ={
        text1="txt_win1",
        text1r="txt_win1r",
        fill1="txt_win1_fill"
    },
    line2 ={
        text2="txt_win2",
        text2r="txt_win2r",
        fill2="txt_win2_fill"
    },
    line3 ={
        text3="txt_win3",
        text3r="txt_win3r",
        fill3="txt_win3_fill"
    },
    line4 ={
        text4="txt_win4",
        text4r="txt_win4r",
        fill4="txt_win4_fill"
    },
    switches = {
    },
    export = function (line1, line2, line3, line4, cockpitSwitches)
        local ln1 = WebUFC.aircraft.jf17.line1
        local ln2 = WebUFC.aircraft.jf17.line2
        local ln3 = WebUFC.aircraft.jf17.line3
        local ln4 = WebUFC.aircraft.jf17.line4

		local output = {}
		for key,value in pairs(ln1) do
			output[key] = WebUFC.getString(value, line1)
		end
        for key,value in pairs(ln2) do
			output[key] = WebUFC.getString(value, line2)
		end
        for key,value in pairs(ln3) do
			output[key] = WebUFC.getString(value, line3)
		end
        for key,value in pairs(ln4) do
			output[key] = WebUFC.getString(value, line4)
		end
		
		local tosend = {
			aircraft = WebUFC.aircraft.jf17.type,
		}

        local parseLine = function (t, tr, f)
            local ln = ''
            if #t > 0 then
                if #f > 0 then
                    f = string.format("%8s", f)
                    
                    ln = t..f:sub(#t+1,#f)
                else
                    ln = t
                end
            elseif #tr > 0 then
                ln = f:sub(1,#f-#tr)..tr
            end

            for i=1,8-#ln,1 do ln = ln..' ' end
            return ln
        end

        tosend.line1 = parseLine(output.text1, output.text1r, output.fill1)
        tosend.line2 = parseLine(output.text2, output.text2r, output.fill2)
        tosend.line3 = parseLine(output.text3, output.text3r, output.fill3)
        tosend.line4 = parseLine(output.text4, output.text4r, output.fill4)
        
		for key,value in pairs(cockpitSwitches) do
			tosend[key] = value
		end
	
		return tosend
	end
}