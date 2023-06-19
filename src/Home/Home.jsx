import React from 'react';
import './Home.css';
import heroimage from './heroimage.png';
import FoodContainer from '../components/FoodContainer';
import RecipeDescription from '../components/RecipeDetails';

function Home() {
  return (
    <div>
      <div className="landing">
        <div className="navbar">
          <div className="nav-elements">
            <p>Home</p> <p>Menu</p> <p>Services</p> <p>About us </p>
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
              <span className="recipe"> recipe </span>service
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
      <div className="search">
        <div className="search__input">
          <input
            type="search"
            className="search"
            placeholder="Search a recipe"
          />
        </div>
      </div>
      <div className="background">
        <div className="background-overlay" />

        <FoodContainer />

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

      <div className="footer">
        <div className="left-content">
          <div className="our-recipe">
            <h1>
              Our recipe with a spice of <br />
              your <span className="creativity"> CREATIVITY </span>{' '}
            </h1>
          </div>
          <div className="book">
            <h3>BOOK A COACH</h3>
          </div>
        </div>
        <hr className="line" />
        <div className="all-last-footers">
          <div className="last-footers">
            <h2> We exist to </h2>
            <p>
              Foster healthy eating lifestyles <br /> amongst people across the
              world{' '}
            </p>
          </div>
          <div className="last-footers">
            <h2>Quick Menu </h2>
            <p>
              Have a quick look at <br /> our menu for the day{' '}
            </p>
          </div>
          <div className="contact">
            <div className="contact__links">
              <i className="fa-sharp fa-solid fa-location-dot" />{' '}
              <p>Long Street Buea </p>
            </div>
            <div className="contact__links">
              <i className="fa-solid fa-envelope" />{' '}
              <p>boanongjoshua@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="icons">
          <i className="fa-brands fa-twitter" />
          <i className="fa-brands fa-instagram" />
          <i className="fa-brands fa-facebook" />
          <i className="fa-brands fa-tiktok" />
        </div>
      </div>

      <RecipeDescription />
    </div>
  );
}

export default Home;
