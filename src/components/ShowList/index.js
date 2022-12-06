/* This component will show the list of items that the person has entered.*/

import React from "react";
import ListItem from "../ListItem";

function ShowList({ list, tickItem, updateCompletedInDatabase, setEditItem }) {
  return (
    <ol>
      {list.map((listItem) => (
        <ListItem
          name={listItem.item}
          completed={listItem.completed}
          key={listItem.id}
          tickItem={() => tickItem(listItem.id)}
          updateCompletedInDatabase={updateCompletedInDatabase}
          setEditItem={() => setEditItem(listItem)}
        />
      ))}
    </ol>
  );
}

export default ShowList;
