import { useState } from "react";

const Buttongroup = ({buttons, handleActiveTab}) => {
    const [isClicked, setIsClicked] = useState(0)
    return (    
        <>
           
             {buttons.map((buttonLabel, index) => (
                 <button
                 key={ index }
                    name={ buttonLabel }
                 onClick={ () => {
                   setIsClicked(index)
                   handleActiveTab(index)
                 } }
                    className={index === isClicked ?"active":null}
                 >
          {buttonLabel}
        </button>
      ))} 
        </>
        
    );
}


export default Buttongroup;
