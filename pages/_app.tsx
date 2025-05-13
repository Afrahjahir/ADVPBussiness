import { CssBaseline } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { GoogleAnalytics, ThemeOptionsProvider } from "mui-extended";
import { NextConfig } from "next";
import { AppProps } from "next/app";
import getConfig from "next/config";
import Head from "next/head";
import { Layout } from "../components/Layout";

const MuiExtendedDemoApp = ({ Component, pageProps }: AppProps) => {
  const nextConfig: NextConfig = getConfig();

  const defaultThemeOptions =
    nextConfig?.publicRuntimeConfig?.defaultThemeOptions || {};

  return (
    <>
      <GoogleAnalytics />
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline enableColorScheme />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeOptionsProvider themeOptions={defaultThemeOptions}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeOptionsProvider>
      </LocalizationProvider>
    </>
  );
};

export default MuiExtendedDemoApp;
