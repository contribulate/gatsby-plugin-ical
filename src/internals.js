
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
    const domain = options.domain

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
        url: domain + node.frontmatter.path
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
  query: `{
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
  }`,
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