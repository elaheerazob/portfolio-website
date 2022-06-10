import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// import woman image
import WomanImg from '../assets/img/IMG_1291-removebg-preview.png';

const Hero = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full' 
      /* data-aos="flip-left"
      // data-aos-delay="500"
      data-aos-duration="500"
      data-aos-mirror="true" */
      /* data-aos="fade-right"
      data-aos-offset="200"
      // data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out-back"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="bottom-top" */
      >
        <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#F8AE1B",
          },
          links: {
            color: "#F8AE1B",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start mt-32'
           >
            <p className='text-lg text-accent text-md mb-[22px]'>
              Hi , I'm Ridwan ! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
            Front-end developer
            </h1>
            {/* <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing illo ad labore
              dolor elit.
            </p> */}
           <a href="https://www.linkedin.com/in/elaheerazob/" target="_blank"> <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-md transition-all mt-10'>
              Hire Me
            </button></a>
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-full' 
          >
            <img src={WomanImg} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
