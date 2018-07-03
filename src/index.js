import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'

import SearchBar from './containers/search_bar'
import YourBooks from './containers/your_books'
import Login from './containers/login'
import Register from './containers/register'
import Header from './components/header'
import Footer from './components/footer'



import registerServiceWorker from './registerServiceWorker'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { 
    BrowserRouter, 
    Route, 
    Switch,
} from 'react-router-dom'

import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)



ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <div id="app">
                <Header />
                <Switch>
                    <main>
                        <Route path="/register" component={Register} />
                        <Route path="/search" component={SearchBar} />
                        <Route path="/books" component={YourBooks} />
                        <Route path="/login" component={Login} />
                    </main>
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'))
registerServiceWorker()
