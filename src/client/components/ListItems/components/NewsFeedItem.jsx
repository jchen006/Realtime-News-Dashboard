import React from 'react';
import { mdiReddit, mdiTwitter } from '@mdi/js';
import Icon from "@mdi/react";

function NewsFeedItem() {
    const { source } = props;

    const renderAvatarIcon = () => {
        let icon = {path: '', title: '', color: ''};
        switch(source) {
            case 'Twitter':
                icon.path = mdiTwitter;
                icon.title = 'Twitter';
                icon.color = '#1DA1F2'
                break;
            case 'Reddit':
                icon.path = mdiReddit;
                icon.title = 'Reddit';
                icon.color = '#FF5700'
                break;
            default:
                break;
        }
        return (
            <Icon path={icon.path}
                title={icon.title}
                size={1}
                horizontal
                color={icon.color}
                spin
            />
        );
    }


   
  
}

export { NewsFeedItem };