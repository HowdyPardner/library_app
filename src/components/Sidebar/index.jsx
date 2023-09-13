import { Link } from 'react-router-dom';
import './index.css';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LightModeIcon from '@mui/icons-material/LightMode';

const Sidebar = ({lightIsOn}) => {
  return (
    <aside id="sidebar">
      {/* user icon */}
       <LightModeIcon  className={`light-icon  ${lightIsOn ? "color-yellow" : ""}`} />
       <AccountBoxIcon />
      <span>&#128571;</span>
      <div>Name ???? </div>

      {/* <button>Login/Create</button> */}
      <Link to="/" >
        <button>Light Switch</button>
      </Link>
      <Link to="/new" >
        <button>New Book</button>
      </Link>
      <Link to="/library" >
        <button>View Books</button>
      </Link>
    </aside>
  )
};

export default Sidebar