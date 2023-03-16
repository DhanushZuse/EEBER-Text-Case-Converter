import React from 'react'

export default function About(props) {

	const mystyle = () => {
		if(props.mode==='light'){
			return({
				color: 'black',
				backgroundColor: props.color
			})
		}
		else{
			return({
				color: 'white',
				backgroundColor: props.color
			})
		}
	}
	
	return(

		<div className="container" style={mystyle()}>
			<h1 className="my-3">About us</h1>
			<div className="accordion" id="accordionExample">
			  <div className="accordion-item" >
			    <h2 className="accordion-header" id="headingOne">
			      <button style={mystyle()} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
			        <strong>Description</strong>
			      </button>
			    </h2>
			    <div style={mystyle()} id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
			      <div className="accordion-body">
			        <strong>EEBER - Text Case Converter,</strong> A react application used to convert the case of the text entered with a clean Interface.
			      </div>
			    </div>
			  </div>
			  <div className="accordion-item">
			    <h2 className="accordion-header" id="headingTwo">
			      <button style={mystyle()} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
			        <strong>Features</strong>
			      </button>
			    </h2>
			    <div style={mystyle()} id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
			      <div className="accordion-body">
			        Copy text, Upper-case conversion, Lower-case conversion and Dark mode.<br/>
			        !!! Dont miss to checkout the Dark mode.
			      </div>
			    </div>
			  </div>
			  <div className="accordion-item">
			    <h2 className="accordion-header" id="headingThree">
			      <button style={mystyle()} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
			        <strong>Creator Info</strong>
			      </button>
			    </h2>
			    <div style={mystyle()} id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
			      <div className="accordion-body">
			      	<strong>EEBER</strong> --by<br/>
			        <strong>Creator :</strong> Dhanush <br/>
			       	<strong>GitHub :</strong> <a href='https://github.com/DhanushZuse'>https://github.com/DhanushZuse</a>
			      </div>
			    </div>
			  </div>
			</div>
		</div>

		)

}