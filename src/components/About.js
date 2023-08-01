import React, {useState} from 'react'

export default function About() {
const [myStyle, setMyStyle] = useState({
  color:'white',
  backgroundColor:'black',
})
let toggleStyle = ()=>{
if(myStyle.color == 'white'){
  setMyStyle({
    color:'black',
    backgroundColor:'white'
  })
}else{
  setMyStyle({
    color:'white',
    backgroundColor:'black'
  })
}

}

  return (
    <>

    <div className="container mt-5" style={myStyle}>
      

<div className="container"> <h1>About Us</h1></div>    
    <div className="container">       
    <table className="table" style={myStyle}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>


</div>


<div className="container my-2 pb-2">
<button type="button" className="btn btn-primary btn-sm" onClick={toggleStyle}>Enable Dark Mode</button>
</div>

</div>
    </>
    
  )
}
