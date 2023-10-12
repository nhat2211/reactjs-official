import { useContext, useState } from "react";

export default function Cart() {
    const [count, setCount] = useState(0);

    return(
       
            <div className="row row-content" style={{marginTop: "65px"}}>
 <div className="col col-sm-12 col-md-12"><h1>{count}</h1>
            </div>

            </div>
           
           
    );

}