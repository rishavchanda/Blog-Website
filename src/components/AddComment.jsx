import React from "react";
import { useState } from "react"
import firebase from "firebase"
import { db } from '../firebase_config';

const AddComments = () => {
    const [Name, setName] = useState("");
    const [Comment, setComment] = useState("");
    const addCode = (e) => {
        e.preventDefault();
        db.collection("Comments").doc().set({
            name: Name,
            comment: Comment,
        })
    }
    return (
        <>
            <div id="respond">

                <h3>Leave a Comment</h3>

                <form action="" id="commentform">
                    <div>
                        <label htmlFor="Name">Name:</label>
                        <input type="text" value={Name} onChange={(e) => setName(e.target.value)} className="form-control" />
                    </div>
                    <label htmlFor="comment" class="required">Your message</label>
                    <input type="text" className="form-control" id="comment" value={Comment} onChange={(e) => setComment(e.target.value)} required="required"></input>
                    <button className="btn btn-class color-lightgreen" type="submit" onClick={addCode}>SEND</button>
                </form>

            </div>
        </>
    );
}

export default AddComments;