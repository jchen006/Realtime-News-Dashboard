import React from 'react';
import { connect } from 'react-redux';
import { BreadcrumbsWrapper } from 'components/Breadcrumbs';
import { updateCurrentPage } from 'actions/appAction';
import { useStyles } from './styles';

const mapStateToProps = state => {
    const app = state.appReducer;
    return {...app};
}

const mapDispatchToProps = dispatch => {
    return {
        updateCurrentPage: (page) => dispatch(updateCurrentPage(page))
    }
}

function FooterBreadcrumbs(props) {
    const classes = useStyles();
    console.log({props});
    const { currentPage, history, updateCurrentPage} = props;
    return (
        <div className={classes.root}>
            {history.length > 0 ? <BreadcrumbsWrapper currentPage={currentPage} history={history} handleClick={updateCurrentPage}/> :null}
        </div>
    )
}

const CoronavirusBreadcrumbs = connect(mapStateToProps, mapDispatchToProps)(FooterBreadcrumbs);
export { CoronavirusBreadcrumbs }