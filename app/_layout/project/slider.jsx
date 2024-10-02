'use client';

import { Center } from '@/components';
import Image from 'next/image';

import ImgData from "../../_assets/images/home-item-1.jpg"
import VidData from "../../_assets/videos/home-item-2.mp4"

/**
 * @param {Object} props
 * @param {'image' | 'video'} props.type
 * @param {string} props.source
 */
export function ProjectSlider({ type, source }) {
  const image =
    type === 'image' ? (
      <Image
        src={source}
        className='object-cover'
        fill={true}
        alt='project items'
      />
    ) : null;
  const video =
    type === 'video' ? (
      <video
        src={source}
        loop={true}
        controls={false}
        muted={true}
        autoPlay='always'
        width='100%'
        height='100%'
        className='!static !bg-transparent'
      />
    ) : null;

  return (
    <Center
      className='relative w-1/4 rounded'
      style={{
        minWidth: '150px',
        height: '20vw',
      }}
    >
      {image}
      {video}
    </Center>
  );
}
