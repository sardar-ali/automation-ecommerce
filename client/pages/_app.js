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
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                <meta content="gate barrier" name="keywords" />
                <meta content="sliding door sliding gate" name="keywords" />
                <meta content="swing gate sliding door" name="keywords" />
                <meta content="gate barrier" name="keywords" />
                <meta content="gate automation, automatic gate" name="keywords" />
                <meta content="gate barrier" name="description" />
                <meta content="sliding gate" name="description" />
                <meta content="swing gate, swing door," name="description" />
                <meta content="gate automation, automatic gate" name="description" />
                <link href="img/favicon.ico" rel="icon" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.css"></link>
                <link href="lib/animate/animate.min.css" rel="stylesheet" />
                <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
                <link href="css/style.css" rel="stylesheet" />
                <title>Gate Automation</title>
            </Head>
            <Provider store={store}>
                <Layout>
                    <WrappedComponent />
                </Layout>
            </Provider>
        </>

    );
}

export default MyApp;
