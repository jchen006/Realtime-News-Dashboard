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
        return (
            <div>
                { this.props.values.map((value) => {
                    return (
                        <Chip
                            key={value.key}
                            label={value.label}
                            onDelete={this.props.handleValueDelete(filter)}
                            className={classes.chip}
                        />
                    );
                })}
            </div>
        )
    }
}

ChipList.propTypes = {
    classes: PropTypes.object.isRequired,
    value: PropTypes.array.isRequired,
    handleValueDelete: PropTypes.func.isRequired
};

export default withStyles(styles)(ChipList);