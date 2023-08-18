"use client"

import { Provider } from "react-redux"
import { store } from "./store"


// A custom provider component that wraps the Redux store
export const ReduxProvider=({children}:{children:React.ReactNode})=>{
    return <Provider store={store}>{children}</Provider>
}