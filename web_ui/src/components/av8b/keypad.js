import React from "react"
import styles from "./keypad.module.css"
import Button_Square from "./button_square";

const device_ufc = 23;

export default class Keypad extends React.Component
{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={styles.keyGrid}>
                <Button_Square label={'\n1'} device={device_ufc} code={3302}/>
                <Button_Square label={'N\n2'} device={device_ufc} code={3303}/>
                <Button_Square label={'\n3'} device={device_ufc} code={3304}/>
                <Button_Square label='CLR' device={device_ufc} code={3305}/>

                <Button_Square label={'W\n4'} device={device_ufc} code={3306}/>
                <Button_Square label={'\n5'} device={device_ufc} code={3307}/>
                <Button_Square label={'E\n6'} device={device_ufc} code={3308}/>
                <Button_Square label='SVE' device={device_ufc} code={3309}/>
                
                <Button_Square label={'\n7'} device={device_ufc} code={3310}/>
                <Button_Square label={'S\n8'} device={device_ufc} code={3311}/>
                <Button_Square label={'\n9'} device={device_ufc} code={3312}/>
                <Button_Square label={'_'} device={device_ufc} code={3313}/>
                
                <Button_Square label='ENT' device={device_ufc} code={3314}/>
                <Button_Square label={'\n0'} device={device_ufc} code={3315}/>
                <Button_Square label={'\n.'} device={device_ufc} code={3316}/>
                <Button_Square label={'ON\nOFF'} device={device_ufc} code={3317}/>
                
                <Button_Square label='IFF' device={device_ufc} code={3318}/>
                <Button_Square label='TCN' device={device_ufc} code={3319}/>
                <Button_Square label='AWL' device={device_ufc} code={3320}/>
                <Button_Square label='WPN' device={device_ufc} code={3321}/>
                
                <Button_Square label='WOF' device={device_ufc} code={3322}/>
                <Button_Square label='BCN' device={device_ufc} code={3323}/>
                <Button_Square label='ALT' device={device_ufc} code={3324}/>
                <Button_Square label={'EM\nCOM'} device={device_ufc} code={3325}/>
            </div>
        )
    }    
}