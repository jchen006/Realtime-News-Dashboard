
export const convertArrayToString = (list) => {
    let newString = '';
    list.forEach((item, i) => {
        newString += `${item.value}`
        if(i != list.length - 1) {
            newString += ',';
        }
    })
    return newString;
}