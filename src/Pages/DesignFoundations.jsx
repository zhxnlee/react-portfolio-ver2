import React from "react"
import styles from "./DesignFoundations.module.css"

function DesignFoundations(){
    return(
        <div className = {styles.designFoundations}>
            <p className = {styles.dFTitle}>DESIGN CONCEPTS</p>
            <div><h1>I believe that _____ is essential to a good website...</h1></div>
            <div className = {styles.content}>
                
                <div className = {styles.greatTaste}>
                    <h2>Great Taste</h2>
                    <p>Having great taste in web design is essential for creating websites where users feel comfortable and engaged. A well-designed site with a strong sense of style enhances user experience, making it easier for visitors to navigate and enjoy the content.</p>
                </div>
                <div className = {styles.aesthetic}>
                    <h2>Aesthetic</h2>
                    <p>My main goal as a Front-End Developer is to create websites that are both aesthetically pleasing and user-friendly, ensuring a seamless and enjoyable experience for all users.</p>
                </div>
            </div>
        </div>
    )
}

export default DesignFoundations;