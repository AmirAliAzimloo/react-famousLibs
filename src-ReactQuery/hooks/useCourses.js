import React from "react";
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";

function useCourses() {
  return useQuery(
    ["Courses"],
    () => {
      return fetch(`http://localhost:4000/courses`).then((res) => res.json());
    },
    {
      keepPreviousData: true,
      select: (data) => {
        return data.map((course) => ({
          ...course,
          title: course.title.toLowerCase(),
          price: course.price.toLocaleString(),
        }));
      },
      onSuccess: (data) => {
        console.log("Success", data);
      },
      onError: (error) => {
        console.log("Error !!", error);
      },
    }
  );
}

function usePostCourse() {
  const queryClient = useQueryClient();

  return useMutation(
    (course) => {
      return fetch(`http://localhost:4000/courses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...course }),
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["Courses"]);
      },
    }
  );
}

function useInfiniteCourse() {
  return useInfiniteQuery(
    ["courses-infinite"],
    ({ pageParam = 1 }) =>
      fetch(`http://localhost:4000/courses?_limit=4&_page=${pageParam}`).then(
        (res) => res.json()
      ),
    {
      getNextPageParam: (lastPage, pages) => {
        if (pages.length < 4) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
    }
  );
}

export { useCourses, usePostCourse, useInfiniteCourse };
