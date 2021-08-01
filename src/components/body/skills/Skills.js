import React from 'react'
import Seperator from '../common/Seperator'
import { SkillsData } from '../data/SkillsData';
import SkillCard from './SkillCard';
import "./Skills.css"

function Skills() {
    const data = SkillsData;
    return (
        <div className="skills">
               <Seperator/>
        
            <label className="section__title">Skills</label>
            <div className="skills__container">
                {data.map((item) => {
                    return(
                        <div className="skills__section">
                            <label className="skillsS__title">{item.type}</label>
                            <div className="skills__list">{item.list.map((skill)=>{
                                   return(
                                       <SkillCard skill={skill}/>
                                   ) 
                            })}</div>
                        </div>
                    )
                    })}
            </div>
        </div>
    )
}

export default Skills
