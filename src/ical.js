import moment from 'moment' 
import ical from 'ical-generator'

const GetCalendar = (events, options={}) => {
  
  // Create base calendar 
  const cal = ical({
    prodId: '//Haagse Makers//Community calendar//NL',
    domain: 'haagsemakers.nl', 
    name: 'Haagsemakers Community Calendar',
    url: 'https://haagsemakers.nl/community-calendar.ics',
    scale: 'gregorian',
    timezone: 'Europe/Amsterdam',
    ttl: 60*60*24, 
  });

  // Create events 
  events.map((event,index) => {
    cal.createEvent({
      uid: event.id,
      start: moment(event.start),
      end: moment(event.end),
      summary: event.summary,
      description: event.description,
      location: event.location,
      url: event.url
    }); 
  })

  return cal.toString()
}

export {
  GetCalendar
}