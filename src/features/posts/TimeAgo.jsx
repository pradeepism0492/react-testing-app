import React from 'react'
import { formatDistanceToNow, parseISO} from 'date-fns'

const TimeAgo = ({timestamp}) => {
    let timeAgo = '';
    if(!timeAgo) {
        const date= parseISO(timestamp);
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`;
        
    }
    console.log('timeafo', timeAgo, timestamp)
  return (
    <span title={timeAgo}>&nbsp;<i>{timeAgo}</i></span>
  )
}

export default TimeAgo