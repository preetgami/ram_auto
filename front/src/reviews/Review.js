import React from 'react';
import ReviewCard from "./ReviewCard"
function Review() {
    let data = [
         {
            id:1,
            comment: "Great workmanship, great service and great people! Thank you very much for fitting me into the schedule!! You guys rock!!",
            date: "December 20, 2022.",
            by: "David"
        },  {
            id:2,
            comment: "You guys have done good by me for years now! I don’t trust anyone else with my car! thanks for your quick services",
            date: "November 15, 2022",
            by: "Barbara"
        }, {
            id: 3,

            comment: "Ram Auto keeps me coming back with coupons and fast and honest service",
            date: "Feb 12, 2023",
            by: "Sam"
        }, {
            id: 4,
    
            comment: "Unreal expereince and great prices! Car was up and running in a matter of days ",
            date: "April 18, 2023",
            by: "Kamau"
        }
    
    ]
   

  return (
      <ul className="review-list">
          {data.map((rev)=>{
            return( <ReviewCard
                id={rev.id}
                comment={rev.comment}
                date={rev.date}
                by={rev.by}
            />)
          })}
      </ul>
  )
}

export default Review

