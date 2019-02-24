const selectStyles = (theme) => {
    return {
        input: (base) => {
            return {
                ...base,
                color: theme.palette.text.primary,
                '& input': {
                    font: 'inherit'
                }
            }
        }
    }
}

export {
    selectStyles
}