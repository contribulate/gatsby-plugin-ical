# gatsby-plugin-ical
Create an iCalendar feed for the events in your [GatsbyJS](https://www.gatsbyjs.org) site. 

_NOTE: This plugin is an early release. It works, but is relying on predefined node specifications. This plugin is not suitable for production yet, unless your event-node matches. `_

[![pipeline status](https://gitlab.com/urbanlink/gatsby-plugin-ical/badges/master/pipeline.svg)](https://gitlab.com/urbanlink/gatsby-plugin-ical/commits/master)
[![coverage report](https://gitlab.com/urbanlink/gatsby-plugin-ical/badges/master/coverage.svg)](https://gitlab.com/urbanlink/gatsby-plugin-ical/commits/master)

## Install

`npm install --save gatsby-plugin-ical`

### Dependencies 
This plugin makes use of [MomentJS](https://momentjs.com) for data handling. 
Under the hood [ical-generator](https://www.npmjs.com/package/ical-generator) is used for creating the iCalendar file. 

## Available options
Checkout this snippet for available options: [https://gitlab.com/urbanlink/gatsby-plugin-ical/snippets/1930290](https://gitlab.com/urbanlink/gatsby-plugin-ical/snippets/1930290)

## When do I use this plugin?
This plugin creates an iCalendar file in your public folder with the events on your GatsbyJS site. On each build, all events are queried and transformed into an calendar.ics file. The link to this file is the URL for a calendar. 
