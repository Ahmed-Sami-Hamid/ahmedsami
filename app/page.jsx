import {
  Contact,
  Description,
  Header,
  Navbar,
  Project,
  Thumbnail,
  Transition,
} from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Home | Ahmed Sami',
  description:
    'Helping brands thrive in the digital world. Located in The Dubai. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Ahmed Sami',
};

export default function Home() {
  return (
    <Transition>
      <Navbar />
      <Header />
      <main>
        <Description />
        <Thumbnail />
        <Project />
      </main>
      <Contact />
    </Transition>
  );
}
