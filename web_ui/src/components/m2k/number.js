import styles from "./number.module.css"
import React from "react"

export default class Number extends React.Component
{
    constructor(props){
        super(props);
    }

    getSegment(index){
        return this.props.value?.substring(index, index + 1) == "1";
    }
    
    render(){

        return (
            <div className={styles.container}>
                <div className={`${styles.segment0} ${styles.verticalSegment} ${this.getSegment(0) ? styles.segmentColor : ""}`}></div>
                <div className={`${styles.segment1} ${styles.verticalSegment} ${this.getSegment(1) ? styles.segmentColor : ""}`}></div>
                <div className={`${styles.segment2} ${styles.horizontalSegment} ${this.getSegment(2) ? styles.segmentColor : ""}`}></div>
                <div className={`${styles.segment3} ${styles.verticalSegment} ${this.getSegment(3) ? styles.segmentColor : ""}`}></div>
                <div className={`${styles.segment4} ${styles.verticalSegment} ${this.getSegment(4) ? styles.segmentColor : ""}`}></div>
                <div className={`${styles.segment5} ${styles.horizontalSegment} ${this.getSegment(5) ? styles.segmentColor : ""}`}></div>
                <div className={`${styles.segment6} ${styles.horizontalSegment} ${this.getSegment(6) ? styles.segmentColor : ""}`}></div>
            </div>
        )
    }
}