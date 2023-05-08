// src/pages/_app.tsx
import "../styles/globals.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";
import { trpc } from "@acme/app/utils/trpc.web";
import type { SolitoAppProps } from "solito";

import { Provider } from "@acme/app/provider";

import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: SolitoAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const publicPages = ["/dashboard", "/", "/sign-in", "/auth/login"];
  const router = useRouter();
  const isPublicPage = publicPages.includes(router.pathname);
  return (
    <>
      <ClerkProvider {...pageProps}>
        <Provider>
          {isPublicPage ? (
            <>{getLayout(<Component {...pageProps} />)}</>
          ) : (
            <>
              <SignedIn>{getLayout(<Component {...pageProps} />)}</SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          )}
        </Provider>
      </ClerkProvider>
    </>
  );
}

export default trpc.withTRPC(MyApp);
