import ReactGA from 'react-ga';

const myGa = () => {
    const GA_ID = 'G-GNT6E2KCPZ'; 
    ReactGA.initialize(GA_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
};

export default myGa;
