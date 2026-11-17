import { useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  Dumbbell,
  Target,
  User,
  Utensils,
  CalendarDays,
  Check,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

const steps = [
  "Your Profile",
  "Your Goals",
  "Training",
  "Nutrition",
  "Lifestyle",
];

function Onboarding() {

  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    age: "",
    height: "",
    weight: "",
    country: "India",

    goals: [],

    experience: "",
    equipment: "",
    trainingDays: "",

    diet: "",
    budget: "",

    activity: "",
    sleep: "",
  });

  // UPDATE FORM DATA

  const updateField = (field, value) => {

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setError("");
  };


  // SELECT FITNESS GOALS

  const toggleGoal = (goal) => {

    setFormData((prev) => ({
      ...prev,

      goals: prev.goals.includes(goal)

        ? prev.goals.filter((item) => item !== goal)

        : [...prev.goals, goal],
    }));

    setError("");
  };


  // VALIDATION

  const validateStep = () => {

    if (currentStep === 0) {

      const age = Number(formData.age);
      const height = Number(formData.height);
      const weight = Number(formData.weight);

      if (!formData.age || !formData.height || !formData.weight) {
        return "Please complete all profile details.";
      }

      if (!Number.isInteger(age) || age < 18 || age > 100) {
        return "Please enter a valid age between 18 and 100.";
      }

      if (height < 100 || height > 250) {
        return "Please enter a valid height in cm.";
      }

      if (weight < 25 || weight > 300) {
        return "Please enter a valid weight in kg.";
      }

    }


    if (currentStep === 1 && formData.goals.length === 0) {

      return "Please select at least one fitness goal.";

    }


    if (currentStep === 2) {

      if (
        !formData.experience ||
        !formData.equipment ||
        !formData.trainingDays
      ) {

        return "Please complete all training details.";

      }

    }


    if (currentStep === 3) {

      if (!formData.diet || !formData.budget) {

        return "Please complete your nutrition details.";

      }

    }


    if (currentStep === 4) {

      if (!formData.activity || !formData.sleep) {

        return "Please complete your lifestyle details.";

      }

    }

    return "";
  };


  // NEXT STEP

  const nextStep = () => {

    const validationError = validateStep();

    if (validationError) {

      setError(validationError);

      return;

    }

    setError("");

    if (currentStep < 4) {

      setCurrentStep((prev) => prev + 1);

    }

  };


  // PREVIOUS STEP

  const previousStep = () => {

    if (currentStep > 0) {

      setCurrentStep((prev) => prev - 1);

      setError("");

    }

  };


  // SUBMIT PROFILE

  const handleSubmit = () => {

    const validationError = validateStep();

    if (validationError) {

      setError(validationError);

      return;

    }

    const userProfile = {
      ...formData,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "athletiq_user",
      JSON.stringify(userProfile)
    );

    navigate("/dashboard");

  };


  const progress = ((currentStep + 1) / 5) * 100;


  return (

    <div className="onboarding-page">

      {/* NAVBAR */}

      <div className="onboarding-navbar">

        <Link to="/" className="logo">

          <Dumbbell size={24} />

          ATHLETIQ

        </Link>

        <span>PERSONALISED FITNESS ASSESSMENT</span>

      </div>


      <div className="onboarding-container">


        {/* HEADER */}

        <div className="onboarding-header">

          <span className="section-label">
            LET'S GET TO KNOW YOU
          </span>

          <h1>
            YOUR FITNESS.
            <br />
            <span>YOUR RULES.</span>
          </h1>

          <p>
            Tell us about yourself. We'll use this information
            to build a fitness experience around your lifestyle.
          </p>

        </div>


        {/* PROGRESS */}

        <div className="progress-container">

          <div className="progress-info">

            <span>STEP 0{currentStep + 1} / 05</span>

            <span>{steps[currentStep]}</span>

          </div>


          <div className="progress-track">

            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />

          </div>


          <div className="step-labels">

            {steps.map((step, index) => (

              <span
                key={step}
                className={index <= currentStep ? "completed" : ""}
              >
                {step}
              </span>

            ))}

          </div>

        </div>


        {/* FORM CARD */}

        <div className="onboarding-card">


          {/* STEP 1: PROFILE */}

          {currentStep === 0 && (

            <div className="form-step">

              <div className="form-heading">

                <User size={24} />

                <div>
                  <h2>Let's start with the basics.</h2>
                  <p>Tell us a little about yourself.</p>
                </div>

              </div>


              <div className="form-grid">


                <div className="input-group">

                  <label>Age</label>

                  <input
                    type="number"
                    placeholder="e.g. 22"
                    value={formData.age}
                    onChange={(e) => updateField("age", e.target.value)}
                    min="18"
                    max="100"
                  />

                </div>


                <div className="input-group">

                  <label>Country</label>

                  <select
                    value={formData.country}
                    onChange={(e) => updateField("country", e.target.value)}
                  >

                    <option>India</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>Japan</option>
                    <option>Germany</option>
                    <option>Other</option>

                  </select>

                </div>


                <div className="input-group">

                  <label>Height (cm)</label>

                  <input
                    type="number"
                    placeholder="e.g. 175"
                    value={formData.height}
                    onChange={(e) => updateField("height", e.target.value)}
                  />

                </div>


                <div className="input-group">

                  <label>Current Weight (kg)</label>

                  <input
                    type="number"
                    placeholder="e.g. 68"
                    value={formData.weight}
                    onChange={(e) => updateField("weight", e.target.value)}
                  />

                </div>

              </div>

            </div>

          )}


          {/* STEP 2: GOALS */}

          {currentStep === 1 && (

            <div className="form-step">

              <div className="form-heading">

                <Target size={24} />

                <div>
                  <h2>What are your fitness goals?</h2>
                  <p>Select all the goals that apply to you.</p>
                </div>

              </div>


              <div className="selection-grid">

                {[
                  ["Muscle Building", "Build muscle and strength"],
                  ["Weight Loss", "Lose fat and improve fitness"],
                  ["Weight Gain", "Increase body weight"],
                  ["Hybrid Athlete", "Combine running and strength"],
                  ["Endurance", "Improve cardiovascular fitness"],
                  ["General Fitness", "Become healthier and fitter"],
                ].map(([goal, description]) => (

                  <button
                    type="button"
                    key={goal}
                    className={`selection-card ${
                      formData.goals.includes(goal) ? "selected" : ""
                    }`}
                    onClick={() => toggleGoal(goal)}
                  >

                    <div>

                      <h3>{goal}</h3>

                      <p>{description}</p>

                    </div>

                    {formData.goals.includes(goal) && <Check size={20} />}

                  </button>

                ))}

              </div>

            </div>

          )}


          {/* STEP 3: TRAINING */}

          {currentStep === 2 && (

            <div className="form-step">

              <div className="form-heading">

                <Dumbbell size={24} />

                <div>
                  <h2>Let's understand your training.</h2>
                  <p>We'll adapt your programme to your experience.</p>
                </div>

              </div>


              <div className="input-group full-width">

                <label>Training Experience</label>

                <select
                  value={formData.experience}
                  onChange={(e) => updateField("experience", e.target.value)}
                >

                  <option value="">Select your experience</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>

                </select>

              </div>


              <div className="input-group full-width">

                <label>Where do you train?</label>

                <select
                  value={formData.equipment}
                  onChange={(e) => updateField("equipment", e.target.value)}
                >

                  <option value="">Select training environment</option>
                  <option>Commercial Gym</option>
                  <option>Home Gym</option>
                  <option>Bodyweight Only</option>
                  <option>Outdoor</option>

                </select>

              </div>


              <div className="input-group full-width">

                <label>Available Training Days</label>

                <select
                  value={formData.trainingDays}
                  onChange={(e) => updateField("trainingDays", e.target.value)}
                >

                  <option value="">Select days per week</option>

                  <option value="2">2 days</option>
                  <option value="3">3 days</option>
                  <option value="4">4 days</option>
                  <option value="5">5 days</option>
                  <option value="6">6 days</option>

                </select>

              </div>

            </div>

          )}


          {/* STEP 4: NUTRITION */}

          {currentStep === 3 && (

            <div className="form-step">

              <div className="form-heading">

                <Utensils size={24} />

                <div>
                  <h2>What does your diet look like?</h2>
                  <p>Nutrition should fit your lifestyle and culture.</p>
                </div>

              </div>


              <div className="input-group full-width">

                <label>Dietary Preference</label>

                <select
                  value={formData.diet}
                  onChange={(e) => updateField("diet", e.target.value)}
                >

                  <option value="">Select your diet</option>

                  <option>Vegetarian</option>
                  <option>Non-Vegetarian</option>
                  <option>Eggetarian</option>
                  <option>Vegan</option>

                </select>

              </div>


              <div className="input-group full-width">

                <label>Monthly Food Budget</label>

                <select
                  value={formData.budget}
                  onChange={(e) => updateField("budget", e.target.value)}
                >

                  <option value="">Select your budget</option>

                  <option>Below ₹2,000</option>
                  <option>₹2,000 - ₹4,000</option>
                  <option>₹4,000 - ₹7,000</option>
                  <option>₹7,000 - ₹10,000</option>
                  <option>Above ₹10,000</option>
                  <option>No specific budget</option>

                </select>

              </div>

            </div>

          )}


          {/* STEP 5: LIFESTYLE */}

          {currentStep === 4 && (

            <div className="form-step">

              <div className="form-heading">

                <CalendarDays size={24} />

                <div>
                  <h2>Let's understand your lifestyle.</h2>
                  <p>Your plan should work with your daily routine.</p>
                </div>

              </div>


              <div className="input-group full-width">

                <label>Daily Activity Level</label>

                <select
                  value={formData.activity}
                  onChange={(e) => updateField("activity", e.target.value)}
                >

                  <option value="">Select activity level</option>

                  <option>Sedentary - Mostly sitting</option>
                  <option>Lightly Active</option>
                  <option>Moderately Active</option>
                  <option>Very Active</option>

                </select>

              </div>


              <div className="input-group full-width">

                <label>Average Sleep Duration</label>

                <select
                  value={formData.sleep}
                  onChange={(e) => updateField("sleep", e.target.value)}
                >

                  <option value="">Select sleep duration</option>

                  <option>Less than 5 hours</option>
                  <option>5 - 6 hours</option>
                  <option>6 - 8 hours</option>
                  <option>8 - 10 hours</option>
                  <option>More than 10 hours</option>

                </select>

              </div>

            </div>

          )}


          {/* ERROR MESSAGE */}

          {error && (

            <p className="form-error" role="alert">
              {error}
            </p>

          )}


          {/* NAVIGATION */}

          <div className="form-navigation">

            <button
              type="button"
              className="back-btn"
              onClick={previousStep}
              disabled={currentStep === 0}
            >

              <ArrowLeft size={17} />

              Back

            </button>


            {currentStep < 4 ? (

              <button
                type="button"
                className="primary-btn"
                onClick={nextStep}
              >

                Continue

                <ArrowRight size={17} />

              </button>

            ) : (

              <button
                type="button"
                className="primary-btn"
                onClick={handleSubmit}
              >

                Generate My Plan

                <ArrowRight size={17} />

              </button>

            )}

          </div>

        </div>


        <p className="onboarding-footer">
          YOUR JOURNEY. YOUR PACE. YOUR ATHLETIQ.
        </p>

      </div>

    </div>

  );

}

export default Onboarding;