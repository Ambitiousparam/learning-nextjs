import React ,{ useState}from "react";

// const ArrowFunction = params =>{
//   return (
//     <div>
//       <h1>
//         i am arrow function
//       </h1>
//     </div>
//   )
// }

function CompA(){
  //[valuestate contains two elements 1 is the state value and 2nd element is the elements through which we can change the state]
  return(
    <>
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
  const [myValue,setValue] = useState(10);
  const incrementValue=()=>{
    setValue(myValue+1);
    console.log(myValue)
    //[valuestate contains array two elements 1 is the state value and 2nd element is the elements through which we can change the state,mutatestate]
  //different methods of accesing the elements of the array
  // const value = valueState[0];
  // const setValue= valueState[1]
  // console.log(valueState)
  // console.log(valueState[0])
 
  }

  return(
    <>

      current value : <h1> { myValue } </h1>
      <button onClick={incrementValue}>+</button>
      <button>-</button>

     <CompA />
    </>
  )
}

export default Home;

