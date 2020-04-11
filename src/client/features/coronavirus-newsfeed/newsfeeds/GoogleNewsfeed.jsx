import React, { useState, useEffect } from 'react';
import { ListItems } from 'components/ListItems';
import { LoadingSpinner } from 'components/LoadingSpinner';
import { GoogleNewsItem } from 'components/ListItems/components/GoogleNewsItem';
import { useSelector } from "react-redux";
import {useAsync, useInterval} from 'react-use';

const getGoogleNews = async () => {
    const url = "http://localhost:8080/google/topHeadlines?q=coronavirus";
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function GoogleNewsfeed() {
    const polling_interval = useSelector(state => state.googleReducer.polling_interval);
    const { value, error, loading } = useAsync(getGoogleNews); 
    useInterval(() => {
        getGoogleNews();
    }, polling_interval);

    if(loading || !value) {
        return <LoadingSpinner text="Connecting to Google News"/>
    }

    if(error) console.log(error)

    return (
        <ListItems items={value} ItemComponent={GoogleNewsItem}/>
    )
}

export { GoogleNewsfeed };