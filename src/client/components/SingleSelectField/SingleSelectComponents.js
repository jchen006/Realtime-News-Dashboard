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
    return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function SingleValue(props) {
    return (
      <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
        {props.children}
      </Typography>
    );
}

const Menu = (props) => {
    return (
        <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
            { props.children }
        </Paper>
    )
}

const Option = (props) => {
    return (
      <MenuItem
        buttonRef={props.innerRef}
        selected={props.isFocused}
        component="div"
        style={{
          fontWeight: props.isSelected ? 500 : 400,
        }}
        {...props.innerProps}
      >
        {props.children}
      </MenuItem>
    );
  }

export {
    Control,
    Menu,
    Option,
    SingleValue,
    NoOptionsMessage,
    Placeholder,
    ValueContainer
}