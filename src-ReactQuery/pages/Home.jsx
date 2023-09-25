import React from "react";
import useData from "../hooks/useData";

function Home() {
  const [courses, articles] = useData();

  console.log("Articles =>", articles);
  console.log("Courses =>", courses);

  return <h1>Home</h1>;
}

export default Home;
