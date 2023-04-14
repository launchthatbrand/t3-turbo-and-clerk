// src/pages/_app.tsx
import "../styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { trpc } from "@acme/app/utils/trpc.web";
import type { SolitoAppProps } from "solito";

import { Provider } from "@acme/app/provider";

function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </ClerkProvider>
  );
}

export default trpc.withTRPC(MyApp);
