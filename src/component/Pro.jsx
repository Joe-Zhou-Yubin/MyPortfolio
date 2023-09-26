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
  marginTop:"20px",
  marginBottom: "20px", // Add margin to separate the cards
  backgroundColor: "#f0f0f0", // Background color for the title card
};
const linkStyle = {
  marginRight: "20px", // Add spacing between each link
  fontSize: "inherit", // Use the font size of the parent element
  transition: "font-size 0.3s", // Add a smooth transition for font size changes
};

export function Pro() {
  return (
    <div style={containerStyle}>
      <div style={cardContainerStyle}>
        <Card style={titleCardStyle}> {/* Title Card */}
          <h3>
            <Link href="/workexperience" style={linkStyle}>
              <i className="fa fa-user" style={{ marginRight: "10px" }}></i> Work Experience
            </Link>
            </h3>
        </Card>
        <Card style={proCardStyle}>
          <h3>Avensys Consulting Full-stack Java Developer (Jul 2023 - Sep 2023)</h3>
          <List>
            <StandardListItem>
              Part of Hire, Train and Deploy program, given video resources to self-learn java full-stack development
            </StandardListItem>
            <StandardListItem>
              Completed 3 months learning course in 1 month and subsequent OJT projects in another month independently
            </StandardListItem>
            <StandardListItem>
              OJT projects established base code used for internal RTS project
            </StandardListItem>
          </List>
        </Card>

        <Card style={proCardStyle}>
          <h3>Commando Formation (Jan 2022 - May 2023)</h3>
          <List>
            <StandardListItem>
              Personal assistant to officers during NS, overlooking servicemen courses and finance matters            
            </StandardListItem>
            <StandardListItem>
              Planned and executed multiple camp-wide events ranging from quaterly birthday celebrations, award presentations and chief commando ceremony
            </StandardListItem>
            <StandardListItem>
              Put in place tracking and deadline systems to streamline the nomination of regulars for external courses and dissemination of course materials accurately
            </StandardListItem>
            <StandardListItem>
              Self-taught Excel organisation and MINDEF EHR (SAP ECC) system functions to keep work accountable and minimise human errors
            </StandardListItem>
          </List>
        </Card>

        <Card style={proCardStyle}>
          <h3>Suntec Convention Centre (Jan 20 - Mar 20)</h3>
          <List>
            <StandardListItem>
              Internship under marketing manager for 3 months pre-covid lockdown            
            </StandardListItem>
            <StandardListItem>
              Managed Suntec Convention Centre social media by creating post materials for over 40 events and public promotions
            </StandardListItem>
            <StandardListItem>
              Assisted with preparations for annual stakeholder meeting and planning registration for New Year Gala Dinner      
            </StandardListItem>
          </List>
        </Card>
      </div>
    </div>
  );
}
