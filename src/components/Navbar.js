import React, {useState} from 'react'
import propTypes from 'prop-types';
import {Link} from "react-router-dom";

export default function Navbar(props) {

	const [color, setcolor] = useState('#563d7c')

	const handleColorPicker = (event) => {
		setcolor(event.target.value);
		props.setBg(color);
	}

	return(

		<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
		  <div className="container-fluid">
		    <Link className="navbar-brand" to="/EEBER-Text-Case-Converter/">{props.title}</Link>
		    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		      <span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarSupportedContent">
		      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
		        <li className="nav-item">
		          <Link className="nav-link active" aria-current="page" to="/EEBER-Text-Case-Converter/">Home</Link>
		        </li>
		        <li className="nav-item">
		          <Link className="nav-link" to="/EEBER-Text-Case-Converter/about/">About</Link>
		        </li>  
		      </ul>
		      {/*<form className="d-flex" role="search">
		        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
		        <button className="btn btn-outline-primary" type="submit">Search</button>
		      </form>*/}
		      <input type="color" onChange={handleColorPicker} className="form-control form-control-color mx-2 my-1" style={{borderRadius: 30, border: 1.5, borderColor: 'black', width: 30, height: 30}} id="colorInput" value={color}/>
		      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
				<input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
				<label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
			  </div>
		    </div>
		  </div>
		</nav>

		)

}

Navbar.propTypes = {
	title : propTypes.string.isRequired,
}

Navbar.defaultProps = {
	title : 'Dhanush',
}