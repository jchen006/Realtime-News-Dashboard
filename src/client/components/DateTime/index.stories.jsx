import React, { useState } from 'react';
import { DateTimeInput } from './index';

export default { title: 'Date Time Input' };

export const Default = () => {
    
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    return (
        <DateTimeInput
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
        />
    )
};

export const DateTimeFormat = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    return (
        <DateTimeInput
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
            format={'MMM D, YYYY'}
        />
    )
}

export const Outlined = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    return (
        <DateTimeInput
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
            inputVariant="outlined"
        />
    )
}

export const disableFuture = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    return (
        <DateTimeInput
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
            disableFuture={true}
        />
    )
}

export const disablePast = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    return (
        <DateTimeInput
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
            disablePast={true}
        />
    )
}

export const NoInline = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    return (
        <DateTimeInput
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
            variant={''}
        />
    )
}