export default function Main(){

   const styleBtn={
     display:"block",
     backgroundColor:"red"
   }
   function clickHandle() {
       styleBtn.backgroundColor="blue"
   }
   return(
     
     <button style={styleBtn} onClick={clickHandle}>
       clickMe
       </button>
   )
   
}