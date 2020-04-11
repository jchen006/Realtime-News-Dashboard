import React from 'react';
import { NewsfeedPanel } from './components/NewsfeedPanel';
import {  TwitterItem } from 'components/ListItems/components/TwitterItem';
import { GoogleNewsItem } from 'components/ListItems/components/GoogleNewsItem';
import { ListItems } from 'components/ListItems';
import { mockTwitterData } from './mocks/twitter';
import { mockGoogleData } from './mocks/google';

export default { title: 'Newsfeed Panel' };

export const NewsfeedPanelWithTwitterItem = () => {
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