import React from "react";
import { Card, List, StandardListItem, Link } from "@ui5/webcomponents-react";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const cardContainerStyle = {
  display: "flex",
  flexDirection: "column", // Arrange cards vertically
  alignItems: "center",
};

const proCardStyle = {
  border: "1px solid #ccc",
  padding: "15px",
  borderRadius: "10px",
  width: "1200px",
  textAlign: "center",
  marginBottom: "20px", // Add margin to separate the cards
};

const titleCardStyle = {
  border: "1px solid #ccc",
  padding: "15px",
  borderRadius: "10px",
  width: "1200px",
  textAlign: "center",
  marginTop: "20px",
  marginBottom: "20px", // Add margin to separate the cards
  backgroundColor: "#f0f0f0", // Background color for the title card
};

const linkStyle = {
  marginRight: "20px", // Add spacing between each link
  fontSize: "inherit", // Use the font size of the parent element
  transition: "font-size 0.3s", // Add a smooth transition for font size changes
};

export function Projects() {
  return (
    <div style={containerStyle}>
      <div style={cardContainerStyle}>
        <Card style={titleCardStyle}> {/* Title Card */}
          <h3>
          <Link href="/projects" style={linkStyle}>
              <i className="fa fa-file" style={{ marginRight: "10px" }}></i> Work Projects
            </Link>
          </h3>
        </Card>

        <Card style={proCardStyle}>
          <h3>Project 1: Social Media Platform (Springboot, React, Firebase)</h3>
          <List>
            <StandardListItem>
                <Link href="https://github.com/Joe-Zhou-Yubin/AvensysSocialMedia" target="_blank" style={linkStyle}>
                  GitHub Repository
                </Link>
                <Link href="https://www.figma.com/file/YfYu1WUwFuruReAYNrA1xN/Social-Media?type=whiteboard&node-id=0%3A1&t=Yoq7M2dTy3yFC22v-1" target="_blank" style={linkStyle}>
                  Figma Design
                </Link>
                <Link href="https://www.canva.com/design/DAFqjvZAhEU/7J0XWTAu3Q5Bi8rJV5s54g/view?utm_content=DAFqjvZAhEU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" style={linkStyle}>
                  Presentation Deck
                </Link>
            </StandardListItem>
            <StandardListItem>
              Social Media Platform that allows users to post in a global feed, and administrative function to moderate user activity
            </StandardListItem>
            <StandardListItem>
              Milestone project to consolidate my Full-stack learning and execute a small-scale project in full
            </StandardListItem>
            <StandardListItem>
              Learnt Database linking, Frontend Backend HTTP Requests and how to plan a project workflow
            </StandardListItem>
          </List>
        </Card>

        <Card style={proCardStyle}>
          <h3>Project 2: PO Manager (Springboot, React, MongoDB)</h3>
          <List>
            <StandardListItem>
              <Link href="https://github.com/Joe-Zhou-Yubin/POManager" target="_blank" style={linkStyle}>
                GitHub Repository
              </Link>
              <Link href="https://www.figma.com/file/KbRHrzfldT7xVDYmXZzDf0/PO-Manager?type=whiteboard&node-id=0%3A1&t=cfmX9YicvPAzO5a3-1" target="_blank" style={linkStyle}>
                  Figma Design
                </Link>
                <Link href="https://www.canva.com/design/DAFrkZAQsg4/OPuCdVXN14aeZTy6QSdqJQ/view?utm_content=DAFrkZAQsg4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#" target="_blank" style={linkStyle}>
                  Presentation Deck
                </Link>
            </StandardListItem>
            <StandardListItem>
              PO Manager that provides users with different functionalities to track purchase orders
            </StandardListItem>
            <StandardListItem>
              Used JWT token authentication and backend Spring security to create session-based user login
            </StandardListItem>
            <StandardListItem>
              Implemented JWT tokenization, MongoDB repository, DB design and streamlining backend development with Postman
            </StandardListItem>
          </List>
        </Card>

        <Card style={proCardStyle}>
          <h3>Project 3: Project/ Bug Manager (Springboot, Angular, SQL Server)</h3>
          <List>
            <StandardListItem>
              <Link href="https://github.com/Joe-Zhou-Yubin/ProjectManager" target="_blank" style={linkStyle}>
                GitHub Repository
              </Link>
              <Link href="https://www.figma.com/file/VD8oIRaxwMUKaIb7Ot9NNy/Project-Management?type=whiteboard&node-id=0%3A1&t=coKV2GMuicBEnnat-1" target="_blank" style={linkStyle}>
                  Figma Design
                </Link>
                <Link href="https://www.canva.com/design/DAFrk7zS6aA/DKRECCkms3rdemG9zIPWSw/view?utm_content=DAFrk7zS6aA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" style={linkStyle}>
                  Presentation Deck
                </Link>
            </StandardListItem>
            <StandardListItem>
              Project/ Bug Manager platform that utilises relation tables to provide users with a basic 3 tier project management system
            </StandardListItem>
            <StandardListItem>
              Project used to consolidate learning on angular and explore SQL Server relation database structure
            </StandardListItem>
            <StandardListItem>
              Learnt SQL Server Relation Database Design, Angular frontend development and streamlining CRUD function using
              custom UUIDs and ID identifiers
            </StandardListItem>
          </List>
        </Card>

        <Card style={proCardStyle}>
          <h3>Project 4: CV Parser (Springboot, MongoDB, MySQL, ChatGPT API)</h3>
          <List>
            <StandardListItem>
              <Link href="https://github.com/Joe-Zhou-Yubin/CVParser" target="_blank" style={linkStyle}>
                GitHub Repository
              </Link>
              <Link href="https://www.figma.com/file/jAznLiXhqA1Id0POUyrfvQ/CVParser?type=whiteboard&node-id=0%3A1&t=1htySO9gNRYoTjB5-1" target="_blank" style={linkStyle}>
                  Figma Design
                </Link>
                <Link href="https://www.canva.com/design/DAFsgxgwJ8M/G0XjRu26Sr-Y8-_Y0BDjvA/view?utm_content=DAFsgxgwJ8M&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" style={linkStyle}>
                  Presentation Deck
                </Link>
            </StandardListItem>
            <StandardListItem>
              Fully Built Backend capable of receiving and parsing multiple resumes through ChatGPT API to filter candidate information
            </StandardListItem>
            <StandardListItem>
              Implemented Multithreading and Chunking to receive multiple resumes and ways to bypass ChatGPT 15,000-character call
              limit
            </StandardListItem>
            <StandardListItem>
              MongoDB Storage for documents, while MySQL relation database to store user and candidate information
            </StandardListItem>
          </List>
        </Card>

        <Card style={proCardStyle}>
          <h3>Project 5: Customer Order (Springboot, MS SQL, React)</h3>
          <List>
            <StandardListItem>
              <Link href="https://github.com/Joe-Zhou-Yubin/CustomerOrder" target="_blank" style={linkStyle}>
                GitHub Repository
              </Link>
              <Link href="https://www.figma.com/file/7YnSvMMdWOZzN4FUtIZoCd/Customer-Order-Management?type=whiteboard&node-id=0%3A1&t=sX6OfaKdEBfjlyKt-1" target="_blank" style={linkStyle}>
                  Figma Design
                </Link>
                <Link href="https://www.canva.com/design/DAFuOfOPFCA/PhGXnAwNd9kytqClGcwm0Q/view?utm_content=DAFuOfOPFCA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" style={linkStyle}>
                  Presentation Deck
                </Link>
            </StandardListItem>
            <StandardListItem>
              Customer Order to allow for tracking of customer orders with filtering, pagination and role-based access
            </StandardListItem>
            <StandardListItem>
              OJT passing requirement, with full stack implemented within 5 days of work
            </StandardListItem>
            <StandardListItem>
              Pagination on backend and filtering through backend server for easy-to-access user experience
            </StandardListItem>
            <StandardListItem>
              Backend and Frontend validation for user authentication and authorization
            </StandardListItem>
          </List>
        </Card>
        <Card style={titleCardStyle}> {/* Title Card */}
        <h3>
            <Link href="/projects" style={linkStyle}>
              <i className="fa fa-clipboard" style={{ marginRight: "10px" }}></i> Personal Projects
            </Link>
          </h3>
        </Card>
        {/* Personal Project 1 */}
        <Card style={proCardStyle}>
          <h3>Automated Expense Management System (Springboot, React, MS SQL, ChatGPT API)</h3>
          <List>
            <StandardListItem>
              <Link href="https://github.com/Joe-Zhou-Yubin/AEMS" target="_blank" style={linkStyle}>
                GitHub Repository
              </Link>
              <Link href="https://www.figma.com/file/86HfjZY7STSo2dC9thJ03Z/WTH?type=whiteboard&node-id=122%3A561&t=q0bqNfh7naCAzcrk-1" target="_blank" style={linkStyle}>
                Figma Design
              </Link>
              <Link href="https://www.canva.com/design/DAFssrApkRE/qWo_6lp4sAiGyc57uiV9JQ/view?utm_content=DAFssrApkRE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" style={linkStyle}>
                Presentation Deck
              </Link>
              <Link href="https://devpost.com/software/automated-expense-management-system?ref_content=user-portfolio&ref_feature=in_progress" target="_blank" style={linkStyle}>
                Hackathon Submission
              </Link>
            </StandardListItem>
            <StandardListItem>
              SUTD Hackathon submission for their 2023 AI and IOT category.
            </StandardListItem>
            <StandardListItem>
              Project prototype implements full stack and one instance of ChatGPT API function as a chatbot for users to have conversations.
            </StandardListItem>
            <StandardListItem>
              Project is built for scalability and is able to implement additional user features like charts for better visualization for data, further instances of ChatGPT API to predict budget and give user suggestions on overspending or budget changes.
            </StandardListItem>
          </List>
        </Card>
        

        {/* Personal Project 2 */}
        <Card style={proCardStyle}>
          <h3>Online Locker/ Pigeonhole Concept (Springboot, React, Firebase)</h3>
          <List>
            <StandardListItem>
              <Link href="#" target="_blank" style={linkStyle}>
                GitHub Repository
              </Link>
            </StandardListItem>
            <StandardListItem>
              Basic responsive page that allows users to store different media in different containers that would require a password to enter.
            </StandardListItem>
            <StandardListItem>
              Stack has several features, including an overall admin feature to unlock or lock all lockers.
            </StandardListItem>
            <StandardListItem>
              Emulates real-life examples of free lockers at Tampines Hub Running Track, where users are also given options to unlock via a unique password or by locker number.
            </StandardListItem>
          </List>
        </Card>

        {/* Personal Project 3 */}
        <Card style={proCardStyle}>
          <h3>BTP CAPM Crud Template (Nodejs, Fiori apps, CAPM, HANA db)</h3>
          <List>
            <StandardListItem>
              <Link href="https://github.com/Joe-Zhou-Yubin/BTP-CAPM-crud" target="_blank" style={linkStyle}>
                GitHub Repository
              </Link>
            </StandardListItem>
            <StandardListItem>
              Simplified template created using CAPM project that can instantly achieve CRUD capabilities in a table/object format.
            </StandardListItem>
            <StandardListItem>
              Template allows users to easily create a full-stack CRUD page in a few command line functions.
            </StandardListItem>
            <StandardListItem>
              Developer-friendly way to approach learning of CAPM through a simple template example of the basics of CAPM projects.
            </StandardListItem>
          </List>
        </Card>

        {/* Personal Project 4 */}
        <Card style={proCardStyle}>
          <h3>Discord Attendance Bot (Quality of Life focus - Python)</h3>
          <List>
            <StandardListItem>
              Discord bot capable of communicating with Google Sheets database to streamline attendance taking and many other features.
            </StandardListItem>
            <StandardListItem>
              Bot utilizes discord.py API to allow members of the server to use only 1 command to call in attendance for weekly meetings, set custom reminders or establish point systems for activities.
            </StandardListItem>
            <StandardListItem>
              Information is then logged into Google Sheets using gspread.py API for database storage and administrative use.
            </StandardListItem>
          </List>
        </Card>

        {/* Personal Project 5 */}
        <Card style={proCardStyle}>
          <h3>Advanced Image Recognition Macro Bot (Python)</h3>
          <List>
            <StandardListItem>
              Python bot capable of comparing images taken real-time to sample images and establish a confidence value.
            </StandardListItem>
            <StandardListItem>
              Bot utilizes numpy.py and matplotlib.py API to screen capture and compare desktop image to stored image and execute a command if confidence level is high enough.
            </StandardListItem>
            <StandardListItem>
              Utilized bot in Albion Online, an MMORPG game I played during the lockdown and to automate fishing since it can be repetitive and boring.
            </StandardListItem>
          </List>
        </Card>

        {/* Personal Project 6 */}
        <Card style={proCardStyle}>
          <h3>Virtual Store in MMORPG/ Open World Games</h3>
          <List>
            <StandardListItem>
              Established popular in-game vending stores in games like Growtopia and Albion Online from 2018-2019.
            </StandardListItem>
            <StandardListItem>
              Managed day-to-day operations of shops, utilizing macro programs to check stock, and Excel sheets to track product count.
            </StandardListItem>
            <StandardListItem>
              Established a supply chain network of 5 teams consisting of up to 25 people at its peak, stocking 300 different items daily.
            </StandardListItem>
            <StandardListItem>
              Stock check system was capable of generating gross income/profit statements with a 10% margin of error due to market fluctuation.
            </StandardListItem>
            <StandardListItem>
              Passed down the system to friends in-game for them to better manage their shops and have an accurate way of calculating profits.
            </StandardListItem>
          </List>
        </Card>
      </div>
    </div>
  );
}
