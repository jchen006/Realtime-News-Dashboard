import React from 'react';
import List from'@material-ui/core/List';
import { useStyles } from './styles';
import Divider from '@material-ui/core/Divider';
import { Item } from './components/Item';
import PropTypes from 'prop-types';

function ListItems(props) {
    const classes = useStyles();
    const { items } = props;

    return (
        <List className={classes.root}>
            {
                items.map((item, index, list) => {
                    return (
                        <>
                            <Item {...item}/>
                            { index !== list.length - 1 ? <Divider variant="inset" component="li" /> : null}
                        </>
                    );
                })
            }
        </List>
    )
}

ListItems.propTypes = {
    items: PropTypes.array
}

export { ListItems }