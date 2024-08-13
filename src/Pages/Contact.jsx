import React from "react"
import styles from "./Contact.module.css"

function Contact(){
    const phoneNumber = "+60129502258";
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(phoneNumber)
          .then(() => {
            console.log('Phone number copied to clipboard!');
          })
          .catch((error) => {
            console.error('Failed to copy phone number:', error);
          });
      };
    return (
        <div className = {styles.contact}>
            <div className = {styles.contactTitle}><p>CONTACT</p></div>
            <div className = {styles.contactList}></div>
                <ul>
                <a href = "https://www.linkedin.com/in/zhenxuanlee/" target="_blank"><li>LINKEDIN</li></a>
                <a href = "https://github.com/zhxnlee" target="_blank" ><li>GITHUB</li></a>
                <a href="mailto:zhenxuan25@gmail.com" target="_blank"><li>EMAIL</li></a>
            
                </ul>
        </div>
    )
}

export default Contact;