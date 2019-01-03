import React from 'react'
import Flipcard from '@kennethormandy/react-flipcard'
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography'

/**
 * This card will be flippable on the hover state showing brief description and source
 * 
 * {
        -"source": {
        "id": null,
        "name": "Nypost.com"
        },
        "author": "Associated Press",
        "title": "Two arrested for drone use in London Gatwick Airport case - New York Post ",
        "description": "LONDON — British police say two people were arrested early Saturday morning for suspected “criminal use of drones’” in the Gatwick Airport case that has created nightmarish holiday travel delays fo…",
        "url": "https://nypost.com/2018/12/22/two-arrested-for-drone-use-in-london-gatwick-airport-case/",
        "urlToImage": "https://thenypost.files.wordpress.com/2018/12/181222-gatwick-case.jpg?quality=90&strip=all&w=1200",
        "publishedAt": "2018-12-22T13:16:00Z",
        "content": "LONDON British police say two people were arrested early Saturday morning for suspected criminal use of drones in the Gatwick Airport case that has created nightmarish holiday travel delays for tens of thousands of passengers. Sussex police did not release th… [+4266 chars]"
        }
 */
class NewsFeedCard extends React.Component {
    constructor(props) {
      super(props)
   
      this.state = {
        flipped: false,
      }
      this.handleOnClick = this.handleOnClick.bind(this)
    }

    handleOnClick() {
        this.setState({
            flipped: !this.state.flipped
        })
    }

    renderFacingUp() {
        //Add timeline with moment.js
        return (
            <GridListTile key={this.props.url}>
                //scale down image size
                <img src={this.props.urlToImage} alt={this.props.title} />
                <GridListTileBar
                    title={this.props.title}
                    subtitle={<span>by: {this.props.author}</span>}
                />
            </GridListTile>
        )
    }

    renderFlipSide() {
        return (
            <GridListTile key={this.props.url}>
               <Typography variant="body1" gutterBottom>
                    { this.props.description }
                </Typography>
            </GridListTile>
        )
    }
   
    render() {
      return (
        <div>
            <Flipcard 
                flipped={this.state.flipped}
                onClick={this.handleOnClick}>
                { this.renderFacingUp() }
                { this.renderFlipSide() }
            </Flipcard>
        </div>
      )
    }
}

  export default NewsFeedCard



