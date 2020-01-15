"use strict";

exports.__esModule = true;
exports.defaultOptions = exports.runQuery = void 0;

/**
 * 
 * 
 * 
 */
var runQuery = function runQuery(handler, query, options) {
  return handler(query).then(function (r) {
    if (r.errors) {
      throw new Error(r.errors.join(", "));
    } // Serialize the output 


    var edges = r.data.allMarkdownRemark.edges;
    var siteUrl = r.data.site.siteMetadata.siteUrl;

    if (!edges || edges.length < 1) {
      console.log('no edges');
      return [];
    }

    var events = [];
    edges.map(function (_ref, index) {
      var node = _ref.node;
      var e = {
        id: node.id,
        start: node.frontmatter.start,
        end: node.frontmatter.end,
        summary: node.frontmatter.title,
        description: node.excerpt,
        url: siteUrl + node.frontmatter.path
      };
      events.push(e);
    });
    return events;
  });
};
/**
 * 
 * 
 * 
 */


exports.runQuery = runQuery;
var defaultOptions = {
  query: "\n    {\n    allMarkdownRemark(filter: {\n      frontmatter: {\n        type: {eq: \"event\"}\n      }\n    }) {\n      edges {\n        node {\n          id\n          excerpt\n          frontmatter {\n            start\n            end\n            title\n            path\n          }\n        }\n      }\n    }\n    site {\n      siteMetadata {\n        siteUrl\n      }\n    }\n  }",
  outputFilename: "community-calendar.ical"
};
exports.defaultOptions = defaultOptions;