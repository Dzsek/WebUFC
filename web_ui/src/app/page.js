"use client";

import styles from "./page.module.css";
import React from "react";
import DataAccess from "@/businesslogic/DataAccess";
import FA18_UFC from "@/components/fa18/ufc";
import AV8B_UFC from "@/components/av8b/ufc";
import AH64_KU from "@/components/ah64/keyboard_unit";
import M2K_PCN from "@/components/m2k/pcn";
import ASJ37_CK37 from "@/components/ajs37/ck37";
import KA50_PVI from "@/components/ka50/pvi";
import FA15_UFC from "@/components/f15e/ufc";

export default class Home extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        ui: {}
    }
  }

  componentDidMount()
  {
    DataAccess.addCallback("mainPage", this.updateState.bind(this));
  }

  updateState(data){
    this.setState({
      ui: JSON.parse(data)
    });
  }

  toggleFullscreen(){
    if(document.fullscreenElement)
    {
      document.exitFullscreen()
    }
    else
    {
      document.documentElement.requestFullscreen()
    }
  }

  toggleFullscreenTouch(e){
      e.preventDefault()
      e.stopPropagation()
      this.toggleFullscreen();
  }

  render(){

    let component = <div className={styles.waiting}>Waiting for DCS...</div>

    switch(this.state.ui.aircraft){
      case "FA-18C_hornet":
        component = <FA18_UFC uiState={this.state.ui}/>
        break;
      case "AH-64D_BLK_II":
        component = <AH64_KU uiState={this.state.ui}/>
        break;
      case "AV8BNA":
        component = <AV8B_UFC uiState={this.state.ui}/>
        break;
      case "AJS37":
        component = <ASJ37_CK37 uiState={this.state.ui}/>
        break;
      case "F-15ESE":
        component = <FA15_UFC uiState={this.state.ui}/>
        break;
      case "Ka-50_3":
        component = <KA50_PVI uiState={this.state.ui}/>
        break;
      case "M-2000C":
        component = <M2K_PCN uiState={this.state.ui}/>
        break;
      case "F-16C_50":
      case "JF-17":
      case "Mirage-F1BE":
      case "Mirage-F1CE":
      case "Mirage-F1EE":
      case "SA342L":
      case "SA342M":
      case "SA342Minigun":
      case "UH-60L":
        component = <div className={styles.waiting}>Aircraft not supported</div>
        break;
      default:
        break;
    }

    return (
      <main className={styles.main}>
        {component}
        <button className={styles.fullscreenButton} onMouseUp={this.toggleFullscreen.bind(this)} onTouchEnd={this.toggleFullscreenTouch.bind(this)}>F</button>
      </main>
    );
  }
}