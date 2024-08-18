
import React, {useState, useEffect} from "react"
import styles from "./Navigation.module.css"
import {Link} from 'react-scroll';
import { TiThMenu } from "react-icons/ti";
function Navigation(){

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);
    const [menu, setMenu] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 600);
        };

        console.log("Mobile");
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    
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
        <>
            {!isSmallScreen ? (
                <div className={styles.navigationSection}>
                    <div className={styles.logo}>
                        <h1>ZX</h1>
                    </div>
                    <div className={styles.navigationList}>
                        <ul>{linkItems}</ul>
                    </div>
                </div>
            ) : (
                <>
                    <div className = {styles.navigationMobileSection}>
                        <div className = {styles.mobileTitle}>
                            <h1>ZX</h1>
                        </div>
                    {/* <button onClick={() => setMenu(!menu)} className={styles.menuButton}> */}
                    
                        {/* Menu
                    </button> */}
                    <TiThMenu  onClick={() => setMenu(!menu)} className={styles.menuButton}/>
                    {menu && (
                        <div className={styles.navigationMobile}>
                            <ul>{linkItems}</ul>
                        </div>
                    )}
                    </div>
                </>
            )}
        </>
    );
}

export default Navigation;