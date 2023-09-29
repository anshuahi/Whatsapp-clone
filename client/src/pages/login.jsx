import React from 'react'
import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { firebaseAuth } from '@/utils/FirebaseConfig';
import axios from 'axios';
import { CHECK_USER_ROUTE } from '@/utils/ApiRoutes';

const login = () => {

  const handlelogin = async () => {
    const provider = new GoogleAuthProvider();
    // const { user } = await signInWithPopup(firebaseAuth, provider);
    const { user : {displayName:name,email,photoURL} } = await signInWithPopup(firebaseAuth, provider);
    // console.log(user);
    console.log(name,email,photoURL);
    try {
      if(email){
        const {data} = await axios.post(CHECK_USER_ROUTE, {email});
        console.log(data);
      }
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6">
      <div className="flex items-center justify-center gap-2 text-white">
        <Image src='/whatsapp.gif' width={500} height={500} alt='whatsapp' />
        <span className='text-7xl'>Whatsapp</span>
      </div>
      <button className='flex justify-center items-center gap-7 bg-search-input-container-background p-5 rounded-lg' onClick={handlelogin}>
        <FcGoogle className='text-4xl' />
        <span className="text-white text-2xl">Login with Google</span>
      </button>
    </div>
  )
}

export default login
