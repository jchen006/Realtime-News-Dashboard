import React from 'react';
import { VerticalTabs as Tabs } from './index';

export default { title: 'Vertical Tabs' };

export const VerticalTabs = () => {
    const tabs = [
        {
            label: 'Item 1',
            component: () => <div> Item 1 </div>
        },
        {
            label: 'Item 2',
            component: () => <div> Item 2 </div>
        },
        {
            label: 'Item 3',
            component: () => <div> Item 3 </div>
        },
        {
            label: 'Item 4',
            component: () => <div> Item 4 </div>
        }
    ]
    return <Tabs tabs={tabs}/>
}