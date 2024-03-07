return {
    type = 'SA342L',
    alt_type1 = 'SA342M',
    alt_type2 = 'SA342Minigun',
    switches = {
    },
    nadir = {
        top_unit = 'Unit',
        top_unit_pt = 'Pt_Unit',
        top_dix = 'Dix',
        top_dix_pt = 'Pt_Dix',
        top_cent = 'Cent',
        top_cent_pt = 'Pt_Cent',
        top_mille = 'Mille',
        top_mille_pt = 'Pt_Mille',
        top_dix_mille = 'DixMille',
        top_dix_mille_pt = 'Pt_DixMille',
        top_cent_mille = 'CentMille',
        top_cent_mille_pt = 'Pt_CentMille',
        bottom_unit = 'UnitI',
        bottom_unit_pt = 'Pt_UnitI',
        bottom_dix = 'DixI',
        bottom_dix_pt = 'Pt_DixI',
        bottom_cent = 'CentI',
        bottom_cent_pt = 'Pt_CentI',
        bottom_mille = 'MilleI',
        bottom_mille_pt = 'Pt_MilleI',
        bottom_dix_mille = 'DixMilleI',
        bottom_dix_mille_pt = 'Pt_DixMilleI',
        bottom_cent_mille = 'CentMilleI',
        bottom_cent_mille_pt = 'Pt_CentMilleI',
        wp_dix = 'F_dix',
        wp_unit = 'F_unit'
    },
    addNum = function(num)
        return string.format("%1s", num)
    end,
    export = function(nadirdata, cockpitSwitches)
        local nadir = WebUFC.aircraft.sa342.nadir

		local output = {}
		for key,value in pairs(nadir) do
			output[key] = WebUFC.getString(value, nadirdata)
		end

        local top = '';
        top = top..WebUFC.aircraft.sa342.addNum(output.top_cent_mille)
        top = top..WebUFC.aircraft.sa342.addNum(output.top_dix_mille)
        top = top..WebUFC.aircraft.sa342.addNum(output.top_mille)
        top = top..WebUFC.aircraft.sa342.addNum(output.top_cent)
        top = top..WebUFC.aircraft.sa342.addNum(output.top_dix)
        top = top..WebUFC.aircraft.sa342.addNum(output.top_unit)

        local bottom = '';
        bottom = bottom..WebUFC.aircraft.sa342.addNum(output.bottom_cent_mille)
        bottom = bottom..WebUFC.aircraft.sa342.addNum(output.bottom_dix_mille)
        bottom = bottom..WebUFC.aircraft.sa342.addNum(output.bottom_mille)
        bottom = bottom..WebUFC.aircraft.sa342.addNum(output.bottom_cent)
        bottom = bottom..WebUFC.aircraft.sa342.addNum(output.bottom_dix)
        bottom = bottom..WebUFC.aircraft.sa342.addNum(output.bottom_unit) 
        
        local wp = '';
        wp = wp..WebUFC.aircraft.sa342.addNum(output.wp_dix)
        wp = wp..WebUFC.aircraft.sa342.addNum(output.wp_unit)

		local tosend = {
			aircraft = WebUFC.aircraft.sa342.type,
            top = top,
            bottom = bottom,
            wp = wp,
		}
        
		for key,value in pairs(cockpitSwitches) do
			tosend[key] = value
		end
	
		return tosend
    end
}