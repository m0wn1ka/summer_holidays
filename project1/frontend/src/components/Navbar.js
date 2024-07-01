import './Navbar.css'
import { Link } from "react-router-dom"
import Profile from './personalized/Profile';
import ProtectedComponent from './protectedComponent/ProtectedComponent';
import { useContext } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import { stateContext, stateDispatchContext } from './contextAPI/Context1';

export default function Navbar() {

  const state1=useContext(stateContext)
  const dispatch = useContext(stateDispatchContext);
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
        {!state1.authorized &&
        <>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/register">register</Link >
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login">login</Link >
              </li>
              </>
        }
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">about</Link >
              </li>
              
              <ProtectedComponent>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/profile">profile</Link >
                </li>
              </ProtectedComponent>

              <ProtectedComponent>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/createPoll">createPoll</Link >
                </li>
              </ProtectedComponent>

              <ProtectedComponent>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/voteInPoll">voteInPoll</Link >
                </li>
              </ProtectedComponent>

            </ul>
            <LogoutIcon onClick={() => { window.alert("logged out ");dispatch({ type: 'Logout' })}} />
          </div>
        </div>
      </nav>
    </>)
}