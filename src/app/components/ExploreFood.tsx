import "../style/Explore.css"
import Image from "next/image"

export default function ExploreFood(){
   return(   
       
          <main className="main">
            <div className="service-container">
                <div className="top-div-services">
                    
                    <h2 className="heading-services">Explore Our Food</h2>
                  </div>
                <div className="boxes-container">
                    <div className="box">
                    <Image src={"/images/Rainbow-Vegetable-Sandwich.jpg"}
                         width={200}
                         height={200}
                         alt="Food Pic" 
                         className="Food-image"
                          />
                    <h3 className="icon-heading">Rainbow Vegetable Sandwitch</h3>
                    <span>PKR 900</span>
                    </div>
                  
                    <div className="box">
                    <Image src={"/images/Vegetable-Burger.jpg"}
                         width={200}
                         height={200}
                         alt="Food Pic" 
                         className="Food-image"
                          />
                    <h3 className="icon-heading">Vegetable-Burger</h3>
                    <span>PKR 1000</span>
                    </div>
    
                    <div className="box">
                    <Image src={"/images/Stuffed-French-Toast.png"}
                         width={200}
                         height={200}
                         alt="Food Pic" 
                         className="Food-image"
                          />
                      <h3 className="icon-heading">Stuffed French Toast</h3>
                    <span>PKR 400</span>
                    </div>

                    <div className="box">
                    <Image src={"/images/great-deals.jpeg"}
                         width={200}
                         height={200}
                         alt="Food Pic" 
                         className="Food-image"
                          />
                    <h3 className="icon-heading">Great Deals</h3>
                    <span>PKR 500</span>
                    </div>

                    <div className="box">
                    <Image src={"/images/family-pack.jpeg"}
                         width={200}
                         height={200}
                         alt="Food Pic" 
                         className="Food-image"
                          />
                    <h3 className="icon-heading">Family Pack</h3>
                    <span>PKR 6000</span>
                    </div>

                    <div className="box">
                    <Image src={"/images/yummy desserts.jpeg"}
                         width={200}
                         height={200}
                         alt="Food Pic" 
                         className="Food-image"
                          />
                    <h3 className="icon-heading">Yummy Desserts</h3>
                    <span>PKR 2500</span>
                    </div>
                    
                </div>
    
            </div>
          </main>
        )
    }