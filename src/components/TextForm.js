import React, {useState} from 'react'

export default function TextForm(props) {
const [text, setText] = useState('Enter Text Here.');

const inputsText = (event) =>{ 
//  console.log(text)
 setText(event.target.value)
}

const btnUpperCase = () =>{
// console.log(text)
let newText = text.toUpperCase();
setText(newText)
}

const btnLowerCase = () =>{
  // console.log(text)
  let newText = text.toLowerCase();
  setText(newText)
}

const btnClear = () =>{
  // console.log(text)
  let text = '';
  setText(text)  
}


return (
  <>
<div className="container">        
<div className="mb-2">
  <h2 htmlFor="exampleFormControlTextarea1" className="form-label">Text {props.title}</h2>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" value={text} onChange={inputsText}></textarea>
</div>
<div className="col-auto">
    <button type="submit" className="btn btn-primary mt-1 me-2" onClick={btnUpperCase}>Upper Case</button>
    <button type="submit" className="btn btn-primary mt-1 me-2" onClick={btnLowerCase}>Lower Case</button>
    <button type="submit" className="btn btn-primary mt-1" onClick={btnClear}>Clear</button>
  </div>
    </div>
<div className="container my-2">
<h4>Your text summary</h4>
<p>{text.split(" ").length} words and {text.length} characters</p>
<h4>Preview</h4>
<div>{text}</div>
</div>

    </>
  )
}
