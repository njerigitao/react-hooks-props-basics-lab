import React from "react";

function Links({github,linkedin}){
    return (
        <div>
        <h3>"Links"</h3>
        <ul>
   <li> <a href={github}>Github</a></li>
      <li> <a href={linkedin}>Linkedin</a> </li>
        </ul>
    </div>
        
    

    )
}
export default Links