
 import { Link } from 'react-router-dom'; // helps me to link to different pages like login and get started
 import assests from '../assets/Login-template1.png'; // helps me to import image from assets folder
export default function Home() {
  return (
    <div className="home">

      {/* HEADER */}
      <header className="header">
        <div className="logo">Duka-Yetu</div>
        <nav>
        
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/login">Login</Link>
          <Link to="/get-started" className="cta-nav">Get Started</Link>
        </nav>
      </header>


      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>Smart POS for Modern Businesses</h1>
          <p>Sell, manage inventory and grow your business with ease.</p>

          <div className="hero-buttons">
            <Link to="/get-started">
              <button className="primary">Start Free</button>
            </Link>

            <button className="secondary">Learn More</button>
          </div>
        </div>

        <div className="hero-image">
          <img src={assests} alt="Login Template" />
        </div>
      </section>

      {/* TRUST */}
      <section className="trust">
        <p>Trusted by growing businesses</p>
      </section>

      {/* FEATURE 1 */}
      <section className="feature">
        <div className="text">
          <h2>Sell Anywhere</h2>
          <p>Use your phone, tablet or computer.</p>
        </div>

        <div className="image">
          <img src={assests} alt="Login Template" />
        </div>
      </section>

      {/* FEATURE 2 */}
      <section className="feature reverse">
        <div className="text">
          <h2>Track Inventory</h2>
          <p>Real-time stock updates and alerts.</p>
        </div>

        <div className="image">
          <img src={assests} alt="Login Template" />
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="feature-grid">
       
        <div className="card">Reports</div>
        <div className="card">Multiple Payments</div>
        <div className="card">Employee Management</div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Start your shop today</h2>
        <Link to="/get-started">
          <button>Get Started</button>
        </Link>
      </section>

    </div>
  );
}