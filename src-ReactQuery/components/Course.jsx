import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { Link } from "react-router-dom";

function Course({ id, title, price }) {
  const queryClient = useQueryClient();

  const { mutate: removeCourse } = useMutation(
    (id) => {
      return fetch(`http://localhost:4000/courses/${id}`, {
        method: "DELETE",
      });
    },
    {
      onSuccess: (response, id) => {
        const courses = queryClient.getQueryData(["Courses"]);
        const newCourses = courses.filter((course) => course.id !== id);

        queryClient.setQueryData(["Courses"], newCourses);
      },
    }
  );

  const removeCourseHandler = () => {
    removeCourse(id);
    console.log("Remove Course With id =>", id);
  };

  return (
    <div className="col mb-4">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <Link to={`/courses/${id}`}>
            <h5 className="card-title">{title}</h5>
          </Link>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Price: {price}
          </h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a className="card-link btn btn-danger" onClick={removeCourseHandler}>
            Remove
          </a>
        </div>
      </div>
    </div>
  );
}

export default Course;
