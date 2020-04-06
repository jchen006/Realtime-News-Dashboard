import React from 'react';
import {  TwitterItem } from './components/TwitterItem';
import { GoogleNewsItem } from './components/GoogleNewsItem';
import Paper from '@material-ui/core/Paper';

export default { title: 'List Items' };

export const GoogleNewsListItem = () => {
    const example = {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "Ryan Browne, Zachary Cohen and Jamie Crawford, CNN",
        "title": "Commander of aircraft carrier hit by coronavirus removed for 'poor judgment' after sounding alarm",
        "description": "The commander of a US aircraft carrier that has been hit by a major outbreak of coronavirus has been relieved of command for showing \"poor judgment\" days after writing a memo warning Navy leadership that decisive action was needed to save the lives of the shi…",
        "url": "https://www.cnn.com/2020/04/02/politics/uss-roosevelt-commander-relieved/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/200401090515-01-uss-theodore-roosevelt-guam-grab-super-tease.jpg",
        "publishedAt": "2020-04-03T04:25:09+00:00",
        "content": "Washington (CNN)The commander of a US aircraft carrier that has been hit by a major outbreak of coronavirus has been relieved of command for showing \"poor judgment\" days after writing a memo warning Navy leadership that decisive action was needed to save the … [+6386 chars]"
    }
    return (
        <div style={{width: "400px"}}>
            <Paper elevation={3}>
                <GoogleNewsItem {...example}/>
            </Paper>
        </div>
    );
}

export const TwitterListItem = () => {
    const example = {
        screen_name: 'realDonaldTrump',
        text: 'We are learning much about the Invisible Enemy. It is tough and smart, but we are tougher and smarter!',
        created_at: "2020-04-03T04:25:09+00:00"
    }

    return (
        <div style={{width: "400px"}}>
            <Paper elevation={3}>
                <TwitterItem {...example}/>
            </Paper>
        </div>
    );
}