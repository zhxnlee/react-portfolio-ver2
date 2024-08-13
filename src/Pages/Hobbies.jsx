
import React, {useState} from "react"
import styles from "./Hobbies.module.css";
import guitarImage from "../assets/IMG_0166.png"
import pianoImage from "../assets/IMG_4159.png"

function Hobbies(){


    const [content, setContent] = useState("");
    const [index, setIndex] = useState(1);

    const handleLeftClick = () => {
        setIndex((prevIndex) => 
            prevIndex === 0 ? hobbiesList.length - 1 : prevIndex - 1
        );
    };

    const handleRightClick = () => {
        setIndex((prevIndex) => 
            prevIndex === hobbiesList.length - 1 ? 0 : prevIndex + 1
        );
    };

    const hobbiesList = [
        {
            title: "Badminton",
            content1: "Badminton has been a part of my life since childhood. I first learned to play from my father, who taught me the basics and instilled a love for the game. Over the years, I honed my skills by playing regularly with friends, using each match as an opportunity to improve and challenge myself. Whether it's for fun or competition, badminton continues to be a passion that keeps me active and engaged.",
            content2: "Over the years, I honed my skills by playing regularly with friends, using each match as an opportunity to improve and challenge myself. Whether it's for fun or competition, badminton continues to be a passion that keeps me active and engaged."
        },
        {
            title: "Guitar",
            content1: "I picked up the guitar at around 18 years old, driven by a curiosity to explore music in a more personal way. I began with simple lessons for two months, which provided a solid foundation. After that, I transitioned to self-learning, diving into online videos and tutorials.",
            content2:"This approach allowed me to discover different styles and techniques at my own pace, continuously improving my skills and deepening my connection with the instrument.",
        },
        {
            title: "Piano",
            content1: "Although I've never formally learned to play the piano, my fundamental music theory knowledge from playing the guitar has helped me pick it up quickly. Since I was young, I've only had the chance to play the piano at my grandparents' house.",
            content2: "However, each visit became an opportunity to learn new songs and explore the instrument. Over time, I developed a natural feel for the piano, using my guitar experience to guide me as I taught myself to play.",
            image: pianoImage
        }
    ]

    
    return(
    <div className = {styles.hobbies}>
        <p className = {styles.hobbiesTitle}>HOBBIES</p>
        <div className = {styles.title} >
            <h1>Things that I love to do...</h1>
        </div>
        <div className = {styles.content}>
            <div className={styles.leftArrow} onClick={handleLeftClick}>
                    <h1>&lt;</h1>
            </div>
            <div className = {styles.mainContent}> 
                <div className = {styles.contentText}>
                    <h2>{hobbiesList[index].title}</h2>
                    <p>{hobbiesList[index].content1}</p>
                    <p>{hobbiesList[index].content2}</p>
                </div>
                <div className = {styles.contentImage}>
                    <img src = {hobbiesList[index].image}/>
                    
                </div>
            </div>
            <div className={styles.rightArrow} onClick={handleRightClick}>
                <h1>&gt;</h1>
            </div>
        </div>
    </div>)
}

export default Hobbies;
