import React, { useMemo } from 'react';
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, 
  FaPython, FaGithub, FaDocker, FaDatabase 
} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiVite, SiPostman } from 'react-icons/si';
import './TechBackground.css';

const TechBackground = () => {
  const icons = [
    <FaReact />, <FaJs />, <FaHtml5 />, <FaCss3Alt />, <FaNodeJs />, 
    <FaPython />, <FaGithub />, <FaDocker />, <FaDatabase />, 
    <SiTailwindcss />, <SiTypescript />, <SiVite />, <SiPostman />,
    "{ }", "</>", "=>", "JSON"
  ];

  const floatingElements = useMemo(() => {
    // On crée 60 éléments pour bien remplir l'espace
    return Array.from({ length: 60 }).map((_, i) => {
      const directions = ['up', 'down', 'left', 'right'];
      const dir = directions[Math.floor(Math.random() * directions.length)];
      
      return {
        id: i,
        content: icons[i % icons.length],
        dir: dir,
        size: Math.random() * (2.5 - 0.8) + 0.8,
        pos1: Math.floor(Math.random() * 100), // Position de départ sur l'axe opposé
        delay: Math.random() * 20,
        duration: Math.random() * (30 - 15) + 15,
      };
    });
  }, []);

  return (
    <div className="area">
      <ul className="circles">
        {floatingElements.map((el) => (
          <li
            key={el.id}
            className={`floating-item ${el.dir}`}
            style={{
              fontSize: `${el.size}rem`,
              animationDelay: `${el.delay}s`,
              animationDuration: `${el.duration}s`,
              // On place l'élément selon sa direction
              '--start-pos': `${el.pos1}%`
            }}
          >
            {el.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechBackground;