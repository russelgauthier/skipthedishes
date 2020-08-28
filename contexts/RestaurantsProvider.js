import React, {useState, createContext} from 'react'

const RestaurantsContext = createContext()
function RestaurantsProvider(props){
    const [restaurants, setRestaurants] = useState([])

    return <RestaurantsContext.Provider
        value={{
            restaurants,
            setRestaurants
        }}
    >
        {props.children}
    </RestaurantsContext.Provider>
}

export {RestaurantsProvider, RestaurantsContext}
