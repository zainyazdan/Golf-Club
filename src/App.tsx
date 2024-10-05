import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import { FaBeer } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaSquareFacebook } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";


function App() {

  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorBlurRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveDivWithMouse = (event: MouseEvent) => {
      // console.log("moveDivWithMouse()");
      
      if (cursorRef.current)  {
      // if (cursorRef.current || cursorBlurRef.current)  {
        
        cursorRef.current.style.left = `${event.clientX - 10}px`;
        cursorRef.current.style.top = `${event.clientY - 10}px`;

        // cursorBlurRef.current.style.left = `${event.clientX - 200}px`;
        // cursorBlurRef.current.style.top = `${event.clientY - 200}px`;
      }
    };

    // Add event listener for mousemove
    // document.addEventListener('mousemove', moveDivWithMouse);


    const h1Element: any = document.querySelector('#page4 h1');
    const elemElements: any = document.querySelectorAll('.elem');

    elemElements.forEach((elem: any) => {
      elem.addEventListener('mouseenter', () => {
        h1Element.style.webkitTextStroke = '2px #9FCE20';

        if(cursorRef.current)
          cursorRef.current.style.backgroundColor = "red";

      });
      elem.addEventListener('mouseleave', () => {
        h1Element.style.webkitTextStroke = '2px white';
      });

    });






    // Cleanup the event listener when component unmounts
    return () => {
      document.removeEventListener('mousemove', moveDivWithMouse);
    };
  }, []);  // Empty dependency array ensures this runs once on mount and cleanup on unmount

  // const cursor = document.getElementById("cursor") as HTMLElement | null;
  // const cursorBlur = document.getElementById("cursor-blur") as HTMLElement | null;

  // document.addEventListener("mousemove", (e: MouseEvent) => {
  //   if (cursor && cursorBlur) {
  //     // const { clientX: x, clientY: y } = e;
  
  //     // cursor.style.left = `${x - 10}px`;
  //     // cursor.style.top = `${y - 10}px`;
  
  //     // cursorBlur.style.left = `${x - 200}px`;
  //     // cursorBlur.style.top = `${y - 200}px`;
  //   }
  // });
  

  const images = [
    'https://via.placeholder.com/200x300/FF6347/FFFFFF?text=Image1',
    'https://via.placeholder.com/200x300/4682B4/FFFFFF?text=Image2',
    'https://via.placeholder.com/200x300/FF4500/FFFFFF?text=Image3',
    'https://via.placeholder.com/200x300/32CD32/FFFFFF?text=Image4',
    'https://via.placeholder.com/200x300/FFD700/FFFFFF?text=Image5',
  ];
  const scrollingImages = [...images, ...images, ...images];
  
  return (
    <>
      {/* <div ref={cursorRef} id="cursor"></div> */}
      {/* <div ref={cursorBlurRef} id="cursor-blur"></div> */}

      <Navbar />
      <div id="main">
        <div id="page1">
          <a href="#page2">
            <div id="arrow">
              <FaArrowDown />
            </div>
          </a>
          <h1>Eat. Drink. Play.</h1>
          <h4>Welcome to Sidcup Family Golf!</h4>
          <p>Sidcup Family Golf is a Toptracer driving range and crazy golf venue in Sidcup, South East London. Passionate about technology, player development and making golf fun and accessible to everyone.</p>
        </div>
        <div id="page2">
          {/* <marquee behavior="" direction="">
            optracer Range
            Golf Lessons
            Adventure Golf
            Café
            Events
          </marquee> */}


          <div id="scroller">
            <div id="scroller-in">
              <h4>Toptracer Range</h4>
              <h4>Golf Lessons</h4>
              <h4>Adventure Golf</h4>
              <h4>Café</h4>
              <h4>Events</h4>
            </div>
            <div id="scroller-in">
              <h4>Toptracer Range</h4>
              <h4>Golf Lessons</h4>
              <h4>Adventure Golf</h4>
              <h4>Café</h4>
              <h4>Events</h4>
            </div>
          </div>


          <div id="about-us">
            <img src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-1-300x200.jpg?strip=all&lossy=1&sharp=1&ssl=1" alt="" />
            <div id="about-us-section">
              <h3>About Us</h3>
              <p>Home to a 46-bay, multi-tier, floodlit driving range, powered by Toptracer Range technology. Complimented by a practice green and bunker, coffee shop and American Golf Store. There truly is something for everyone as we also boast two outdoor 18-hole dinosaur themed crazy golf courses. Please note: we are a cashless venue. The range closes at 10pm with last balls at 9pm.</p>
            </div>
            <img src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-2-300x200.jpg?strip=all&lossy=1&sharp=1&ssl=1" alt="" />
          </div>          
          


          <div id="cards-container">
            <div className="card" id='card1'>
              <div className="overlay">
                <h4>TopTracer Range</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, laboriosam!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, laboriosam!</p>
              </div>
            </div>
            <div className="card" id='card2'>
              <div className="overlay">
                  <h4>Adventure Golf</h4>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, laboriosam!</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, laboriosam!</p>
                </div>
              </div>
            <div className="card" id='card3'>
            <div className="overlay">
                <h4>Golf Lessons</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, laboriosam!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, laboriosam!</p>
              </div>
            </div>
          </div>



          <div id="green-div">
            <img src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg" alt="" />
            <h4>Sign up for Sidcup News and Special Offers Straight to Your Inbox</h4>
            <img src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg" alt="" />
          </div>



          <div id="feature">
            <div id="feature-left-box">
              {/* <img src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-menu-e1702553754869-734x1024.jpg?strip=all&lossy=1&sharp=1&ssl=1" alt="" /> */}
              <img src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/hero-5-1002x1024.jpg?strip=all&lossy=1&sharp=1&ssl=1" alt="" />
            </div>
            <div id="feature-right-box">
              <h1>Food And Drink</h1>
              <p>Whether you’re getting ready to play, just finishing your practice session or feeling peckish on the range, we have a variety of food and drink options bought directly to your table or bay.</p>
              <p>We make sure that we cater for everyone, offering a range of vegan and gluten free options.</p>
              <button>coffee shop</button>
            </div>
          </div>     

          <div id="posts-container">
            <div id="posts">
              {scrollingImages.map((image: string, index: number) => (
                <img key={index} src={`./images/intsa-${(index)%10}.jpg`} alt={`img-${index}`} />
              ))}
            </div>
            <div id="follow-us-in-insta">
              <div>
                <IoLogoInstagram />
                <h2>Follow us on Instagram</h2>
              </div>
            </div>
          </div>




        </div>
        

        <div id="page3">
          <img id='colon1' src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg" alt="" />
          <h3>Absolutely loved the experience! The staff looked after me ensured I was enjoying the range and gave me helpful tips to get the best out of my game. Digital screens to see my progress. I’ll be back 😁 🏌🏽‍♀️</h3>
          <img id='colon2' src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg" alt="" />
        </div>

        <div id="page4">
          <h1>WHAT ARE YOU WAITING FOR?</h1>
          <div className="elem">
            <h2>TopTracer Range</h2>
            <img src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-toptracer-1024x683.jpg?strip=all&lossy=1&sharp=1&ssl=1" alt="" />
          </div>
          <div className="elem">
            <h2>Golf Lessons</h2>
            <img src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-lessons-1024x683.jpg?strip=all&lossy=1&sharp=1&ssl=1" alt="" />
          </div>
          <div className="elem">
            <h2>Adventure Golf</h2>
            <img src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-ag-1024x682.jpg?strip=all&lossy=1&sharp=1&ssl=1s" alt="" />
          </div>
        </div>

        <div id="footer">
          <div id="footer-row-1">
            <img id='footer-dots' src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-footer.svg" alt="" />
            
              <div id='footer-box-1'>
                <img src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg" alt="" />
                <div>
                  <FaFacebookSquare className='footer-icon' />
                  <FaSquareInstagram className='footer-icon' />
                </div>
              </div>

            <div id='footer-right-box'>
              <div id="footer-box-2">
                <h2>Toptracer Range</h2>
                <h2>Crazy Golf</h2>
                <h2>Café</h2>          
              </div>
              <div id="footer-box-3">
                <h2>Events</h2>
                <h2>Golf Lessons</h2>
                <h2>Contact Us</h2>
              </div>
              <div id="footer-box-4">
                <p>A20, Sidcup Bypass</p>
                <p>Chislehurst</p>
                <p>Kent</p>
                <p>BR7 6RP</p>
                <p>Tel: 0008 000 0000</p>
                <h3>Get Directions</h3>
              </div>
            </div>
          </div>

          <div id='copyright'>
            <p>Copyright © Zain Yazdan 2024. All rights reserved.</p>
            |<h3>Privacy Policy</h3>
            |<h3>Terms And Conditions</h3>
            |<h3>Gender Pay Gap</h3>
        </div>
        
        </div>

        {/* <div id="test">
          <div id="test2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam repudiandae, tenetur ducimus facilis reprehenderit molestiae ullam, quibusdam quos ipsum assumenda ut, architecto amet mollitia! Sapiente, obcaecati neque quasi voluptatem molestias omnis similique necessitatibus atque illum nulla possimus consectetur. Saepe, maiores.
          </div>
        </div> */}
        
        {/* <div className="scrolling-gallery">
          <div className="scrolling-track">
            {scrollingImages.map((src, index) => (
              <div key={index} className="scrolling-item">
                <img src={src} alt={`img-${index}`} />
              </div>
            ))}
          </div>
        </div> */}

      </div>
    </>
  )
}

export default App
