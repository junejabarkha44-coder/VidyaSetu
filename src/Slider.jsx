import './header.css';
import { useState } from "react";
// import optimize from "./assets/Optimize.png";
// import opt from "./assets/Opt.png";
import future from "./assets/Future.png";
import New from "./assets/New.png";
import Newd from "./assets/Newd.jpg";
function Slider()
{
    const images=[Newd,New,future]
    const [index,setIndex]=useState(0);
    return(
        <div className="slider">
            <img src={images[index]  } />
            <button onClick={()=>setIndex(index === 0 ? images.length - 1 : index - 1)}>   ❮  </button>
            <button onClick={() =>
        setIndex((index + 1) % images.length)
      }>
        ❯
      </button>
        </div>
    )
}
export default Slider;