import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { Typography } from "@mui/material";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from "@mui/lab";


function TimelineCard({ time, activity, location, expandedTime, expandedLocation, expandedDetails, icon, color }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <TimelineItem
      onClick={() => setIsOpen(!isOpen)}
      sx={{ ":hover": { cursor: "pointer" }, pl: 0, pr: 0 }}
    >
      <TimelineOppositeContent
        sx={{
          margin: "auto 0"
        }}
      >
        {
          !isOpen &&
          <Typography className="text-stone-800 dark:text-white" variant="caption">{time}</Typography>
        }
        {
          isOpen &&
          <div>
            <Typography className="text-stone-800 dark:text-white" variant="caption">{time}</Typography>
            <Typography className="text-stone-800 dark:text-white" variant="body1">{expandedTime}</Typography>
            <Typography className="text-stone-800 dark:text-white" variant="caption">{expandedLocation}</Typography>
          </div>
        }
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot sx={{ backgroundColor: `${color}` }}>
          {icon}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        {
          !isOpen &&
          <div>
            <Typography className="text-stone-800 dark:text-white" variant="h6">{location}</Typography>
            <Typography className="text-stone-800 dark:text-white" variant="subtitle2">{activity}</Typography>
          </div>
        }
        {
          isOpen &&
          <div>
            <Typography className="text-stone-800 dark:text-white" variant="h6">{location}</Typography>
            <Typography className="text-stone-800 dark:text-white" variant="subtitle2">{activity}</Typography>
            {expandedDetails.map((detail) => {
              return (
                <Typography
                  className="text-stone-800 dark:text-white"
                  variant="caption"
                  display="block"
                >
                  {`• ${detail}`}
                </Typography>
              )
            })}
          </div>
        }
      </TimelineContent>
    </TimelineItem>
  )
}

export default TimelineCard
