import React from "react";
import Timeline from "@mui/lab/Timeline"
import TerminalIcon from '@mui/icons-material/Terminal';
import InsightsIcon from '@mui/icons-material/Insights';
import GroupsIcon from '@mui/icons-material/Groups';
import TimelineCard from "./TimelineCard";
const data = require("../data/Work.json")

function WorkTimeline(){
  return(
    <Timeline position="alternate">
      {data.work.map((experience) => {
        let workIcon;
        
        switch (experience.icon) {
          case "insights":
            workIcon = <InsightsIcon />
            break
          case "groups":
            workIcon = <GroupsIcon />
            break
          case "terminal":
            workIcon = <TerminalIcon />
            break
        }

        return (
          <TimelineCard 
            activity={experience.position}
            location={experience.company}
            time={experience.time}
            expandedTime={experience.expandedTime}
            expandedLocation={experience.location}
            expandedDetails={experience.details}
            icon={workIcon}
          />
        )
      })}
    </Timeline>
  )
}

export default WorkTimeline