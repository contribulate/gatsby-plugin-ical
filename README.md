# gatsby-plugin-ical
Create an iCalendar feed for the events in your GatsbyJS site. 

_NOTE: This plugin is an early release. It works, but is relying on predefined node specifications. This plugin is not suitable for production yet, unless your event-node matches. `_

## Install

`npm install --save gatsby-plugin-ical`

### Dependencies (optional)
This plugin makes use of MomentJS for data handling. 
Under the hood ical-generator is used for creating the iCalendar file. 

## Available options
```javascript
// In your gatsby-config.js
plugins: [{
    resolve: `gatsby-plugin-ical`,
    options: {
        filename: 'calendar.ics',
        domain: '',
        calendar: {
            filename: `calendar.ics`,
            prodId: '//Organization//Calendar//EN',
            domain: 'domain.com', 
            name: 'Calendar',
            url: 'https://domain.com/calendar.ics',
            scale: 'gregorian',
            timezone: 'Europe/Amsterdam',
            ttl: 60*60*24,
        },
        event: {
            uid: 'id',
            start: 'start',
            end: 'end',
            summary: 'summary',
            description: 'description',
            location: 'location',
            url: 'url'
        }
    }
}]
```

## When do I use this plugin?
This plugin creates an iCalendar file in your public folder with the events on your GatsbyJS site. On each build, all events are queried and transformed into an calendar.ics file. The link to this file is the URL for a calendar. 
