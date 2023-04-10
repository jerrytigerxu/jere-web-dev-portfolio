import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/projects.module.css'
import Img from "gatsby-image"
import { graphql } from "gatsby";

export default function About({ data }) {
  return (
    <Layout>
      <div className={styles.portfolio}>
        <Img fixed={data.file.childImageSharp.fixed} />
        <h2>About Me</h2>
        <p>Hello there! My name is Jere Xu and I am a full stack web developer who specializes in Node.js and React.js.</p>
        <p>I am a firm believer in clean and maintainable code and always strive to follow best practices in software development. I am also passionate about staying up-to-date with the latest technologies and trends in the industry, and am constantly learning and improving my skills.</p>
        <p>In addition to my technical expertise, I am a great communicator and enjoy working closely with clients to understand their requirements and deliver solutions that meet their needs. I am a strong advocate for teamwork and collaboration, and believe that the best results are achieved through open communication and a shared commitment to success.</p>
        <p>Thank you for taking the time to visit my portfolio website, and I look forward to the opportunity to work with you on your next project!</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Image {
    file(relativePath: {eq: "me.jpg"}) {
        childImageSharp {
          fixed (width: 600, height: 600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
`

