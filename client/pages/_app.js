import '../public/css/bootstrap.min.css';
import '../public/css/style.css';
import React from "react"
import { Provider } from 'react-redux';
import store from '../redux/store';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Layout from '../components/layout/Layout';
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
    const WrappedComponent = () => {
        return (
            <>
                <Component {...pageProps} />
                <ToastContainer
                    position="top-right"
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </>

        );
    };

    return (
        <Provider store={store}>
            <Layout>
                <WrappedComponent />
            </Layout>
        </Provider>

    );
}

export default MyApp;
