import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>Hello World!</div>);

function MainHeader() {
  return <h1 className='heading1'>REACT COURSE</h1>;
}

const subHeaderStyle={
  color:"blueviolet",
  backgroundColor:"lightgray",
};

function SubHeader() {
  return <p style={subHeaderStyle}>This will be an exciting course.</p>;
}

function Header() {
  return (
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  );
}

function MainBody() {

  //var, let 
const whatWeWillLearn = "React JS"

  return (
    <div>
      <p>In this course, we will learn {whatWeWillLearn} by building TaskOPedia!</p>
      <ul>
        <li>basic Foundation</li>
        <li>Functional and class components</li>
      </ul>
    </div>
  );
}


function Footer() {
  return <p style = {{color:"gray", backgroundColor:"black"}}>Happy Coding!</p>;
}
root.render(
  <div>
    <Header />
    <MainBody />
    <Footer />
  </div>
);