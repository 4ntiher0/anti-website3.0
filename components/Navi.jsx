import Link from 'next/link';
import './navi.css';

const Navigation = () => {
  return (
    <div className='nav'>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/photos">Photos</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/projects">Projects</Link>
    </div>
  );
};

export default Navigation;
