import React from 'react';
import skills from '../data/skills';

const Skills = () => {
    return (
        <div className='skill-page'>
            {skills.map((skill, index) => (
                <div key={index+skill.name} className='skills-container'>
                    <img src={`./skills/${skill.image}`} alt={skill.name}/>
                    <p>{skill.name}</p>
                </div>
            ))};
        </div>
    );
};

export default Skills;