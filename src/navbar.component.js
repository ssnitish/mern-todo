import React from 'react';
import { Link } from 'react-router-dom';
class NavBarComponent extends React.Component {
   render() {
      return (
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/"> Todo </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link to="/create" className="nav-link">Create </Link>
                  </li>
                  {/* <li className="nav-item">
                     <Link to="/edit/123"><a className="nav-link">Edit</a></Link>
                  </li> */}
               </ul>
            </div>
         </nav>
      );
   }
}

export default NavBarComponent