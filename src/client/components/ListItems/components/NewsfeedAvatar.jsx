import React from 'react';
import { mdiReddit, mdiTwitter } from '@mdi/js';
import Icon from "@mdi/react";

function NewsfeedAvatar(props) {
    const { source } = props; 

    const getIcon = () => {
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
        return icon;
    }

    const iconDetails = getIcon();
    const { path, title, color } = iconDetails;
    return (
        <Icon path={path}
            title={title}
            size={1}
            horizontal
            color={color}
            spin
        />
    );
}

export { NewsfeedAvatar };