import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Counter } from "rq-dep";


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

export const App = () => (


            <QueryClientProvider client={queryClient} contextSharing={true}>
                <>
                <h1>Hello!</h1>
                <Counter />
                </>                
            </QueryClientProvider>
);
