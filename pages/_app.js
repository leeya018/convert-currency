import Head from "next/head"
import "../styles/globals.css"
export function reportWebVitals(metric) {
  if (metric.label === "web-vital") {
    console.log(metric.name, metric.value) // or send to analytics
  }
}
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
