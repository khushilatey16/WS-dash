import React from 'react';
import monitoringImage from '../assets/12.jpg';

function MonitoringDivision() {
    return (
        <section className="monitoring-division">
            <div className="section live-monitoring">
                <h2 className="section-title">Live Monitoring</h2>
                <img src={monitoringImage} alt="Live Monitoring" className="monitoring-img" />
            </div>
            <div className="section threat-detection">
                <h2 className="section-title">Threat Detection</h2>
                <div className="threat-window">
                    {/* Content for threat detection goes here */}
                </div>
            </div>
        </section>
    );
}

export default MonitoringDivision;
