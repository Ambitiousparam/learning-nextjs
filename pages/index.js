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

function CompA(allprops){
  return(
    <>
      <p>hello Comp A</p>
      <div>My prop 1: {allprops.myProp1}</div>
      <div>My prop 2: {allprops.myProp2}</div>
      <div>My prop 3: {allprops.myProp3.toString()}</div>
      <div>My prop 4: {<allprops.myProp4 />}</div>
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
    <CompA 
     myProp1 = {myValue}
     myProp2 = "can paas any kind of value in a prop it can be a function,string,boolean value,jsx and many more"
     myProp3 = {true}
     myProp4 = {()=> <div> my new jsx</div>}
    />
    </>

  )
}
export default Home;

