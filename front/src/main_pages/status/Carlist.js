import React from 'react'
import CardCar from './CardCar'
function Carlist(props) {
  return (
      <div className="card_car-grid"  >
          {props.cars.map((car, index) => (
              <div className="card_car-list-item" key={index}>
                  <CardCar
                      lis_plate={car.lis_plate}
                      title={car.model}
                      recieved={car.recieved}
                      due={car.due}
                      services_to_do={car.services_to_do}
                  />
              </div>

          ))}
      </div>
  )
}

export default Carlist