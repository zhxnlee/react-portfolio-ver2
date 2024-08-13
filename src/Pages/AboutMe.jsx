import React from "react"
import styles from "./AboutMe.module.css"

function AboutMe(){
    return(
        <div className = {styles.aboutMe}>
            <p className = {styles.aboutMeTitle}>ABOUT ME</p>
            <div className = {styles.aboutMeContent}>

                <h1>A little something about me...</h1>
                <p>I began my journey at Monash University Malaysia with a focus on gaining fundamental skills through their Data Science courses. But as I delved deeper, I found myself increasingly captivated by the world of Web Development. There's something incredibly exciting about creating visually stunning websites and exploring all the cool features they can offer.</p>
                <p>Driven by this newfound passion, I decided to shift gears and dive into web development.</p>
                <p>I started taking Udemy courses and immersed myself in online tutorials. Through this process, I’ve been working on various small projects, experimenting with different design ideas, and honing my skills. My goal is to keep evolving as a web developer and continue creating engaging, beautiful websites."</p>
            </div>
        </div>
    )
}

export default AboutMe;