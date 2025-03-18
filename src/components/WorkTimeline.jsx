import React from "react";
import Timeline from "@mui/lab/Timeline"
import TerminalIcon from '@mui/icons-material/Terminal';
import InsightsIcon from '@mui/icons-material/Insights';
import GroupsIcon from '@mui/icons-material/Groups';
import TimelineCard from "./TimelineCard";
import work from "../data/Work.json"

function WorkTimeline() {
  return (
    <div id="work" className="pt-16">
      <h1 className="text-xl font-bold text-black dark:text-white pb-4">Work</h1>
      <Timeline sx={{ pl: 0, pr: 0 }} position="alternate">
        {work.work.map((experience) => {
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
              color={experience.color}
            />
          )
        })}
      </Timeline>
    </div>
  )
}

export default WorkTimeline
