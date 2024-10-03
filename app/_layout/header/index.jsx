'use client';

import { motion } from 'framer-motion';
import { MoveDownRight } from 'lucide-react';
import AhmedsamiImg from '../../_assets/images/sami.png';
import AhmedFullImage from '../../_assets/images/samifull.png';

import { Earth, ParallaxSlider } from '@/components';

import { slideUp } from './variants';
import Image from 'next/image';
import useWindowSize from '@/app/_hooks/use-window-size';

export function Header() {
  const { width } = useWindowSize();
  return (
    <motion.header
      className='relative h-screen overflow-hidden bg-[#289dc0] text-background'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      <Image
        src={width > 480 ? AhmedsamiImg : AhmedFullImage}
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
        <div className='flex justify-between items-center '>
          <div className='md:flex hidden bg-[#1c1d20] w-[250px] h-[100px] border-0 rounded-r-full justify-between items-center pl-[20px] pr-[20px]'>
            <div>Located in Dubai</div>
            <div className='w-[70px] h-[70px] bg-[#289dc0] border-0 rounded-full flex items-center justify-center'>
              <Earth />
            </div>
          </div>
          <div className='md:ml-auto'>
            <div className='mx-10 max-md:my-12 md:mx-36'>
              <div className='mb-4 md:mb-20'>
                <MoveDownRight size={28} strokeWidth={1.25} />
              </div>

              <h4 className='text-[clamp(1.55em,2.5vw,2.75em)]'>
                <span className='block'>Senior</span>
                <span className='flex items-center justify-center gap-5'>
                  Frontend Engineer {width < 767 && width > 336 && <Earth />}
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
