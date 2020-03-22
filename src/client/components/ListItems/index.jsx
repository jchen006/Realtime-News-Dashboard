import React from 'react';
import List from'@material-ui/core/List';
import { useStyles } from './styles';
import Divider from '@material-ui/core/Divider';
import { Item } from './components/Item';

function ListItems() {
    const classes = useStyles();

    // "provinceState": "Hubei",
    // "countryRegion": "China",
    // "lastUpdate": 1584664982000,
    // "lat": 30.9756403482891,
    // "long": 112.270692167452,
    // "confirmed": 67800,
    // "recovered": 58381,
    // "deaths": 3132,
    // "active": 6287,
    // "admin2": null,
    // "fips": null,
    // "combinedKey": null,
    // "iso2": "CN",
    // "iso3": "CHN"
    return (
        <List className={classes.root}>
            {
                value.map((item, index, list) => {
                    <Item {...item}/>
                    { index !== list.length - 1 ? <Divider variant="inset" component="li" /> : null}
                })
            }
        </List>
    )
}

ListItems.propTypes = {

}

export { ListItems }