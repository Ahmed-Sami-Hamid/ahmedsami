'use client';

import { motion } from 'framer-motion';
import { MoveDownRight } from 'lucide-react';
import { CldImage } from 'next-cloudinary';
import AhmedsamiImg from './sami.png';

import { Earth, ParallaxSlider } from '@/components';

import { slideUp } from './variants';
import Image from 'next/image';

export function Header() {
  return (
    <motion.header
      className='relative h-screen overflow-hidden bg-[#4e9cbc] text-background'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      <Image
        src={AhmedsamiImg}
        className='object-cover md:scale-5 md:object-contain'
        fill={true}
        sizes='100vw'
        alt='Ahmed Sami Personal Picture'
      />

    <div className='relative flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal'>
        <div className='select-none'>
          <h1 className='text-[max(9em,15vw)]'>
            <ParallaxSlider repeat={4} baseVelocity={2}>
              <span className='pe-12'>
                Ahmed Sami
                <span className='spacer'>—</span>
              </span>
            </ParallaxSlider>
          </h1>
        </div>
        <div className='flex justify-between items-center'>
          <div className='bg-[#1c1d20] w-[250px] h-[100px] border-0 rounded-r-full flex justify-between items-center pl-[20px] pr-[20px]'>
            <div>
              Located in Dubai
            </div>
            <div className='w-[70px] h-[70px] bg-[#4e9cbc] border-0 rounded-full'>
              <Earth/>
            </div>
          </div>
          <div className='md:ml-auto'>
            <div className='mx-10 max-md:my-12 md:mx-36'>
              <div className='mb-4 md:mb-20'>
                <MoveDownRight size={28} strokeWidth={1.25} />
              </div>

              <h4 className='text-[clamp(1.55em,2.5vw,2.75em)]'>
                <span className='block'>Senior</span>
                <span className='block'>Frontend Engineer</span>
              </h4>
            </div>
          </div>
      </div>
    </div>
    </motion.header>
  );
}
