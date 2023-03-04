import React, { useEffect } from 'react';

function SummaryPage() {
    useEffect(() => {
        localStorage.setItem('slice', 0)
        localStorage.setItem('incrementer', 1)
    }, [])
    return (
        <div>
            <h1>NICE JOB</h1>
        </div>
    );
}

export default SummaryPage;