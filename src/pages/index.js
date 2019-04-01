import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => (
  <div>
    <h1>Hello World</h1>
    {data.allSyrEvent.nodes.map(node => (
      <div>
        {node.name}: {node.local_date}
      </div>
    ))}
  </div>
)

export const PageQuery = graphql`
  query PageQuery {
    allSyrEvent {
      nodes {
        name
        local_date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
