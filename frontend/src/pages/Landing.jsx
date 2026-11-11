import {
  ArrowRight,
  Activity,
  Dumbbell,
  Utensils,
  TrendingUp,
  Flame,
  HeartPulse,
  Target,
  CheckCircle2,
} from "lucide-react";

import Navbar from "../components/Navbar";

function Landing() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO SECTION */}

        <section className="hero">

          <div className="hero-content">

            <div className="hero-badge">
              <span className="badge-dot"></span>
              YOUR PERSONAL AI FITNESS COACH
            </div>

            <h1>
              BUILD YOUR
              <br />
              <span>STRONGER</span>
              <br />
              SELF.
            </h1>

            <p className="hero-description">
              Your goals. Your lifestyle. Your plan.

              Get personalised workouts, intelligent nutrition
              and adaptive coaching designed around you.
            </p>

            <div className="hero-buttons">
              <a href="/register" className="primary-btn">
                Build My Plan <ArrowRight size={19} />
              </a>

              <a href="#how-it-works" className="secondary-btn">
                Explore Platform
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <h3>01</h3>
                <p>Personalised</p>
              </div>

              <div>
                <h3>02</h3>
                <p>Adaptive</p>
              </div>

              <div>
                <h3>03</h3>
                <p>Data-driven</p>
              </div>
            </div>

          </div>

          {/* HERO VISUAL */}

          <div className="hero-visual">

            <div className="visual-glow"></div>

            <div className="hero-card">

              <div className="card-top">
                <span>YOUR FITNESS OVERVIEW</span>
                <Activity size={20} />
              </div>

              <div className="card-greeting">
                <p>YOUR NEXT LEVEL STARTS HERE</p>
                <h2>Built Around You.</h2>
              </div>

              <div className="fitness-metrics">

                <div className="metric-box">
                  <Flame size={22} />
                  <span>Daily Calories</span>
                  <h3>2,450</h3>
                  <small>Illustrative target</small>
                </div>

                <div className="metric-box">
                  <HeartPulse size={22} />
                  <span>Daily Protein</span>
                  <h3>120g</h3>
                  <small>Illustrative target</small>
                </div>

              </div>

              <div className="workout-preview">

                <div className="workout-heading">
                  <span>YOUR TRAINING PLAN</span>
                  <Dumbbell size={19} />
                </div>

                <div className="workout-item">
                  <div className="workout-icon">
                    <Activity size={20} />
                  </div>

                  <div>
                    <h4>Strength Training</h4>
                    <p>Upper Body · 45 min</p>
                  </div>

                  <CheckCircle2 size={20} />
                </div>

                <div className="workout-item">
                  <div className="workout-icon">
                    <TrendingUp size={20} />
                  </div>

                  <div>
                    <h4>Performance Tracking</h4>
                    <p>Monitor your progress</p>
                  </div>

                  <ArrowRight size={19} />
                </div>

              </div>

              <div className="ai-status">
                <span></span>
                ATHLETIQ AI · READY TO COACH
              </div>

            </div>

          </div>

        </section>

        {/* FEATURES SECTION */}

        <section className="features section-padding" id="features">

          <div className="section-heading">
            <span className="section-label">WHAT WE OFFER</span>

            <h2>
              EVERYTHING YOU NEED.
              <br />
              <span>ONE SMARTER SYSTEM.</span>
            </h2>

            <p>
              Stop switching between different fitness apps.
              Bring your entire fitness journey into one place.
            </p>
          </div>

          <div className="feature-grid">

            <div className="feature-card">

              <div className="feature-icon">
                <Dumbbell size={26} />
              </div>

              <h3>AI Workout Planner</h3>

              <p>
                Personalised training programmes built around
                your goals, experience and available equipment.
              </p>

              <span className="feature-number">01</span>

            </div>

            <div className="feature-card">

              <div className="feature-icon">
                <Utensils size={26} />
              </div>

              <h3>Smart Nutrition</h3>

              <p>
                Localised meal plans based on your country's
                cuisine, dietary preferences and food budget.
              </p>

              <span className="feature-number">02</span>

            </div>

            <div className="feature-card">

              <div className="feature-icon">
                <TrendingUp size={26} />
              </div>

              <h3>Progress Analytics</h3>

              <p>
                Track your workouts, body measurements,
                running performance and fitness improvements.
              </p>

              <span className="feature-number">03</span>

            </div>

          </div>

        </section>

        {/* GOALS SECTION */}

        <section className="goals section-padding">

          <div className="section-heading">
            <span className="section-label">YOUR GOALS. YOUR JOURNEY.</span>

            <h2>
              ONE PLATFORM.
              <br />
              <span>DIFFERENT AMBITIONS.</span>
            </h2>
          </div>

          <div className="goal-grid">

            <div className="goal-card">
              <span>01 / STRENGTH</span>
              <h3>Build Muscle</h3>
              <p>Build strength and develop your physique.</p>
              <Dumbbell size={30} />
            </div>

            <div className="goal-card">
              <span>02 / TRANSFORMATION</span>
              <h3>Lose Fat</h3>
              <p>Build sustainable habits and improve body composition.</p>
              <Flame size={30} />
            </div>

            <div className="goal-card">
              <span>03 / PERFORMANCE</span>
              <h3>Hybrid Athlete</h3>
              <p>Combine strength, endurance and athletic performance.</p>
              <Activity size={30} />
            </div>

            <div className="goal-card">
              <span>04 / DEVELOPMENT</span>
              <h3>Gain Weight</h3>
              <p>Follow structured nutrition and strength training.</p>
              <Target size={30} />
            </div>

          </div>

        </section>

        {/* HOW IT WORKS */}

        <section className="how-it-works section-padding" id="how-it-works">

          <div className="section-heading">
            <span className="section-label">SIMPLE. SMART. PERSONAL.</span>

            <h2>
              YOUR JOURNEY
              <br />
              <span>STARTS IN THREE STEPS.</span>
            </h2>
          </div>

          <div className="steps-grid">

            <div className="step">
              <span>01</span>
              <h3>Know Yourself</h3>
              <p>
                Tell us about your fitness level, goals,
                lifestyle and dietary preferences.
              </p>
            </div>

            <div className="step">
              <span>02</span>
              <h3>Get Your Plan</h3>
              <p>
                Receive personalised workouts and nutrition
                recommendations.
              </p>
            </div>

            <div className="step">
              <span>03</span>
              <h3>Keep Improving</h3>
              <p>
                Track your progress and adapt your training
                as your fitness evolves.
              </p>
            </div>

          </div>

        </section>

        {/* CTA SECTION */}

        <section className="final-cta" id="pricing">

          <span className="section-label">YOUR NEXT CHAPTER STARTS NOW</span>

          <h2>
            STOP GUESSING.
            <br />
            START <span>EVOLVING.</span>
          </h2>

          <p>
            Your fitness journey deserves more than a generic plan.
          </p>

          <a href="/register" className="primary-btn">
            Get Started For Free <ArrowRight size={19} />
          </a>

        </section>

        {/* FOOTER */}

        <footer className="footer">

          <a href="/" className="logo">
            <Dumbbell size={23} />
            ATHLETIQ
          </a>

          <p>Built for those who refuse to settle.</p>

          <span>© 2026 ATHLETIQ. All rights reserved.</span>

        </footer>

      </main>
    </>
  );
}

export default Landing;