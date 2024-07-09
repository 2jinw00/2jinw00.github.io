
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"

const IndexPage = () => (
  <Layout>
    <section>
      <h2>Welcome to My Gatsby Landing Page</h2>
      <p>This is a sample landing page created with Gatsby.</p>
      <StaticImage
        src="../images/your-image.jpg"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A sample image"
        style={{ marginBottom: `1.45rem` }}
      />
    </section>
  </Layout>
)

export default IndexPage
