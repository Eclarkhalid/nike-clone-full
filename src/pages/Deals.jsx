import React from 'react'
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
import Button from '../components/Button'

const Deals = () => {
  return <>
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="deals" width={773} height={687} className='object-contain w-full' />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-bold font-palanquin">
          <span className="text-coral-blue">Exclusive</span>
          Deals
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping adventure filled with extraordinary offers. From premium selections to unbeatable discounts, we provide unmatched value that distinguishes us.
        </p>
        <p className="mt-4 info-text">
          Explore a world of possibilities crafted to satisfy your unique desires, surpassing even the highest expectations. Your journey with us is nothing short of remarkable.
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button label={"Learn More "} backgroundColor={"bg-white"} borderColor={"border-slate-gray"} textColor={"text-slate-gray"} />
        </div>
      </div>
    </section>
  </>
}

export default Deals