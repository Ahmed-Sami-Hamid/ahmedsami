import { InProgress } from '@/components';
import { Header, Navbar, Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About',
  description:
    'Helping brands thrive in the digital world. Located in The Dubai. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Ahmed Sami',
};

export default function About() {
  return (
    <Transition>
       <Navbar />
      <Header />
      {/* <InProgress>About Page</InProgress> */}
    </Transition>
  );
}
