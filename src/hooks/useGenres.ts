import genres from "../data/genres";
import { FetchResponse } from "../services/api-client";
import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>('/genres');
const useGenre = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres
})


export default useGenre;