import '../styles/globals.css'
import Main from "./Components/Main.js"
function MyApp({ Component, pageProps }) {
  return(
    <>
    <Main/>
     <Component {...pageProps} />
     </>
  )
}

export default MyApp
