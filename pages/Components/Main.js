import {useState} from "react"

export default function Main(){

  const [styleBtn,setstyleBtn]=useState({
    display:"block",
    backgroundColor:"red"
  })
   function clickHandle() {
     if(styleBtn.backgroundColor=="red"){
       setstyleBtn({
         display:styleBtn.display,
         backgroundColor:"blue"
       })}else{
        setstyleBtn({
          backgroundColor:"red"
        })
       }
   }
   return(
     
     <button style={styleBtn} onClick={clickHandle}>
       clickMe
       </button>
   )
   
}