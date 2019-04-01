# Gatsby schema cache bug reproduction repo

**Solution**: The bug was resolving because the `parent` field for the SyrEvent nodes was set to null and given I was not using the parent nodes that the content originated from, Gatsby was cleaning up stale nodes which caused the issues at hand.

---

This repo is a reproduction of a bug which on subsequential runs after the first run, something in the cache is causing the build to fail. This was the issue that it was linked to: https://github.com/gatsbyjs/gatsby/issues/12981

I start out by merging two existing node types, one from a JSON file and one from `gatsby-source-meetup` into a single node type. I'm using the new schema generation APIs to define the type.

When it is run once with `gatsby develop`, everything works out as expected. the nodes are properly created in accordance to the type I defined in `gatsby-node.js`. Then, I try running `gatsby develop` again and get the following error stating that formatString is not available to the `local_date` field.

```
The GraphQL query from gatsby-schema-cache-bug-repro/src/pages/index.js failed.

Errors:
  Unknown argument "formatString" on field "local_date" of type "SyrEvent".

  GraphQL request (5:18)
  4:       name
  5:       local_date(formatString: "MMMM DD, YYYY")
                      ^
  6:     }

URL path:
  /
Context:
  {}
Plugin:
  none
Query:
  query PageQuery {
    allSyrEvent {
      nodes {
        name
        local_date(formatString: "MMMM DD, YYYY")
      }
    }
  }
```
