import React from 'react'
import Carlist from './Carlist'
function Status() {
  let cars=[
    {
      id:1,
      lis_plate:"KBG 124D",
      model:"Toyota Corola",
      recieved:"10 Aug 2022s",
      due:"25 Aug 2022",
      services_to_do:[
        {
          title: "mcxsd dscvmsd asdhafklj asdfbear q4urp8u34t 3iutguwe hriureoty erwiutwdsajof  engine oil",
        quantity:1,
        price:1200
        },
        {
          title: "Change brake pads ",
          quantity: 2,
          price: 20100
        },
        {
          title: "replace front left wheel",
          quantity: 1,
          price: 18000
        }
      ]
    }, {
      id: 1,
      lis_plate: "KBG 124D",
      model: "Toyota Corola",
      recieved: "10 Aug 2022",
      due: "25 Aug 2022",
      services_to_do: [
        {
          title: "Change engine oil",
          quantity: 1,
          price: 1200
        },
        {
          title: "Change brake pads ",
          quantity: 2,
          price: 20020
        },
        {
          title: "replace front left wheel",
          quantity: 1,
          price: 80100
        }
      ]
    },
    {
      id: 1,
      lis_plate: "KBG 124D",
      model: "Toyota Corola",
      recieved: "10 Aug 2022",
      due: "25 Aug 2022",
      services_to_do: [
        {
          title: "Change engine oil",
          quantity: 1,
          price: 1200
        },
        {
          title: "Change brake pads ",
          quantity: 2,
          price: 2000
        },
        {
          title: "replace front left wheel",
          quantity: 1,
          price: 8000
        }
      ]
    }, {
      id: 1,
      lis_plate: "KBG 124D",
      model: "Toyota Corola",
      recieved: "10 Aug 2022",
      due: "25 Aug 2022",
      services_to_do: [
        {
          title: "Change engine oil",
          quantity: 1,
          price: 1200
        },
        {
          title: "Change brake pads ",
          quantity: 2,
          price: 2000
        },
        {
          title: "replace front left wheel",
          quantity: 1,
          price: 8000
        }
      ]
    },
    {
      id: 1,
      lis_plate: "KBG 124D",
      model: "Toyota Corola",
      recieved: "10 Aug 2022",
      due: "25 Aug 2022",
      services_to_do: [
        {
          title: "Change engine oil",
          quantity: 1,
          price: 1200,
          

        },
        {
          title: "Change brake pads ",
          quantity: 2,
          price: 2000,
        },
        {
          title: "replace front left wheel",
          quantity: 1,
          price: 8000,

        }, {
          title: "replace front left wheel",
          quantity: 1,
          price: 8000,

        }, {
          title: "replace front left wheel",
          quantity: 1,
          price: 8000,

        }, {
          title: "replace front left wheel",
          quantity: 1,
          price: 8000,

        }, {
          title: "replace front left wheel",
          quantity: 1,
          price: 8000,

        }
      ]
    }
  ]
  return (
    <div>
      <h1>You Car Status</h1>
      <div>
        <div className='table'>
          <div className="table-row">
            <div className="table-cell">
              <h2 className="card_car-title-h">Model</h2>
            </div>
            <div className="table-cell">
              <div className="card_car-text-h">License</div>
            </div>
            <div className="table-cell">
              <div className="card_car-text-h">Recieved</div>
            </div>
            <div className="table-cell">
              <div className="card_car-text-h">Due</div>
            </div>
            <div className="table-cell">
              <div className="card_car-text-h">Details</div>
            </div>
          </div>
        </div>
        <Carlist cars={cars}/>
      </div>
    </div>
  )
}

export default Status