import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Page Components
function Home() {
  return (
    <div className="page">
      <h2>🏠 Home Page</h2>
      <p>Welcome to our website! This is the home page.</p>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h2>📖 About Page</h2>
      <p>This is a simple website to learn React Router.</p>
      <p>We're building a multi-page website without reloading!</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="page">
      <h2>📞 Contact Page</h2>
      <p>Get in touch with us!</p>
      <div className="contact-card">
        <p>
          <strong>Email:</strong> vinaykumarr008@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> +91 8618417523
        </p>
      </div>
    </div>
  );
}

function Users() {
  const userList = [
    { id: 1, name: "Vinay", age: 25 },
    { id: 2, name: "Nitin", age: 30 },
    { id: 3, name: "Sukesh", age: 35 },
    { id: 4, name: "Abhishek", age: 90 },
  ];

  return (
    <div className="page">
      <h2>👥 Users Page</h2>
      <p>Click on a user to see their profile:</p>
      <ul className="user-list">
        {userList.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`} className="user-link">
              {user.name} (Age: {user.age})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UserProfile() {
  return (
    <div className="page">
      <h2>👤 User Profile</h2>
      <p>This is a dynamic user profile page!</p>
      <p>The URL contains the user ID.</p>
      <Link to="/users" className="back-link">
        ← Back to Users List
      </Link>
    </div>
  );
}

function NotFound() {
  return (
    <div className="page">
      <h2>❓ 404 - Page Not Found</h2>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <p>
        Let's get you back to <Link to="/">home</Link>.
      </p>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <div className="App">
        <h1>🌐 NAVFLOW</h1>

        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">
                🏠 Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                📖 About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                📞 Contact
              </Link>
            </li>
            <li>
              <Link to="/users" className="nav-link">
                👥 Users
              </Link>
            </li>
            <li>
              <Link to="/wrong" className="nav-link">
                ❌ Wrong
              </Link>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/users" element={<Users />} />
            <Route path="/user/:id" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <footer className="footer">
          <p>Click links above to navigate between pages</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
