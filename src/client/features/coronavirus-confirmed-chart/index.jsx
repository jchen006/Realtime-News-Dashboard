import React from 'react';
import { useAsync } from 'react-use';
import { ListItems } from 'components/ListItems';
import { LoadingSpinner } from 'components/LoadingSpinner';
import { CoronavirusStatusItem } from 'components/ListItems/components/CoronavirusStatusItem';

function CoronavirusConfirmedChart() {
    const { value, error, loading } = useAsync(async () => {
        const response = await fetch('https://coronavirus.m.pipedream.net/');
        const result = await response.json();
        return result;
    });

    if (loading || !value) {
        return <LoadingSpinner />;
    }

    if (error) {
        console.log(error);
    }

    return (
        <>
            <ListItems items={value} ItemComponent={CoronavirusStatusItem} />
        </>
    );
}

export { CoronavirusConfirmedChart };
