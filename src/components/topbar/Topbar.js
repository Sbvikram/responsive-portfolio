import "./Topbar.scss";
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';

const Topbar = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Intro</a>
          <div className="itemContainer">
            <PersonIcon className="icon"/>
            <span>+917654309734</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon"/>
            <span>test@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>(setMenuOpen(!menuOpen))}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar