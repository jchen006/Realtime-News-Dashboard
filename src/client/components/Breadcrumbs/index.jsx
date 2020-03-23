import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

function BreadcrumbsWrapper(props) {
    const { currentPage, history, handleClick } = props;
    
    const handleOnClick = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        handleClick(event.target.value);
    }


    // export default function SimpleBreadcrumbs() {
    //     return (
    //       <Breadcrumbs aria-label="breadcrumb">
    //         <Link color="inherit" href="/" onClick={handleClick}>
    //           Material-UI
    //         </Link>
    //         <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
    //           Core
    //         </Link>
    //         <Typography color="textPrimary">Breadcrumb</Typography>
    //       </Breadcrumbs>
    //     );
    //   }

    const renderCrumbs = () => {
        const crumbs = [];
        history.forEach((page) => {
            console.log(page, currentPage)
            if(page === currentPage) {
                crumbs.push(<Typography color="textPrimary">{page}</Typography>);
            } else {
                crumbs.push(
                    <Link color="inherit" value={page} onClick={handleOnClick}>
                        {page}
                    </Link>
                );
            }
        })
        return crumbs;
    }

    return (
        <Breadcrumbs aria-label="breadcrumb">
            {renderCrumbs()}
        </Breadcrumbs>
    )
}

export { BreadcrumbsWrapper };
