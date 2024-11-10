import Image from "next/image";
import "../style/Hero.css";



export default function Hero(){
    return(
        <div className="hero-container">
           <div className="hero-box-container">
            <div>
              <Image src={"/images/food-image.jpg"}
                width={200}
                height={200}
                alt="Food Pic" 
                className="hero-image"
                />
            </div>
            <div className="hero-right-div">
                <h1 className="title-hero"> YUM YUM Resturant
                    <br />
                    Good food choices are good investments
                    </h1>
                    <p className="description">
                    Discover the art of fine dining with our expertly crafted dishes, made from the freshest ingredients. Experience a culinary journey like no other.   
                      </p>
                   
            </div>
           </div>
           
        </div>
    )
}



