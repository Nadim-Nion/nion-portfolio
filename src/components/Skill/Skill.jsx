import React, { useEffect, useState } from 'react';
import SkillCard from '../SkillCard/SkillCard';

const Skill = () => {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        fetch('skills.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSkills(data);
            })
    }, []);

    return (
        <div className='max-w-7xl mx-auto p-7 mb-10'>
            <h2 className='text-5xl font-bold text-white text-center'>Skills</h2>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6'>
                {
                    skills.map(skill => <SkillCard
                        key={skill.name}
                        skill={skill} />
                    )
                }
            </div>
        </div>
    );
};

export default Skill;