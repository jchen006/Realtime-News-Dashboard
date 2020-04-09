import React from 'react';
import { NewsfeedPanel } from './components/NewsfeedPanel';
import {  TwitterItem } from 'components/ListItems/components/TwitterItem';
import { GoogleNewsItem } from 'components/ListItems/components/GoogleNewsItem';
import { ListItems } from 'components/ListItems';
import { mockTwitterData } from './mocks/twitter';
import { mockGoogleData } from './mocks/google';

export default { title: 'Newsfeed Panel' };

export const NewsfeedPanelWithTwitterItem = () => {
    // Fixes
    // (1) make it way more compact with the newsfeed items on the height
    // (4) Add transitions 
    // (5) 
    return (
        <NewsfeedPanel panelTitle={'Twitter'}>
            <ListItems items={mockTwitterData} ItemComponent={TwitterItem}/>
        </NewsfeedPanel>
    );
}

export const NewfeedPanelWithGoogleItem = () => {
    return (
        <NewsfeedPanel panelTitle={'News'}>
            <ListItems items={mockGoogleData} ItemComponent={GoogleNewsItem}/>
        </NewsfeedPanel>
    )
}