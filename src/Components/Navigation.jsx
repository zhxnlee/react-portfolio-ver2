
import React from "react"
import styles from "./Navigation.module.css"
import {Link} from 'react-scroll';

function Navigation(){
    const links = [
        {name: "Introduction", to: "introduction"},
        {name: "About me", to: "aboutMe"},
        {name: "Skills", to: "skills"},
        {name: "Education", to: "education"},
        {name: "Design Concepts", to: "designConcepts"},
        {name: "Contact", to: "contact"}

    ]

    const linkItems = links.map((listItem)=>(
        <li ><Link activeClass={styles.active} smooth spy to = {listItem.to} className={({ isActive }) => isActive ? styles.active : undefined} >{listItem.name}</Link></li>
    ));

    return (
        <div className = {styles.navigationSection}>
            <div className = {styles.logo}>
                <h1>ZX</h1>
            </div>
            <div className = {styles.navigationList}>
                <ul>
                    {linkItems}
                </ul>
            </div>
        </div>
    )
}

export default Navigation;