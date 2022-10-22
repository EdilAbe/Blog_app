const React = require('react')


class Navbar extends React.Component {
    render() {
        return(
            <nav style={styles.container}>
                <div>
                 <span style={styles.header} >Infolog</span>  <img style={styles.logoImg} src = 'img/logo.png' /> 
                </div>
                  <div >
            

                <a href='/'>Home</a>
                <a href='/blog/new'>Write</a>
                <a href='/user/signin'>Signin</a>
                <a href='/user/signup'>Get started</a>
                </div>
            </nav>
        )
    }
}

const styles = {
    container : {
        display:"flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: 'black',
        color: '#fca311',

    },
    div:{
        display:"flex",
        flexDirection: "row",
        justifyContent: "space-around",
    fontSize: 14,
    },
    logoImg:{
        width: "100px",
        height: "100px"
    },
    header:{
        fontSize: 50,
        marginBottom:"50px"
    }
}


module.exports = Navbar