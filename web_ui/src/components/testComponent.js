import Button from "./base/button"
import Knob from "./base/knob"
import Number from "./m2k/number"
import SegmentDisplay from "./m2k/segmentDisplay"

export default function TestComponent(){
    return(
        <div>
            <SegmentDisplay value={["1111111", "1111111", "1111111", "1111111"]}/>
            {/* <Button label="1/2"/>
            <Button label="R" shape = "round"/>
            <Knob label="test"/> */}
        </div>
        
    )
}
