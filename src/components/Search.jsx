import React from "react";
import { Separator } from "@/components/ui/separator";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoSearchOutline } from "react-icons/io5";
import Data from "@/Sharerd/Data";

function Search() {
  return (
    <div
      className="p-2 md:p-5 bg-white rounded-md md:rounded-full flex-col 
    md:flex md:flex-row gap-10 px-5 items-center  w-[60%]  "
    >
      <Select>
        <SelectTrigger className="w-[180px] outline-none md:border-none shadow-none">
          <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent>
           
          
          <SelectItem value="New">New</SelectItem>
          <SelectItem value="Old">Old</SelectItem>
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className="hidden md:block" />

      <Select>
        <SelectTrigger className="w-[180px] outline-none md:border-none shadow-none">
          <SelectValue placeholder="Car Brands" />
        </SelectTrigger>
        <SelectContent>
        {Data.cars.map((Item,index)=>(<SelectItem value={Item.name}>{Item.name}</SelectItem>))}
        </SelectContent>
      </Select>

      <Separator orientation="vertical"  className="hidden md:block" />

      <Select>
        <SelectTrigger className="w-[180px] outline-none md:border-none shadow-none">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
          {Data.pricing.map((Item,index)=>(<SelectItem value={Item.amount}>{Item.amount}</SelectItem>))}
        </SelectContent>
      </Select>
      <div>
      <IoSearchOutline  className="text-[50px] bg-primary rounded-full p-3 text-white hover:scale-105 transition-all cursor-pointer"/>
      </div>
      
    </div>
  );
}

export default Search;
