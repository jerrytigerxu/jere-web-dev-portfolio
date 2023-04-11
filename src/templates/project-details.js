import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/project-details.module.css'

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg, url } = data.markdownRemark.frontmatter


  return (
    <Layout>
        <div className={styles.details}>
            <a href={url} target="_blank">
                <h2>{ title }</h2>
                <h3>{ stack }</h3>
                <br />
                <div className={styles.featured}>
                    <Img fluid={featuredImg.childImageSharp.fluid} /> 
                </div>
            </a>
             <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }}/>
        </div>
    </Layout> 
  )
}

export const query = graphql`
    query ProjectDetails($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html 
            frontmatter {
                stack
                title
                url
                featuredImg {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`