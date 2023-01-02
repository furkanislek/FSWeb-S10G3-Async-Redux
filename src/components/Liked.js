import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { dislikeFact } from "./redux";

export default function Liked() {
  const likedFacts = useSelector((store) => store.likedFacts);
  const dispatch = useDispatch();

  return likedFacts.length > 0 ? (
    <ul className="liked-list">
      {likedFacts.map((item) => (
        <li key={item.key}>
          {item.activity}
          <button onClick={() => dispatch(dislikeFact(item.id))}>Delete</button>
        </li>
      ))}
    </ul>
  ) : (
    <div className="alertBox">
       <p> Hmmm, I think you don't like anythink 🙄</p> 
        Okay, keep down dude 😒    
    </div>
  );
}
