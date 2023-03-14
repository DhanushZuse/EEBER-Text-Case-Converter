import React from 'react'
//import propTypes from 'prop-types';
import { useState } from 'react';



export default function Form(props) {

	const [text, settext] = useState('');

	const handleUpClick = () => {
		//console.log("Upper case was clicked");
		let upperText = text.toUpperCase();
		settext(upperText);
		props.alert("Converted to uppercase", "success");
	}

	const handleLowClick = () => {
		//console.log("Upper case was clicked");
		let lowerText = text.toLowerCase();
		settext(lowerText);
		props.alert("Converted to lowercase", "success");
	}

	const handleCopyClick = () => {
		//text.select();
		//text.setSelectionRange(0, 99999);
		navigator.clipboard.writeText(text);
		props.alert("Copied", "success");
	}

	const [clear, setClear] = useState(false)

	const handleClearClick = () => {
		if(clear===false){
			setClear(true);
			props.alert("are you sure ?? press again to clear", "warning");
		}
		else{
			setClear(false);
			settext('');
		}
		


	}

	const onChangeHandler = (event) => {
		//console.log('on Change');
		settext(event.target.value);
	}

	const wordCounter = (text) => {
		let words = 0;

		for(let word of text.split(" ")){
			if(word==="")
				continue
			words+=1;
		}
		return(words)
	}

	return(
		<>
			<div className = 'container'>
				<div className="mb-3">
				  <label className={`form-label my-2 text-${props.mode==='light'?'dark':'light'}`} ><h3>{props.heading}</h3></label>
				  <textarea className="form-control" id="formbox" value={text} style={{backgroundColor : props.mode==='light'?'white':'gray', color : props.mode==='light'?'black':'white'}} onChange={onChangeHandler} rows="8" placeholder="Enter text here"></textarea>
				</div>
				<button className={`btn btn-${props.mode==='light'?'secondary':'light'} mx-2`} onClick = {handleUpClick}>Convert to uppercase</button>
				<button className={`btn btn-${props.mode==='light'?'secondary':'light'} mx-2`} onClick = {handleLowClick}>Convert to lowercase</button>
				<button className="btn btn-primary mx-2" onClick = {handleCopyClick}>Copy</button>
				<button className="btn btn-primary mx-2" onClick = {handleClearClick}>Clear</button>
			</div>

			<div className="container my-2 " style={{color : props.mode==='light'?'black':'white'}}>
				<h1>Your text symmary :</h1>
				<p>{text.length===0?'0':wordCounter(text)} words, {text.length} characters</p>
				<h2>Preview :</h2>
				<p>{text.length>0?text:'Enter something in the text box above to preview here'}</p>
			</div>
		</>

		)

}