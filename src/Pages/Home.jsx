import React from "react"
import Introduction from "./Introduction";
import styles from "./Home.module.css"
import Education from "./Education"
import AboutMe from "./AboutMe";
import DesignFoundations from "./DesignFoundations";
import Skills from "./Skills"
import { Element } from 'react-scroll';
import Contact from "./Contact";
import Hobbies from "./Hobbies"

function Home(){

    return(
        <div>
            <div className = {styles.home}>
                <div className = {styles.section}>
                <Element name = "introduction"><Introduction/></Element>
                </div>
                <div className = {styles.section}>
                <Element name = "aboutMe"><AboutMe/></Element>
                </div>
                <div className = {styles.section}>
                <Element name = "skills"><Skills/></Element>
                </div>
                <div className = {styles.section}>
                <Element name = "education"><Education/></Element>
                </div>
                <div className = {styles.section}>
                <Element name = "designConcepts"><DesignFoundations/></Element>
                </div>
                
                <div className = {styles.section}>
                <Element name = "hobbies"><Hobbies/></Element>
                </div>

                <div className = {styles.section}>
                <Element name = "contact"><Contact/></Element>
                </div>
                
            </div>
            
        </div>

        
    )
}

export default Home;