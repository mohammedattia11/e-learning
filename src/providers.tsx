"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { UserContext } from "./context/user-context";
import Header from "./components/ui/header";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";

function CreateUserEffect({
  setUserDetails,
}: {
  setUserDetails: React.Dispatch<React.SetStateAction<any>>;
}) {
  const { user, isLoaded } = useUser();
  const hasRun = useRef(false);

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await axios.post("/api/user");
      return res.data;
    },
    onSuccess: (data) => {
      setUserDetails(data);
    },
  });

  useEffect(() => {
    if (!isLoaded || !user) return;
    if (hasRun.current) return;

    mutation.mutate();
    hasRun.current = true;
  }, [isLoaded, user, mutation]);

  return null;
}

export function Providers({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [userDetails, setUserDetails] = useState(null);

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <UserContext.Provider value={{ userDetails, setUserDetails }}>
        <NextThemesProvider {...props}>
          {/* Runs mutation safely on mount */}
          <CreateUserEffect setUserDetails={setUserDetails} />

          <div className="h-screen flex flex-col">
            <Header />
            <div className="flex-1">{children}</div>
          </div>
        </NextThemesProvider>
      </UserContext.Provider>
    </QueryClientProvider>
  );
}
