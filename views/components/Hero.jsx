const React = require('react')


class Hero extends React.Component {
    render() {
        return(
            <div style={styles.container}>
                <section style={styles.section}>
                <h2> Stay curious.</h2>
                <h3> Discover stories, thinking, and expertise from writers on any topic.</h3>
               
                <a href='/blog'>Start reading</a>
                </section>
                    <img className='header-img' src = "Img/HeroImg.png"></img>
                </div>

                )
            }
        }
        
    
    
    
        const styles = {
            container : {  
                backgroundColor: '#fca311',
                color: 'black',  
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-around",
                flexFlow: "row wrap"
            },
            section : {
                marginTop: "50px"
            }
        }
        
module.exports = Hero