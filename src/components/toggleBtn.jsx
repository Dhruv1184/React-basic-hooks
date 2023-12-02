import { useContext } from "react";
import { ToggleTheme } from "../App";
import CountLIke from './CountLIke'
import UseEffect from "./UseEffect";

function Toggle(){
  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"black":"grey",
    color:theme?"grey":"black",
    padding:"2rem",
    margin:"2rem"
  }

  return(
    <div style={themeStyle}>
     <UseEffect />
     <CountLIke/>    
    </div>
  )
}

export default Toggle;