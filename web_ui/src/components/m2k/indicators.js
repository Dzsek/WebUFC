import styles from "./indicators.module.css"
import React from "react"

const treshold = 0

export default class Indicators extends React.Component
{
    constructor(props){
        super(props);
    }
    
    render(){

        return (
            <div className={styles.base}>
                <span className={styles.green}>{this.props.uiState.pret > treshold ? 'PRET' : '    '}</span>
                <span className={styles.yellow}>{this.props.uiState.aln > treshold ? 'ALN' : '   '}</span>
                <span className={styles.yellow}>{this.props.uiState.mip > treshold ? 'MIP' : '   '}</span>
                <span className={styles.yellow}>{this.props.uiState.ndeg > treshold ? 'NDEG' : '    '}</span>
                <span className={styles.yellow}>{this.props.uiState.sec > treshold ? 'SEC' : '   '}</span>
                <span className={styles.red} style={{gridColumnStart:2, gridColumnEnd:3}}>{this.props.uiState.uni > treshold ? 'UNI' : '   '}</span>
            </div>
        )
    }
}