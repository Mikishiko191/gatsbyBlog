import React, { Component} from 'react';
import PropTypes from 'prop-types';
import Socials from '../components/Socials/Socials'
import Header from '../components/Header'

class BlogPost extends Component {
  render() {
    const {
      title,
      content,
      featuredImage,
      postCreatedData,
      author
    } = this.props.data.contentfulAllContentfulBlog
    return (
      <div>
        
        <Header
          name="back to posts"
          url="/"
        />

        <section className="single-blog">
          <div className="single-blog__body single-wrapper">

          {/* Author Card */}
          <div className="flex__grid__author">
            <div className="flex__col">
              { author === "Roman Ochnev" &&
                <div className="author-card">
                  <img className="author-profile-image" src="http://www.gravatar.com/avatar/ed9b77b4115f82f37168f00521afedaa?s=40" alt="Roman Ochnev" />
                  <div className="author-card-content">
                    <h4 className="author-card-name">Roman Ochnev</h4>
                    <p>Head of Marketing</p>
                  </div>
                </div>   
              } 
              { author === "revain" &&
                <div className="author-card">
                  <img className="author-profile-image" src="https://cdn-images-1.medium.com/fit/c/60/60/1*rAChgZhN6ZrJ6P1x9n4T6w.jpeg" alt="Roman Ochnev" />
                  <div className="author-card-content">
                    <h4 className="author-card-name">Revain</h4>
                  </div>
                </div>   
              } 
            </div>

            <div className="flex__col">
              <div className="time"><p>{ postCreatedData }</p></div>
            </div>
          </div>
          {/* End */}

          {/* Blog Title */}
            <h1 className="single-blog__title">{ title }</h1>
          {/* End */}

          {/* Single Blog Image */}
            <div className="single-blog__mainImage">
              <img src={ featuredImage.file.url } className="img-responsive img__center" alt="" />
            </div>
          {/* End */}

          {/* Main Blog Content */}
            <div className="single-blog__content" dangerouslySetInnerHTML={{__html: content.childMarkdownRemark.html}} />
          {/* End */}


          {/* Social Media */}
            <Socials />
          {/* END  */}            

          </div>
        </section>

      </div>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!){
    contentfulAllContentfulBlog (slug: {eq: $slug}) {
      id
      title
      slug
      author
      postCreatedData(formatString: "MMMM DD, YYYY")
      content {
        childMarkdownRemark{
          html
        }
      } 
      featuredImage {
        file{
          url
        }
      } 
    }
  }
`