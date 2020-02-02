import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query AllDecksQuery {
      allDeck {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `)
  const {
    allDeck: { edges },
  } = data
  return (
    <Layout>
      <SEO title="Home" />
      <h1>mdx-decks-example</h1>
      <ul>
      {edges.map(({ node }) => (
        <li><a href={`${node.slug}`} target='_blank'>{node.title}</a></li>
      ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
