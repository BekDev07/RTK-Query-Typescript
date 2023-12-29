import React from "react";
import { useAppSelector } from "../hooks/redux";

const Favourites = () => {
  const { favourites } = useAppSelector((state) => state.github);

  if (favourites.length === 0) return <p className="text-center">No Items.</p>;

  return (
    <div className="flex justify-center pt-10 mx-auto w-screen h-screen">
      <ul className="list-none">
        {favourites.map((f) => (
          <li>
            <a href={f} target="_blank">
              {f}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;
