import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/mui";
import type { LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import { AppIcon } from "@components/app-icon";
import { Header } from "@components/header";
import { authenticator } from "~/utils/auth.server";

export default function BaseLayout() {
  return (
    <>
      <ThemedLayoutV2
        Header={() => <Header sticky />}
        Title={({ collapsed }) => (
          <ThemedTitleV2
            collapsed={collapsed}
            text="refine Project"
            icon={<AppIcon />}
          />
        )}
      >
        <Outlet />
      </ThemedLayoutV2>
    </>
  );
}

/**
 * We're checking if the current session is authenticated.
 * If not, we're redirecting the user to the login page.
 * This is applied for all routes that are nested under this layout (_protected).
 */
export const loader = async ({ request }: LoaderArgs) => {
  const session = await authenticator.isAuthenticated(request);
  const pathname = new URL(request.url).pathname;

  let to = ``;
  // ignore only `/` routes
  if (pathname !== "/") {
    to = `?to=${pathname}`;
  }

  if (!session) {
    return redirect(`/login${to}`);
  }

  return {};
};
