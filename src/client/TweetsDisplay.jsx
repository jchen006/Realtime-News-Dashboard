import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col} from 'react-bootstrap'

class TweetDisplay extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={3}>
                    </Col>
                    <Col md={4}>
                        { this.props.children }
                    </Col>
                </Row>
            </Grid>
        )
    }

}

export default TweetDisplay
