import React from 'react';
import List from'@material-ui/core/List';
import { useStyles } from './styles';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function ListItems(props) {
    const classes = useStyles();
    const { ItemComponent, items } = props;

    return (
        <List className={clsx(classes.root, classes.tweetList)}>
            {
                items.map((item, index, list) => {
                    return (
                        <>
                            <ItemComponent {...item}/>
                            { index !== list.length - 1 ? <Divider variant="middle" component="li" /> : null}
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