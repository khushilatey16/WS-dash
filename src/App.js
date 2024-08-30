import React from 'react';
import './styles/style.css';
import Header from './components/Header';
import MonitoringDivision from './components/MonitoringDivision';
import OutputDivision from './components/OutputDivision';

function App() {
    return (
        <div className="container">
            <Header />
            <main className="main-content">
                <MonitoringDivision />
                <OutputDivision />
            </main>
        </div>
    );
}

export default App;
