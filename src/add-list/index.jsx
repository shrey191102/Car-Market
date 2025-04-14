import Header from '@/components/Header'
import React, { useState } from 'react'
import carDetails from '../Sharerd/carDetails.json';
import InputField from './components/InputField';
import Dropdown from './components/Dropdown';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from "@/components/ui/separator"
import features from './../Sharerd/features.json';
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from '@/components/ui/button';
import TextArea from './components/TextArea';
import UploadImages from './components/UploadImages';

function AddListing() {
    const[formData,setFormData] =useState([]);
    const[featuresData,setFeatureData] =useState([]);
    const handleInputChange = (name,value) => {
        setFormData((prevData)=>({
            ...prevData,
            [name]: value
        }))
        console.log(formData);
        
    }
    const onSubmit=(e)=> {
        e.preventDefault();
    }
    const handleFeatureChange=(name,value)=>{
        setFeatureData((prevData)=>({
            ...prevData,
            [name]: value
        }))
         console.log(featuresData);  
    }
    

  return (
    <div>
        <Header/>
        <div className='px-10 md:px-20 my-10'>
            <h2 className='font-bold text-4xl'>Add New Listing</h2>
            <form className='p-10 border mt-10 rounded-xl'>
                {/* car details */}
                <div>
                    <h2 className='mb-6 font-medium text-xl'>Car Details</h2>
                    <div className='grid grid-cols-2 gap-5'>
                        {carDetails.carDetails.map((item,index)=>(
                            <div key={index}>
                                <label className='text-sm'>
                                    {item?.label} {item.required&&<span className='text-red-500'>*</span>}</label>
                                {item.fieldType=='text'|| item.fieldType=='number'?<InputField item={item} handleInputChange={handleInputChange}/>
                                :item.fieldType=='dropdown'?<Dropdown item={item} handleInputChange={handleInputChange}/>
                                :item.fieldType=='textarea'?<TextArea item={item} handleInputChange={handleInputChange}/>
                                :null}
                            </div>
                        ))}
                    </div>
                </div>
                <Separator className="bg-slate-300 my-6" />
                {/* feature list*/}
                <div>
                    <h2 className='font-medium text-xl my-6'>Features</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                        {features.features.map((item,index)=>(
                            <div key={index} className='flex items-center gap-2'>
                                <Checkbox onCheckedChange={(value)=>handleFeatureChange(item.name,value)
                                } /> <h2>{item.label}</h2>
                            </div>
                        ))}
                    </div>
                </div>
                {/* car images*/}
                <Separator className="bg-slate-300 my-6" />
                <UploadImages />
                <div className='mt-10 justify-end flex'>
                    <Button type="submit" onClick={(e)=>onSubmit(e)}>Submit</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddListing