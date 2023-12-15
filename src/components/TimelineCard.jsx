import React from "react";
import { 
	TimelineConnector,
	TimelineContent,
	TimelineDot, 
	TimelineItem, 
	TimelineOppositeContent, 
	TimelineSeparator 
} from "@mui/lab";
import "../component-styles/TimelineCard.css";

function TimelineCard({ time, activity, details }) {
	return (
		<TimelineItem>
			<TimelineOppositeContent
				sx={{
					margin: "auto 0"
				}}
			>
				{time}
			</TimelineOppositeContent>
			<TimelineSeparator>
				<TimelineConnector />
					<TimelineDot>
						{/* Icon? */}
					</TimelineDot>
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent>
				<p className="card-activity">{activity}</p>
				<p className="card-details">{details}</p>
			</TimelineContent>
		</TimelineItem>
	)
}

export default TimelineCard