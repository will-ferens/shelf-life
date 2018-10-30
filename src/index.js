import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import { history } from './helpers/history'

import YourBooks from './containers/dashboard/home'
import Login from './containers/user/login'
import Register from './containers/user/register'
import { PrivateRoute } from './components/functional/private_route'
import Landing from './components/presentational/landing'
import Header from './components/presentational/header'
import Footer from './components/presentational/footer'

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
                                <PrivateRoute exact path="/home" component={YourBooks} />
                                <Route exact path="/" component={Landing} />
                            </main>
                        </Router>
                    </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'))
registerServiceWorker()
