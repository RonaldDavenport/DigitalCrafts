import { counter } from '@fortawesome/fontawesome-svg-core';
import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { ADD_SHOE_DATA } from './redux/action-types/getShoeData';
import { useHistory } from 'react-router-dom';


export default function Home() {
    const dispatch = useDispatch();
    const shoeProduct = useSelector((state)=>state)
    console.log(shoeProduct.ShoeData.shoeData[3])
    const history = useHistory();
useEffect(() =>{

    const getShoeData = async () => {
        const getShoes = await fetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=10", {
            "method": "GET",
            "cache": "no-cache",
            "credentials": "same-origin",
            "headers": {
                "Content-Type": "application/json",
                "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
                "x-rapidapi-key": "f437e94f3fmsh41e2499c732e9abp105ee4jsn1d4242d27145"
            }
    })
    const jsonShoeInfo = await getShoes.json()
    console.log(jsonShoeInfo)
    console.log(jsonShoeInfo)
    dispatch({
        type:ADD_SHOE_DATA,
        payload:{...jsonShoeInfo.results}
    })
    // console.log(shoeProduct.ShoeData.shoeData[0])
    
}  
getShoeData();
return ()=>{};
},[dispatch]);




    return (
        <div className="main-container">
            <div className="first-Section">
            <section className="topPicture">
                <img className="flxImage" src="https://images.footlocker.com/content/dam/final/flx/site/homepage/september/210817-flx-nonmember-1up-fl.jpg" alt="" />
                <img className="flxImage2" src="https://images.footlocker.com/content/dam/final/flx/site/homepage/september/210817-flx-nonmember-m-1up-fl.jpg" alt="" />

                <div className="flxImageTextDiv">
                    <h1>Join FLX Rewards</h1>
                    <p>Get free shipping, rewards, points and more with every purchase</p>
                    <button>JOIN FOR FREE</button>

                </div>
                

                </section>
                </div>
                <section>
                    <div className="second-Section">
                    <img className="saleImage" src="https://images.footlocker.com/content/dam/final/footlocker/site/homepage/october/211025-FL-homepage-halloween-1up.jpg" alt="" />
                    <img className="saleImage2" src="https://images.footlocker.com/content/dam/final/footlocker/site/homepage/october/211025-FL-homepage-halloween-m-1up.jpg" alt="" />
                    <div className="saleImageTextDiv">
                    <h1>Get 20% off $99</h1>
                    <p>Use code: SPOOKY20 and also recieve free shipping!</p>
                    <p>Online only. Exclusions apply.</p>
                    <button onClick={() =>history.push('/Product')}>SHOP NOW</button>

                </div>
                </div>
                </section>
                

                <section className="newArrivals">
                      <h1>New Arrivals</h1>
                    
                    <div className="newArrivalsDiv">
                    
                    
                      <div>
                        <li>
    
                         <img className="homePageShoeImages"src={shoeProduct.ShoeData.shoeData[0].media.thumbUrl} alt="" />
                         <h4>{shoeProduct.ShoeData.shoeData[0].brand}</h4>
                        <h5>{shoeProduct.ShoeData.shoeData[0].title}</h5>
                        <p>{shoeProduct.ShoeData.shoeData[0].retailPrice}</p>
                        <button>Add To Cart</button>
                    </li>
                    </div>
                    <div>
                    <li>
                        <img className="homePageShoeImages" src={shoeProduct.ShoeData.shoeData[1].media.thumbUrl} alt="" />
                        <h4>{shoeProduct.ShoeData.shoeData[1].brand}</h4>
                        <h5>{shoeProduct.ShoeData.shoeData[1].title}</h5>
                        <p>{shoeProduct.ShoeData.shoeData[1].retailPrice}</p>
                        <button>Add To Cart</button>
                    </li>
                    </div>
                    <div>
                    <li>
                        <img className="homePageShoeImages" src={shoeProduct.ShoeData.shoeData[2].media.thumbUrl} alt="" />
                        <h4>{shoeProduct.ShoeData.shoeData[5].brand}</h4>
                        <h5>{shoeProduct.ShoeData.shoeData[5].title}</h5>
                        <p>{shoeProduct.ShoeData.shoeData[5].retailPrice}</p>
                        <button>Add To Cart</button>
                    </li>
                    </div>
                    <div>
                    <li>
                        <img className="homePageShoeImages"src={shoeProduct.ShoeData.shoeData[4].media.thumbUrl} alt="" />
                            <h4>{shoeProduct.ShoeData.shoeData[4].brand}</h4>
                        <h5>{shoeProduct.ShoeData.shoeData[4].title}</h5>
                        <p>{shoeProduct.ShoeData.shoeData[4].retailPrice}</p>
                        <button>Add To Cart</button>
                    </li>  
                    </div>
                     
                   
                     </div> 
                   
                  

                </section>

                      
          
        </div>
    )
}
