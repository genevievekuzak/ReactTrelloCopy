import React from "react";
import Card from "./Card";
import "./List.css";

function List(props) {
  console.log(props.card);
  return (
    <section className="List">
      <header className="List-header">
        <h2 className="List-number">{props.header}</h2>
        <div className="List-cards">
          {Object.entries(props.card).map((item) => {
            console.log(props.card);
            return (
              <Card
                key={item[1].id}
                title={item[1].title}
                content={item[1].content}
              />
            );
          })}
        </div>
      </header>
    </section>
  );
}

export default List;
