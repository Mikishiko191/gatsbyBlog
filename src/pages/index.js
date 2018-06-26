import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/Header'



const BlogPost = ({node}) => {
  return (
    <div>

      <Header
        name="back to revain"
        url="http://revain.org"
      />


      <div className="blog-body__card">
        <Link to={node.slug} className="blog-body__info ">
          <div className="blog-body__bg" style={{ backgroundImage: 'url(' + node.featuredImage.file.url + ')' }}></div>
          <h2 className="blog-body__title">{ node.title}</h2>
          <p className="blog-body__excerpt">{ node.content.childMarkdownRemark.excerpt }</p>
        </Link>
      </div>
    </div>
    
  )
}

const IndexPage = ({data}) => (
  <section className="blog-body">
    <div className="blog-body__grid wrapper">
      {data.allContentfulAllContentfulBlog.edges.map((edge) => 
        <div className="underline" key={ edge.node.id } >
          <BlogPost node={ edge.node } />

          { edge.node.author === "Roman Ochnev" &&
            <div className="author-card">
              <img className="author-profile-image" src="http://www.gravatar.com/avatar/ed9b77b4115f82f37168f00521afedaa?s=40" alt="Roman Ochnev" />
              <div className="author-card-content">
                <h4 className="author-card-name">Roman Ochnev</h4>
                <p>Head of Marketing</p>
              </div>
            </div>   
          } 
          { edge.node.author === "revain" &&
            <div className="author-card">
              <img className="author-profile-image" src="https://cdn-images-1.medium.com/fit/c/60/60/1*rAChgZhN6ZrJ6P1x9n4T6w.jpeg" alt="Roman Ochnev" />
              <div className="author-card-content">
                <h4 className="author-card-name">Revain</h4>
              </div>
            </div>   
          } 
          {/* <hr /> */}
        </div>
      )}
    </div>
  </section>
)


export default IndexPage


export const pageQuery = graphql`
   query pageQuery {
    allContentfulAllContentfulBlog (
    filter: {
      node_locale: {eq: "en-US"}
    },
    sort: {fields: [postCreatedData], order: ASC }
    ) {
        edges {
          node {
            id  
            title   
            slug
            author
            content{
              childMarkdownRemark{
                excerpt
              }
            } 
            featuredImage {
              file{
                url
              }
            }       
          }
        }
      }
   }
`




