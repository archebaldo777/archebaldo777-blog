import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { MainPageLazy } from "../../pages/main/main.lazy";
import { AboutPageLazy } from "../../pages/about/about.lazy";

import classes from "./app.module.scss";

export const App = () => {
  return (
    <>
      <h1 className={classes.app}>Hello world from App!</h1>
      <nav className={classes.nav}>
        <Link to={`/`}>Main Page</Link>
        <Link to={`/about`}>About Page</Link>
      </nav>
      <hr />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </>
  );
};
