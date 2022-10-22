const React = require("react");
const NavBar = require('./Navbar')
const Hero = require('./Hero')
const Feed  = require('./Feed')

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <head>
        <link rel="stylesheet" href="/CSS/app.css" />
        </head>

        <NavBar />
        <Hero />
        <Feed />
        
      </div>
    );
  }
}


module.exports = LandingPage;