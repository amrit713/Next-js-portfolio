import "../styles/globals.css"



function MyApp({ Component, pageProps }) {
  return <>
  <style jsx global>{`

    html,
    body {
      padding: 0;
      margin: 0;
      font-family: 'Poppins', sans-serif;
    }
    *{
      box-sizing:border-box;
    }
`
  }</style>
  <Component {...pageProps} />
  </>
}

export default MyApp
