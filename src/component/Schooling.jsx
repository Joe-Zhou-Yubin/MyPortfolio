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

export function Schooling() {
  return (
    <div style={containerStyle}>
      <div style={cardContainerStyle}>
        <Card style={titleCardStyle}> {/* Title Card */}
          <h3>
            <Link href="/education" style={linkStyle}>
              <i className="fa fa-graduation-cap" style={{ marginRight: "10px" }}></i> Accepted Into Singapore Management University Information Systems 2024
            </Link>
          </h3>
        </Card>
        <Card style={titleCardStyle}> {/* Title Card */}
          <h3>
            <Link href="/education" style={linkStyle}>
              <i className="fa fa-graduation-cap" style={{ marginRight: "10px" }}></i> Dunman High School (Secondary and Junior College, 2016 – 2021)
            </Link>
          </h3>
        </Card>
        <Card style={proCardStyle}>
          <h3>Lion Dance Chairperson</h3>
          <List>
            <StandardListItem>
              Led and choreographed milestone performances including annual CNY celebrations and Sam Goi Factory opening
            </StandardListItem>
            <StandardListItem>
              Reignited interest in performing arts within the school, leading to a troupe size of 20 at the end of servitude
            </StandardListItem>
            <StandardListItem>
              Represented Dunman High School in multiple external performances for alumni and Australian Ministry of Education Delegation in 2018
            </StandardListItem>
          </List>
        </Card>

        <Card style={proCardStyle}>
          <h3>Scouts Patrol Leader </h3>
          <List>
            <StandardListItem>
              Initiated archiving practice to take photos during CCA and digitalize old photos contributed by alumni, leading to a large archive of photos and videos dating back from 1970s
            </StandardListItem>
            <StandardListItem>
              Started and co-led the creation of BlogSpot to document weekly CCA sessions and serve as an archive for future generations
            </StandardListItem>
            <StandardListItem>
              Represented Singapore in both regional and international scouting events like the 1st ASEAN Seaboree 2019 and 1st Korean online Jamboree 2021
            </StandardListItem>
            <StandardListItem>
              Overall-in-charge for Scouts and Guides CCA Exhibition 2019, leading over 200 participating members and saw an increase of 52 members across both CCAs
            </StandardListItem>
            <StandardListItem>
              Achieved the first Chief Commissioners award in the past 15 years within the troop and continued to mentor 5 awardees the following year
            </StandardListItem>
          </List>
        </Card>

        <Card style={proCardStyle}>
          <h3>Uniformed Group Council Chairperson </h3>
          <List>
            <StandardListItem>
              Initiated online CCA during lockdown and utilized resources like educational games and escape rooms to engage juniors
            </StandardListItem>
            <StandardListItem>
              Planned and executed Uniform Group Week which promoted uniform group CCAs and brought together more than 400 students in activities as the first large scale post pandemic school activity
            </StandardListItem>
            <StandardListItem>
              Received President Scout Award in 2021 at the Istana, recognizing pinnacle achievement of leadership experience, hard skills, and service to the community
            </StandardListItem>
          </List>
        </Card>
        
        <Card style={proCardStyle}>
          <h3>Mass Communication Society member </h3>
          <List>
            <StandardListItem>
            Researched and edited 10 weekly news episodes over 3 months in partnership with bilingual department to report on current issues during covid lockdown
            </StandardListItem>
            <StandardListItem>
              Filmed and interviewed alumni and key stakeholders of the school for 65th anniversary commemorative video            </StandardListItem>
            <StandardListItem>
            Self-learnt video editing and filmography            
            </StandardListItem>
          </List>
        </Card>
      </div>
    </div>
  );
}
