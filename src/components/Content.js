import React, { useState, useEffect } from 'react'
import '../App'
import axios from 'axios';



const Content = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios({
        method:"GET",
        url: `https://www.scorebat.com/video-api/v3/feed/?token=MTA5MjQ3XzE2OTI5MjI3MzlfMjc0ZTg3ODU0ZDI2M2E5N2FlYTE4MWYwZjE0ZDdiOTA4N2E1MWJmZg==`,
       }) 
       .then((res) => {
        console.log(res.data);
        setData(res.data.response);
       })
       .catch(error => console.log(error))
    },[]);



  return (
    <div className='content-container'>
        {data.map((item)=> (
            <div className="itemDiv" key={item.title} onClick={() => window.open(item.matchviewUrl)}>
                <div className="itemHeading"><h4>{item.title}</h4></div>
                <div className="itemImage">
                    <img src={item.thumbnail} alt="#" />
                </div>

            </div>
        ))}
    </div>
  )
}

export default Content