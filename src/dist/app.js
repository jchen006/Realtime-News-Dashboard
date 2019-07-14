const { app, BrowserWindow } = require('electron');
const dev = process.env.NODE_ENV === 'development';
let mainWindow;

let createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 800
    });
    mainWindow.setMenu(null);
    mainWindow.setResizable(true);

    mainWindow.loadFile('./index.html');

    if (dev) {
        // Open the DevTools.
        mainWindow.webContents.openDevTools();
        const {
            default: installExtension,
            REACT_DEVELOPER_TOOLS,
            REDUX_DEVTOOLS,
        } = require('electron-devtools-installer'); // eslint-disable-line
        installExtension(REACT_DEVELOPER_TOOLS)
            .then(name => console.log(`Added Extension:  ${name}`))
            .catch(err => console.log('An error occurred: ', err));

        installExtension(REDUX_DEVTOOLS)
            .then(name => console.log(`Added Extension:  ${name}`))
            .catch(err => console.log('An error occurred: ', err));
    }

    mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });

}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});