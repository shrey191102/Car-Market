import { SignedIn, UserButton, SignInButton, SignedOut, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button'
import { Link } from 'react-router';

function Header() {
    const {user,isSignIn}=useUser();
  return (

    <div className='flex items-center justify-between p-1 shadow-md'>
        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/27/eco-5465461_1280.png"
        //  alt=""
        width={100} height={100} 
        />
        <ul className='hidden md:flex  gap-16'>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>About</li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Services</li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Contact</li>
        </ul>

        {/* {isSignIn?
        <div className='flex items-center gap-5'>
            
        <UserButton />
      
            <Button>Submit Listening</Button>
        </div>:<Button>Submit Listening</Button>
        }
        */}
      <div className=" flex items-center gap-5 ">
      <SignedIn> 
        <UserButton  />
        <Link to={'/profile'}>
        <Button>Submit Listening</Button>
        </Link>
      </SignedIn>
      <SignedOut>
        <SignInButton className="bg-primary rounded-full text-white p-2 mx-2" />
      </SignedOut>
      </div>
    </div>
    
  ) 
}

export default Header