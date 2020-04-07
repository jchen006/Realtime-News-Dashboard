import React from 'react';
import { NewsfeedPanel } from './components/NewsfeedPanel';
import {  TwitterItem } from 'components/ListItems/components/TwitterItem';
import { ListItems } from 'components/ListItems';

export default { title: 'Newsfeed Panel' };

export const NewsfeedPanelWithTwitterItem = () => {
    const mockTwitterData = [
        {
            geo: null,
            coordinates: null,
            created_at: "Tue Apr 07 05:28:05 +0000 2020",
            favorite_count: null,
            id: 1247395701413290000,
            lang: "en",
            text: "RT @johnismay: SECNAV bashes CO he fired as “too naïve or too stupid to be a commanding officer” if he thought a letter he wrote to help hi…",
            name: "Nyet Trumpsky",
            description: null,
            profile_background_image_url: "http://abs.twimg.com/images/themes/theme1/bg.png",
            screen_name: null
        },
        {
            geo: null,
            coordinates: null,
            created_at: "Tue Apr 07 05:28:05 +0000 2020",
            favorite_count: null,
            id: 1247395701413290000,
            lang: "en",
            text: "RT @johnismay: SECNAV bashes CO he fired as “too naïve or too stupid to be a commanding officer” if he thought a letter he wrote to help hi…",
            name: "Nyet Trumpsky",
            description: null,
            profile_background_image_url: "http://abs.twimg.com/images/themes/theme1/bg.png",
            screen_name: null
        }   
    ];

    // Fixes
    // (1) make it way more compact with the newsfeed items on the height
    // (2) change it so default is always open 
    // (3) Maybe remove the twitter icon 
    return (
        <NewsfeedPanel panelTitle={'Twitter'}>
            <ListItems items={mockTwitterData} ItemComponent={TwitterItem}/>
        </NewsfeedPanel>
    );
}