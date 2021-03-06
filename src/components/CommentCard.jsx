import React from "react"
import ReactRoundedImage from "react-rounded-image"

const CommentCard = (props)=>{
    return(
      <>
       
           <div className="prev-comments">
               <div className="single-item">
                   <div className="column margin">
                   <ReactRoundedImage image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVuow5rYxAe78CzSE8so8SECUZ1_VXLojgPA&usqp=CAU" roundedSize="0" imageWidth="50" imageHeight="50" />
                   </div>
                   <div className="column">
                   <h4>{props.Name}</h4>
                   <p>{props.Comment}</p>
                   </div>
               </div>
           </div>
      </>
    );
}

export default CommentCard;