import GlobalStyle from '../global-styles';

function MyApp({ Component, pageProps }) {
    
    return( 
    <>
        <GlobalStyle />
        <Component {...pageProps} />
    </>)
  }

  export default MyApp