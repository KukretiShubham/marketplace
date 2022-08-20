import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import AppBar from "../components/appbar";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AppBar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
