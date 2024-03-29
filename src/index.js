import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './css/index.css'

import store from './redux/store'
import App from './App.jsx'
import ReactHookform from "./concepts/lib/React-hook-form.jsx";
import UseMemo from './concepts/hooks/UseMemo.jsx';
import UseRef from './concepts/hooks/UseRef.jsx';
import UseReducer from './concepts/hooks/UseReducer.jsx';
import Myckedtior from "./components/ckedtior/index.jsx";
//import ClassicEditorTest from "./components/ckedtior/ClassicEditorTest.jsx";

const runenvirement = process.env.NODE_ENV
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
    <Provider store={store}>
        <BrowserRouter>

            <>
                <div style={{ padding: '48px' }}>
                    {/* <App/> */}
                    {/* <ReactHookform/> */}
                    {/* <UseMemo /> */}
                    {/* <UseRef />
                    <UseReducer/> */}
                    <Myckedtior />
                    {/* <ClassicEditorTest /> */}
                </div>
            </>
        </BrowserRouter>
    </Provider>
)

//ver.18以下寫法
// ReactDOM.render(
//     <App/>, document.getElementById('root')
// )




