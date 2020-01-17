import moment from 'moment' 
import ical from 'ical-generator'

const GetCalendar = (events, options) => {
  
  const { prodId, domain, name, url, scale, timezone, ttl } = options.calendar; 

  // Create base calendar 
  const cal = ical({
    prodId,
    domain, 
    name,
    url,
    scale,
    timezone,
    ttl
  });

  // Create events 
  events.map((event) => {
    cal.createEvent({
      uid         : event[ options.event.uid],
      start       : moment(event[ options.event.start]),
      end         : moment(event[ options.event.end]),
      summary     : event[ options.event.summary],
      description : event[ options.event.description],
      location    : event[ options.event.location],
      url         : event[ options.event.url]
    }); 
  })

  return cal.toString()
}

export {
  GetCalendar
}