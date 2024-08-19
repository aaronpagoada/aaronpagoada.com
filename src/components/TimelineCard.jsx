import React, { useState } from "react";
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
      sx={{ ":hover": { cursor: "pointer" }}}
    >
			<TimelineOppositeContent
				sx={{
					margin: "auto 0"
				}}
			>
				{
					!isOpen && 
					<Typography color="text.secondary" variant="caption">{time}</Typography>
				}
				{
					isOpen && 
					<div>
						<Typography color="text.secondary" variant="caption">{time}</Typography>
						<Typography variant="body1">{expandedTime}</Typography>
						<Typography color="text.secondary" variant="caption">{expandedLocation}</Typography>
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
						<Typography variant="h6">{location}</Typography>
						<Typography color="text.secondary" variant="subtitle2">{activity}</Typography>
					</div>
				}
				{
					isOpen &&
					<div>
						<Typography variant="h6">{location}</Typography>
						<Typography color="text.secondary" variant="subtitle2">{activity}</Typography>
						{expandedDetails.map((detail) => {
              return (
                <Typography 
                  color="text.secondary" 
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