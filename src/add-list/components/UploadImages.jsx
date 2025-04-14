import { Button } from '@/components/ui/button';
import { storage } from './../../../configs/FirebaseConfig';
import { ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react'

function UploadImages() {

    const [selectedFileList, setselectedFileList] = useState([]);
    const onFileSelected=(event)=>{
        const files = event.target.files;
        for (let i = 0; i < files?.length; i++) {
            const file = files[i];
            setselectedFileList((prev)=>[...prev, file])   
        }
        
    }
    
    const onImageRemove=(image,index)=>{
        const filteredFiles = selectedFileList.filter((file)=>file!==image)
        setselectedFileList(filteredFiles)
    }
    const Uploadimages=()=>{
        selectedFileList.forEach((file)=>{
            const FileName=Date.now()+'jpeg';
            const storageRef = ref(storage,'car-market/'+FileName);
            const metaData = {
                contentType: 'image/jpeg',
            }
            uploadBytes(storageRef, metaData,file).then((snapShot)=>{
                console.log('uploaded snapshot');
                
            })
        });
    }
  return (
    <div>
        <h2 className='font-medium text-xl my-3'>Upload Car Images</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>
            {selectedFileList.map((image,index)=>(
                <div key={index}>
                    <h2 className='absolute p-2 cursor-pointer' onClick={()=>onImageRemove(image,index)} >❎</h2>
                    <img src={URL.createObjectURL(image)} className='w-full h-[130px] object-cover rounded-xl' />
                </div>
            ))}
            <label htmlFor="image-upload">
                <div className='border rounded-xl border-dotted border-primary bg-blue-200 p-10 cursor-pointer hover:shadow-md'>
                    <h2 className='text-lg text-center text-primary'>+</h2>
                </div>
            </label>
            <input type="file" id="image-upload" multiple={true} className='opacity-0' onChange={onFileSelected} />
        </div>
        <Button>Upload</Button>
    </div>
  )
}

export default UploadImages