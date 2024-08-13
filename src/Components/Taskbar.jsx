
import React, {useState} from "react"
import styles from "./Taskbar.module.css" 

function Taskbar(){

    const currentTime = new Date();
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const [time,setTime] = useState(`${days[currentTime.getDay()]}, ${currentTime.getDate()} ${month[currentTime.getMonth()]}\u00A0 ${currentTime.toLocaleTimeString()}`);
    
    function handleChange(){
        const newTime = new Date();
        setTime(`${days[newTime.getDay()]}, ${newTime.getDate()} ${month[newTime.getMonth()]}\u00A0 ${newTime.toLocaleTimeString()}`);

    };


    setInterval(handleChange, 1000);
    return (
    <div className = {styles.taskbar}>
        <div className = {styles.greetings}>
            <p>Hello there!</p>
        </div>
        <div className = {styles.time}>
            <p>{time}</p>
        </div>
    </div>
    )
}

export default Taskbar;