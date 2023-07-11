import React from 'react'
import "./card.css"
import Modal from "./Modal"
import { useState } from 'react'
function Card(props) {
    const [opendescription, setopendescription] = useState(false)


    const openDesc = () => setopendescription(true);
    const closeDesc = () => setopendescription(false);

    






    
    const content = <Modal
        show={opendescription}
        onCancel={closeDesc}
        header={props.title}
        footer={<button className="card-button" onClick={closeDesc}>Close</button>}
    >

        <div className='modal-content'>

          

            {props.description_main}
        </div>
    </Modal>

    

    return (<React.Fragment>
        {opendescription && content}
        


        <div className="card" >



            <div className='flex'>
                <img src={props.image} alt="Product Image" className="card-image" />
                <div className="card-content">

                    <h2 className="card-title">{props.title}</h2>
                    <p className="card-text">{props.description}</p>
                    <button className="card-button2" onClick={openDesc}>View me</button>
                </div>
            </div>
        </div>
    </React.Fragment>

    )
}

export default Card