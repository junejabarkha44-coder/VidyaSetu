import './lerno.css'
import sia from "./assets/sia.jpg";
import gia from "./assets/gia.jpg";
import { useState } from 'react';
import { NavLink } from "react-router"
function Lerno()
{
     const images=[sia,gia]
        const [index,setIndex]=useState(0);
    return(
      <>
        <div className="rengo">
          
            <div class="container">
    <h1>Our students and parents love us </h1>

    <div class="grid">
      <div class="card">
        <div class="icon"><img style={{height:"70px"}} src="https://cdn.pixabay.com/photo/2016/12/18/13/45/download-1915753_1280.png"></img></div>
        <h2>150+ Million</h2>
        <p>downloads</p>
      </div>

      <div class="card">
        <div class="icon"><img style={{height:"70px",width:"90px"}} src="https://png.pngtree.com/png-clipart/20220911/original/pngtree-5-stars-3d-icon-png-image_8540914.png"></img></div>
        <h2>4.7+ Star</h2>
        <p>app rating</p>
      </div>

      <div class="card">
        <div class="icon"><img style={{height:"40px"}} src="https://tse4.mm.bing.net/th/id/OIP.jsBQL04RxeNPuuCRzQlpkAHaHa?pid=Api&P=0&h=180v"></img></div>
        <h2>1701+ Cities</h2>
        <p>worldwide</p>
      </div>

      <div class="card">
        <div class="icon"><img style={{height:"40px"}} src="https://tse2.mm.bing.net/th/id/OIP.ZPAOYl_gf5AMpELWATT9vgHaHY?pid=Api&P=0&h=180"></img></div>
        <h2>71 mins avg.</h2>
        <p>time spent daily</p>
      </div>
    </div>
    </div>
  
    
  
  <div className="sliderio">
           
            <button className='arrow right' onClick={()=>setIndex(index === 0 ? images.length - 1 : index - 1)}>   ❮  </button>
             <img src={images[index]  } />
            <button className="arrow left"  onClick={() =>
        setIndex((index + 1) % images.length)
      }>
        ❯
      </button>
        </div>
        <p style={{textAlign:"center",marginTop:"15px",fontWeight:"revert-layer"}}>TECH PATH ADVISORS is the best learning platform<br /> for stregth the students and enjoy learning with funnalso </p>
       
     
        <div style={{textAlign:"center",marginTop:"40px"}}className='rover'>
           <h2> Trustes by over 1700+companies</h2>
           <div style={{gap:"40px"}}> 
            <img style={{height:"40px",marginRight:"10px"}}src="https://tse3.mm.bing.net/th/id/OIP.BZDN5jtCETHvCmYtgEV8eAHaHa?pid=Api&P=0&h=180"></img>
            <img style={{height:"80px",width:"80px",marginRight:"10px"}} src="https://i.pinimg.com/originals/6c/e1/c9/6ce1c9e2938facc78520bf945097618a.png"></img>
            <img style={{height:"40px",marginRight:"10px"}} src="https://tse2.mm.bing.net/th/id/OIP.HSQ2JxZnMxjx1-yqcL821wHaEc?pid=Api&P=0&h=180"></img>
            <img style={{height:"40px",marginRight:"10px"}} src="https://tse1.mm.bing.net/th/id/OIP.EqkWufEAUaoFkR00bA9-pQHaD8?pid=Api&P=0&h=180"></img>
           </div>
           <div>
            <img style={{height:"70px",width:"80px",marginRight:"10px"}} src="https://tse2.mm.bing.net/th/id/OIP.Kzmc97txR7BNVM03w0IgwwHaHa?pid=Api&P=0&h=180"></img>
            <img style={{height:"70px",width:"80px",marginRight:"10px"}} src="https://tse3.mm.bing.net/th/id/OIP.4Puztd0YaN9ajuJ9zwE6BwHaHa?pid=Api&P=0&h=180"></img>
            <img style={{height:"70px",width:"80px",marginRight:"10px"}} src="https://tse3.mm.bing.net/th/id/OIP.mfDeea6atoSX_5gT5LmOswHaFj?pid=Api&P=0&h=180"></img>
            <img style={{height:"70px",width:"80px",marginRight:"10px"}} src="https://tse1.mm.bing.net/th/id/OIP.o5AJHfc1CgbFikd-frAo3wHaH_?pid=Api&P=0&h=180"></img>
                       </div>
        </div>
          </div>
          <h2 style={{textAlign:"center",marginTop:"40px"}}> Reviews from our childrens</h2>
        <div className="comments-wrap">
          

  <div className="comment-para">
  “Techpath Advisors made learning coding so easy! I used to get confused with JavaScript, but now I can actually build real projects. Highly recommend!”
  </div>

  <div className="comment-para">
   “I joined Techpath Advisors to improve my web development skills, and now I feel confident applying for internships. Best decision ever!”
  </div>

  <div className="comment-para">
   “As a beginner, I was scared of coding, but Techpath Advisors helped me understand things step by step. I’m so happy with my progress!”
  </div>

  <div className="comment-para">
    “Techpath Advisors helped me improve my confidence in tech. I used to be scared to code, but now I enjoy it!”
  </div>

  <div className="comment-para">
    “The e-books and videos are awesome. I learned HTML, CSS, and JavaScript way faster than I expected.”
  </div>

</div>  
        </>
        
    )
};
export default Lerno;