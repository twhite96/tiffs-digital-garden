import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <a rel="me" style={{display: 'none'}} href="https://hachyderm.io/@tiff">Mastodon</a>
                <a rel="me" style={{display: 'none'}} href="https://tiffanywhite.social/@tiff">Personal Mastodon</a>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
                    rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" rel="stylesheet"></link>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}