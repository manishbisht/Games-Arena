import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <MuiThemeProvider>
        <div>
            <AppBar title="Games Arena" showMenuIconButton={false} />
            <App />
        </div>
    </MuiThemeProvider>
), document.getElementById('root'));
registerServiceWorker();
