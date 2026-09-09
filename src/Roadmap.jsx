import React, { useState } from "react";
import "./Roadmap.css";
import roadmapData from "./roadmapData.json";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function RoadmapForm() {
  const [form, setForm] = useState({
    name: "",
    education: "bachelor",
    monthlyIncome: "",
    salaryExpectation: "",
    location: "",
    interest: "",
    career: "",
  });

  const [subField, setSubField] = useState("");
  const [result, setResult] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "interest") {
      setSubField("");
      setForm((prev) => ({ ...prev, career: "" }));
    }
  }

  function guessLocationType(loc) {
    if (!loc) return "urban";
    const l = loc.toLowerCase();
    if (/village|gaon|rural|pind/.test(l)) return "rural";
    if (/abroad|uk|usa|canada|germany|uae/.test(l)) return "abroad";
    return "urban";
  }

  function matchField(key) {
    if (!key) return roadmapData.fields.default;
    const k = key.trim().toLowerCase().replace(/\s+/g, "_");
    if (roadmapData.fields[k]) return roadmapData.fields[k];
    const found = Object.keys(roadmapData.fields).find(
      (f) => f.includes(k) || k.includes(f)
    );
    return roadmapData.fields[found] || roadmapData.fields.default;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const fieldObj = matchField(form.interest);
    const base = fieldObj.job;

    const steps = [];
    steps.push(roadmapData.commonSteps[0]);
    base.slice(0, 3).forEach((s) => steps.push(s));

    const edu = roadmapData.educationModifiers[form.education];
    if (edu) steps.push(edu);

    const income = Number(form.monthlyIncome) || 0;
    let incomeKey =
      income < 20000 ? "low" : income > 60000 ? "high" : "medium";
    steps.push(roadmapData.incomeModifiers[incomeKey]);

    steps.push(roadmapData.locationTips[guessLocationType(form.location)]);
    if (steps.length < 5) base.slice(3, 6).forEach((s) => steps.push(s));

    setResult({
      name: form.name || "User",
      steps: steps.slice(0, 6),
      meta: {
        interest: form.interest,
        career: form.career,
        subField: subField,
        salaryExpectation: form.salaryExpectation,
      },
    });
  }

  const selectedFieldObj = matchField(form.interest);

  return (
    <div>
      <Navbar />

      {/* ✅ Hero Section */}
      <section className="roadmap-hero">
        <div className="roadmap-overlay">
          <div className="roadmap-hero-content">
            <h1 className="roadmap-animated-heading">
              {"Plan Your Career Roadmap with NexSkill".split("").map(
                (letter, index) => (
                  <span
                    key={index}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                )
              )}
            </h1>

            <p className="roadmap-animated-paragraph">
              Get a step-by-step personalized roadmap to achieve your dream
              career. Based on your education, skills, and goals, NexSkill shows
              you the smartest path forward.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Form + Results Section with background cubes */}
      <div className="roadmap-wrap">
        {/* 🔹 Animated Cubes Background */}
        <div className="cube-background">
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
        </div>

        {/* 🔹 Form */}
        <form className="roadmap-form" onSubmit={handleSubmit}>
          <h1>Create Your Career Roadmap</h1>

          <label>
            Name
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </label>

          <label>
            Education
            <select
              name="education"
              value={form.education}
              onChange={handleChange}
            >
              <option value="highschool">High School</option>
              <option value="intermediate">Intermediate</option>
              <option value="bachelor">Bachelor</option>
              <option value="master">Master</option>
            </select>
          </label>

          <label>
            Monthly Income
            <input
              type="number"
              name="monthlyIncome"
              value={form.monthlyIncome}
              onChange={handleChange}
              placeholder="Enter your monthly income"
            />
          </label>

          <label>
            Salary Expectation
            <input
              type="number"
              name="salaryExpectation"
              value={form.salaryExpectation}
              onChange={handleChange}
              placeholder="Enter expected salary"
            />
          </label>

          <label>
            Location
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Enter your location"
            />
          </label>

          <label>
            Career Path
            <input
              list="interestOptions"
              name="interest"
              value={form.interest}
              onChange={handleChange}
              placeholder="Choose or type your field"
            />
            <datalist id="interestOptions">
              <option value="Medical" />
              <option value="Engineering" />
              <option value="Arts" />
              <option value="Mass Communication" />
              <option value="Commerce" />
            </datalist>
          </label>

          {form.interest && selectedFieldObj.careers && (
            <label>
              Career Category
              <select
                name="career"
                value={form.career}
                onChange={handleChange}
              >
                <option value="">-- Select Career --</option>
                {selectedFieldObj.careers.map((c, i) => (
                  <option key={i} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>
          )}

          {form.interest && selectedFieldObj.subFields && (
            <div className="subfields">
              <p>Select Sub-Field:</p>
              <div className="subfield-buttons">
                {selectedFieldObj.subFields.map((sf, i) => (
                  <button
                    type="button"
                    key={i}
                    className={`subfield-btn ${
                      subField === sf ? "active" : ""
                    }`}
                    onClick={() => setSubField(sf)}
                  >
                    {sf}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button type="submit" className="generate">
            Generate Roadmap
          </button>
        </form>

        {/* 🔹 Result */}
        <div className="roadmap-result">
          <h1 className="head-result">Your Roadmap is here..</h1>
          {result ? (
            <div className="card">
              <h3>Roadmap for {result.name}</h3>
              <p>
                <strong>Field:</strong> {result.meta.interest || "unspecified"}{" "}
                <br />
                <strong>Career:</strong>{" "}
                {result.meta.career || "not selected"} <br />
                <strong>Sub-field:</strong>{" "}
                {result.meta.subField || "not selected"} <br />
                <strong>Expected Salary:</strong>{" "}
                {result.meta.salaryExpectation || "not specified"}
              </p>
              <ol>
                {result.steps.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ol>
            </div>
          ) : (
            <div className="card placeholder">
              Fill the form to see your roadmap
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
