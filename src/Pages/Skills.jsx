import React from "react"
import styles from "./Skills.module.css"

function Skills(){
    return (
        <div className = {styles.skills}>
            <div className = {styles.skillsTitle}><p>SKILLS</p></div>
                <ul>
                    <li className = {styles.htmlLi}>HTML</li>
                    <li className = {styles.cssLi}>CSS</li>
                    <li className = {styles.jsLi}>JAVASCRIPT</li>
                    <li className = {styles.reactLi}>REACT</li>
                    <li className = {styles.expLi}>EXPRESS</li>
                </ul>
        </div>
    )
}

export default Skills;