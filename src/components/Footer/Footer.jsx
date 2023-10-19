import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="left-content">
          <div className="our-recipe">
            <h1>
              Our recipe with a spice of <br />
              your <span className="creativity"> CREATIVITY </span>{' '}
            </h1>
          </div>

          <button
            type='button'
            className='book-button'>
            BOOK A COACH
          </button>
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
              <p className='email-address'>boanongjoshua@gmail.com</p>
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
    </div>
  );
}
