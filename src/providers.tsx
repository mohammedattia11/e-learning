"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useState } from "react";
import { UserContext } from "./context/user-context";
import Header from "./components/ui/header";

export function Providers({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [userDetails, setUserDetails] = useState();
  const { user } = useUser();

  async function createUser() {
    const result = await axios.post("/api/user", {});
    setUserDetails(result?.data);
  }

  useEffect(() => {
    if (!user) return;

    createUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      <NextThemesProvider {...props}>
        <Header />
        {children}
      </NextThemesProvider>
    </UserContext.Provider>
  );
}
