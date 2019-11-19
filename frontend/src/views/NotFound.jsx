import React from "react";
import notFound from "../assets/notFound.gif";

const NotFound = () => {
  return (
    <>
      <div>
        <h1>Page not found</h1>
        <p className="lead">The page you are looking for doesn't exist</p>
      </div>
      <div>
        <img src={notFound} alt="Page Not Found" />
      </div>
    </>
  );
};
export default NotFound;
