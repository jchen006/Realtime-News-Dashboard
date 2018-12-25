import React from 'react'
import { formStyles } from '../SettingsDrawer/styles.js'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import FiltersChip from '../FiltersChip/FiltersChip.jsx'

class SettingsForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            filterField: ''
        }
        this.onKeyPress = this.onKeyPress.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onKeyPress(e) {
        if(e.charCode == 13){
            let key = this.props.filters.length
            let label = this.state.filterField
            let newFilter = {
                key,
                label
            }
            this.props.handleAddFilters(newFilter)
            this.setState({
                filterField: ''
            })
         }
    }

    onChange(e) {
        this.setState({
            filterField: e.target.value
        })
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
                    value={this.state.filterField}
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                    onKeyPress={this.onKeyPress}
                    onChange={this.onChange}

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