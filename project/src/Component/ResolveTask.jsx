import React from "react";

const ResolveTask = ({ showResolved }) => {
  //console.log(showResolved);
  return (
    <div className="mt-5 ml-5 w-full mx-auto">
      <h1 className="mb-5">Resolved Task</h1>

      {showResolved.map((task) => (
        <div className="w-72 text-sm p-2 text-center rounded-md shadow-2xl px-3 py-4">
          {task.title}
        </div>
      ))}
    </div>
  );
};

export default ResolveTask;
