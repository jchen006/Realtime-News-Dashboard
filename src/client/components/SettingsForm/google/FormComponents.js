import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';


const NoOptionsMessage = (props) => {
    return (
        <Typography
            color="textSecondary"
            className={props.selectProps.classes.NoOptionsMessage}
            {...props.innerProps}
        >
            { props.children }
        </Typography>
    )
}

const Placeholder = (props) => {
    console.log(props.children)
    return (
      <Typography
        color="textSecondary"
        className={props.selectProps.classes.placeholder}
        {...props.innerProps}
      >
        {props.children} 
      </Typography>
    );
  }

const inputComponent = ({inputRef, ...props }) => {
    return (
        <div ref={inputRef} {...props} />
    )
}

const Control = (props) => {
    return (
        <TextField
            fullWidth
            InputProps={{
                inputComponent,
                inputProps: {
                    className: props.selectProps.classes.input,
                    inputRef: props.innerRef,
                    children: props.children,
                    ...props.innerProps
                }
            }}
            {...props.selectProps.textFieldProps}
        />
    )
}

const ValueContainer = (props) => {
    console.log(props.children)
    return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

const MultiValue = (props) => {
    return (
        <Chip
            tabIndex={-1}
            label={props.children}
            className={classNames(props.selectProps.classes.chip, {
                [props.selectProps.classes.chipFocused]: props.isFocused
            })}
            onDelete={props.removeProps.onClick}
            deleteIcon={<CancelIcon {...props.removeProps} />}
        />
    )
}

const Menu = (props) => {
    return (
        <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
            { props.children }
        </Paper>
    )
}

export {
    Control,
    Menu,
    MultiValue,
    NoOptionsMessage,
    Placeholder,
    ValueContainer
}