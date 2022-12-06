import React, { useState, useEffect } from 'react';

function Fossils() {
    const [getFossils, setGetFossils] = useState([]);
    let showFossils = []

    useEffect(() => {
        fetch("http://acnhapi.com/v1/fossils/")
          .then((response) => response.json())
          .then((data) => {
            setGetFossils(data);
            console.log(data)
          });
      }, []);

    Object.entries(getFossils).map(entry => {
        let fossilData = entry[1]
        showFossils.push(fossilData)
        console.log(fossilData)
    })

    return (
        <div>
            {showFossils.map((fossil) => {
            return (<img src={fossil.image_uri} />)
        })}
        </div>
    )
}

export default Fossils;