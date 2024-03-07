import React from "react"
import styles from "./knob.module.css"

export default class Knob extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            difference: null,
            mouseDownValueX: null,
            mouseDownValueY: null,
            knobRotation: -140,
            initialKnobPosition: null
        }
        this.mouseUp = this.handleMouseUp.bind(this);
        this.mouseMove = this.handleMove.bind(this);
        this.touchUp = this.handleMouseUp.bind(this);
        this.touchMove = this.handleMove.bind(this);
    }

    handleMouseDown(e){
        const x = e.screenX || e.changedTouches[0].pageX;
        const y = e.screenY || e.changedTouches[0].pageY;
        this.setState({
            mouseDownValueX: x,
            mouseDownValueY: y,
            initialKnobPosition: this.state.knobRotation
        })
        e.stopPropagation()
    }

    handleMouseUp(e){
        this.setState({
            mouseDownValueX: null,
            mouseDownValueY: null,
            initialKnobPosition: null
        })
        e.stopPropagation()

   }

   handleMove(e){
        if (this.state.mouseDownValueX != null && this.state.mouseDownValueY != null){
            const a = this.state.mouseDownValueX - (e.screenX || e.changedTouches[0].pageX);
            const b = this.state.mouseDownValueY - (e.screenY || e.changedTouches[0].pageY);
            const max = Math.min(window.screen.width, window.screen.height);
            const dif = Math.abs(a) > Math.abs(b) ? -a/max : b/max;

            let maxRotation = 140;
            if (this.props.maxKnobRotation != null) maxRotation = this.props.maxKnobRotation;
            let knob = this.state.initialKnobPosition + (maxRotation * dif * 3)
            if (knob < -maxRotation) knob = -maxRotation;
            if (knob > maxRotation) knob = maxRotation;

            this.setState({
                difference: dif,
                knobRotation: knob
            })
        }
        e.stopPropagation()
   }

    componentDidMount(){
        window.addEventListener("mouseup", this.mouseUp);
        window.addEventListener("mousemove", this.mouseMove);
        window.addEventListener("touchend", this.touchUp);
        window.addEventListener("touchmove", this.touchMove);
    }

    componentWillUnmount(){
        window.removeEventListener("mouseup", this.mouseUp);
        window.removeEventListener("mousemove", this.mouseMove);
        window.removeEventListener("touchend", this.touchUp);
        window.removeEventListener("touchmove", this.touchMove);
    }

    render(){
        return (
            <div className={styles.knobContainer}>
                <div style={{transform: 'rotate('+this.state.knobRotation+'deg)'}} className={styles.knob} 
                    onMouseDown={this.handleMouseDown.bind(this)} onTouchStart={this.handleMouseDown.bind(this)}>
                    <div className={styles.knobLine}></div>
                </div>
            </div>
            
      )
    }

    
}