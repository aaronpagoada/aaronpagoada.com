import React from "react";
import Timeline from "@mui/lab/Timeline"
import TimelineCard from "./TimelineCard";

function EducationTimeline() {
	return( 
		<div>
			<Timeline position="alternate">
				<TimelineCard 
					time='2019'
					activity='Graduated High School'
					location="Brooklyn Technical High School"
					expandedTime="Sep 2015 - Jun 2019"
					expandedLocation="New York, NY"
					expandedDetails={'Varsity Soccer\nWorld Scholar\'s Cup'}
				/>
				<TimelineCard 
					time='2023'
					activity='Graduated with B.S. in Computer Science and Information Security'
					location="Macaulay Honors College at John Jay College"
				/>
			</Timeline>
		</div>
	)
}

export default EducationTimeline