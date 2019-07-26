const colormap = require('colormap');

let colors = colormap({
    colormap: 'temperature',
    format: 'hex',
    alpha: 2
});

export const getColor = (score) => {
    let index = Math.round(score/72);
    return colors[index];
}
