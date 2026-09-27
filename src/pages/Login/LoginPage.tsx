import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

type LoginPageProps = {
  onLogin: (user: any) => void;
};

function LoginPage({ onLogin }: LoginPageProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleLogin(event: React.FormEvent) {
        event.preventDefault();

        const response = await fetch(
            "http://localhost:3000/api/auth/login",
            {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            }
        );

        const data = await response.json();

        if(!response.ok) {
            alert(data.message);
            return;
        }

        localStorage.setItem("token", data.token);
        onLogin(data.user);
        navigate("/");
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
        “Sometimes ambition moves the finish line so often that you forget how far you've already travelled.”
      </p>

      <div className="login-heading">
        <h2>Welcome back 🌱</h2>
        <p>Log in to continue your journey.</p>
      </div>

      <form onSubmit={handleLogin} className="login-form">
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

        <button type="button" className="forgot-password">
          Forgot password?
        </button>

        <button type="submit" className="login-button">
          Log in →
        </button>
      </form>

      <div className="login-divider">
        <span>OR</span>
      </div>

      <button className="google-login">
        Continue with Google
      </button>

      <p className="register-link">
        New here? <span>Create an account</span>
      </p>

    </section>

    <footer className="login-footer">
      “A better tomorrow starts with a better today.”
    </footer>

  </main>
);
}

export default LoginPage;