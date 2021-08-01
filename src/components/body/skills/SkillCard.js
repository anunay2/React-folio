import React from 'react';
import './SkillCard.css';


function SkillCard({skill}) {
    return (
        <div className="skill__card">
            <div className="skill__icon">
                <img src={skill.icon} alt="" />
            </div>
            <div className="skill__name"> {skill?.name}</div>
               
        </div>
    )
}

export default SkillCard
