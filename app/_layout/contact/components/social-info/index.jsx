'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MagneticButton } from '@/components';
import { socialMedias } from '@/data';
import { randomId } from '@/utils';
import { ListTitle } from './index.styled';

export function SocialInfo() {
  const [dubaiTime, setDubaiTime] = useState(null);

  useEffect(() => {
    // Function to get Dubai time in AM/PM format
    function getDubaiTime() {
      const dubaiTime = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Dubai',
        hour: 'numeric',
        hour12: true,
      });
      return dubaiTime;
    }

    // Set the Dubai time when the component mounts
    setDubaiTime(getDubaiTime());

    // Optionally, update the time periodically (e.g., every minute)
    const intervalId = setInterval(() => {
      setDubaiTime(getDubaiTime());
    }, 60000); // Update every 60 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const medias = socialMedias.map(({ href, title }) => {
    const id = randomId();
    return (
      <li
        key={id}
        className='border-b border-solid border-b-transparent transition-all duration-300 ease-in-expo hover:border-b-border'
      >
        <Link href={href} target='_blank' rel='noopener' passHref>
          <MagneticButton>{title}</MagneticButton>
        </Link>
      </li>
    );
  });

  return (
    <div className='px-12 pb-4 pt-10'>
      <div className='flex flex-wrap items-stretch justify-between gap-5'>
        <div className='flex gap-8'>
          <div>
            <ListTitle>Version</ListTitle>
            <p className='mt-7'>2024 © Edition</p>
          </div>
          <div>
            <ListTitle>Local time</ListTitle>
            <p className='mt-7'>
              <time>{dubaiTime !== null ? dubaiTime + " "+ 'GTM +4' : 'Loading...'}</time>
            </p>
          </div>
        </div>

        <div className='flex flex-col'>
          <ListTitle>Socials</ListTitle>
          <ul className='flex gap-8'>{medias}</ul>
        </div>
      </div>
    </div>
  );
}
