'use client';

import { motion } from 'framer-motion';
import { ArrowDownLeft } from 'lucide-react';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';

// Images
import SamiPic from './sami.jpeg'

import { MagneticButton } from '@/components';

import { Container, ImageWrapper, MainTitle, Row } from './index.styled';
import Image from 'next/image';

/**
 * @param {Object} props
 * @param {import('framer-motion').MotionValue<number>} props.transformX
 */
export function UserDetails({ transformX }) {
  return (
    <Container>
      <Row>
        <div className='flex items-center gap-8'>
          <ImageWrapper>
            <Image
              src={SamiPic}
              className='rounded-full object-cover'
              fill={true}
              alt='Ahmed Sami Profile Picture'
            />
          </ImageWrapper>
          <MainTitle>Let’s work</MainTitle>
        </div>
        <div className='flex items-center justify-between'>
          <MainTitle>together</MainTitle>
          <div>
            <ArrowDownLeft size={28} strokeWidth={1.25} />
          </div>
        </div>
      </Row>

      <Row>
        <div className='relative w-full'>
          <div className='h-[1px] bg-muted-foreground' />
          <div className='absolute right-0 top-0 z-20 -translate-x-1/2 -translate-y-1/2'>
            <motion.div style={{ x: transformX }}>
            <a href='mailto:ahmedsamideveloper@gmail.com'>
                <MagneticButton variant='primary' size='lg'>
                  Get in touch
                </MagneticButton>
              </a>
            </motion.div>
          </div>
        </div>
      </Row>

      <Row>
        <div className='flex w-fit flex-col gap-6 lg:flex-row'>
          <div>
            <a href='mailto:ahmedsamideveloper@gmail.com'>
              <MagneticButton
                variant='outline'
                size='md'
                className='w-full flex items-center justify-center border-gray-700 whitespace-nowrap py-8 px-10 '
              >
                ahmedsamideveloper@gmail.com
              </MagneticButton>
            </a>
          </div>
          <div>
            <a href='tel:+971544721157'>
              <MagneticButton
                variant='outline'
                size='md'
                className='w-full border-gray-700 py-8 px-10'
              >
                +971 54 472 1157
              </MagneticButton>
            </a>
          </div>
        </div>
      </Row>
    </Container>
  );
}
