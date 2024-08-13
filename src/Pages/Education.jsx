
import React from 'react'
import styles from "./Education.module.css"
import Monash from "../assets/Monash.jpg"


function Education(){
    return (
        <div className = {styles.education}>
            <p className = {styles.educationTitle}>EDUCATION</p>
            <div className = {styles.educationSub}>
                <div className = {styles.title}>
                    
                  
                    <h1>Monash University Malaysia</h1>
                    <h3 className = {styles.major}>Bachelor of Computer Science in Data Science</h3>
                    <p className = {styles.year}>2020 - 2024</p>
                    <p>My studies at Monash University Malaysia were instrumental in equipping me with a diverse set of skills essential for a career in data science and web development.</p>
                   
                </div>
                <div className = {styles.monashImage}>
                    <img src = {Monash}/>
                </div>
            </div>
            
        </div>
    )
}

export default Education;