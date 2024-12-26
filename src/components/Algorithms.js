import React, { useState } from 'react';
import './Algorithms.css';

const Algorithms = () => {
  const [pageString, setPageString] = useState('');
  const [frames, setFrames] = useState(3);
  const [fifoResult, setFifoResult] = useState(null);
  const [lruResult, setLruResult] = useState(null);
  const [fifoSteps, setFifoSteps] = useState([]);
  const [lruSteps, setLruSteps] = useState([]);

  // FIFO Algorithm
  const fifo = (pages, numFrames) => {
    let frames = [];
    let pageFaults = 0;
    let pageHits = 0;
    let steps = [];

    for (let i = 0; i < pages.length; i++) {
      if (!frames.includes(pages[i])) {
        if (frames.length < numFrames) {
          frames.push(pages[i]);
        } else {
          frames.shift();
          frames.push(pages[i]);
        }
        pageFaults++;
      } else {
        pageHits++;
      }
      steps.push([...frames]);
    }

    setFifoSteps(steps);
    return { pageFaults, pageHits };
  };

  // LRU Algorithm
  const lru = (pages, numFrames) => {
    let frames = [];
    let pageFaults = 0;
    let pageHits = 0;
    let steps = [];

    for (let i = 0; i < pages.length; i++) {
      if (!frames.includes(pages[i])) {
        if (frames.length < numFrames) {
          frames.push(pages[i]);
        } else {
          frames.shift();
          frames.push(pages[i]);
        }
        pageFaults++;
      } else {
        pageHits++;
        frames = frames.filter((page) => page !== pages[i]);
        frames.push(pages[i]);
      }
      steps.push([...frames]);
    }

    setLruSteps(steps);
    return { pageFaults, pageHits };
  };

  const handleSubmit = (algorithm) => {
    const pages = pageString.split(',').map(Number);

    if (algorithm === 'fifo') {
      const { pageFaults, pageHits } = fifo(pages, frames);
      setFifoResult({ pageFaults, pageHits });
    } else {
      const { pageFaults, pageHits } = lru(pages, frames);
      setLruResult({ pageFaults, pageHits });
    }
  };

  return (
    <div className="algorithms-container">
      <h2>Page Replacement Algorithms</h2>
      <div>
        <label>Enter page reference string (comma separated):</label>
        <input
          type="text"
          value={pageString}
          onChange={(e) => setPageString(e.target.value)}
          placeholder="e.g., 0,1,2,3,4,1,2,3,0"
        />
      </div>
      <div>
        <label>Number of frames:</label>
        <input
          type="number"
          value={frames}
          onChange={(e) => setFrames(Number(e.target.value))}
          min="1"
        />
      </div>

      <div className="buttons">
        <button onClick={() => handleSubmit('fifo')}>Run FIFO</button>
        <button onClick={() => handleSubmit('lru')}>Run LRU</button>
      </div>

      {fifoResult && (
        <div className="results">
          <h3>FIFO Results:</h3>
          <p>Page Faults: {fifoResult.pageFaults}</p>
          <p>Page Hits: {fifoResult.pageHits}</p>
          <p>Page Fault Rate: {(fifoResult.pageFaults / (fifoResult.pageFaults + fifoResult.pageHits)).toFixed(2)}</p>
        </div>
      )}

      {lruResult && (
        <div className="results">
          <h3>LRU Results:</h3>
          <p>Page Faults: {lruResult.pageFaults}</p>
          <p>Page Hits: {lruResult.pageHits}</p>
          <p>Page Fault Rate: {(lruResult.pageFaults / (lruResult.pageFaults + lruResult.pageHits)).toFixed(2)}</p>
        </div>
      )}

      <div className="steps-container">
        <div className="step-box">
          <h4>FIFO Algorithm</h4>
          {fifoSteps.length > 0 && (
            <div className="step-animation">
              {fifoSteps.map((step, index) => (
                <div key={index} className="frame-step">
                  {step.map((page, idx) => (
                    <div key={idx} className="frame">{page}</div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="step-box">
          <h4>LRU Algorithm</h4>
          {lruSteps.length > 0 && (
            <div className="step-animation">
              {lruSteps.map((step, index) => (
                <div key={index} className="frame-step">
                  {step.map((page, idx) => (
                    <div key={idx} className="frame">{page}</div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Algorithms;
