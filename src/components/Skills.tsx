import { FC } from "react";
import {FaWordpressSimple} from 'react-icons/fa'

import {skills} from '../shared/constants';


const Skills: FC= () => {
  return (
    <div className="lg:min-h-[70vh] px-[5vw] py-[80px] flex flex-col items-center justify-center z-[4]">
      <h1
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-1"
        className="text-center text-3xl lg:text-4xl"
      >
        My skills & Knowledge
      </h1>
      <p
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="1"
        className="description text-lg text-center my-[30px]"
      >
        Technologies and languages that I use to make my product everyday
      </p>
      <div className="grid justify-center grid-cols-6 md:grid-cols-7 gap-y-[10px] md:gap-y-[20px]">
      
        {skills.map((skill, i) => (
          <a
            key={i}
            target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group"
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src={`https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/${skill.image}.svg`}
              alt=""
            />
            <p className="text-center">{skill.title}</p>
          </a>
        ))}
        <a
            target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group"
          >
            <FaWordpressSimple  className="fill-sky-600 w-[60px] h-[60px] transition duration-300 group-hover:scale-110" />
            <p className="text-center">Wordpress</p>
          </a>
      </div>
    </div>
  );
};

export default Skills;
