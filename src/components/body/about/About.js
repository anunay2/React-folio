import React from 'react'
import SocialContact from '../common/SocialContact';
import './About.css';
function About() {
    return (
        <div className="about">
            <div className="about__top">
                <div className="about__info">
                   Hi there!! I am a Jack of all trades and wish to master a few (backend).I am a avid public speaker(active <a href="https://www.toastmasters.org/">Toastmaster </a> member) and like to <a href="https://anunay2.github.io/Profile-and-my-Travel-Blog/blog.html">write</a> as well.
                   By the way, my name is not Jack I am <i>Anunay</i>.Apart from this I can play table tennis all day long - just saying.
                </div>
                <div className="about__dp">
                    <img src={require('../../../assets/dp3.png').default} className='dp'/>
             
                </div>
            </div>
            <div className="about__bottom">
            <SocialContact/>
            </div>
        </div>
    )
}

export default About
