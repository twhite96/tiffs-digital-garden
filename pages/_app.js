import "../styles/global.css";
import "../styles/style.css";
import "../styles/prism.css";
// import { FiraCode } from "next/font/google";
import PlausibleProvider from "next-plausible";

// const firaCode = FiraCode({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="mindstone.tuancao.me">
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}
