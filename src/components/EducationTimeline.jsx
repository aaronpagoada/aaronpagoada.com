import React from "react";
import Timeline from "@mui/lab/Timeline"
import SchoolIcon from '@mui/icons-material/School';
import TimelineCard from "./TimelineCard";
const data = require("../data/Education.json")

function EducationTimeline() {
	return( 
		<div>
			<Timeline position="alternate">
        {data.education.map((experience) => {
          return (
            <TimelineCard
              activity={experience.activity}
              location={experience.school}
              time={experience.time}
              expandedDetails={experience.details}
              expandedLocation={experience.location}
              expandedTime={experience.expandedTime}
              icon={<SchoolIcon />}
              color={experience.color}
            />
          )
        })}
			</Timeline>
		</div>
	)
}

export default EducationTimeline