import React, { useState, useEffect } from 'react';
import { topHeadlinesUrl } from 'lib/url';
import { ListItems } from 'components/ListItems';
import { LoadingSpinner } from 'components/LoadingSpinner';
import { GoogleNewsItem } from 'components/ListItems/components/GoogleNewsItem';

function GoogleNewsfeed(props) {
    const {
        country,
        category,
        language,
        sources,
        query
    } = props;
    const [interval, setInternalInterval] = useState(null);
    const [articles, setArticles] = useState([]);
    const [url, setUrl] = useState('/google/topHeadlines?country=us');

    const getGoogleNews = async () => {
        const response = await fetch(url);
        const data = response.json();
        setArticles(data.articles);
    }
     
    useEffect(() => {
        if(interval) clearInterval(interval);
        setInternalInterval(setInterval(getGoogleNews, 40000));
        return () => {
            clearInterval(interval);
        }
    }, [url])

    useEffect(async () => {
        const queryUrl = await topHeadlinesUrl(country, category);
        setUrl(queryUrl);
    }, [country, category, language, sources, query]);

    if(articles.length == 0) {
        return <><LoadingSpinner text="Connecting to Twitter Stream"/></>
    }

    return (
        <>
            {
                <ListItems items={articles} ItemComponent={GoogleNewsItem}/>
            }
        </>
    )
}

export { GoogleNewsfeed };