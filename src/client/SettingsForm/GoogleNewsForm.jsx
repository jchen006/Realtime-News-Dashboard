// //Build this for a specific 

// query
// category: [business entertainment general health science sports technology]
// language: [ar de en es fr he it nl no pt ru se ud zh]
// country: ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za


class GoogleNewsFormSettings extends React.Component {


    render() {
        return (
            <ExpansionPanelDetails>
                <div className={classes.column} />
                <div className={classes.column}>
                    <Chip label="Barbados" className={classes.chip} onDelete={() => {}} />
                </div>
                <div className={classNames(classes.column, classes.helper)}>
                    <Typography variant="caption">
                        Select your destination of choice
                        <br />
                        <a href="#sub-labels-and-columns" className={classes.link}>
                        Learn more
                        </a>
                    </Typography>
                </div>
            </ExpansionPanelDetails>
        )
    }
}