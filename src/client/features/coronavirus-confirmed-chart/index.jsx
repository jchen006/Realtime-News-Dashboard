import React from 'react';
import { useAsync } from 'react-use';
import { ListItems } from 'components/ListItems';

function CoronavirusConfirmedChart() {

    const { value, error, loading} = useAsync(async () => {
        // temporarily use the actual one 
        // switch over to personal one because of mapping purposes 
        const response = await fetch('')
        const result = await response.json();
        return result;
    });

    if(loading) {
    }

    if(error) {

    }

    return (
        <div>
            <ListItems item={value}/>
        </div>
    )

}

export { CoronavirusConfirmedChart }