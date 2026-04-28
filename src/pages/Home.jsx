import Header from '../components/Header';
import { Link } from 'react-router-dom';
import heroImage from '../assets/Login-template1.png';

export default function Home() {
  return (
    <>
      <Header />

      <main className="home">

        {/* HERO */}
        <section className="hero">
          <div className="hero-text">
            <h1>Smart POS for Modern Businesses</h1>
            <p>Sell, manage inventory and grow your business with ease.</p>

            <div className="hero-buttons">
              <Link to="/register" className="primary">
                Start Free
              </Link>

              <button className="secondary" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>Learn More</button>
            </div>
          </div>

          <div className="hero-image">
            <img src={heroImage} alt="POS preview" />
          </div>
        </section>

        {/* TRUST */}
        <section className="trust">
          <p>Trusted by growing businesses</p>
        </section>

        {/* FEATURES */}
        <section id="features">
        <section className="feature" >
          <div className="text">
            <h2>Sell Anywhere</h2>
            <p>Use your phone, tablet or computer.</p>
          </div>

          <div className="image">
            <img src={heroImage} alt="POS preview" />
          </div>
        </section>

        <section className="feature reverse">
          <div className="text">
            <h2>Track Inventory</h2>
            <p>Real-time stock updates and alerts.</p>
          </div>

          <div className="image">
            <img src={heroImage} alt="POS preview" />
          </div>
        </section>

        {/* FEATURE GRID */}
        <section className="feature-grid">
          <div className="card">Reports</div>
          <div className="card">Multiple Payments</div>
          <div className="card">Employee Management</div>
        </section>
        </section>
        {/* CTA */}
        <section className="cta">
          <h2>Start your shop today</h2>
          <button  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>Get Started</button>
        </section>

      </main>
    </>
  );
}