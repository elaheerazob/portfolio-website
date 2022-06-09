import React from 'react';

const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-8'>
        <img className='rounded-2xl' src={item.image} alt='' />
      </div>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <p className='text-base max-w-md'>
        {item.category}
      </p>
      <div className='flex flex-row gap-2 mt-4'>
      <a href={item.live} target="_blank"><button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>Live</button></a>
      <a href={item.code} target='_blank'><button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>Code</button></a>
      </div>
    </div>
  );
};

export default Project;