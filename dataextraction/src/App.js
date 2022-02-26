import React from "react";
import './App.css';
import Opinion from "./images/opinion.png"
import Aircraft from "./images/aircraft.jpg"
import Astronomy from "./images/astronomy.jpeg"
import Business from "./images/business.jpg"
import Chemist from "./images/chemist.jpg"
import Divers from "./images/divers.jpg"
import Engineers from "./images/engineers.jpg"
import Farmers from "./images/farmers.jpg"
import Physicist from "./images/physicist.jpg"
import Programs from "./images/programs.png"



function App (){

  const Schema = [
    {
      image: <img className="op-img" src={Opinion}/>,
      name: "David",      
      age: 22,
      sex: "Male",
      class: "Social"
    },
    {
      image: <img className="op-img" src={Aircraft}/>,
      name: "Isaac",      
      age: 25,
      sex: "Male",
      class: "Space"
    },
    {
      image: <img className="op-img" src={Business}/>,
      name: "Dangote",      
      age: 30,
      sex: "Male",
      class: "Business"
    },
    {
      image: <img className="op-img" src={Chemist}/>,
      name: "Juliet",      
      age: 21,
      sex: "Female",
      class: "Chemist"
    },
    {
      image: <img className="op-img" src={Divers}/>,
      name: "Vivian",      
      age: 19,
      sex: "Female",
      class: "Marine"
    },
    {
      image: <img className="op-img" src={Engineers}/>,
      name: "Newton",      
      age: 50,
      sex: "Male",
      class: "Engineering"
    },
    {
      image: <img className="op-img" src={Farmers}/>,
      name: "Rebecca",      
      age: 25,
      sex: "Female",
      class: "Agriculture"
    },
    {
      image: <img className="op-img" src={Physicist}/>,
      name: "Einstein",      
      age: 60,
      sex: "Male",
      class: "Physicist"
    },
    {
      image: <img className="op-img" src={Programs}/>,
      name: "Ritchie",      
      age: 70,
      sex: "Male",
      class: "Programming"
    },
  ]


  return(
    <div className="CardHolder">
      {Schema.map((props)=>(
        <div className="Card">
          <div>{props.image}</div>
          <div className="div">Name: {props.name}</div>
          <div className="div">Age: {props.age}</div>
          <div className="div">Sex: {props.sex}</div>
          <div className="div">Class: {props.class}</div>
        </div>
      ))}
    </div>
  )
}

export default App

