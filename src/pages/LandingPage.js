import React from 'react';
import '../styles/LandingPage.css'; // Import the CSS file

const LandingPage = () => {
  return (
    <div>
      <div className="scroll1-cover">
        <div className="s1-content">
          <div className="s1-title">
            <h1>Let's Maximo</h1>
          </div>
          <div className="s1-tagline">
            
          </div>
          <div className="get-started">
            <div className="signup">
              <a href="/signup" id="start">Get Started</a>
            </div>
            <div className="s1-login">
              <a href="/login" id="login">Login</a>
              <img src="/Icons/down-arrow.png" id="s1-down-arrow" alt="down-arrow" />
            </div>
          </div>
        </div>
      </div>

      <div className="scroll2" id="scroll">
        <div className="caption">
          <p className="lineup" id="features" style={{ textAlign: 'center' }}>
            Productivity made simple, Accomplishment made easy
          </p>
        </div>
        <span className="s2-bullets">
          <ul className="s2-bullet-list">
            <li className="s2-bullet" id="bullet1">
              <img src="/Icons/feat1.png" alt="spinning wheel" />
            </li>
            <li className="s2-bullet" id="bullet2">
              <img src="/Icons/feat2.png" alt="eisenhower matrix" />
            </li>
            <li className="s2-bullet" id="bullet3">
              <img src="/Icons/feat3.png" alt="pomodoro to-do" />
            </li>
          </ul>
        </span>
      </div>

      <div className="scroll3" id="scroll">
        <div className="caption">
          <p className="lineup" style={{ textAlign: 'center' }}>
            Streamline, organise & succeed
          </p>
        </div>
        <div className="s3-modes">
          <div className="s3-rectangles">
            <div className="s3-rect-container">
              <img src="/Icons/rect1.png" alt="Rectangle 1" />
              <img src="/Icons/rect2.png" alt="Rectangle 2" />
              <img src="/Icons/rect3.png" alt="Rectangle 3" />
              <img src="/Icons/rect4.png" alt="Rectangle 4" />
              <img src="/Icons/rect5.png" alt="Rectangle 5" />
              <img src="/Icons/rect6.png" alt="Rectangle 6" />
            </div>
          </div>
        </div>
        <div className="caption">
          <p className="linedown" style={{ textAlign: 'center' }}>
            What's your way...
          </p>
        </div>
      </div>

      <div className="scroll4" id="scroll">
        <div className="s4-conclude">
          <div className="caption">
            <p style={{ textAlign: 'center' }}>Beat procrastination</p>
            <p style={{ textAlign: 'center' }}>Reach new heights</p>
            <p style={{ textAlign: 'center' }}>With Maximo</p>
          </div>
          <div className="signup">
            <a href="/signup" id="start">Get Started</a>
          </div>
        </div>
        {/* <img src="/Icons/achievo_no_bg_logo.png" alt="Maximo" id="s4-image" /> */}
      </div>

      <footer className="footer" id="scroll">
        <div className="line">
          <img src="/Icons/Line.png" alt="line" />
        </div>
        <div className="footlinks">
          <ul className="f-container">
            <li className="f-options">
              <a href="#features">Features</a>
            </li>
            <li className="f-options">
              <a href="/about-us">About Us</a>
            </li>
            <li className="f-options">
              <a href="/feedback">Feedback</a>
            </li>
          </ul>
        </div>
        <div className="f-social">
          <ul className="f-sites">
            <li className="f-icons">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src="/Icons/icon-insta.png" alt="Instagram" />
              </a>
            </li>
            <li className="f-icons">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <img src="/Icons/icon-fb.png" alt="Facebook" />
              </a>
            </li>
            <li className="f-icons">
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <img src="/Icons/icon-yt.png" alt="Youtube" />
              </a>
            </li>
            <li className="f-icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <img src="/Icons/icon-linkedin.png" alt="LinkedIn" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footlinks">
          <ul className="f-container">
            <li className="options">
              <a href="/security">Security</a>
            </li>
            <li className="f-options">
              <a href="/terms">Terms</a>
            </li>
            <li className="f-options">
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
