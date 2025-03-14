import React from "react";
import Timeline from "@mui/lab/Timeline"
import SchoolIcon from '@mui/icons-material/School';
import TimelineCard from "./TimelineCard";
import education from "../data/Education.json"

function EducationTimeline() {
  return (
    <div id="education" className="py-16">
      <h1 className="text-xl font-bold text-black dark:text-white pb-4">Education</h1>
      <Timeline sx={{ pl: 0, pr: 0 }} position="alternate">
        {education.education.map((experience) => {
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
