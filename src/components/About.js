import React from 'react';

// import img
import Image from '../assets/img/about.jpg';
import cv from '../assets/img/Md Ridwan Elahee.pdf';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'
        data-aos="flip-right"
        // data-aos-delay="500"
        data-aos-duration="500"
        data-aos-mirror="true"
        >
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'
          >
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Ridwan Elahee
              </h2>
              <p className='mb-4 text-accent'>
                Frontend Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
              Hi, I'm Ridewan Elahee. I'm a Front-end developer and Graphic Designer. I have had experience working in the local market before. But now I went to work globally and want to help make your business even more beautiful. <br />
                
              </p>
            </div>
            <a download={cv} href={cv} className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
            Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
