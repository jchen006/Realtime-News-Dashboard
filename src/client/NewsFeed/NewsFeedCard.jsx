import React from 'react'
import Flipcard from '@kennethormandy/react-flipcard'

/**
 * This card will be flippable on the hover state showing brief description and source
 * 
 */

class NewsFeedCard extends React.Component {
    constructor() {
      super()
   
      this.state = {
        flipped: false,
      }
    }

    handleOnClick() {
        this.setState({
            flipped: !this.state.flipped
        })
    }
   
    render() {
      return (
        <div>
            <Flipcard 
                flipped={this.state.flipped}
                onClick={this.onClick}>
                <Card>One</Card>
                <Card>Two</Card>
            </Flipcard>
        </div>
      )
    }
}

  NewsFeedCard.propTypes = {

  }

  export default NewsFeedCard



