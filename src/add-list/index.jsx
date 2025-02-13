import Header from '@/components/Header'
import React from 'react'

function AddListing() {
  return (
    <div>
        <Header/>
        <div className='px-10 md:px-20 my-10'>
            <h2 className='font-bold text-4xl'>Add New Listing</h2>
            <form className='p-10 border mt-10 rounded-xl'>
                {/* car details */}
                <div>
                    <h2 className='mb-6 font-medium text-xl'>Car Details</h2>
                </div>
                {/* feature list*/}
                {/* car images*/}
            </form>
        </div>
    </div>
  )
}

export default AddListing