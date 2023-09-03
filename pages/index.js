import React from "react";
const ArrowFunction = params =>{
  return (
    <div>
      <h1>
        i am arrow function
      </h1>
    </div>
  )
}

function CompA(){
  return(
    <>
   <ArrowFunction/>
   <h1>CompA</h1> 
   <p>hello Comp A</p>
   </>
  )
}
  // return (
  //   // React.createElement("div",null,
  //   //   React.createElement("h1",null,"CompA"),
  //   //   React.createElement("p",null,"CompA")
  //   //not possible to return two elements from a single return
  //   //React.createElement("h1",null,"CompA")
  //   //React.createElement("h1",null,"CompA")
  //   )
  // )

 
//  function CompB(){
//   return(
//     <div>
//    <h1>CompB</h1> 
//    <p>hello CompB</p>
//    </div>
//   )
//  }
 //jsx  - javascript xml
 class CompC extends React.Component {
  render(){
   return (
    <h1>hello CompC</h1>
   )
  }
}

function Home(){
  return(
    <>
     <h1> hello world</h1>
     <CompA />
    </>
  )
}
export default Home;

