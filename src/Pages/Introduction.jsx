import React from "react"
import styles from "./Introduction.module.css"
import portrait from "../assets/IMG_5446.png"

function Introduction(){
    return (
        <div className = {styles.introduction}>
            <p className = {styles.introductionTitle}>INTRODUCTION</p>
            <div className = {styles.introductionSub}>
                <div className = {styles.title}>
                    <div className = {styles.nameSection}>

                        <div className = {styles.name}>
                            <h2>Hello, I'm</h2>
                            <h1 className = {styles.nameContent}><span>Lee</span> <br /> Z<span>hen</span> X<span>uan</span></h1>
                            
                            
                        
                            <div className = {styles.otherName}>
                                <h2>李承轩</h2>
                                <p>/lǐ chéng xuān/</p>
                            </div>  
                            <div className = {styles.position}>
                                <p>Front-End Developer</p>
                            </div>
                        </div>

                    </div>
                    <div className = {styles.photo}>
                        <img src = {portrait}/>
                    </div>
                    
                    
                </div>
            </div>
        </div>
        
    )
}

export default Introduction;
