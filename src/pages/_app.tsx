import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Raleway, Quicksand } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
});
const quicksand = Quicksand({
  subsets: ["latin"],
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --raleway-font: ${raleway.style.fontFamily};
            --quicksand-font:${quicksand.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
