import './Gallery.css'
import pic1 from "./image1.jpeg"
import pic2 from "./image2.jpeg"


function Gallery(){
    return(
<div className='gallery' style={{ display: "flex", justifyContent: "space-between" }}>

    <img src={pic1} />
    
    <img src={pic2} />
    

 
</div>
    );
}
export default Gallery;