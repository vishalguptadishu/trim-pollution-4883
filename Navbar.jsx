export default function Navbar(){

    return <div>
    <div style={{display: "flex",justifycontent: "center",textalign: "center" , padding:"5px",background:"#1e1e1e",height:"46px" }} >
        <div className="logo" >
            <img style={{height:"54px", width :"230px", marginLeft: "-32px" ,marginTop:"-3px" ,padding:"0px" }} src="https://s1.q4cdn.com/172833328/files/design/client-logo.svg" alt="logo" />
        </div>
        <div style={{background:"#ffcc00",display: "flex",justifycontent: "center",textalign: "center", width :"240px",height:"25px", padding:"10px", marginLeft: "-22px"   }} >
                <img style={{height:"22px", width :"22px",marginLeft:"8px"}} src="https://i.ibb.co/GMNk2R9/Bold-Icon-Car-Yellow.jpg" alt="car_logo" />
                <p style={{marginLeft:"30px" , marginTop:"2px"}} >Add a Vehicle</p>
            </div>
       <div style={{display: "flex",justifycontent: "center",textalign: "center", padding:"5px"}}>
        <input style={{ width :"570px",height:"42px" ,border:"0px", marginTop:"-4px" ,paddingLeft:"15px" }} type="text" placeholder="What part do you need today?" />
        <img style={{height:"45px", width :"40px",paddingTop:"0px", marginTop:"-4px" }} src="https://play-lh.googleusercontent.com/GNBcszVkJtaZb_uUWPZRJnGjdjwU-cEtnsxHMxvO7FZcLe6z3g0SdFbI7fwf4BIi=w240-h480-rw" alt="search_logo" />
       </div>
       <div style={{background:"#4b4b4b",display: "flex",justifycontent: "center",textalign: "center", width :"150px",height:"25px", padding:"10px" }}  >
        <img  style={{height:"45px", width :"25px", marginTop:"-10px" }} src="https://i.ibb.co/4ft4zRV/Screenshot-721.png" alt="Location_logo" />
        <p style={{color:"white" , fontSize:"13px" , marginTop:"4px", marginLeft:"10px" }} >Choose a Store</p>
       </div>
       <div  style={{background:"#4b4b4b",display: "flex",justifycontent: "center",textalign: "center", width :"100px",height:"25px", padding:"10px" , marginLeft:"5px" }} >
        <img  style={{height:"45px", width :"20px", marginTop:"-10px" }} src="https://i.ibb.co/Rc8Dmd0/Screenshot-722-1.png" alt="Location_logo" />
        <p style={{color:"white" , fontSize:"13px" , marginTop:"4px" , marginLeft:"15px" }} >Account</p>
       </div>
       <div  style={{background:"#4b4b4b",display: "flex",justifycontent: "center",textalign: "center", width :"60px",height:"25px", padding:"10px" , marginLeft:"5px" }} >
        <img style={{height:"45px", width :"25px", marginTop:"-10px" }}src="https://i.ibb.co/ynMrSLt/Screenshot-722.png" alt="Location_logo" />
        <p style={{color:"white", marginTop:"-10px" , fontSize:"13px" , marginTop:"5px" }} >0</p>
       </div>
    </div>
    <div style={{display: "flex",justifycontent: "center",textalign: "center" , fontSize:"14px"}} >
        <div style={{display: "flex",justifycontent: "center",textalign: "center", width :"120px",height:"25px", padding:"5px", marginLeft: "-22px"  }} >
            <img  style={{height:"30px", width :"30px",marginLeft:"18px"}} src="https://icon-library.com/images/svg-hamburger-icon/svg-hamburger-icon-11.jpg" alt="" />
            <p style={{marginTop:"1px"}} >Shop All</p>
           <hr style={{height:"30px" }} ></hr>
        </div>
        <div style={{width :"120px",height:"25px"}}>
            <p>Replacement Parts</p>
            
        </div>
        <div style={{width :"120px",height:"25px"}}>
            <p>Performance Parts</p>
        </div>
        <div style={{width :"120px",height:"25px"}}>
            <p>Accessories</p>
        </div>
        <div style={{width :"120px",height:"25px"}}>
            <p>Oil & Fluids</p>
        </div>
        <div style={{width :"120px",height:"25px"}}>
            <p>Special Offers</p>
        </div>
        <div style={{width :"120px",height:"25px"}}>
            <p>Order Lookup</p>
        </div>

    </div>
    </div>

}