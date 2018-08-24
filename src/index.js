import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import { history } from './helpers/history'

import YourBooks from './containers/home'
import Login from './containers/login'
import Register from './containers/register'
import { PrivateRoute } from './components/private_route'
import Header from './components/header'
import Footer from './components/footer'

import registerServiceWorker from './registerServiceWorker'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { 
    BrowserRouter, 
    Route, 
    Switch,
    Router
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
                    <Router history={history}>
                        <main>
                            <Route path="/register" component={Register} />
                            <Route path="/login" component={Login} />
                            <PrivateRoute exact path="/" component={YourBooks} />
                        </main>
                    </Router>
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'))
registerServiceWorker()
