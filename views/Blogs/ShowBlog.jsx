const React = require('react')
const NavBar = require("../components/Navbar");

class ShowBlog extends React.Component {
    render(){
        const {blog} = this.props
        return(
            <div>
          <head>
        <link rel="stylesheet" href="/CSS/app.css" />
        </head>
        <NavBar />

                <h1>Recent Posts</h1>
                <h1>{blog.title}</h1>

                <p>{blog.body}</p>
               
                <h6> &hearts; {blog.likes}</h6>

                <h5>Written by: {blog.author}</h5>
            </div>
        )
    }
}

module.exports = ShowBlog