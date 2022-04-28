import React from "react";
import { useContext } from "../../context/context";

import Card from "../card";
import ScrollButton from "../scrollButton";

import './index.scss';

export function List() {
  const { repositories } = useContext();
  return (
    <>
      <div className="list">
        {repositories.map((repository,i) => (
          <Card data={repository} key={i} />
        ))}
      </div>
      <ScrollButton/>
    </>
  )
}

export default List;