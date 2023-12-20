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


function TimelineCard({ time, activity, location, expandedTime, expandedLocation, expandedDetails, icon }) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<TimelineItem onClick={() => setIsOpen(!isOpen)}>
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
					<TimelineDot>
						{icon}
					</TimelineDot>
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent>
				{
					!isOpen &&
					<div>
						<Typography variant="h6">{activity}</Typography>
						<Typography color="text.secondary" variant="subtitle2">{location}</Typography>
					</div>
				}
				{
					isOpen &&
					<div>
						<Typography variant="h6">{activity}</Typography>
						<Typography color="text.secondary" variant="subtitle2">{location}</Typography>
						<Typography color="text.secondary" variant="caption">{expandedDetails}</Typography>
					</div>
				}
			</TimelineContent>
		</TimelineItem>
	)
}

export default TimelineCard