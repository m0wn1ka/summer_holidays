import { Link } from "react-router-dom"
import LogoutIcon from '@mui/icons-material/Logout';

export default function Navbar() {

  let style1={
    "position": "fixed",
  "top": "0",
  "width": "100%"
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg Navbar1" style={style1}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link >
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link >
              </li>
    
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Student">Student</Link >
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Profile">profile</Link >
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Login">login </Link >
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Register">grant_access</Link >
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Viewer">viewer</Link >
              </li>
              
              

             

            </ul>
           
          </div>
        </div>
      </nav>
    </>)
}