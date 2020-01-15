"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.GetCalendar = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _icalGenerator = _interopRequireDefault(require("ical-generator"));

var GetCalendar = function GetCalendar(events, options) {
  if (options === void 0) {
    options = {};
  }

  // Create base calendar 
  var cal = (0, _icalGenerator.default)({
    prodId: '//Haagse Makers//Community calendar//NL',
    domain: 'haagsemakers.nl',
    name: 'Haagsemakers Community Calendar',
    url: 'https://haagsemakers.nl/community-calendar.ics',
    scale: 'gregorian',
    timezone: 'Europe/Amsterdam',
    ttl: 60 * 60 * 24
  }); // Create events 

  events.map(function (event, index) {
    cal.createEvent({
      uid: event.id,
      start: (0, _moment.default)(event.start),
      end: (0, _moment.default)(event.end),
      summary: event.summary,
      description: event.description,
      location: event.location,
      url: event.url
    });
  });
  return cal.toString();
};

exports.GetCalendar = GetCalendar;