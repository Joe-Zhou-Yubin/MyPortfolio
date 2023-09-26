import React from "react";
import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Link,
  LinkDesign,
} from "@ui5/webcomponents-react";
import JoeLogo from "./images/JoeLogo.png";
import 'font-awesome/css/font-awesome.min.css';


export function NavBar() {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
    marginRight: "20px",
    transition: "font-size 0.3s",
  };

  const logoStyle = {
    fontSize: "16px", // Adjust the size as needed
  };

  return (
    <FlexBox
      direction={FlexBoxDirection.Row}
      justifyContent={FlexBoxJustifyContent.SpaceBetween}
      alignItems={FlexBoxAlignItems.Center}
      style={{ backgroundColor: "black", padding: "20px" }}
    >
      <div className="navbar-brand">
        <Link href="/" design={LinkDesign.Plain}>
          <img
            src={JoeLogo}
            alt="Logo"
            style={{ width: "45px", height: "auto", marginRight: "10px" }}
          />
        </Link>
        <span
          design={LinkDesign.Plain}
          style={{ color: "white", marginRight: "20px" }}
        >
          Joe's Website (Built with SAP UI5)
        </span>
      </div>
      <nav>
        <Link
          href="/home"
          design={LinkDesign.Plain}
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.fontSize = "1.2em")}
          onMouseOut={(e) => (e.target.style.fontSize = "15px")}
        >
          Home
        </Link>
        
        <Link
          href="/contact"
          design={LinkDesign.Plain}
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.fontSize = "1.2em")}
          onMouseOut={(e) => (e.target.style.fontSize = "15px")}
        >
          Contact
        </Link>
        <span
          design={LinkDesign.Plain}
          style={{ color: "white", marginRight: "20px" }}
        >
          |
        </span>
        <Link
          href="/workexperience"
          design={LinkDesign.Plain}
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.fontSize = "1.2em")}
          onMouseOut={(e) => (e.target.style.fontSize = "15px")}
        >
          Experience
        </Link>
        <Link
          href="/projects"
          design={LinkDesign.Plain}
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.fontSize = "1.2em")}
          onMouseOut={(e) => (e.target.style.fontSize = "15px")}
        >
          Projects
        </Link>
        <Link
          href="/education"
          design={LinkDesign.Plain}
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.fontSize = "1.2em")}
          onMouseOut={(e) => (e.target.style.fontSize = "15px")}
        >
          Education
        </Link>
        {/* <Link
          href="/blog"
          design={LinkDesign.Plain}
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.fontSize = "1.2em")}
          onMouseOut={(e) => (e.target.style.fontSize = "15px")}
        >
          Blog
        </Link> */}
        <span
          design={LinkDesign.Plain}
          style={{ color: "white", marginRight: "20px" }}
        >
          |
        </span>
        <a
          href="https://github.com/Joe-Zhou-Yubin"
          style={{ ...linkStyle, ...logoStyle }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a
          href="www.linkedin.com/in/joe-zhou-yubin"
          style={{ ...linkStyle, ...logoStyle }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a
          href="mailto:zhou.yubin.joe@gmail.com"
          style={{ ...linkStyle, ...logoStyle }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-envelope" aria-hidden="true"></i>
        </a>
      </nav>
    </FlexBox>
  );
}
