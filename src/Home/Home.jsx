import React from 'react';
import './Home.css';
import heroimage from './heroimage.png';
import FoodContainer from '../components/FoodContainer';
import SearchForm from '../components/SearchForm/SearchForm';
import { useMyContext } from '../context/FoodContext';
import { getFromLocalStorage, saveToLocalStorage } from '../services/utils';
import Footer from '../components/Footer/Footer';

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
          <div className="nav-elements">
            <p className="nav-feature">Home</p> <p>Menu</p> <p>Services</p>{' '}
            <p>About us </p>
          </div>
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
          src="https://cdn-ajggd.nitrocdn.com/kMoOFpDlsOVtlYJLrnSRNCQXaUFHZPTY/assets/images/optimized/rev-208c8fc/cdn-cgi/mirage/6f21bf30f97f6f529e3cf5606516e98ef4dc6dc3cdcfa34bec2bdfef4a9590db/1280/https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape.jpeg"
          alt="cook"
          className="cook"
        />
        <img
          src="https://careersmaster.ug/app/uploads/careers/lCgFZg5Hsyo9T5JyKlnozblDrjxGaHdY.jpg"
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
    </div>
  );
}

export default Home;
