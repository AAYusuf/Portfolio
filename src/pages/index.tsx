import type {  NextPage } from "next";

import Intro from "../components/Intro";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Who from "../components/Who";
import Skills from "../components/Skills";
import { allDataType } from "../shared/types";
import { useRef } from "react";
import MainProjects from "../components/MainProjects";
import SmallProjects from "../components/SmallProjects";
import Contact from "../components/Contact";
import Websites from "../components/Websites";

interface HomeProps {
  data: allDataType;
}

const Home: NextPage = () => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        tablet: {
          smooth: true,
          breakpoint: 768,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
     

      <div data-scroll-container ref={containerRef}>
        <Intro />
        <Who />
        <Skills />
        <MainProjects />
        <SmallProjects />
        <Websites />
        <Contact />
      </div>
    </LocomotiveScrollProvider>
  );
};

export default Home;

