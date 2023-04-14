// src/pages/_app.tsx
import "../styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { trpc } from "@acme/app/utils/trpc.web";
import type { SolitoAppProps } from "solito";

import { Provider } from "@acme/app/provider";

function MyApp({ Component, pageProps }: SolitoAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ClerkProvider {...pageProps}>
      <Provider>{getLayout(<Component {...pageProps} />)}</Provider>
    </ClerkProvider>
  );
}

export default trpc.withTRPC(MyApp);
