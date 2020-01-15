
/**
 * 
 * 
 * 
 */
export const runQuery = (handler, query, options) => 
  handler(query).then(r => {  
    if (r.errors) {
      throw new Error(r.errors.join(`, `))
    }
    
    // Serialize the output 
    const edges = r.data.allMarkdownRemark.edges
    const siteUrl = r.data.site.siteMetadata.siteUrl

    if (!edges || edges.length<1) {
      console.log('no edges');
      return []
    }

    let events = []
    edges.map(({node}, index) => {
      let e = {
        id: node.id,
        start: node.frontmatter.start, 
        end: node.frontmatter.end, 
        summary: node.frontmatter.title,
        description: node.excerpt,
        url: siteUrl + node.frontmatter.path
      }
      events.push(e)
    })
    
    return events
  })

/**
 * 
 * 
 * 
 */
export const defaultOptions = {
  query: `
    {
    allMarkdownRemark(filter: {
      frontmatter: {
        type: {eq: "event"}
      }
    }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            start
            end
            title
            path
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }`,
  outputFilename: `community-calendar.ical`,
}