/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it
 

 const path = require('path')


exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-javascript') {
    // turn off source-maps
    config.merge({ devtool: false });
  }
};

 exports.createPages = ({graphql, boundActionCreators}) => {
   const {createPage} = boundActionCreators
   return new Promise((resolve, reject) => {
     const blogPostTemplate = path.resolve('src/templates/blog-post.js');
     const FaqPostTemplate = path.resolve('src/templates/faq-post.js');
     resolve(
       graphql(`
         {
           allContentfulAllContentfulBlog (limit: 100) {
            edges{
              node{
                id
                slug
              }
            }
          }
         }
       `).then((result) => {
         if (result.errors) {
           reject(result.errors)
         }
         result.data.allContentfulAllContentfulBlog.edges.forEach((edge) => {
           createPage ({
             path: edge.node.slug,
             component: blogPostTemplate,
             context: {
               slug: edge.node.slug
             }
           })
         })
         return
       }),
       graphql(`
        {
          allContentfulFaqBlogs (limit: 100) {
           edges{
             node{
               id
               slug
             }
           }
         }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulFaqBlogs.edges.forEach((edge) => {
          createPage ({
            path: '/page-2/' + edge.node.slug,
            component: FaqPostTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        return
      })
     )
   })
 }