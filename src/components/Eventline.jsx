import { Timeline } from "@mui/lab"
import EventlineCard from "./EventlineCard"
import SchoolIcon from '@mui/icons-material/School';
import TerminalIcon from '@mui/icons-material/Terminal';
import InsightsIcon from '@mui/icons-material/Insights';
import GroupsIcon from '@mui/icons-material/Groups';

function Eventline({ items, title }) {
  console.log(items)

  return (
    <div className="text-stone-800 dark:text-white">
      {title}
      <Timeline position="alternate">
        {items.map((experience) => {
          return (
            <EventlineCard
              activity={experience.activity}
              location={experience.school}
              time={experience.time}
              expandedDetails={experience.details}
              expandedLocation={experience.location}
              expandedTime={experience.expandedTime}
              icon={experience.icon}
              color={experience.color}
            />
          )
        })}
      </Timeline>
    </div>
  )
}

export default Eventline
