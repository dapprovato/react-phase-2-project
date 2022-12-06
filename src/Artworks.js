import React from 'react';
import Fossils from "./Fossils";

function Artworks( {artworks, type} ) {
    let artwork = []

    Object.entries(artworks).map(entry => {
        let artData = entry[1]
        artwork.push(artData.image_uri)
        return (artData.image_uri)
    })
    return (
        <div>
        {type === "fossil" ? <Fossils /> : null } 

        {artwork.filter((arts) => {
            if (arts.includes(type)) {
                return true 
            }
        })
        .map((arts) => {
            return (<img src={arts} />)
        })}
        </div>
    )
}

export default Artworks;