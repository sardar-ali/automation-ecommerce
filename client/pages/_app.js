import React from "react"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Layout from '../components/layout/Layout';
import Head from 'next/head'


function MyApp({ Component, pageProps }) {

    const WrappedComponent = () => {
        return (
            <>
                <Head>
                    <meta charSet="utf-8" />
                    <title>MultiShop - Online Shop Website Template</title>
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                    <meta content="Free HTML Templates" name="keywords" />
                    <meta content="Free HTML Templates" name="description" />
                    <link href="img/favicon.ico" rel="icon" />
                    {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                    rel="stylesheet"
                /> */}
                    <link
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
                        rel="stylesheet"
                    />
                    <link href="lib/animate/animate.min.css" rel="stylesheet" />
                    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
                    <link href="css/style.css" rel="stylesheet" />



                    <script async src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                    <script async src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
                    <script async src="lib/easing/easing.min.js"></script>
                    <script async src="lib/owlcarousel/owl.carousel.min.js"></script>
                    <script async src="mail/jqBootstrapValidation.min.js"></script>
                    <script async src="mail/contact.js"></script>
                    <script async src="js/main.js"></script>
                </Head>
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
            <Layout>
                <WrappedComponent />
            </Layout>
        </>

    );
}

export default MyApp;
