import React from 'react'

class Feed extends React.Component {
    render() {
        return(
    <div style={styles.container}>Trending on Infolog</div>
  )}
}

const styles = {
    container : {
        display:"flex",
        justifyContent: 'center',
        fontSize: "40px",
        fontWeight: 500    }
}

module.exports = Feed