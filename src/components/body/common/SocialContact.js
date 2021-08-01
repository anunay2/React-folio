import React from 'react'
import { SocialData } from '../data/Social'
import './SocialContact.css'
function SocialContact() {
    const data = SocialData;
    return (
        <div className="social__contact">
            {data.map((item)=>{
                return(
                    <a href={item.link}>
                        <div className="social__icon">
                            <img className ="social__image" src={item.icon}></img>
                        </div>
                    </a>      
                )
            })}
            </div>
    )
}

export default SocialContact

