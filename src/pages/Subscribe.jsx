import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
  return <>
 <section className="max-container flex justify-between items-center max-lg:flex-col gap-10"
 id='contact-us'>
  <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
    Sign Up For &nbsp;
    <span className="text-coral-blue">
      Updates
    </span>
    & Newsletter &nbsp;
  </h3>
  <div className="w-full flex items-center lg:max-w-[40%] max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
    <input type="email" placeholder='Subscribe@nike.com' className='input' />
    <div className="flex items-center max-sm:justify-end max-sm:w-full">
      <Button label="Subscribe" fullWidth />
    </div>
  </div>
 </section>
  </>
}

export default Subscribe