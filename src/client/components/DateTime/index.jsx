import React from 'react';
import moment from 'moment';
import MomentUtils from "@date-io/moment";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';

function DateTimeInput(props) {
    const { 
        selectedDate,
        handleDateChange,
        locale='en',
        label='',
        id="date-picker-inline" ,
        variant="inline",
        inputVariant,
        format,
        disableFuture,
        disablePast
    } = props;

    return (
        <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} locale={locale}>
            <KeyboardDatePicker
                disableFuture={disableFuture}
                disablePast={disablePast}
                disableToolbar
                variant={variant}
                inputVariant={inputVariant}
                margin="normal"
                id={id}
                label={label}
                format={format}
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    )

}

export { DateTimeInput };