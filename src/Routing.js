import React from 'react'
import {Route,BrowserRouter} from 'react-router-dom'
import Home from './Home'
import MyQuotes from './MyQuotes'

const Routing = () => {
   <div>
        <BrowserRouter>
                <Route exact path='/'><Home/></Route>
                <Route path='/player/:userid'><MyQuotes/></Route>
        </BrowserRouter>
   </div> 
}

export default Routing
