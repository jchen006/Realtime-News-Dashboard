import React from 'react'
import {Provider} from "react-redux";
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import { configureStore } from '../src/client/store';
import { SocketIOProvider } from "use-socketio";

class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
        return {
            pageProps: {
                // Call page-level getInitialProps
                ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
            }
        };
    }

    render() {
        const {Component, pageProps, store} = this.props;
        const socketIoOptions = {
            path: '',
            reconnection: true,
            timeout: 2000
        }
        return (
            <Container>
                <SocketIOProvider url="http://localhost:8080" opts={socketIoOptions}>
                    <Provider store={store}>
                        <Component {...pageProps} />
                    </Provider>
                </SocketIOProvider>
            </Container>
        );
    }
};

export default withRedux(configureStore, {debug: true})(MyApp);