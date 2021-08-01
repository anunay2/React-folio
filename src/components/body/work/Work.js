import React from 'react'
import Seperator from '../common/Seperator'
import { workData } from '../data/workData';
import WorkCard from './WorkCard';

function Work() {
    const data = workData;
    return (
        <div className="work">
            <label className="section__title"> Work-ex</label>
                <div className="work__list">
                    {data.map((item)=>{
                        return (
                            <WorkCard item={item}/>
                        )
                    })}
                </div>

        
         
        </div>
    )
}

export default Work
