import { createContext }from 'react'

const  cartContext = createContext({
    hidden: true,
    toggleHidden: ()=>{
    }
})

export default cartContext