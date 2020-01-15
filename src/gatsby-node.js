import path from "path"
import fs from "fs-extra"

import {defaultOptions, runQuery} from './internals'
import {GetCalendar} from './ical'

const publicPath = `./public`

const onCreatePages = async({ graphql }, pluginOptions) => {

  const options = {
    ...defaultOptions,
    ...pluginOptions,
  }
  
  // Query events
  const events = await runQuery(graphql, options.query, options)

  // Parse events into ical file
  const iCalString = GetCalendar(events); 

  // Create file
  const outputPath = path.join(publicPath, options.outputFilename)
  const outputDir = path.dirname(outputPath)
  if (!(await fs.exists(outputDir))) {
    await fs.mkdirp(outputDir)
  }
  // Save the file
  await fs.writeFile(outputPath, iCalString)

}

exports.createPages= onCreatePages;

// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-sitemap/src/gatsby-node.js