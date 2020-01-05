import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'

import styles from './styles.js'

const ChipList = (props) => {
    const { classes, values, onDelete } = props
    return (
        <div>
            { values.map((value) => {
                return (
                    <Chip
                        key={value.key}
                        label={value.label}
                        onDelete={onDelete(value)}
                        className={classes.chip}
                    />
                );
            })}
        </div>
    )
}

ChipList.propTypes = {
    classes: PropTypes.object.isRequired,
    values: PropTypes.array,
    onDelete: PropTypes.func.isRequired
};

export default withStyles(styles)(ChipList);