import React from 'react'
import CardList from "./CardList"
function Services() {
  const image1 = require('./brakedisc.jpg');
  const image2 = require('./oilc.jpg');
  const image3 = require('./electronic.jpg');
  const image4 = require('./engine.jpg');
  const image5 = require('./wheela.jpg');
  const image6 = require('./shock.jpg');


  let desc6=<div>
    A problematic car Suspensions system can get worse with increase miles, can wear out tires quicker than normal and will lead to an eventual Suspensions repair. Thankfully you have come to the right place, here at Ram Auto Garage we have technicians ready to repair or replace any of these Suspensions components with leading brand parts;
<ul>
      <li> 
        <span style={{ backgroundColor: "#AAFF00", color: "#000000" }}>
          Car Axles </span></li>
      <li>
        <span style={{ backgroundColor: "#AAFF00", color: "#000000" }}>
          Car Struts </span></li>
      <li>
        <span style={{ backgroundColor: "#AAFF00", color: "#000000" }}>
          Car Shocks</span>
        </li>

</ul>
   

  </div>
  let desc2=<div>
    Your car's engine puts extreme pressure on your engine's oil, and eventually the oil contained in your engine loses it lubrication qualities.Sooner than later your oil can't lubricate, cool, clean or flow within the engine components.  If you don't change your oil often < span style={{ backgroundColor: "#AAFF00", color: "#000000" }}>you will substantially reduce the life span of your vehicle's engine</span>.
    
  </div>
  let desc5=<div>
    With every wheel alignment, we perform a complete steering and suspension system inspection. In fact, there is not much we don't do when it comes to car alignment or front alignment. Here are the wheel alignment services Ram auto garage will provide:
    <ul>
      <li> State of the art 
        <span style={{ backgroundColor: "#AAFF00", color: "#000000" }}>computerized alignments </span>
        </li>
      <li>Inspect 
        <span style={{ backgroundColor: "#AAFF00", color: "#000000" }}>
        suspension and steering
        </span>
        </li>
      <li> 
        <span style={{ backgroundColor: "#AAFF00", color: "#000000" }}>
        Adjust alignment angles 
        </span>
        to manufacturer's specifications</li>
      <li> <span style={{ backgroundColor: "#AAFF00", color: "#000000" }}>  
        Road test </span>
        
        vehicle as necessary</li>

    </ul>


  
  </div>
  let desc3=<div>
    Ram Auto Garage specializes in understanding the basics along with also having the leading equipment to correctly diagnose any auto electrical repair needs you may have.



    Major Components of Auto Electrical Repair:
    
    <ul>
      <li>
        < span style={{ backgroundColor: "#AAFF00", color: "#000000" }}>
          Car Battery
        </span>
    </li>
      <li>
        < span style={{ backgroundColor: "#AAFF00", color: "#000000" }}>
          Alternator
        </span>
        </li>
      <li>
        < span style={{ backgroundColor: "#AAFF00", color: "#000000" }}>
          Starter
        </span>
         </li>

    </ul>
  </div>
  let desc1=<div>
    Sometimes, your vehicle's brakes will alert you when there's trouble. 
    <span style={{ backgroundColor: "#AAFF00", color: "#000000" }}>  Whistling noises, chirping sounds, and grinding</span>
    are indications that maintenance is required. 
  <br/>
  
   
  </div>
  let desc4=<div>
    Ram Auto Garage can bring your vehicle's engine back to life. How you may ask? 
    Engine service specialists can return your engine to its original-performance condition. 
    In fact, we have the knowledge and skills for 
    <span style={{ backgroundColor: "#AAFF00", color: "#000000" }}> all engine repairs, engine rebuilds, to head gaskets and valve jobs</span>
   
    .Yes, even complete 
    <span style={{ backgroundColor: "#AAFF00", color: "#000000" }}> engine replacements. </span>
   
  </div>
  //<ErrorModal error={error} onClear={clearError} />
  let loadedservices=[
    {id:"1",
      name: "Brakes Repair",
      description_breif:"Brakes are the most important safety factor for your car. Ram Auto provides auto brake repair and servicing for all models and cars.",
      description_main: desc1,
      image:image1
    },
    {
      id: "2",
      name: "Oil Change",
      description_breif: "Regularly changing your car's engine oil and filter is one of the most important things you can do to keep your car running well",
      description_main: desc2,
      image: image2
    },
    {
      id: "3",
      name: "Electronic Diagnostics",
      description_breif: "Performing a car diagnostic can reveal a number of problems associated with the transmission, oil tank, exhaust system and other components of the vehicle.",
      description_main: desc3,
      image: image3
    },
    {
      id: "4",
      name: "Engine Repars",
      description_breif: "Trust the experts at Ram Auto Garage to service your engine and maintain its performance with filter replacement, fuel system cleaning and more.",
      description_main: desc4,
      image: image4
    },
    {
      id: "5",
      name: "Wheel Alignment",
      description_breif: "Trust the experts at Ram Auto Garage to service your engine and maintain its performance with filter replacement, fuel system cleaning and more.",
      description_main: desc5,
      image: image5
    },
    {
      id: "6",
      name: "Suspensions",
      description_breif: "Your car's suspension system is made up of struts, shock absorbers, springs and tyres. Shocks and struts are important for your driving safety.",
      description_main: desc6,

      image: image6
    }
  ]
  return (
    <React.Fragment>
            

                <div className='bg'>

                    <div className='padding'></div>
                    <CardList cards={loadedservices} />

                </div >
        </React.Fragment>
  )
}

export default Services