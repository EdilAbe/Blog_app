const React = require("react");
const NavBar = require("../components/Navbar");

class Blogs extends React.Component {
    render() 
  {
    const { blogs, loggedInUser } = this.props;
    console.log(loggedInUser);
    
    return (
      <div>
        <head>
        <link rel="stylesheet" href="/CSS/app.css" />
        </head>

        <NavBar />

        <h1 style ={styles.header}>Blogs</h1>

        <section style={styles.container}>
          {blogs.map((blog) => (
            <div style={styles.wrapper} className="card">
              <a href={`/blog/${blog._id}`}>
                {" "}
                <h2>{blog.title}</h2>
              </a>
              <div>
                <p>{blog.body}</p>
              </div>
              <h6>Written by: {blog.author}</h6>
             <span onClick ={() => blog.likes++}
       >&hearts; </span><span>{blog.likes}</span>


              {blog.author === loggedInUser ? (
                <div>
                  <a href={`/blog/${blog._id}/edit`}>Edit</a>
                </div>
              ) : null}
               {blog.author === loggedInUser ? (<form action={`/blog/${blog._id}?_method=DELETE`} method='POST'>
                    <input type='submit' value='Delete post!' />
                </form>) : null }
            </div>
          ))}
        </section>
      </div>
    );
  }
}
const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  wrapper: {
    padding: "20px",
    margin: "10px",
    width: "300px",
    border: "solid",
    borderWidth: "2px",
    borderColor: "black",
  },
};
module.exports = Blogs;