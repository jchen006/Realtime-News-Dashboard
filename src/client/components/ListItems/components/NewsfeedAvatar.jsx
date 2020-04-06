import React from 'react';
import { mdiReddit, mdiTwitter, mdiGoogle } from '@mdi/js';
import Icon from "@mdi/react";

function NewsfeedAvatar(props) {
    const { sourceId } = props; 

    const getIcon = () => {
        let icon = {path: '', title: '', color: ''};
        switch(sourceId) {
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
            // case 'google-news':
            case 'Google':
                icon.path = mdiGoogle;
                icon.title = "Google";
                icon.color = "#008744";
            default:
                break;
        }
        return icon;
    }

    const iconDetails = getIcon();
    const { path, title, color } = iconDetails;
    return (
        <Icon path={path}
            title={title}
            size={1}
            color={color}
        />
    );
}

export { NewsfeedAvatar };