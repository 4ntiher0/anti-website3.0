import { Link } from "react-router-dom"; 
import './navi.css';

const Navigation = () => {
  return (
    <div className='nav'>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/photos">Photos</Link>
      <Link to="/projects">Projects</Link>
    </div>
  );
};

export default Navigation;
