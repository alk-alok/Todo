import { useRef } from "react";

import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

function NewMeetupForm(props) {

    const titleInputref=useRef();
    const imageInputref=useRef();
    const addressInputref=useRef();
    const descriptionInputref=useRef();

    function submitHandler(event){
        event.preventDefault();

        const enteredTitle=titleInputref.current.value;
        const enteredAddress=addressInputref.current.value;
        const enteredImage=imageInputref.current.value;
        const enteredDesription=descriptionInputref.current.value;

        const meetupData={
            title:enteredTitle,
            image:enteredImage,
            address: enteredAddress,
            description: enteredDesription
        }
        props.onAddMeetup(meetupData);
    }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputref}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image (Link)</label>
          <input type="url" required id="image" ref={imageInputref}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="address" >Address</label>
          <input type="text" required id="address" ref={addressInputref}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5" ref={descriptionInputref}/>
        </div>
        <div className={classes.actions}>
          <button >Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
