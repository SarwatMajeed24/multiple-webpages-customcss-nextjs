import Image from "next/image";
import "../style/About.css";

export default function Hero(){
    return(
        <div className="about-container">
           <div className="about-box-container">
            <div>
              <Image src={"/images/aboutimg.jpeg"}
                width={200}
                height={200}
                alt="Food Pic" 
                className="about-image"
                />
            </div>
            <div className="about-right-div">
                <h1 className="title-about"> YUM TUM Resturant
                    <br />
                    we pride ourselves on making real food form the best ingredients. 
                    </h1>
                    <p className="description">
                    we make everything by hand with tha best possible ingredients.   
                      </p>                                   
            </div>
           </div>
           
        </div>
    )
}