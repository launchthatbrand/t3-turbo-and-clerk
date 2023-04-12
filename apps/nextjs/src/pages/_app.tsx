// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { trpc } from "../utils/trpc";

import { Provider } from "@acme/app/provider";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </ClerkProvider>
  );
};

export default trpc.withTRPC(MyApp);
