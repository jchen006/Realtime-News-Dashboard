import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import styles from './styles.js'

class ChipList extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props
        if(this.props.values) {
            return (
                <div>
                    { this.props.values.map((value) => {
                        return (
                            <Chip
                                key={value.key}
                                label={value.label}
                                onDelete={this.props.onDelete(filter)}
                                className={classes.chip}
                            />
                        );
                    })}
                </div>
            )
        } else {
            return null
        }
    }
}

ChipList.propTypes = {
    classes: PropTypes.object.isRequired,
    values: PropTypes.array,
    onDelete: PropTypes.func.isRequired
};

export default withStyles(styles)(ChipList);