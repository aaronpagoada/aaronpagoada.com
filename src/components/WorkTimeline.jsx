import React from "react";
import Timeline from "@mui/lab/Timeline"
import TerminalIcon from '@mui/icons-material/Terminal';
import InsightsIcon from '@mui/icons-material/Insights';
import GroupsIcon from '@mui/icons-material/Groups';
import TimelineCard from "./TimelineCard";

function WorkTimeline(){
  return(
    <Timeline position="alternate">
      <TimelineCard 
        time="2021"
        activity="Software Engineer Intern"
        location="WatchWire"
        expandedTime="Jun 2021 - Aug 2021"
        expandedLocation="New York, NY"
        icon={<TerminalIcon />}
      />
      <TimelineCard 
        time="2022"
        activity="Computer Science & Mathematics Department Peer Mentor"
        location="John Jay College"
        expandedTime="Mar 2022 - Jun 2022"
        expandedLocation="New York, NY"
        icon={<GroupsIcon />}
      />
      <TimelineCard 
        time="2022"
        activity="Software Engineer Intern"
        location="Bowery Farming"
        expandedTime="Jun 2022 - Aug 2022"
        expandedLocation="New York, NY"
        icon={<TerminalIcon />}
      />
      <TimelineCard 
        time="2023"
        activity="Software Engineer Intern"
        location="GameChanger"
        expandedTime="Jun 2023 - Aug 2023"
        expandedLocation="New York, NY"
        icon={<TerminalIcon />}
      />
      <TimelineCard 
        time="2024"
        activity="Data Intern"
        location="Vertex Pharmaceuticals"
        expandedTime="May 2024 - Aug 2024"
        expandedLocation="Boston, MA"
        icon={<InsightsIcon />}
      />
    </Timeline>
  )
}

export default WorkTimeline