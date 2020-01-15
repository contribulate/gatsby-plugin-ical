"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _path = _interopRequireDefault(require("path"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _internals = require("./internals");

var _ical = require("./ical");

var publicPath = "./public";

var onCreatePages =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(_ref, pluginOptions) {
    var graphql, options, events, iCalString, outputPath, outputDir;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            graphql = _ref.graphql;
            options = (0, _extends2.default)({}, _internals.defaultOptions, {}, pluginOptions); // Query events

            _context.next = 4;
            return (0, _internals.runQuery)(graphql, options.query, options);

          case 4:
            events = _context.sent;
            // Parse events into ical file
            iCalString = (0, _ical.GetCalendar)(events); // Create file

            outputPath = _path.default.join(publicPath, options.outputFilename);
            outputDir = _path.default.dirname(outputPath);
            _context.next = 10;
            return _fsExtra.default.exists(outputDir);

          case 10:
            if (_context.sent) {
              _context.next = 13;
              break;
            }

            _context.next = 13;
            return _fsExtra.default.mkdirp(outputDir);

          case 13:
            _context.next = 15;
            return _fsExtra.default.writeFile(outputPath, iCalString);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function onCreatePages(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createPages = onCreatePages; // https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-sitemap/src/gatsby-node.js