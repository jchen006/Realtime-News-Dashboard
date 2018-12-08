import React from 'react'
import { formStyles } from './styles.js'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';

class SettingsForm extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props
        return (
            <div>
                <Typography variant="h6" id="modal-title">
                    Twitter Stream
                </Typography>
                <TextField
                    id="outlined-dense"
                    label="Filters"
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                    onKeyPress={(e) => {console.log(e.key)}}
                />
            </div>
        )
    }
}

SettingsForm.propTypes ={
    classes: PropTypes.object.isRequired
}

export default withStyles(formStyles)(SettingsForm);