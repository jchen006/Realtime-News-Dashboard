import React, { useState, useEffect } from 'react';
import { topHeadlinesUrl } from 'lib/url';
import { ListItems } from 'components/ListItems';
import { LoadingSpinner } from 'components/LoadingSpinner';
import { GoogleNewsItem } from 'components/ListItems/components/GoogleNewsItem';

function GoogleNewsfeed(props) {
    // const {
    //     country,
    //     category,
    //     language,
    //     sources,
    //     query
    // } = props;
    const [articles, setArticles] = useState([]);

    const getGoogleNews = async () => {
        try {
            const url = "http://localhost:8080/google/topHeadlines?q=coronavirus";
            const response = await fetch(url);
            const data = await response.json();
            setArticles(data);
        } catch(error) {
            console.log(error);
        }
    }

    getGoogleNews();
     
    // useEffect(() => {
    //     if(interval) clearInterval(interval);
    //     setInternalInterval(setInterval(getGoogleNews, 40000));
    //     return () => {
    //         clearInterval(interval);
    //     }
    // }, [])

    // useEffect(async () => {
    //     const queryUrl = await topHeadlinesUrl(country, category);
    //     setUrl(queryUrl);
    // }, [country, category, language, sources, query]);

    if(articles.length == 0) {
        return <LoadingSpinner text="Connecting to Google News"/>
    }

    return (
        <ListItems items={articles} ItemComponent={GoogleNewsItem}/>
    )
}

export { GoogleNewsfeed };