import React ,{ useState,useEffect}from "react";

// const ArrowFunction = params =>{
//   return (
//     <div>
//       <h1> 
//         i am arrow function
//       </h1>
//     </div>
//   )
// }

//use {}in props if you are sending a single props but for sending multiple props use the normal paranthesis or you can use any keyword for example(props or myprops or any word of your choice)

function CompA(allprops){
useEffect(()=>{
console.log("compa use effect");
  },[allprops.myProp1])//can also use props as a dependency
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
  const [myotherValue,setotherValue] = useState(100);

    //[valuestate contains array two elements 1 is the state value and 2nd element is the elements through which we can change the state,mutatestate]
  //different methods of accesing the elements of the array
    //const valueState = useState(10);
  // const value = valueState[0];
  // const setValue= valueState[1]
  // console.log(valueState)
  // console.log(valueState[0])
  //setvalue can be also used directly with the event handling 
 useEffect(()=>{
   //console.log("use effect called")
 },[myotherValue]) //the array in use effect function shows the dependency on changing which the function will be called for example: here is "myValue"
//if the array is empty [] then the use effect function is not depending on anything so it will be called just once after reloading the page
  return(
    <>
      current value : <h1> { myValue } </h1>
      <button onClick= {() => setValue(myValue+1)}>+</button>
      <button onClick={()=>setValue(myValue-1)}>-</button>
      <hr></hr>
      current value : <h1> { myotherValue } </h1>
      <button onClick= {() => setotherValue(myotherValue+1)}>+</button>
      <button onClick={()=>setotherValue(myotherValue-1)}>-</button>
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

