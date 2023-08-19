import { useContext } from "react";
import { testContext } from "./testContext";

const Item=(props)=>{
  const context=useContext(testContext)


    return(
      
        <div className="number">
          {props.children}  
        </div>
    )
}
export default Item;