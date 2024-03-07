return {
    type = 'M-2000C',
    segments_ul = {
        seg0 = 'PCN_UL_SEG0',
        seg1 = 'PCN_UL_SEG1',
        seg2 = 'PCN_UL_SEG2',
        seg3 = 'PCN_UL_SEG3',
        seg4 = 'PCN_UL_SEG4',
        seg5 = 'PCN_UL_SEG5',
        seg6 = 'PCN_UL_SEG6',
        seg7 = 'PCN_UL_SEG7',
        plus = 'PCN_UL_P',
        minus = 'PCN_UL_M',
        north = 'PCN_UL_N',
        south = 'PCN_UL_S'
    },
    segments_ur = {
        seg0 = 'PCN_UR_SEG0',
        seg1 = 'PCN_UR_SEG1',
        seg2 = 'PCN_UR_SEG2',
        seg3 = 'PCN_UR_SEG3',
        seg4 = 'PCN_UR_SEG4',
        seg5 = 'PCN_UR_SEG5',
        seg6 = 'PCN_UR_SEG6',
        seg7 = 'PCN_UR_SEG7',
        plus = 'PCN_UR_P',
        minus = 'PCN_UR_M',
        east = 'PCN_UR_E',
        west = 'PCN_UR_W'
    },
    segments_bl = {
        seg0 = 'PCN_BL_SEG0',
        seg1 = 'PCN_BL_SEG1',
        seg2 = 'PCN_BL_SEG2',
        seg3 = 'PCN_BL_SEG3',
        seg4 = 'PCN_BL_SEG4',
        seg5 = 'PCN_BL_SEG5',
        seg6 = 'PCN_BL_SEG6',
    },
    segments_br = {
        seg0 = 'PCN_BR_SEG0',
        seg1 = 'PCN_BR_SEG1',
        seg2 = 'PCN_BR_SEG2',
        seg3 = 'PCN_BR_SEG3',
        seg4 = 'PCN_BR_SEG4',
        seg5 = 'PCN_BR_SEG5',
        seg6 = 'PCN_BR_SEG6',
    },
    switches = {
        ins_param = 574,
        val_g = 440,
        mrq_g = 439,
        rec_g = 438,
        bad_g = 437,
        pret = 564,
        aln = 565,
        mip = 566,
        ndeg = 567,
        sec = 568,
        uni = 569,
        prep = 571,
        dest = 573,
        eff = 595,
        ins = 597,
        m91 = 669,
        m92 = 670,
        m93 = 671
    },
    decodeSegments = function(s0, s1, s2, s3, s4, s5, s6, s7)
        local numbers = {}
        for i=1,#s0,1 do
            local nr = {
                [1] = s0:sub(i,i),
                [2] = s1:sub(i,i),
                [3] = s2:sub(i,i),
                [4] = s3:sub(i,i),
                [5] = s4:sub(i,i),
                [6] = s5:sub(i,i),
                [7] = s6:sub(i,i),
            }
    
            for i2,v in pairs(nr) do
                if v == ' ' then
                    nr[i2] = 0
                else
                    nr[i2] = 1
                end
            end
            
            local s = ''
            for i2=1,7,1 do
                s = s..nr[i2]
            end
            
		    numbers[i] = s
        end
        
        local decimals = ''
        for i=1,#s7,1 do
            local dot = s7:sub(i,i)
            
            if dot ~= ' ' then
                decimals = decimals..'1'
            else
                decimals = decimals..'0'
            end
        end
        
        return numbers, decimals
    end,
    export = function(top_data, bottom_data, cockpitSwitches)
        local segul = WebUFC.aircraft.m2k.segments_ul
        local segur = WebUFC.aircraft.m2k.segments_ur
        local segbl = WebUFC.aircraft.m2k.segments_bl
        local segbr = WebUFC.aircraft.m2k.segments_br

		local output = {}
		for key,value in pairs(segul) do
			output[key] = WebUFC.getString(value, top_data)
		end

		local output2 = {}
        for key,value in pairs(segur) do
			output2[key] = WebUFC.getString(value, top_data)
		end

        local ul, uldec = WebUFC.aircraft.m2k.decodeSegments(output.seg0,output.seg1,output.seg2,output.seg3,output.seg4,output.seg5,output.seg6,output.seg7)
        local ur, urdec = WebUFC.aircraft.m2k.decodeSegments(output2.seg0,output2.seg1,output2.seg2,output2.seg3,output2.seg4,output2.seg5,output2.seg6,output2.seg7)

        local outputbl = {}
        for key,value in pairs(segbl) do
			outputbl[key] = WebUFC.getString(value, bottom_data)
		end

        local outputbr = {}
        for key,value in pairs(segbr) do
			outputbr[key] = WebUFC.getString(value, bottom_data)
		end

        local bl = WebUFC.aircraft.m2k.decodeSegments(outputbl.seg0, outputbl.seg1, outputbl.seg2, outputbl.seg3, outputbl.seg4, outputbl.seg5, outputbl.seg6, '')
        local br = WebUFC.aircraft.m2k.decodeSegments(outputbr.seg0, outputbr.seg1, outputbr.seg2, outputbr.seg3, outputbr.seg4, outputbr.seg5, outputbr.seg6, '')
		
		local tosend = {
			aircraft = WebUFC.aircraft.m2k.type,
            upperLeft = ul,
            upperRight = ur,
            bottomLeft = bl,
            bottomRight = br,
            upperLeftDec = uldec,
            upperRightDec = urdec,
            ulplus = string.format("%1s", output.plus),
            ulminus = string.format("%1s", output.minus),
            urplus = string.format("%1s", output2.plus),
            urminus = string.format("%1s", output2.minus),
            north = string.format("%1s", output.north),
            south = string.format("%1s", output.south),
            east = string.format("%1s", output2.east),
            west = string.format("%1s", output2.west)
		}
        
		for key,value in pairs(cockpitSwitches) do
			tosend[key] = value
		end
	
		return tosend
    end
}