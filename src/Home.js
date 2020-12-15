import React from 'react';
import './Home.css';
import Product from './Product';
import pic from './image/imges.jpg';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src={pic} alt="" />

            <div className="home__row">
                <Product
                    id="12321341"
                    title="Sachin Tendulkar: Playing It my way"
                    price={11.25}
                    rating={4.6}
                    image="https://images-na.ssl-images-amazon.com/images/I/61pkSD52GTL.jpg"
                />
                <Product
                    id="62423881"
                    title="Carry Bird H-Swing Iron Large Swing"
                    price={30}
                    rating={3.9}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Q7jqlRbf9Z5VFPPhveVsrq9l67bUrBDyLNrOGiuV37s6e0Gml5B06zV1Zwg&usqp=CAc"
                />
            </div>

            <div className="home__row">
                <Product
                    id="56102499"
                    title="Woodness Liberty Solid Wood Bunk Bed"
                    price={45.25}
                    rating={4.1}
                    image="https://rukminim1.flixcart.com/image/300/300/jsm3vrk0/bunk-loft-bed/w/b/q/na-rubber-wood-27035-woodness-dark-brown-original-imafe47eukgzsjkr.jpeg?q=70"
                />
                <Product
                    id="11093783"
                    title="Bean Bag with Bean"
                    price={18.85}
                    rating={3.6}
                    image="https://rukminim1.flixcart.com/image/300/300/bean-bag/h/v/b/f8-the-furniture-store-xxxl-original-imae65d3wg7qzpkn.jpeg?q=70"
                />
                <Product
                    id="09563452"
                    title="Smart Watches"
                    price={60.45}
                    rating={4.2}
                    image="https://rukminim1.flixcart.com/image/312/312/kay9bbk0/smartwatch/x/f/h/sport-smart-watch-fitness-tracker-intelligent-bracelet-id-116-original-imafsemgggfpgcqd.jpeg?q=70"
                />
            </div>

            <div className="home__row">
                <Product
                    id="45289171"
                    title=" Apple iPhone 12 Pro"
                    price={150.55}
                    rating={4.8}
                    image="https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/p/f/w/apple-iphone-12-dummyapplefsn-original-imafwg8dqjuq8sug.jpeg?q=70"
                />
                <Product
                    id="83447828"
                    title="Men Wear Jackets"
                    price={15.25}
                    rating={3.4}
                    image="https://rukminim1.flixcart.com/image/452/542/k41mp3k0/jacket/9/2/y/xl-denim-jacket-07-arbia-fanki-original-imafnfpfh45hytbj.jpeg?q=50"
                />
            </div>
        </div>
    );
}

export default Home;
