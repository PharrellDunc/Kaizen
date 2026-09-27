import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "../Login/LoginPage.css";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  async function handleRegister(event: React.FormEvent) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const response = await fetch(
      "http://localhost:3000/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      alert(data.message ?? "Registration failed");
      return;
    }

    navigate("/login");
  }

  return (
    <main className="login-page">

      <div className="login-badge">
        🌱 1% better every day.
      </div>

      <aside className="login-features">
        <div className="login-feature">
          <span className="feature-icon">🌱</span>
          <div>
            <strong>Build Habits</strong>
            <p>Small actions. Big change.</p>
          </div>
        </div>

        <div className="login-feature">
          <span className="feature-icon">📈</span>
          <div>
            <strong>Track Progress</strong>
            <p>See yourself grow.</p>
          </div>
        </div>

        <div className="login-feature">
          <span className="feature-icon">🫂</span>
          <div>
            <strong>Stay Motivated</strong>
            <p>A community on the same journey.</p>
          </div>
        </div>
      </aside>

      <section className="login-card">

        <div className="login-brand">
          <div className="login-logo">🌱</div>
          <h1>Kaizen</h1>
          <span>BUILD A BETTER YOU</span>
        </div>

        <p className="login-quote">
          “The best time to plant a tree was 20 years ago.
          The second best time is today.”
        </p>

        <div className="login-heading">
          <h2>Welcome to Kaizen 🌱</h2>
          <p>Create your account and begin your journey.</p>
        </div>

        <form onSubmit={handleRegister} className="login-form">

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />

          <button type="submit" className="login-button">
            Create Account →
          </button>

        </form>

        <p className="register-link">
          Already have an account?{" "}
          <NavLink to="/login">
            Log in
          </NavLink>
        </p>

      </section>

      <footer className="login-footer">
        “A better tomorrow starts with a better today.”
      </footer>

    </main>
  );
}

export default RegisterPage;