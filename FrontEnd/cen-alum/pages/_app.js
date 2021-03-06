import '../styles/globals.css';
import 'antd/dist/antd.css';
import '../styles/layout.css';
import '../styles/cotizacion.css';
import '../styles/cuentaCobro.css';
import '../styles/ordenesServicio.css';
import '../styles/showModal.css';
import '../styles/ordenDeServicio.css';
import { ConfigProvider } from 'antd';
import es_ES from 'antd/lib/locale/es_ES';
import Layout from '../components/constants/layout';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>CenAlum Management & Control </title>
    </Head>
    <ConfigProvider locale={es_ES}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ConfigProvider>
  </>
}

export default MyApp
