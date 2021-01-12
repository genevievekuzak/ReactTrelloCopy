import React from "react";
import "./App.css";
import List from "./List.js";

function App(props) {
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {props.store.lists.map((item) => (
          <List
            key={item.id}
            header={item.header}
            card={props.store.allCards}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
