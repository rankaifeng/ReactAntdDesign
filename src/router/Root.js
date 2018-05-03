import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import App from '../component/App'
import Antd from '../component/Antd'
import createHistory from 'history/createHashHistory';
const history = createHistory();
const Root = ({store}) => (
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" component={App}/>
                <Route path="antd" component={Antd}/>
            </div>
        </Router>
    </Provider>
)
// ReactDOM.render(
//     <Router history={history} >
//         <Route path="antd" component={Antd} />
//
//
//     </Router>
//     , document.getElementById('root')
// );
Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root