exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `
    type SyrEvent implements Node @infer(noDefaultResolvers: false) {
      name: String!
      local_date: Date!
    }
  `

  createTypes(typeDefs)
}

exports.onCreateNode = ({
  actions,
  node,
  getNode,
  createNodeId,
  createContentDigest,
}) => {
  if (node.internal.type === "EventsJson") {
    let nodeId = createNodeId(`event-j-${node.id}`)
    let data = {
      name: node.name,
      local_date: node.local_date,
    }
    const nodeContent = JSON.stringify(data)
    const nodeData = Object.assign({}, data, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `SyrEvent`,
        content: nodeContent,
        contentDigest: createContentDigest(data),
      },
    })

    actions.createNode(nodeData)
  }

  if (node.internal.type === "MeetupEvent") {
    let nodeId = createNodeId(`event-m-${node.id}`)
    let data = {
      name: node.name,

      local_date: node.local_date,
    }
    const nodeContent = JSON.stringify(data)
    const nodeData = Object.assign({}, data, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `SyrEvent`,
        content: nodeContent,
        contentDigest: createContentDigest(data),
      },
    })

    actions.createNode(nodeData)
  }
}
