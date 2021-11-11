import { counter } from '@fortawesome/fontawesome-svg-core';
import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { ADD_SHOE_DATA } from './redux/action-types/getShoeData';
import { useHistory } from 'react-router-dom';
import { ADD_TO_CART } from './redux/action-types/getShoeData';
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>


export default function Home() {
    const dispatch = useDispatch();
    const shoeProduct = useSelector((state)=>state)
    console.log(shoeProduct.ShoeData.shoeData[3])
    const history = useHistory();
useEffect(() =>{

    const getShoeData = async () => {
        const getShoes = await fetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=12", {
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
                    <h1 className ="homePageBoldText">JOIN FLX Rewards</h1>
                    <p className="homePagePText">Get free shipping, rewards, points and more with every purchase</p>

                    <button onClick={() =>history.push('/Login')} type="button" class="btn btn-dark">Join Now For Free </button>
                    

                </div>
                

                </section>
                </div>
                <section>
                    <div className="salesContainer">
                    <div className="second-Section">
                    <img className="saleImage" src="https://images.footlocker.com/content/dam/final/footlocker/site/homepage/october/211025-FL-homepage-halloween-1up.jpg" alt="" />
                    <img className="saleImage2" src="https://images.footlocker.com/content/dam/final/footlocker/site/homepage/october/211025-FL-homepage-halloween-m-1up.jpg" alt="" />
                    <div className="saleImageTextDiv">
                    <h1 className="homePageBoldText">Get 20% off $99</h1>
                    <p className="homePagePText">Use code: SPOOKY20 and also recieve free shipping!</p>
                    <p>Online only. Exclusions apply.</p>
  
                    <button onClick={() =>history.push('/Product')} type="button" class="btn btn-dark">Shop Now</button>
                    </div>

                </div>
                </div>
                </section>
                

                <section className="newArrivals">
                      <h1>New Arrivals</h1>
                    
                    <div className="newArrivalsDiv">
                    
                    
                      <div>
                         <li>
    
                         <img className="homePageShoeImages"src={shoeProduct.ShoeData.shoeData[0].media.thumbUrl} alt="" />

                        <h5 className="newArrivalsBoldText">{shoeProduct.ShoeData.shoeData[0].title}</h5>
                        <button type="button" class="btn btn-dark"   onClick={()=>dispatch({type:ADD_TO_CART, payload:{
                            id:shoeProduct.ShoeData.shoeData[0].id,
                            image:shoeProduct.ShoeData.shoeData[0].media.thumbUrl,
                            brand:shoeProduct.ShoeData.shoeData[0].brand,
                            name:shoeProduct.ShoeData.shoeData[0].title,
                            price:shoeProduct.ShoeData.shoeData[0].price} })}>Add To Cart</button>
                    </li> 
                    </div>
                    <div>
                     <li>
                        <img className="homePageShoeImages" src={shoeProduct.ShoeData.shoeData[1].media.thumbUrl} alt="" />

                        <h5 className="newArrivalsBoldText">{shoeProduct.ShoeData.shoeData[1].title}</h5>

                        <button type="button" class="btn btn-dark" onClick={()=>dispatch({type:ADD_TO_CART, payload:{
                            id:shoeProduct.ShoeData.shoeData[1].id,
                            image:shoeProduct.ShoeData.shoeData[1].media.thumbUrl,
                            brand:shoeProduct.ShoeData.shoeData[1].brand,
                            name:shoeProduct.ShoeData.shoeData[1].title,
                            price:shoeProduct.ShoeData.shoeData[1].price} })}>Add To Cart</button>
                    </li>
                    </div>
                    <div>
                    <li>
                        <img className="homePageShoeImages" src={shoeProduct.ShoeData.shoeData[2].media.thumbUrl} alt="" />

                        <h5 className="newArrivalsBoldText">{shoeProduct.ShoeData.shoeData[5].title}</h5>
                        <button   type="button" class="btn btn-dark" onClick={()=>dispatch({type:ADD_TO_CART, payload:{
                            id:shoeProduct.ShoeData.shoeData[5].id,
                            image:shoeProduct.ShoeData.shoeData[5].media.thumbUrl,
                            brand:shoeProduct.ShoeData.shoeData[5].brand,
                            name:shoeProduct.ShoeData.shoeData[5].title,
                            price:shoeProduct.ShoeData.shoeData[5].price} })}>Add To Cart</button>
                    </li>
                    </div>
                    <div>
                    <li>
                        <img className="homePageShoeImages"src={shoeProduct.ShoeData.shoeData[4].media.thumbUrl} alt="" />

                        <h5 className="newArrivalsBoldText">{shoeProduct.ShoeData.shoeData[4].title}</h5>
                        <button type="button" class="btn btn-dark" onClick={()=>dispatch({type:ADD_TO_CART, payload:{
                            id:shoeProduct.ShoeData.shoeData[4].id,
                            image:shoeProduct.ShoeData.shoeData[4].media.thumbUrl,
                            brand:shoeProduct.ShoeData.shoeData[4].brand,
                            name:shoeProduct.ShoeData.shoeData[4].title,
                            price:shoeProduct.ShoeData.shoeData[4].price} })}>Add To Cart</button>
                    </li>   
                    </div>
                     
                   
                     </div> 
                   
                  

                </section>

                      
          
        </div>
    )
}
