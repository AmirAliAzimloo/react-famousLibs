import React, { useEffect, useState } from "react";
import Course from "../components/Course";
import Count from "../components/Count";
import { useQuery, useMutation } from "react-query";
import {
  useCourses,
  useInfiniteCourse,
  usePostCourse,
} from "../hooks/useCourses";
 
function Courses() {
  const [title, setTitle] = useState("");
  
  const [price, setPrice] = useState("");

  const {  
    data,
    isLoading,
    error,
    isError,
    isFetching,
    refetch,
    hasNextPage, // true - false
    fetchNextPage,
  } = useInfiniteCourse();

  const { mutate: addCourse } = usePostCourse();

  const addCourseHandler = (event) => {
    event.preventDefault();
    console.log({ title, price });
    addCourse({ title, price });
    setTitle("");
    setPrice("");
  };

  console.log("Data =>", data);

  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const callApi = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("http://localhost:4000/courses");
  //     const responseData = await res.json();
  //     console.log(responseData);
  //     setData(responseData);
  //     setIsLoading(false);
  //   };

  //   callApi();
  // }, []);

  useEffect(() => {
    // Calc
    // if (scroll) {
    //   fetchNextPage()
    // }
  });

  if (isError) {
    return (
      <h1 className="alert alert-danger mt-4 text-center">
        Error - {error.message}
      </h1>
    );
  }

  if (isLoading) {
    return (
      <h1 className="alert alert-primary mt-4 text-center">Is Loading ...</h1>
    );
  }

  return (
    <>
      {isFetching && (
        <h1 className="alert alert-primary mt-4 text-center">Is Loading ...</h1>
      )}
      <h1 className="mt-4 text-center">
        Test Courses / Count: <Count /> -{" "}
        <button onClick={refetch}>ReFetch</button>
      </h1>

      <hr />

      <div className="d-flex justify-content-center">
        <form>
          <input
            type="text"
            className="m-3"
            placeholder="Title ..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="m-3"
            placeholder="Price ..."
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button type="submit" onClick={addCourseHandler}>
            Add Course
          </button>
        </form>
      </div>

      <hr />
      <div className="container mt-3">
        <div className="row">
          {data.pages?.map((courses) =>
            courses.map((course) => <Course key={course.id} {...course} />)
          )}
        </div>
      </div>
      <button
        onClick={fetchNextPage}
        className={`btn btn-primary w-100 text-bold ${
          !hasNextPage ? "disabled" : null
        }`}
      >
        Load More
      </button>
    </>
  );
}

export default Courses;
