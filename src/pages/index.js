import React from 'react'
import Link from 'gatsby-link'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, Container, Row, Col } from 'reactstrap';
import Header from '../components/Header'
import classnames from 'classnames';

// Post card
const BlogPost = ({node}) => {
  return (
    <div>
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

const FaqPost = ({node}) => {
  return (
    <div>

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

// Main page

export default class Page extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }
  
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    const { data } = this.props;
    return (
      <div className="mainpage">
        <Header
          name="back to revain"
          url="http://revain.org"       
        />  
        <div className="nav_body">
        <Container>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
                Beginner's section
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <IndexPage data={data} />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
              <Col sm="12">
                <Second data={data} />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
          </Container>
        </div>
      </div>
    );
  }
}

// Fill Content

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
          { (edge.node.author === "revain" || edge.node.author === "Revain") &&
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

const Second = ({data}) => (
  <section className="blog-body">
    <div className="blog-body__grid wrapper">
      {data.allContentfulFaqBlogs.edges.map((edge) => 
        <div className="underline" key={ edge.node.id } >
          <FaqPost node={ edge.node } />

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

// Graphql

export const pageandFaqQuery = graphql`
   query pageQuery {
    allContentfulAllContentfulBlog (
    filter: {
      node_locale: {eq: "en-US"}
    },
    sort: {fields: [postCreatedData], order: DESC }
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
   allContentfulFaqBlogs (
    filter: {
      node_locale: {eq: "en-US"}
    },
    sort: {fields: [postCreatedData], order: DESC }
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



