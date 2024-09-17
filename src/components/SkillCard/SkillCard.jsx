import React from 'react';

const skillColors = {
    HTML: 'shadow-red-500',
    CSS: 'shadow-sky-500',
    React: 'shadow-blue-500',
    'Tailwind CSS': 'shadow-sky-400',
    'DaisyUI': 'shadow-purple-500',
    JavaScript: 'shadow-yellow-500',
    'Node.js': 'shadow-green-500',
    'Express.js': 'shadow-gray-700',
    MongoDB: 'shadow-green-600',
    Stripe: 'shadow-blue-600',
    'JSON Web Token': 'shadow-indigo-500',
    git: 'shadow-orange-600',
    GitHub: 'shadow-gray-800',
    Vercel: 'shadow-gray-600',
    Netlify: 'shadow-cyan-500',
    Surge: 'shadow-gray-500',
    'VS Code': 'shadow-blue-400',
    Figma: 'shadow-pink-400',
};

const SkillCard = ({ skill }) => {
    const { name, image } = skill;
    const shadowColor = skillColors[name] || 'shadow-gray-300';

    return (
        <div className={`p-4 rounded-lg ${shadowColor} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
            <img
                src={image}
                alt={image}
                className="rounded-xl w-[90px] h-[90px] mx-auto mb-3" />
            <h2 className="text-center text-lg font-semibold text-white">{name}</h2>
        </div>
    );
};

export default SkillCard;