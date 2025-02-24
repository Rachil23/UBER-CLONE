/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
const LocationSearchPanel = (props) => {

    //console.log(props);

    const locations = [
        "4-158/9 5th Cross Road Sainikpuri Secunderabad 500094, TS IND" ,
        "16-15/80 5th Cross Road Sainikpuri Secunderabad 500094, TS IND" ,
        "7-58/9 5th Cross Road Sainikpuri Secunderabad 500094, TS IND" ,
        "42-18/95 5th Cross Road Sainikpuri Secunderabad 500094, TS IND"
    ]


  return (
    <div>
        {
            locations.map(function(elem , index){
                return <div onClick={()=>{
                    props.setVehiclePanel(true)
                    props.setPanelOpen(false)
                }} key={index} className="flex gap-3 border-2 p-3 border-gray-200 active:border-black rounded-xl items-center my-3 justify-start">
                            <h2 className="bg-gray-300 h-8 w-12 flex items-center justify-center rounded-full">
                                <i className="ri-map-pin-fill"></i>
                            </h2>
                            <h4 className="font-medium">{elem}</h4>
                        </div>
            })
        }
    </div>
  )
}

export default LocationSearchPanel