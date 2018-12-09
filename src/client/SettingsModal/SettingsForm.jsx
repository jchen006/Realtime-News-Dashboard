import React from 'react'
import { formStyles } from './styles.js'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import FiltersChip from '../FiltersChip/FiltersChip.jsx'

class SettingsForm extends React.Component {

    constructor(props) {
        super(props)
    }

    onKeyPress(e) {
        if(e.keyCode == 13){
            console.log('value', e.target.value);
            // should append immediately 
         }
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
                <FiltersChip 
                    filters={this.props.filters}
                    handleFiltersDelete={this.props.handleFiltersDelete} 
                    />
            </div>
        )
    }
}

SettingsForm.propTypes ={
    classes: PropTypes.object.isRequired
}

export default withStyles(formStyles)(SettingsForm);