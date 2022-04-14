import { createTheme, globalCss } from "@buildarea-ui/react";

function MyApp({ Component, pageProps }) {
  const globalStyles = globalCss({
    '*': { margin: 0, padding: 0, fontFamily: 'sans-serif' },
  });
  
  const theme = createTheme({
    colors: {
      primary: '#001E6C',
      secondary: '#035397'
    }
  })

  return <div className={theme}> {globalStyles()}
    <Component {...pageProps} />
  </div>
}

export default MyApp
