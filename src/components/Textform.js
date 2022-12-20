import React,{useState} from 'react'


export default function Textform(props) {
    function copyTxt() {
  // Get the text field
  var copyText = document.getElementById("myBox");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
}

    const handleUpCase = () =>{
      console.log("Uppercase was clicked")
      let New = text.toUpperCase();
      setText(New);
    }
    const handleLoCase = () =>{
      console.log("Lower case was clicked")
      let New = text.toLowerCase();
      setText(New);
    }
    const handleClCase = () =>{
      console.log("Lower case was clicked")
      let New = "";
      setText(New);
    }
    const handleOnChange = (event) =>{
      console.log("On changed")
      setText(event.target.value)
    } 
     function changeStyle(){
    let elements= document.getElementById('myBox') 
     if( elements.style.color ==="black"){
           elements.style.color = "red";
           setcolorChg("Change to Black")
           setbtn_class("btn btn-dark mx-2")
     }else{
       elements.style.color = "black";
       setcolorChg("Change to Red")
       setbtn_class("btn btn-danger mx-2")
     }
  }
//   function capitalizeFirstLetter() {
//     let word= document.getElementById('myBox') 
//     let fin= word.toString().split(' ')
//   for(let i=0;i<fin.length; i++){
//     fin[i] = fin[0].toUpperCase()
//   }
// }
    const [text, setText]= useState("Enter text Here");
    const[colorchg, setcolorChg ]= useState("Change to Red")
    const[btn_class, setbtn_class]= useState("btn btn-danger mx-2")

  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode === 'dark' ? '#A9A9A9' : '#F8F8F8', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpCase} > Convert to Uppercase </button>
        <button className="btn btn-info mx-3" onClick={handleLoCase} > Convert to Lowercase </button>
        <button className="btn btn-success mx-2" onClick={handleClCase} > Clear Text </button>
        {/* <button className="btn btn-secondary mx-2" onClick={capitalizeFirstLetter} >Change First Alpha To Uppercase</button> */}
        <button className={btn_class} onClick={changeStyle} > {colorchg} </button>    
        <button className="btn btn-secondary mx-2" onClick={copyTxt} >Copy Text</button>
    </div>
    <div className="container my-4" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} Words and letters {text.length}</p>
      <p>Minutes Speed ({0.008 * text.split(" ").length}) </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  ) 
}

