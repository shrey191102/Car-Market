import { Separator } from "@/components/ui/separator"
import React from 'react'
import { LuFuel } from "react-icons/lu";
import { IoIosSpeedometer } from "react-icons/io";
import { GiGearStickPattern } from "react-icons/gi";
function CarItem({car}) {
  return (
    <div className="rounded-xl border bg-white hover:shadow-lg cursor-pointer">
      <h2 className="absolute m-2 bg-green-400 px-2 rounded-full text-sm text-white">New</h2>
        <img src={car?.image} width={'100%'} height={250} 
        className='rounded-t-xl'
        />
        <div className='p-4'>
            <h2 className='font-bold text-black text-lg mb-2'>
                {car?.name}
            </h2>
            <Separator />
        </div>
        <div className=" grid grid-cols-3 mt-4">
          <div className="flex flex-col items-center">
          <LuFuel className="text-lg mb-2 " />
          <h2>{car?.mileage} Km</h2>
          </div>
          <div className="flex flex-col items-center">
          <IoIosSpeedometer className="text-lg mb-2 " />
          <h2>{car?.fuelType} </h2>
          </div>
          <div className="flex flex-col items-center">
          <GiGearStickPattern className="text-lg mb-2 " />
          <h2>{car?.gearType} </h2>
          </div>
        </div>
        <Separator className="my-2" />
        <div className="flex justify-between items-center mx-4">
          <h2 className="font-bold text-xl  ">${car?.price}</h2>
          <h2 className="text-primary text-sm">View Details</h2>
        </div>
    </div>
  )
}

export default CarItem