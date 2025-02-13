import FakeData from '@/Sharerd/FakeData';
import React from 'react'
import CarItem from './CarItem';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

function MostSearched() {
    console.log(FakeData.carList);
    
  return (
    <div className='mx-24'>
        <h2 className='text-center font-bold text-3xl mt-16 mb-7'>MostSearched</h2>
        <Carousel>
  <CarouselContent>
  {FakeData.carList.map((car,index)=>(
    <CarouselItem className="basis-1/4">
        <CarItem car={car} key={index} />
    </CarouselItem>
            
        ))}
    
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

        
    </div>
  )
}

export default MostSearched