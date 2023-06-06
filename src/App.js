import "./App.css";
// Tutorial - 4.
// let name = "Akshita";
// const element = <h1>hye,dude!</h1>
// const element1 = "hye,dude!"

// Tutorial - 5.
// nothing here

// Tutorial - 6,7,8.
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Tutorial - 10.
// import About from "./component/About";
import { useState } from "react";
// import Blog from "./component/Blog";
import Alert from "./component/Alert";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("darkmode has been enabled", "success");
      // document.title = "Textutils-darkmode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "light";
      showAlert("lightmode has been enabled", "success");
      // document.title = "Textutils-lightmode";
    }
  };
  const [redmode, setRedMode] = useState("light");
  const toggleRedMode = () => {
    if (mode === "light") {
      setRedMode("red");
      document.body.style.backgroundColor = "red";
      showAlert("redmode has been enabled", "success");
    } else {
      setRedMode("light");
      document.body.style.backgroundColor = "light";
      showAlert("lightmode has been enabled", "success");
    }
  };
  return (
    // Tutorial - 4.
    // <>
    // <nav>
    //   <li>home</li>
    //   <li>about</li>
    //   <li>contact</li>
    // </nav>
    // <img src="https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000" style={{height:"100px",width:"100px"}} alt="" />
    // <h1>hello,{name}</h1>
    // {element}
    // <h1>{element}</h1>
    // {/* mean this "h1" plays the roll,above declaration is further "h1 ed" */}
    // <h2>{element}</h2>
    // {/* mean this "h2" plays the roll,above declaration is further "h2 ed" */}
    // <h3>{element}</h3>
    // {/* mean this "h3" plays the roll,above declaration is further "h3 ed" */}
    // <p>{element}</p>
    //   {/* mean this "p" plays the roll,above declaration is further "p ed" */}
    // <p>{element1}</p>
    // <div classNameName="App">
    // <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam consequuntur iusto, quibusdam accusantium, saepe voluptatibus recusandae sapiente aut minima doloribus atque commodi. Neque in dolor repudiandae tempora vero cum quam!</p>
    // </div>
    // </>

    // Tutorial - 5,6.
    <>
      {/* // <Router> */}
        <Navbar title="Text-Gem" mode={mode} toggleMode={toggleMode} redmode={redmode} toggleRedMode={toggleRedMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/" element={<Textform heading="Textarea" mode={mode} showAlert={showAlert}/> }></Route> */}
            <Textform heading="Textarea" mode={mode} showAlert={showAlert}/> 
            {/* <Route exact path="/about" element={<About mode={mode} />}></Route> */}
          {/* </Routes> */}
        </div>
      {/* // </Router> */}
        
    </>
  );
}
 
export default App;
