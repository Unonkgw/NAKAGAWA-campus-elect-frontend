import React from "react";

const StudentsList = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/students`
  );

  const students = await res.json();

  return <div>{JSON.stringify(students)}</div>;
};

export default StudentsList;
