import { SessionProvider } from "next-auth/react";
import Layout1 from "../layouts/Layout1";
import Layout2 from "../layouts/Layout2";
import "/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../componants/redux/store";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const Layouts = {
    L1: Layout1,
    L2: Layout2,
  };

  const Layout = Layouts[Component.Layouts];

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}
