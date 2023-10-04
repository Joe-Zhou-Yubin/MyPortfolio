import React from "react";
import {
  FlexBox,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Card,
  Icon,
  Link,
} from "@ui5/webcomponents-react";
import "font-awesome/css/font-awesome.min.css";
import JoeResume from "./Joe_Resume.pdf";
import JoeCover from "./Joe_Cover_Letter.pdf";

export function Home() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "20px",
  };

  const flexBoxStyle = {
    textAlign: "center",
  };

  const h1Style = {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "5px",
    marginTop: "5px",
  };

  const pStyle = {
    margin: "5px 0", // Adjust the margin between each p element
  };

  const cardStyle = {
    border: "1px solid #ccc", // Border style
    padding: "15px", // Padding around the card content
    borderRadius: "10px", // Rounded corners
    marginBottom: "30px",
    marginLeft: "20px",
    marginRight: "20px",
    width: "500px", // Adjust the card width as needed
  };

  const tileContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  };

  const tileStyle = {
    marginBottom: "20px",
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "40%",
    marginLeft: "auto", // Center-align the first column
    marginRight: "auto", // Center-align the second column
    textAlign: "center",
  };

  const titleCardStyle = {
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "10px",
    width: "1200px",
    textAlign: "center",
    marginBottom: "20px", // Add margin to separate the cards
    backgroundColor: "#f0f0f0", // Background color for the title card
  };

  const resumePdfUrl = "./Joe_Resume.pdf";

  return (
    <div style={containerStyle}>
      <Card style={cardStyle}>
        <FlexBox
          direction={FlexBoxDirection.Column}
          justifyContent={FlexBoxJustifyContent.Center}
          style={flexBoxStyle}
        >
          <h1 style={h1Style}>Joe Zhou Yubin</h1>
          <p style={pStyle}>Full stack Java Developer</p>
          <p style={pStyle}>Working on SAP S4/HANA</p>
          <p style={pStyle}>Attempting SAP BTP Extension Suite Certification</p>
          <p style={pStyle}>
            <a
              href={JoeCover}
              download="Joe_Cover_Letter.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-download" style={{ marginRight: "5px" }}></i>
              Download My Cover Letter
            </a>
          </p>
          <p style={pStyle}>
            <a
              href={JoeResume}
              download="Joe_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-download" style={{ marginRight: "5px" }}></i>
              Download My Resume
            </a>
          </p>

          <p style={pStyle}>
            <Link
              href="https://github.com/Joe-Zhou-Yubin/MyPortfolio"
              target="_blank"
            >
              Website Built using SAP UI5 Documentation (Github Repo)
            </Link>
          </p>
        </FlexBox>
      </Card>
      <Card style={titleCardStyle}>
        <h3>
          <i className="fa fa-star" style={{ marginRight: "10px" }}></i>{" "}
          Technical Skills
        </h3>
      </Card>
      <div style={tileContainerStyle}>
        <Card style={tileStyle}>
          <h3>Frontend</h3>
          <ul>
            <img
              src="data:image/png;base64,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"
              alt="HTML"
              width="40"
              height="40"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1200px-CSS3_logo.svg.png"
              alt="CSS"
              width="40"
              height="40"
            />
            <img
              src="https://www.freepnglogos.com/uploads/javascript/javascript-online-logo-for-website-0.png"
              alt="JavaScript"
              width="40"
              height="40"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              alt="React"
              width="40"
              height="40"
            />
            <img
              src="https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg"
              alt="Angular"
              width="40"
              height="40"
            />
            <img
              src="https://bignerdranch.com/wp-content/uploads/2020/10/1200px-Vue.js_Logo_2.svg_.png"
              alt="Vue"
              width="40"
              height="40"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcVGmVIrzcNyrkFjBolq_PJewILRUrhbcQ&usqp=CAU"
              alt="Fiori"
              width="40"
              height="40"
            />
            <img
              src="data:image/jpeg;base64,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"
              alt="SAP UI5"
              width="40"
              height="40"
            />
            <img
              src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
              alt="Bootstrap"
              width=""
              height="40"
            />
            <img
              src="https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo-thumbnail.png"
              alt="Tailwind"
              width="40"
              height="40"
            />
          </ul>
        </Card>

        <Card style={tileStyle}>
          <h3>Backend</h3>
          <ul>
            <img
              src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
              alt="Java"
              width="40"
              height="40"
            />
            <img
              src="https://pluralsight2.imgix.net/paths/images/corespring-f9a00f4516.png"
              alt="Spring"
              width="40"
              height="40"
            />
            <img
              src="https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png"
              alt="Springboot"
              width="40"
              height="40"
            />
            <img
              src="data:image/png;base64,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"
              alt="Express JS"
              width="40"
              height="40"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png "
              alt="Python"
              width="40"
              height="40"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png"
              alt="Node JS"
              width="50"
              height="40"
            />
          </ul>
        </Card>
        <Card style={tileStyle}>
          <h3>Database</h3>
          <ul>
            <img
              src="https://w7.pngwing.com/pngs/244/430/png-transparent-microsoft-sql-server-sql-server-management-studio-database-server-microsoft-angle-text-triangle.png"
              alt="SQL Server"
              width="40"
              height="40"
            />
            <img
              src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png"
              alt="Mongo DB"
              width="40"
              height="40"
            />
            <img
              src="https://aety.io/wp-content/uploads/2016/11/mysql-logo.png"
              alt="MY SQL"
              width="40"
              height="40"
            />
            <img
              src="https://w7.pngwing.com/pngs/173/36/png-transparent-postgresql-logo-computer-software-database-open-source-s-text-head-snout.png"
              alt="PostgreSQL"
              width="40"
              height="40"
            />
            <img
              src="https://w7.pngwing.com/pngs/246/288/png-transparent-firebase-hd-logo-thumbnail.png"
              alt="Firebase"
              width="40"
              height="40"
            />
            <img
              src="https://cloudwuerdig.com/wp-content/uploads/2020/12/New-Project-9-e1608548410463.png"
              alt="SAP HANA Cloud"
              width="40"
              height="40"
            />
          </ul>
        </Card>
        <Card style={tileStyle}>
          <h3>Software</h3>
          <ul>
            <img
              src="data:image/png;base64,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"
              alt="SAP BTP BAS"
              width="40"
              height="40"
            />
            <img
              src="https://avatars.githubusercontent.com/u/621746?s=280&v=4"
              alt="Cloud Foundry CLI"
              width="40"
              height="40"
            />
            <img
              src="https://global.discourse-cdn.com/business7/uploads/appgyver2/original/2X/0/0054b674f7277cac193a36e4459c4452a7f80f1f.png"
              alt="SAP Build"
              width="40"
              height="40"
            />
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="Github"
              width="40"
              height="40"
            />
            <img
              src="data:image/png;base64,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"
              alt="Eclipse IDE"
              width=""
              height="40"
            />
          </ul>
        </Card>
      </div>
    </div>
  );
}
