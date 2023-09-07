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
  return(
    <>
   <p>hello Comp C</p>
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

  constructor(){
    super();
    this.state={
      myValue : 10
    }
  }
  // state ={
  //   myValue :10
  // }
  changeState(incrementor){
    this.setState({
      myValue:incrementor
    
  })
}
  render(){
    //render function means that it will be re executed everytime it starts or after changing the state
    alert("i am reexecuted")
   return (
    <>
      <h1>hello CompC</h1>
      current value : <h1> { this.state.myValue } </h1>
      <button onClick= {() => this.changeState(this.state.myValue+1)}>+</button>
      <button onClick={()=>this.changeState(this.state.myValue-1)}>-</button>
      </>
      )
  }
}

function Home(){
  const [myValue,setValue] = useState(10);
    //[valuestate contains array two elements 1 is the state value and 2nd element is the elements through which we can change the state,mutatestate]
  //different methods of accesing the elements of the array
    //const valueState = useState(10);
  // const value = valueState[0];
  // const setValue= valueState[1]
  // console.log(valueState)
  // console.log(valueState[0])
  //setvalue can be also used directly with the event handling 
 
  return(
    <>
      current value : <h1> { myValue } </h1>
      <button onClick= {() => setValue(myValue+1)}>+</button>
      <button onClick={()=>setValue(myValue-1)}>-</button>
     <CompC />
    </>
  )
}
export default Home;

