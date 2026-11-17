import { useEffect, useState } from "react";

import {
  Dumbbell,
  Target,
  Activity,
  Flame,
  User,
  LogOut,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {

    const savedUser = localStorage.getItem("athletiq_user");

    if (!savedUser) {

      navigate("/onboarding", { replace: true });

      return;

    }

    try {

      setUser(JSON.parse(savedUser));

    } catch {

      localStorage.removeItem("athletiq_user");

      navigate("/onboarding", { replace: true });

    }

  }, [navigate]);


  const handleLogout = () => {

    localStorage.removeItem("athletiq_user");

    navigate("/");

  };


  if (!user) {

    return <div>Loading your dashboard...</div>;

  }


  return (

    <div className="dashboard-page">

      {/* DASHBOARD NAVBAR */}

      <nav className="navbar">

        <Link to="/" className="logo">

          <Dumbbell size={25} />

          ATHLETIQ

        </Link>

        <button
          className="back-btn"
          onClick={handleLogout}
        >

          <LogOut size={18} />

          Exit

        </button>

      </nav>


      <main className="dashboard-container">

        {/* WELCOME */}

        <section className="dashboard-welcome">

          <span className="section-label">
            YOUR PERSONAL FITNESS SPACE
          </span>

          <h1>
            WELCOME TO
            <br />
            <span>ATHLETIQ.</span>
          </h1>

          <p>
            Your fitness journey starts here.
            Let's build something stronger.
          </p>

        </section>


        {/* USER PROFILE */}

        <section className="dashboard-profile">

          <div className="dashboard-section-heading">

            <User size={22} />

            <h2>Your Profile</h2>

          </div>


          <div className="dashboard-grid">

            <div className="dashboard-card">

              <span>AGE</span>

              <h3>{user.age} Years</h3>

            </div>


            <div className="dashboard-card">

              <span>HEIGHT</span>

              <h3>{user.height} cm</h3>

            </div>


            <div className="dashboard-card">

              <span>WEIGHT</span>

              <h3>{user.weight} kg</h3>

            </div>


            <div className="dashboard-card">

              <span>COUNTRY</span>

              <h3>{user.country}</h3>

            </div>

          </div>

        </section>


        {/* FITNESS GOALS */}

        <section className="dashboard-section">

          <div className="dashboard-section-heading">

            <Target size={22} />

            <h2>Your Fitness Goals</h2>

          </div>


          <div className="dashboard-goals">

            {user.goals.map((goal) => (

              <div className="dashboard-goal-card" key={goal}>

                <Target size={20} />

                <h3>{goal}</h3>

              </div>

            ))}

          </div>

        </section>


        {/* TRAINING */}

        <section className="dashboard-section">

          <div className="dashboard-section-heading">

            <Dumbbell size={22} />

            <h2>Training Preferences</h2>

          </div>


          <div className="dashboard-grid">

            <div className="dashboard-card">

              <span>EXPERIENCE</span>

              <h3>{user.experience}</h3>

            </div>


            <div className="dashboard-card">

              <span>TRAINING LOCATION</span>

              <h3>{user.equipment}</h3>

            </div>


            <div className="dashboard-card">

              <span>TRAINING DAYS</span>

              <h3>{user.trainingDays} Days / Week</h3>

            </div>

          </div>

        </section>


        {/* NUTRITION */}

        <section className="dashboard-section">

          <div className="dashboard-section-heading">

            <Flame size={22} />

            <h2>Nutrition Preferences</h2>

          </div>


          <div className="dashboard-grid">

            <div className="dashboard-card">

              <span>DIET</span>

              <h3>{user.diet}</h3>

            </div>


            <div className="dashboard-card">

              <span>MONTHLY BUDGET</span>

              <h3>{user.budget}</h3>

            </div>

          </div>

        </section>


        {/* LIFESTYLE */}

        <section className="dashboard-section">

          <div className="dashboard-section-heading">

            <Activity size={22} />

            <h2>Lifestyle</h2>

          </div>


          <div className="dashboard-grid">

            <div className="dashboard-card">

              <span>ACTIVITY LEVEL</span>

              <h3>{user.activity}</h3>

            </div>


            <div className="dashboard-card">

              <span>SLEEP DURATION</span>

              <h3>{user.sleep}</h3>

            </div>

          </div>

        </section>


        {/* NEXT PHASE */}

        <section className="dashboard-cta">

          <span className="section-label">
            THE NEXT STEP
          </span>

          <h2>
            YOUR AI FITNESS
            <br />
            <span>COACH IS COMING.</span>
          </h2>

          <p>
            Your profile is saved. We're now ready to build
            your personalised training and nutrition experience.
          </p>

          <button
            className="primary-btn"
            disabled
          >
            AI Plan Generation — Coming Soon
          </button>

        </section>

      </main>

    </div>

  );

}

export default Dashboard;