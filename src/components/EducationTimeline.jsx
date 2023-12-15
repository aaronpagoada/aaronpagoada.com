import React from "react";
import Timeline from "@mui/lab/Timeline"
import TimelineCard from "./TimelineCard";

function EducationTimeline() {
	return( 
		<div>
			<Timeline position="alternate">
				<TimelineCard 
					time='2015 - 2019'
					activity='Brooklyn Technical High School'
					details="Law and Society Major, Varsity Soccer, World Scholar's Cup"
				/>
				<TimelineCard 
					time='2019 - 2023'
					activity='Macaulay Honors College at John Jay College of Criminal Justice'
					details="Computer Science and Information Security Major, Men's Soccer, Computer Science Society"
				/>
			</Timeline>
		</div>
	)
}

export default EducationTimeline