import React, { useState } from "react";

function Practice(){
    const[count,setCount]=useState(1);
    const oneClick =()=>(
        setCount(count+4)
    );

return(
    <>
<p>Hello clicked {count} times</p>
  <button onClick={oneClick}>Click here</button>
 </>
);
}

export default Practice;