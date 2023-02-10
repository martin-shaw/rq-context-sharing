import { useQuery } from "@tanstack/react-query";

export const useCounter = () => {
    return useQuery<number, Error>(["get-counter"], () => Math.random());
};
