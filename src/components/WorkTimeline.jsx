import React from "react";
import Timeline from "@mui/lab/Timeline"
import TimelineCard from "./TimelineCard";

function WorkTimeline(){
  return(
    <Timeline position="alternate">
      <TimelineCard 
        time="2021"
        activity="Software Engineer Intern"
        location="WatchWire"
      />
      <TimelineCard 
        time="2022"
        activity="Computer Science & Mathematics Department Peer Mentor"
        location="John Jay College"
      />
      <TimelineCard 
        time="2022"
        activity="Software Engineer Intern"
        location="Bowery Farming"
      />
      <TimelineCard 
        time="2023"
        activity="Software Engineer Intern"
        location="GameChanger"
      />
    </Timeline>
  )
}

export default WorkTimeline