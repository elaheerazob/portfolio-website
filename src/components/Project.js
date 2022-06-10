import React from 'react';

const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'
          data-aos="flip-left"
          data-aos-delay="500"
          data-aos-duration="500"
          data-aos-mirror="true"
    >
      <div className='mb-8'>
        <img className='rounded-2xl' src={item.image} alt='' />
      </div>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <p className='text-base max-w-md'>
        {item.category}
      </p>
      <div className='flex flex-row gap-2 my-4'>
      <a href={item.live} target="_blank"><button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>Live</button></a>
      <a href={item.code} target='_blank'><button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>Code</button></a>
      </div>

     <label for="my-modal-6" className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>Details</label>

{/* <!-- Put this part before </body> tag --> */}
<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className='font-bold'>{item.name}</h3>
    <p class="py-4">{item.details}</p>
    
  </div>
</div>

    </div>
  );
};

export default Project;
