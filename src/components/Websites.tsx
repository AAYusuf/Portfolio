import { FC } from "react";
import { allDataType } from "../shared/types";
import {webistes} from "../shared/constants";



const Websites: FC = () => {
  return (
    <div className="flex justify-center mx-[5vw] mt-16 pb-16 mb-16">
      <div className="w-full max-w-[1100px]">
        <h1 className="text-4xl text-center">Some of my Websites</h1>
        
        <div
          data-scroll
          data-scroll-speed="1"
          className="grid  gap-x-16 gap-y-4 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))]"
        >
          {webistes.map((website, i) => (
            <div key={i}>
              <a
                href={website.link}
                target="_blank"
                rel="noopener noreferrer"
                className=" flex flex-wrap gap-3 hover:bg-slate-900 p-3 transition duration-300 hover:scale-110"
                key={i}
              >
            <div data-scroll data-scroll-speed="3" className="lg:flex-1">
            <div className="border-[#888] border-2 rounded-[20px] overflow-hidden">
              <div className="border-black border-[8px]">
                <img
                  className="w-full rounded-[12px]"
                  src={website.image}
                  alt=""
                />
              </div>
            </div>
          </div>
              </a>
                
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Websites;
