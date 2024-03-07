import styles from "./segmentDisplay.module.css"
import React from "react"
import Number from "./number"

export default class SegmentDisplay extends React.Component
{
    constructor(props){
        super(props);
        //value
        //decimals
        //segments
    }

    getDecimal(index){
        const diff = this.props.segments - (this.props.value?.length ?? 0)
        return this.props.decimals?.substring(index - diff, index - diff + 1) == "1";
    }

    render(){
        let html = [];
        
        let value = this.props.value ?? ['0000000']
        if(value.length > this.props.segments){
            value = value.slice(-1*this.props.segments);
        }else if(value.length < this.props.segments){
            const diff = this.props.segments - value.length
            const newArray = [];
            for(let i = 0; i<diff;i++){
                newArray.push('0000000')
            }
            value = [...newArray, ...value]
        }

        for (let i = 0; i < value.length; i++){
            html.push(
                <div key={value.length+1+i} className={`${styles.decimal} ${this.getDecimal(i) == "1" ? styles.decimalColor : ""}`}></div>
            );
            html.push(
                <div key={i}><Number value={value[i]}/></div>
            );
        }

        html.push(
            <div key={value.length+1+value.length} className={`${styles.decimal} ${this.getDecimal(value.length+1) == "1" ? styles.decimalColor : ""}`}></div>
        );

        return (
            <div className={styles.numbersContainer}>
                {html}
            </div>
        )
    }
}