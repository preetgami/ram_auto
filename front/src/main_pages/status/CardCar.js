import React from 'react'
import "./CarCrd.css"
import { useState } from 'react'
function CardCar(props) {
    const [opendescription, setopendescription] = useState(false)



    const toggleDetails = () => {
        setopendescription(!opendescription);
    };
    let sum = 0;
    let header = <div className = "table-row" >
                <div className="table-cell">
                    <h2 className="card_car-title-h1">Job</h2>
                </div>
                <div className="table-cell">
                    <h2 className="card_car-title-h1">Quantity</h2>
                </div>
                <div className="table-cell">
                    <h2 className="card_car-title-h1">Price/Unit</h2>
                </div>
                 <div className="table-cell">
                     <h2 className="card_car-title-h1">Total </h2>
                 </div>

            </div >
    let content_car = props.services_to_do.map((job, index) => {
            
            { sum += job.price * job.quantity }
            return <div className="table-row">
                <div className="table-cell">
                    <h2 className="card_car-title1">{job.title}</h2>
                </div>
                <div className="table-cell">
                    <h2 className="card_car-title1">{job.quantity}</h2>
                </div>
                <div className="table-cell">
                    <h2 className="card_car-title1">Ksh. {job.price}</h2>
                </div>
                 <div className="table-cell">
                     <h2 className="card_car-title1">Ksh. {job.price*job.quantity}</h2>
                 </div>

            </div>

        })
        

    return (<React.Fragment>
        
       


        
        <div className='table'>
            <div className="table-row">
                <div className="table-cell">
                    <h2 className="card_car-title">{props.title}</h2>
                </div>
                <div className="table-cell">
                    <div className="card_car-text">{props.lis_plate}</div>
                </div>
                <div className="table-cell">
                    <div className="card_car-text">{props.recieved}</div>
                </div>
                <div className="table-cell">
                    <div className="card_car-text">{props.due}</div>
                </div>
                <div className="table-cell">
                    <button className="card_car-button2" onClick={toggleDetails}>View</button>
                    
                </div>
               
                

            </div>
            
        </div>
        <div>{opendescription && (
            <div className='"table-row"'>
                <div className="dropdown">
                    {header}
                    {content_car}
                    <br/>
                    Net Total: Ksh. <span style={{ backgroundColor: "#AAFF00", color: "#000000" }}>{sum}</span>
                </div>
            </div>)}
        </div>

    </React.Fragment>

    )
}

export default CardCar