import React from 'react';
import { useAsync } from 'react-use';
import { ListItems } from 'components/ListItems';
import { LoadingSpinner } from 'components/LoadingSpinner';

function CoronavirusConfirmedChart() {
    const { value, error, loading} = useAsync(async () => {
        const response = await fetch('https://covid19.mathdro.id/api/confirmed');
        const result = await response.json();
        return result;
    });

    console.log({value});
    if(loading || !value) {
        return <LoadingSpinner/>;
    }

    if(error) {
        console.log(error);
    }


    return (
        <>
            <ListItems item={value}/>
        </>
    )

}

export { CoronavirusConfirmedChart }