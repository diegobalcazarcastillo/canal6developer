import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Router} from 'react-router-dom';
import { BrowserHistory } from 'history';


import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


/** Whats downside its a mood for <Router history={history}> ... </Router>
 *  <Router history={history} /> is no longer supported in react dom 6
 * So, I declare this one <HistoryRouter /> that works a like <Router history={history}></Router>
 * I use this to export history to my class agent.ts, in components Im using useNavigate hook
 * more info following: https://github.com/remix-run/react-router/discussions/8241
*/

/*
** FOR TOAST:
Ive got some problems installing the latest version of react-toastify, so I installed npm i react-toastify@9.0.3 instead
this one works great!
*/

export interface HistoryRouterProps {
  history: BrowserHistory
  basename?: string
  children?: React.ReactNode
}

export function HistoryRouter({
  basename,
  children,
  history,
}: HistoryRouterProps) {
  let [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  })

  React.useLayoutEffect(() => history.listen(setState), [history])

  return (
    <Router
      basename={basename}
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  )
}

/** End of <HistoryRouter></HistoryRouter>*/

// Use
import {createBrowserHistory} from 'history'
import { ToastContainer } from 'react-toastify';
export const history = createBrowserHistory()





root.render(
  
 
   
  <React.Fragment>
  <ToastContainer position='bottom-right' />
  <HistoryRouter history={history}>
      <App></App>
  </HistoryRouter>
  </React.Fragment>
    

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
