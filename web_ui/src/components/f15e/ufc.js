
import React from "react"
import styles from "./ufc.module.css";
import Button_Square from "./button_square";
import Screen from "./screen";
import Button_Option from "./button_option";
import RadioKnob from "./radioKnob";
import RadioOptions from "../base/radioOptions";


const devices={
    ['PLT']: 56,
    ['WSO']: 57
}


export default class UFC extends React.Component
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

        const device = this.state.device;
        const uiState = this.props.uiState[this.state.page] || {};
        const nameplate = this.state.page;

        return(
            <div>
                <div className={styles.panelSelect}>
                    <RadioOptions horizontal={true} buttons={['PLT', 'WSO']} selected={this.setPage.bind(this)}/>
                </div>
                <div className={styles.base}> 
                    <div className={styles.displays}>
                        <div>
                            <Button_Option device={device} code={3001}/>
                            <span>-</span>
                            <Screen leftText={uiState.left01} forceCenter={true} centerText={uiState.center01} rightText={uiState.right01}/>
                            <span>-</span>
                            <Button_Option device={device} code={3010}/>
                        </div>
                        <div>
                            <Button_Option device={device} code={3002}/>
                            <span>-</span>
                            <Screen altLabelStyle={true} leftText={uiState.left02} rightText={uiState.right02}/>
                            <span>-</span>
                            <Button_Option device={device} code={3009}/>
                        </div>
                        <div>
                            <Button_Option device={device} code={3003}/>
                            <span>-</span>
                            <Screen altLabelStyle={true} leftText={uiState.left03} rightText={uiState.right03}/>
                            <span>-</span>
                            <Button_Option device={device} code={3008}/>
                        </div>
                        <div>
                            <Button_Option device={device} code={3004}/>
                            <span>-</span>
                            <Screen altLabelStyle={true} leftText={uiState.left04} rightText={uiState.right04}/>
                            <span>-</span>
                            <Button_Option device={device} code={3007}/>
                        </div>
                        <div>
                            <Button_Option device={device} code={3005}/>
                            <span>-</span>
                            <Screen altBGStyle={true} leftText={uiState.left05} rightText={uiState.right05}/>
                            <span>-</span>
                            <Button_Option device={device} code={3006}/>
                        </div>
                        <div>
                            <RadioKnob device={device} rotatecode={3011} pushcode={3055}/>
                            <span>-</span>
                            <Screen altBGStyle={true} leftText={uiState.left06} centerText={uiState.scratchpad} rightText={uiState.right06}/>
                            <span>-</span>
                            <RadioKnob device={device} rotatecode={3012} pushcode={3056}/>
                        </div>
                    </div>
                    <div className={styles.keypadContainer}>
                        <div className={styles.nameplate}>
                            <span>{nameplate}</span>
                        </div>
                        <div className={styles.keypad}>
                            <Button_Square label={'GREC\nC/M'} device={device} code={3019}/>
                            <Button_Square label={'A\n1'} device={device} code={3020}/>
                            <Button_Square label={'N\n2'} device={device} code={3021}/>
                            <Button_Square label={'B\n3'} device={device} code={3022}/>
                            <Button_Square label={'GREC\nC/M'} device={device} code={3023}/>
                            <Button_Square label={'MARK'} device={device} code={3024}/>
                            <Button_Square label={'W\n4'} device={device} code={3025}/>
                            <Button_Square label={'M\n5'} device={device} code={3026}/>
                            <Button_Square label={'E\n6'} device={device} code={3027}/>
                            <Button_Square label={'I/P'} device={device} code={3028}/>
                            <Button_Square label={'.'} device={device} code={3029}/>
                            <Button_Square label={':\n7'} device={device} code={3030}/>
                            <Button_Square label={'S\n8'} device={device} code={3031}/>
                            <Button_Square label={'C\n9'} device={device} code={3032}/>
                            <Button_Square label={'SHF'} device={device} code={3033}/>
                            <Button_Square label={'A/P'} device={device} code={3034}/>
                            <Button_Square label={'CLR'} device={device} code={3035}/>
                            <Button_Square label={'-\n0'} device={device} code={3036}/>
                            <Button_Square label={'DATA'} device={device} code={3037}/>
                            <Button_Square label={'MENU'} device={device} code={3038}/>
                        </div>
                        <Button_Square label={'EMIS\nLMT'} device={device} code={3018}/>
                    </div>
                </div>
            </div>
        )
    }
}