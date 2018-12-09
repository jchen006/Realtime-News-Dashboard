import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import styles from './styles.js'

class FiltersChip extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props
        return (
            <div>
                { this.props.filters.map((filter) => {
                    return (
                        <Chip
                            key={filter.key}
                            label={filter.label}
                            onDelete={this.props.handleFiltersDelete(filter)}
                            className={classes.chip}
                        />
                    );
                })}
            </div>
        )
    }
}

FiltersChip.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FiltersChip);