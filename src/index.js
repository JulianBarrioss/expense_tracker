import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId='6804a7c0-4db1-4f8d-977b-274bc769f107' lenguage='en-US'>
        <Provider>
            <App/>
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);