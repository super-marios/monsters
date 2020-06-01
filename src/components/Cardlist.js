import React from "react";
import "./CardList.styles.css";
import Card from "./Card";

const CardList = (props) => {
  const { monsters } = props;

  return (
    <div className="card-list">
      {monsters.map((monster, i) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
