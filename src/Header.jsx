import logo from "./images/react.png";

function MainHeader() {
    return (
        <div>
            <img src = {logo}></img>
            React Course - TaskoPedia
        </div>
    );
  }
  
  const subHeaderStyle = {
    color: "blueviolet",
    backgroundColor: "lightgray",
  };
  
  function SubHeader() {
    return <p style={subHeaderStyle}>This will be an exciting course.</p>;
  }
  
  export default function Header() {
    return (
      <div>
        <MainHeader></MainHeader>
        <SubHeader></SubHeader>
      </div>
    );
  }