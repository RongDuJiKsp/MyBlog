import {App} from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from "./Main";
import {DevSupport} from '@react-buddy/ide-toolbox';
import {ComponentPreviews, useInitial} from "./dev";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <BrowserRouter>
                <App>
                    <Main/>
                </App>
            </BrowserRouter>
        </DevSupport>
    </React.StrictMode>
);
