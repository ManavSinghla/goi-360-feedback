import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-5%",
            width: "50%",
            height: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, rgba(0,0,0,0) 70%)",
            borderRadius: "50%",
          }}
        />
        
        <div className="container grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", zIndex: 1 }}>
          <div className="animate-fade-in">
            <h1
              style={{
                fontSize: "4rem",
                fontWeight: "800",
                marginBottom: "1.5rem",
                background: "linear-gradient(to right, var(--primary-color), var(--accent-color))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Empowering Citizens, <br /> Transforming Governance.
            </h1>
            <p
              style={{
                fontSize: "1.25rem",
                color: "var(--text-secondary)",
                marginBottom: "2.5rem",
                maxWidth: "600px",
              }}
            >
              GOI 360° Feedback is a platform designed to bridge the gap between
              the government and its citizens. Share your feedback, access news,
              and help us build a better nation.
            </p>
            <div className="flex gap-md">
              <Link to="/register">
                <Button variant="primary" size="lg">
                  Get Started
                </Button>
              </Link>
              <Button variant="outline" size="lg" onClick={() => document.getElementById("features").scrollIntoView({ behavior: 'smooth' })}>
                Learn More
              </Button>
            </div>
          </div>

          <div className="glass-panel animate-fade-in" style={{ padding: "2rem", transform: "rotate(-2deg)", animationDelay: "0.2s" }}>
             {/* Abstract UI Representation */}
             <div style={{ background: "white", borderRadius: "8px", padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ height: "20px", width: "40%", background: "#e2e8f0", borderRadius: "4px", marginBottom: "10px" }}></div>
                <div style={{ height: "10px", width: "80%", background: "#f1f5f9", borderRadius: "4px", marginBottom: "5px" }}></div>
                <div style={{ height: "10px", width: "60%", background: "#f1f5f9", borderRadius: "4px" }}></div>
             </div>
             <div style={{ background: "white", borderRadius: "8px", padding: "1.5rem", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}>
                <div className="flex justify-between items-center" style={{ marginBottom: "1rem" }}>
                    <div style={{ height: "40px", width: "40px", borderRadius: "50%", background: "#dbeafe" }}></div>
                    <div style={{ height: "20px", width: "60px", background: "#d1fae5", borderRadius: "10px" }}></div>
                </div>
                <div style={{ height: "10px", width: "100%", background: "#f1f5f9", borderRadius: "4px", marginBottom: "10px" }}></div>
                <div style={{ height: "10px", width: "100%", background: "#f1f5f9", borderRadius: "4px" }}></div>
             </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ padding: "5rem 0", background: "white" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Why Use GOI 360°?</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
              Key features designed to improve transparency and efficiency using modern technology.
            </p>
          </div>

          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            <FeatureCard
              icon="📢"
              title="Voice Your Opinion"
              description="Directly submit feedback to government departments and track the status of your requests."
            />
             <FeatureCard
              icon="📊"
              title="Real-time Analytics"
              description="Admins get powerful insights into department performance and citizen satisfaction levels."
            />
             <FeatureCard
              icon="📰"
              title="Stay Informed"
              description="Access the latest verified news and announcements directly from government sources."
            />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer style={{ background: "#1e293b", padding: "3rem 0", color: "white" }}>
        <div className="container text-center">
            <p>&copy; 2024 Government of India. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <Card glass className="text-center" style={{ border: "1px solid #e2e8f0" }}>
    <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{icon}</div>
    <h3 style={{ marginBottom: "1rem" }}>{title}</h3>
    <p style={{ color: "var(--text-secondary)" }}>{description}</p>
  </Card>
);

export default LandingPage;
