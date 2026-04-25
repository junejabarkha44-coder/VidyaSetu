import { NavLink } from "react-router-dom";
import "./Home.css";

function Home() {
    return (
        <div className="home-container">
            <div className="sale-banner">
                <p>2 days left! Future-proof your career | <span>Courses as low as ₹479 during our AI skills event</span></p>
            </div>
            
            <section className="hero-section">
                <div className="hero-bg"></div>
                <div className="hero-content">
                    <h1 className="heading-xl text-gradient">New Beginnings,<br/>New Platform</h1>
                    <p className="text-lead">Master the skills of the future with our interactive, expert-led courses. Designed to make learning enjoyable, not stressful.</p>
                    <div className="hero-buttons">
                        <NavLink to="/courses" className="btn-primary btn-large">Explore Courses</NavLink>
                        <NavLink to="/start" className="btn-secondary btn-large glass-panel">Start Learning</NavLink>
                    </div>
                </div>
            </section>

            <section className="features-section">
                <div className="features-grid">
                    <div className="feature-card glass-panel">
                        <h3>Online Courses</h3>
                        <p>Learn industry-ready skills with easy content.</p>
                        <ul className="feature-list">
                            <li>Beginner to Advanced</li>
                            <li>Practical Projects</li>
                            <li>Lifetime Access</li>
                        </ul>
                        <NavLink to="/courses" className="btn-primary">Explore</NavLink>
                    </div>

                    <div className="feature-card glass-panel">
                        <h3>Expert Mentors</h3>
                        <p>Get guidance from experienced professionals.</p>
                        <ul className="feature-list">
                            <li>Live Sessions</li>
                            <li>1-to-1 Guidance</li>
                            <li>Doubt Support</li>
                        </ul>
                        <NavLink to="/connect" className="btn-primary">Connect</NavLink>
                    </div>

                    <div className="feature-card glass-panel">
                        <h3>Certification</h3>
                        <p>Boost your resume with valid certificates.</p>
                        <ul className="feature-list">
                            <li>Industry Recognized</li>
                            <li>Shareable Online</li>
                            <li>Career Value</li>
                        </ul>
                        <NavLink to="/start" className="btn-primary">Start Now</NavLink>
                    </div>
                </div>
            </section>

            <footer className="footer-info">
                <div className="footer-col">
                    <h4>Contact</h4>
                    <p>YouTube: TechPath Team</p>
                    <p>Phone: 7015277326</p>
                    <p>Instagram: TechPath Advisors</p>
                    <p>Email: techpath54@gmail.com</p>
                </div>
                <div className="footer-col">
                    <h4>Mentors</h4>
                    <p>Barkha Juneja</p>
                    <p>Deepika Sharma</p>
                    <p>Purva Sai</p>
                    <p>Shikha Arora</p>
                </div>
                <div className="footer-col">
                    <h4>Support</h4>
                    <p>Course access and enrollment</p>
                    <p>Video playback problems</p>
                    <p>Quiz and test support</p>
                </div>
                <div className="footer-col">
                    <h4>Education</h4>
                    <p>Online Learning Anytime <span>Access lessons 24/7 from anywhere</span></p>
                    <p>Expert Teachers <span>Learn from experienced instructors</span></p>
                    <p>Interactive Courses <span>Includes videos, quizzes, and activities</span></p>
                </div>
            </footer>
            
            <div className="copyright">
                &copy; 2026 TECHPATH ADVISORS. All rights reserved.
            </div>
        </div>
    );
}

export default Home;