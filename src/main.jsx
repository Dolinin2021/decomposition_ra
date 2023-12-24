import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import broadcast from './data/broadcast';
import map from './data/map';
import newsHead from './data/newsHead';
import newsDate from './data/newsDate';
import quotes from './data/quotes';
import searchMenu from './data/searchMenu';
import sideItem from './data/sideItem';
import tvProgram from './data/tvProgram';
import visited from './data/visited';
import weather from './data/weather';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App
    newsHead={newsHead}
    newsDate={newsDate}
    quotes={quotes}
    sideItem={sideItem}
    searchMenu={searchMenu}
    weather={weather}
    map={map}
    broadcast={broadcast}
    visited={visited}
    tvProgram={tvProgram} 
    />,
  </React.StrictMode>,
)
