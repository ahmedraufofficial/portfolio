import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AiFillGithub} from 'react-icons/ai'
import Content from './components/Content';
import theme from './components/Theme'
import { ThemeProvider } from '@mui/material/styles';

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', overflowY: 'scroll' }}>
      <div style={{position: 'relative'}}>
        <Content />
      </div>
      <a href="https://ahmedraufofficial.com/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        ahmedraufofficial.com
        <br />
        the portfolio you weren't expecting
      </a>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>Ahmed Rauf —</div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>25/02/2022</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ThemeProvider theme={theme}>
      <Overlay />
    </ThemeProvider>
    <a href="https://github.com/ahmedraufofficial"><AiFillGithub size={35} style={{ position: 'absolute', bottom: 40, left: 40 }} /></a>
  </React.StrictMode>
);
