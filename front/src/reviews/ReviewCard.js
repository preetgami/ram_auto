import React from 'react'
import "./review.css"


function ReviewCard(props) {
    return (
        <div className="review-card">
            <div className="review-card-content">
                <span style={{ backgroundColor: "#AAFF00", color: "#000000" }}>{props.by}</span>
                <p>{props.comment}</p>
                <p>{props.date}</p>
            </div>
        </div>
    );
}

export default ReviewCard;
