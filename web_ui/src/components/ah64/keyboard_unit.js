import Screen from "./screen"
import React from "react"
import styles from "./keyboard_unit.module.css";
import Button_Square from "./button_square";
import Button_Round from "./button_round";
import RadioOptions from "../base/radioOptions";


const devices={
    ['PLT']: 29,
    ['CPG']: 30
}

export default class KeyboardUnit extends React.Component
{
    constructor(props){
        super(props);

        this.state = {
            page: 'PLT',
            device: devices['PLT']
        }
    }

    setPage(option){
        this.setState({
            page: option,
            device: devices[option]
        })
    }

    render(){
        return(
            <div>
                <div className={styles.panelSelect}>
                    <RadioOptions buttons={['PLT', 'CPG']} selected={this.setPage.bind(this)}/>
                </div>
                <div className={styles.keyboard}>
                    <div className={styles.keyboard_text}>
                        <Screen text={this.state.page=='CPG' ? this.props.uiState.text_cpg : this.props.uiState.text}/>
                    </div>
                    <div className={styles.keyboard_grid_bg}>
                        <div className={styles.divider1}></div>
                        <div className={styles.divider2}></div>
                        <div className={styles.divider3}></div>
                        <div className={styles.divider4}></div>
                    </div>
                    <div className={styles.keyboard_grid}>
                        <Button_Square label="A" device={this.state.device} code={3007}/>
                        <Button_Square label="B" device={this.state.device} code={3008}/>
                        <Button_Square label="C" device={this.state.device} code={3009}/>
                        <Button_Square label="D" device={this.state.device} code={3010}/>
                        <Button_Square label="E" showBorder={true} device={this.state.device} code={3011}/>
                        <Button_Square label="F" device={this.state.device} code={3012}/>

                        <Button_Round label="1" device={this.state.device} code={3033}/>
                        <Button_Round label="2" device={this.state.device} code={3034}/>
                        <Button_Round label="3" device={this.state.device} code={3035}/>

                        <Button_Square label="G" device={this.state.device} code={3013}/>
                        <Button_Square label="H" device={this.state.device} code={3014}/>
                        <Button_Square label="I" device={this.state.device} code={3015}/>
                        <Button_Square label="J" device={this.state.device} code={3016}/>
                        <Button_Square label="K" device={this.state.device} code={3017}/>
                        <Button_Square label="L" device={this.state.device} code={3018}/>

                        <Button_Round label="4" device={this.state.device} code={3036}/>
                        <Button_Round label="5" device={this.state.device} code={3037}/>
                        <Button_Round label="6" device={this.state.device} code={3038}/>

                        <Button_Square label="M" device={this.state.device} code={3019}/>
                        <Button_Square label="N" showBorder={true} device={this.state.device} code={3020}/>
                        <Button_Square label="O" device={this.state.device} code={3021}/>
                        <Button_Square label="P" device={this.state.device} code={3022}/>
                        <Button_Square label="Q" device={this.state.device} code={3023}/>
                        <Button_Square label="R" device={this.state.device} code={3024}/>

                        <Button_Round label="7" device={this.state.device} code={3039}/>
                        <Button_Round label="8" device={this.state.device} code={3040}/>
                        <Button_Round label="9" device={this.state.device} code={3041}/>

                        <Button_Square label="S" showBorder={true} device={this.state.device} code={3025}/>
                        <Button_Square label="T" device={this.state.device} code={3026}/>
                        <Button_Square label="U" device={this.state.device} code={3027}/>
                        <Button_Square label="V" device={this.state.device} code={3028}/>
                        <Button_Square label="W" showBorder={true} device={this.state.device} code={3029}/>
                        <Button_Square label="X" device={this.state.device} code={3030}/>

                        <Button_Round label="." labelsize={"6rem"} device={this.state.device} code={3042}/>
                        <Button_Round label="0" device={this.state.device} code={3043}/>
                        <Button_Round label="+/-" labelsize={"6rem"} device={this.state.device} code={3044}/>
                        <Button_Square label="Y" device={this.state.device} code={3031}/>
                        <Button_Square label="Z" device={this.state.device} code={3032}/>
                        <Button_Square label="/" labelsize={"5rem"} device={this.state.device} code={3045}/>
                        <Button_Square label="BKS" device={this.state.device} code={3002}/>
                        <Button_Square label="SPC" device={this.state.device} code={3003}/>
                        <Button_Square label="✱" labelsize={"5rem"} device={this.state.device} code={3049}/>
                        <Button_Square label="÷" labelsize={"8rem"} device={this.state.device} code={3048}/>
                        <Button_Square label="+" labelsize={"8rem"} device={this.state.device} code={3046}/>
                        <Button_Square label="−" labelsize={"7rem"} device={this.state.device} code={3047}/>

                        <span className={styles.pageLabel}>{this.state.page}</span>

                        <Button_Square label="CLR" gridStart={3} device={this.state.device} code={3001}/>
                        <Button_Square label="<" labelsize={"6rem"} device={this.state.device} code={3004}/>
                        <Button_Square label=">" labelsize={"6rem"} device={this.state.device} code={3005}/>
                        <Button_Square label="ENTER" isLarge={true} gridStart={7} gridEnd={9} device={this.state.device} code={3006}/>
                    </div>
                </div>
            </div>
        )
    }
}