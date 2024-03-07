import React from "react"
import style from "./radioOptions.module.css";

export default class RadioOptions extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            selected: this.props.buttons[0]
        }
    }

    selectOption(option){
        this.setState({
            selected: option
        })

        this.props.selected(option)
    }

    selectOptionTouch(e, option){
        e.preventDefault()
        e.stopPropagation()
        this.selectOption(option)
    }

    render(){
        const buttons = [];
        for(let i of this.props.buttons){
            buttons.push(<button className={this.state.selected == i ? style.radioButtonActive : ""} onMouseUp={this.selectOption.bind(this, i)} onTouchEnd={(e)=> this.selectOptionTouch.bind(this, e, i)}>{i}</button>);
        }

        return (
            <div className={`${style.radioDiv} ${this.props.horizontal ? style.radioDivHrz : ''}`}>
                {buttons}
            </div>
        )
    }
}