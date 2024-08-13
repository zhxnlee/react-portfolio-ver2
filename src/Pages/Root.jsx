import React from "react"
import Navigation from "../Components/Navigation";
import styles from "./Root.module.css"
import Taskbar from "../Components/Taskbar";
import Home from "./Home"

function Root(){
    return(
        <>
            <div className = {styles.root}>
            
            <div className = {styles.navigation}>
                <Navigation/>
            </div>
           
            <div className = {styles.home}>
                <Home/>
            </div>
        </div>
        
        </>
        
    )
}

export default Root;