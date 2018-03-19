import React from 'react'
import Link from 'gatsby-link'

const BlogPost = ({node}) => {
  return (
    <div className="blog-body__card">
      <Link to={node.slug} className="blog-body__info ">
        <img className="img-responsive img__shadow" src={ node.featuredImage.file.url } alt="" />
        <h2 className="blog-body__title">{ node.title }</h2>
        <p className="blog-body__excerpt">{ node.content.childMarkdownRemark.excerpt }</p>
        { node.author === "Roman Ochnev" &&
          <div className="author-card">
            <img className="author-profile-image" src="http://www.gravatar.com/avatar/ed9b77b4115f82f37168f00521afedaa?s=40" alt="Roman Ochnev" />
            <div className="author-card-content">
              <h4 className="author-card-name">Roman Ochnev</h4>
              <p>Head of Marketing</p>
            </div>
          </div>   
        } 
        { node.author === "revain" &&
          <div className="author-card">
            <img className="author-profile-image" src="https://en.gravatar.com/userimage/136487050/30579f9f60316c9b2d9cafa729485fe0.png?size=200" alt="Roman Ochnev" />
            <div className="author-card-content">
              <h4 className="author-card-name">Revain</h4>
            </div>
          </div>   
        } 
        <hr />
      </Link>
    </div>
  )
}

const IndexPage = ({data}) => (
  <section className="blog-body">
    <div className="blog-body__grid wrapper">
      {data.allContentfulAllContentfulBlog.edges.map((edge) => 
        <div key={ edge.node.id } >
          <BlogPost node={ edge.node } />
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
    }
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




