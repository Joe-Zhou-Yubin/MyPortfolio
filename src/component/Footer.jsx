import React from "react";
import 'font-awesome/css/font-awesome.min.css';

export function Footer() {
  const footerStyle = {
    backgroundColor: "#f4f4f4",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
  };

  const columnStyle = {
    flex: "1",
    marginLeft: "40px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "black",
    transition: "color 0.3s",
  };
  const listItemStyle = {
    marginBottom: "px", // Adjust the margin as needed
  };

  return (
    <div style={footerStyle}>
      <div style={columnStyle}>
        <h4>Pages</h4>
        <ul style={{ listStyleType: "none", padding: "0" }}>
          <li style={listItemStyle}>
            <a href="/home" style={linkStyle}>
              Home
            </a>
          </li>
          <li style={listItemStyle}>
            <a href="/contact" style={linkStyle}>
              Contact
            </a>
          </li>
          <li style={listItemStyle}>
            <a href="/workexperience" style={linkStyle}>
              Experience
            </a>
          </li>
          <li style={listItemStyle}>
            <a href="/projects" style={linkStyle}>
              Projects
            </a>
          </li>
        </ul>
      </div>
      <div style={columnStyle}>
        <h4>Contact me</h4>
        <p>
          <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
          <a
            href="mailto:zhou.yubin.joe@gmail.com"
            style={linkStyle}
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Recommended for security
          >
            zhou.yubin.joe@gmail.com
          </a>
        </p>
        <p>
          <i className="fa fa-phone" aria-hidden="true"></i>{" "}
          <a
            href="tel:+6587817468"
            style={linkStyle}
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Recommended for security
          >
            +65 8781 7468
          </a>
        </p>
        <p>
          <i className="fa fa-github" aria-hidden="true"></i>{" "}
          <a
            href="https://github.com/Joe-Zhou-Yubin"
            style={linkStyle}
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Recommended for security
          >
            https://github.com/Joe-Zhou-Yubin
          </a>
        </p>
        <p>
          <i className="fa fa-linkedin" aria-hidden="true"></i>{" "}
          <a
            href="www.linkedin.com/in/joe-zhou-yubin"
            style={linkStyle}
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Recommended for security
          >
            www.linkedin.com/in/joe-zhou-yubin
          </a>
        </p>
        <p>
          <i className="fa fa-youtube" aria-hidden="true"></i>{" "}
          <a
            href="https://www.youtube.com/@JoesDevspace"
            style={linkStyle}
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Recommended for security
          >
            https://www.youtube.com/@JoesDevspace
          </a>
        </p>
        <p>
          <i className="fa fa-instagram" aria-hidden="true"></i>{" "}
          <a
            href="https://www.instagram.com/joedevspace/"
            style={linkStyle}
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Recommended for security
          >
            https://www.instagram.com/joedevspace/
          </a>
        </p>
      </div>
    </div>
  );
}
