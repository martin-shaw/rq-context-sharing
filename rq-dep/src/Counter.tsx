import React from "react";
import { useCounter } from "./use-counter";

export const Counter = () => {
    const { isLoading, isSuccess, data } = useCounter();

    return <div>{isSuccess && data}</div>;
};
