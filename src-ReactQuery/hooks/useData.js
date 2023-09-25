import { useQueries } from "react-query";

const coursesFetcher = () => {
  return fetch(`http://localhost:4000/courses`).then((res) => res.json());
};

const articlesFetcher = () => {
  return fetch(`http://localhost:4000/articles`).then((res) => res.json());
};

function useData() {
  return useQueries([
    { queryKey: "courses", queryFn: coursesFetcher },
    { queryKey: "articles", queryFn: articlesFetcher },
  ]); // return [...]
}

export default useData;
