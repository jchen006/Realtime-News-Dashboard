import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux'
import configureStore from './store';
import { BrowserRouter } from 'react-router-dom';
import { SocketIOProvider } from "use-socketio";

const socketIoOptions = {
    path: '',
    reconnection: true,
    timeout: 2000
}

ReactDOM.render(
    <Provider store={configureStore()}>
        <BrowserRouter>
            <SocketIOProvider url="http://localhost:8080" opts={socketIoOptions}>
                <App/>
            </SocketIOProvider>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));