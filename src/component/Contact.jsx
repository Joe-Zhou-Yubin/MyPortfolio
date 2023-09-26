import React from "react";
import { Label, Link } from "@ui5/webcomponents-react"; // Import SAP UI5 components
import JoeResume from "./Joe_Resume.pdf";
import JoeCover from "./Joe_Cover_Letter.pdf";

const columnStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
};

export function Contact() {
  return (
    <div style={columnStyle}>
      <h4>Contact me</h4>
      <p>
        <Label> {/* SAP UI5 Label */}
          <i className="fa fa-download" aria-hidden="true"></i>{" "}
          <a
              href={JoeCover}
              download="Joe_Cover_Letter.pdf"
              target="_blank"
              rel="noreferrer"
            >
            Download Cover Letter
          </a>
        </Label>
      </p>
      <p>
        <Label> {/* SAP UI5 Label */}
          <i className="fa fa-download" aria-hidden="true"></i>{" "}
          <a
              href={JoeResume}
              download="Joe_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
            Download Resume
          </a>
        </Label>
      </p>
      <p>
        <Label> {/* SAP UI5 Label */}
          <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
          <Link
            href="mailto:zhou.yubin.joe@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            zhou.yubin.joe@gmail.com
          </Link>
        </Label>
      </p>
      <p>
        <Label> {/* SAP UI5 Label */}
          <i className="fa fa-phone" aria-hidden="true"></i>{" "}
          <Link
            href="tel:+6587817468"
            target="_blank"
            rel="noopener noreferrer"
          >
            +65 8781 7468
          </Link>
        </Label>
      </p>
      <p>
        <Label> {/* SAP UI5 Label */}
          <i className="fa fa-github" aria-hidden="true"></i>{" "}
          <Link
            href="https://github.com/Joe-Zhou-Yubin"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/Joe-Zhou-Yubin
          </Link>
        </Label>
      </p>
      <p>
        <Label> {/* SAP UI5 Label */}
          <i className="fa fa-linkedin" aria-hidden="true"></i>{" "}
          <Link
            href="www.linkedin.com/in/joe-zhou-yubin"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.linkedin.com/in/joe-zhou-yubin
          </Link>
        </Label>
      </p>
      <p>
        <Label> {/* SAP UI5 Label */}
          <i className="fa fa-youtube" aria-hidden="true"></i>{" "}
          <Link
            href="https://www.youtube.com/@JoesDevspace"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.youtube.com/@JoesDevspace
          </Link>
        </Label>
      </p>
      <p>
        <Label> {/* SAP UI5 Label */}
          <i className="fa fa-instagram" aria-hidden="true"></i>{" "}
          <Link
            href="https://www.instagram.com/joedevspace/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.instagram.com/joedevspace/
          </Link>
        </Label>
      </p>
    </div>
  );
}
