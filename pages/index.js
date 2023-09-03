function CompA(){
  return(
   <h1>CompA</h1> 
  )
 }
 
 function CompB(){
  return(
   <h1>CompB</h1> 
  )
 }
function Home() {
  return (
    <div>
     <div> hello world</div>
     <CompB />
     <CompA />
    </div>
    
  )
}

export default Home;