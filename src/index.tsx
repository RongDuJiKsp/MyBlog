import {App} from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from "./Main";
import {DevSupport} from "@react-buddy/ide-toolbox/dist/previews/dev-support";
import {ComponentPreviews, useInitial} from "./dev";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <App>
                <Main/>
            </App>
        </DevSupport>
    </React.StrictMode>
);
