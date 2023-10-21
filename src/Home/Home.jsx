import React from 'react';
import './Home.css';
import heroimage from './heroimage.png';
import FoodContainer from '../components/FoodContainer';
import SearchForm from '../components/SearchForm/SearchForm';
import { useMyContext } from '../context/FoodContext';
import { getFromLocalStorage, saveToLocalStorage } from '../services/utils';
import Footer from '../components/Footer/Footer';
import SecondFooter from '../components/Footer/SecondFooter';

function Home() {
  const { foodData, setFoodData } = useMyContext();

  const deleteRecipe = (name) => {
    const update = getFromLocalStorage('foodData').filter(
      (food) => food.name !== name
    );

    saveToLocalStorage('foodData', update);
    setFoodData([...update]);
  };

  return (
    <div>
      <div className="landing">
        <div className="navbar">


          <nav className="nav">
            <ul className="nav-elements">
              <li className="nav-link"><a href="/">Home</a></li>
              <li className="nav-link"><a href="/menu">Menu</a></li>
              <li className="nav-link"><a href="/services">Services</a></li>
              <li className="nav-link"><a href="/about">About Us</a></li>
            </ul>
          </nav>

          <div className="icons">
            <i className="fa-brands fa-twitter" />
            <i className="fa-brands fa-square-instagram" />
            <i className="fa-brands fa-facebook" />
            <i className="fa-brands fa-tiktok" />
          </div>
        </div>
        <div className="landing-page-elements">
          <div className="left-side-hero">
            <h1 className="hero">
              Cook anything and <br /> everything with <br /> our
              <span className="recipe"> recipe </span> recipe service
            </h1>
            <p className="tagline">Tired of waiting for your food? Cook it </p>
            <button className="get-start" type="button">
              Get Started
            </button>
          </div>
          <div className="hero-image">
            <img className="heroimage" src={heroimage} alt="pic" />
          </div>
        </div>
      </div>
      <SearchForm />
      <div className="background">
        <div className="background-overlay" />

        <FoodContainer displayData={foodData} deleteRecipe={deleteRecipe} />

        <p className="begin-your-journey">
          Begin your journey to eating healthy{' '}
        </p>
      </div>
      <div className="reviews">
        <h2>What our trainees say about us</h2>
        <img
          src="https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="cook"
          className="cook"
        />
        <img
          src="https://media.istockphoto.com/id/510995759/photo/cute-female-baker-holding-a-baking-tray.jpg?s=612x612&w=0&k=20&c=Lfk0vOuzwj03LN19iRMTvHjLnIwMz6T5v4kwdDf1jNg="
          alt="cook"
          className="cook"
        />
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="cook"
          className="cook-smiling"
        />
        <img
          src="https://i.pinimg.com/originals/1a/63/cd/1a63cd5b2c2ef316fd49e6980cc54dcb.jpg"
          alt="cook"
          className="cook"
        />
        <img
          src="https://media.istockphoto.com/id/1394055791/photo/portrait-of-confident-black-female-chef-at-restaurant-kitchen-looking-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=2IlSPfIQtxrffNhikvF06C4KgqGnuyvV5tD0GgfR9RE="
          alt="cook"
          className="cook"
        />
      </div>
      <Footer />
      <SecondFooter />
    </div>
  );
}

export default Home;
