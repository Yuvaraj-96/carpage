"use client"
import React from 'react'
import { CustomButton } from '.'
import Image from 'next/image'
import {useState,ChangeEvent} from 'react'

const Hero = () => {
  const [file, setFile] = useState<File>(); 
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => { 
    if (e.target.files) { 
      setFile(e.target.files[0]);
     }
   };
     const handleUploadClick = () => { 
      if (!file) { 
        return; 
      }
    }
  return (
    <div> 
        <input type="file" onChange={handleFileChange} /> 
        <div>{file && `${file.name} - ${file.type}`}</div>
        <button onClick={handleUploadClick}>Upload</button>
        </div>
  )
  // (
  //   <div className='hero'>
  //     <div className="flex-1 pt-36 padding-x">
  //       <h1 className='hero__title'>
  //         Find, book, or rent a car --quickly and easily!
  //       </h1>
  //       <p className='hero__subtitle'>Streamline your car rental experience with our effortless booking process.</p>
  //       <CustomButton 
  //         title="Explore cars"
  //         containerStyles="bg-primary-blue text-white rounded-full mt-10"
  //         handleClick={()=>{}} />
  //     </div>
  //     <div className='hero__image-container'>
  //       <div className='hero__image'>
  //         <Image src='/../public/hero.png' alt="hero" fill className='object-contain' />
  //         <div className='hero__image-overlay'></div>
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default Hero