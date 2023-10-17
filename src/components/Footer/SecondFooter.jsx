import React from 'react'
import './SecondFooter.css'

export default function SecondFooter() {
    return (
        <div>
            <footer class="foot">
                <div class="footer-container">
                    <div class="footer-column">
                        <h2 class="footer-heading">About</h2>
                        <p class="footer-text">This is a food recipe app that helps you find and cook delicious meals. We have a wide variety of recipes to choose from, so you're sure to find something you'll love.</p>
                    </div>
                    <div class="footer-column">
                        <h2 class="footer-heading">Social Media</h2>
                        <ul class="footer-social-media">
                            <li class="footer-social-media-item">
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a>
                            </li>
                            <li class="footer-social-media-item">
                                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-twitter"></i></a>
                            </li>
                            <li class="footer-social-media-item">
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h2 class="footer-heading">Contact</h2>
                        <p class="footer-text">Email: support@foodrecipeapp.com</p>
                        <p class="footer-text">Phone: +1-555-555-5555</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
