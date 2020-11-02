import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Favorite(props) {

    const [favoriteNumber, setFavoriteNumber] = useState(0)
    const [favorited, setFavorited] = useState(false)
    
    const variable = {
        userFrom: props.userFrom,
        movieId: props.movieId,
        movieTitle: props.movieInfo.original_title,
        movieImage: props.movieInfo.backdrop_path,
        movieRunTime: props.movieInfo.runtime
    }

    useEffect(() => {

        axios.post('/api/favorite/favoriteNumber', variable)
            .then(response => {
                if (response.data.success) {
                    setFavoriteNumber(response.data.favoriteNumber)
                } else {
                    alert('Failed to get favoriteNumber')
                }
            })
        
        axios.post('/api/favorite/favorited', variable)
            .then(response => {
                if (response.data.success) {
                    setFavorited(response.data.favorited)
                } else {
                    alert('Failed to get favorite Info')
                }
            })

    }, [])

    const onClickFavorite = () => {
        if (favorited) {
            // When already added
            
            axios.post('/api/favorite/removeFromFavorite', variable)
                .then(response=>{
                if (response.data.success) {
                    setFavoriteNumber(favoriteNumber - 1)
                    setFavorited(!favorited)
                } else {
                    alert(' Failed to remove from Favorite')
                }
            })


        } else {
            //When Not adding yet

            axios.post('/api/favorite/addToFavorite', variable)
                .then(response=>{
                    if (response.data.success) {
                        setFavoriteNumber(favoriteNumber + 1)
                        setFavorited(!favorited)
                    } else {
                        alert(' Failed to add to Favorites')
                    }
                })
                .catch((error) => {
                    if (error.response) { // if there is response, it means its not a 50x, but 4xx
                        console.log("catch do something?", error.response)
            
                    } else {   // gets activated on 50x errors, since no response from server
                      // do whatever you want here :)
                    }   
                })
        }
    }

    
    return (
        <div>
            <button onClick={onClickFavorite}>{favorited ? " Remove from Favorite " : " Add to Favorite "} {favoriteNumber}</button>
        </div>
    )
}

export default Favorite
