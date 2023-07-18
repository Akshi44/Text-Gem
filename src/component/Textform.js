import React, { useState } from "react";
function Textform(props) {
  const [text, setText] = useState("Enter Text Here");

  const handleOnChange = (event) => {
    let newtext = event.target.value;
    setText(newtext);
    console.log("text has been updated.");
  };
  const countWords = (text) => {
    const arr = text.split(" ");
    return arr.filter((word) => word !== "").length;
  };

  const handleUpClick = () => {
    console.log("Uppercase is clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Text has been converted into uppercase.", "success");
  };

  const handlelowClick = () => {
    console.log("lowercase is clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Text has been converted into lowercase.", "success");
  };

  const handleclrClick = () => {
    console.log("cleartext is clicked");
    let newtext = "";
    setText(newtext);
    props.showAlert("Text has removed successfully.", "success");
  };
  const handleemailClick = () => {
    console.log("email conversion is clicked");
    let newtext = text.substring(0, 5) + "@gmail.com";
    setText(newtext);
    props.showAlert("Text has been converted into a Email-id.", "success");
  };

  // const handlesenClick = () => {
  //   console.log("sentence conversion is clicked");
  //   let newtext = text;
  //   setText(newtext);
  // };

  const handlecapitalClick = () => {
    console.log("capitalization is clicked");
    let newtext = text[0].toUpperCase() + text.slice(1).toLowerCase();
    setText(newtext);
    props.showAlert("Text has been capitalized", "success");
  };
  const speak = () => {
    let newtext = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(newtext);
  }

    const handlecopyClick = () => {
      var text=document.getElementById("exampleFormControlTextarea1")
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();

    }; 
    const handleextraspaces =()=>{
      let newtext = text.split(/[ ]+/); 
      setText(newtext.join(" "));
    };
  return (
    <>
      <div className={`container my-3 text-${props.mode ==="light" ? "dark":"light"}`}> 
        <h3>{props.heading}</h3>
        <div className={`mb-3 `}>
          <textarea
            className={`form-control text-${props.mode ==="light" ? "dark":"light"}`}
            id="exampleFormControlTextarea1"
            rows="6"
            value={text}
            // value="Hello! put some text here"
            //this will not accept handleOnChange function,cause of fixed text and not being a part of useState(text).
            onChange={handleOnChange}
            style={{background: props.mode ==="dark" ? "black":"light"}}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUpClick}>
          Into uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-secondary mx-1" onClick={handlelowClick}>
          Into lowercase
        </button>
        <button disabled={text.length===0}  className="btn btn-success mx-1" onClick={handleclrClick}>
          Clear text
        </button>
        <button disabled={text.length===0} className="btn btn-danger mx-1" onClick={handleemailClick}>
          Email conversion
        </button>
        <button disabled={text.length===0} className="btn btn-info mx-1" onClick={handlecapitalClick}>
          Capitalization
        </button>
        <button disabled={text.length===0} className="btn btn-light mx-1" onClick={ handleextraspaces}>
          Remove extra spaces
        </button>
        <button disabled={text.length===0} className="btn btn-dark mx-1" onClick={handlecopyClick}>
          Copy text
        </button>
        <button disabled={text.length===0} className="btn btn-warning mx-1" onClick={speak} >Speak</button>
      </div >
      <div className={`container my-3 text-${props.mode ==="light" ? "dark":"light"}`} >
        <h2>Your Text Summary</h2>
        <p >
          {countWords(text)} <b>words</b>, {text.length} <b>characters{" "}</b>, {0.008*text.split(" ").filter((word) => word !== "").length.length} <b>Minutes to read</b>
        </p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text:"Enter something in the textbox above to preview it here."} </p>
      </div>
    </> 
  );

}

export default Textform;
