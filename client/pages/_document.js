import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react'
// import Head from 'next/head'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
            <Head>
            <meta charSet="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                <meta content="Free HTML Templates" name="keywords" />
                <meta content="Free HTML Templates" name="description" />
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



                <script async  src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                <script async   src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
                <script async   src="lib/easing/easing.min.js"></script>
                <script async  src="lib/owlcarousel/owl.carousel.min.js"></script>
                <script async   src="mail/jqBootstrapValidation.min.js"></script>
                <script async   src="mail/contact.js"></script>
                <script async  src="js/main.js"></script>
            </Head>
                <body>
                    <Main />
                    <NextScript />
                <script async  src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                    <script src="https://code.jquery.com/jquery-3.6.0.min.js" defer></script>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
