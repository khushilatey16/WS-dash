import React from 'react';
import OutputCard from './OutputCard';

function OutputDivision() {
    return (
        <section className="section output-division">
            <h2 className="section-title">Output Division</h2>
            <div className="output-grid">
                <OutputCard title="Number of Men" number={5} />
                <OutputCard title="Number of Women" number={8} />
            </div>
        </section>
    );
}

export default OutputDivision;
