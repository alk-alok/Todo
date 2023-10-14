import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
    const [modelIsOpen, setModelIsOpen]=useState(false);
    function deleteHandler(){
        setModelIsOpen(true);
    }
    function closeModalhandler(){
        setModelIsOpen(false);
    }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {modelIsOpen && <Modal onCancel={closeModalhandler} onConfirm={closeModalhandler}/> }
      {modelIsOpen && <Backdrop onCancel={closeModalhandler}/> }
      
    </div>
  );
}
export default Todo;
