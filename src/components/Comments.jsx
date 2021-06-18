import React from "react";
import CommentCard from "./CommentCard";
import { useState, useEffect } from "react"
import firebase from "firebase"
import { db } from '../firebase_config';


const Comments = () => {
    {/* ====Fetching Api for Comments and returning it in form of cards=== */ }
    const [Comments, setComments] = useState([]);
    const [done, setDone] = useState(undefined);
    useEffect(() => {
        fetchComments();
    }, []);
    console.log(done);
    const fetchComments = async () => {
        db.collection("Comments").onSnapshot(function (querySnapshot) {
            setComments(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().name,
                    comment: doc.data().comment,

                })),
                setDone(true)
            );
        });

    }
    return (
        <>
            <div className="wrapper">
                <h3 className="mb-4">Comments:</h3>
                {Comments.map((Comments) => (
                <CommentCard 
                  Name={Comments.name}
                  Comment={Comments.comment}
                /> 
                ))}
            </div>
        </>
    );
}

export default Comments;