import React from 'react';

import { useState, useEffect } from 'react';

import './styles.css';


const CounterStart = ({ targetValue, appendSymbol = "",duration=1 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = targetValue;
    duration = duration*10;
    const increment = end / duration; // Increment step

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end); // Set to the exact target value at the end
      } else {
        setCount(Math.floor(start));
      }
    }, 10); // Update every 10 milliseconds

    return () => clearInterval(timer); // Clean up on component unmount
  }, [targetValue]);

  return (
    <strong className="text-color-light font-weight-extra-bold">
      {count}
      {appendSymbol}
    </strong>
  );
};


const Counter = (props) => {
  return (
    <React.Fragment>

        <section
        className="section section-primary border-0 mb-0 appear-animation animated fadeIn appear-animation-visible"
        data-appear-animation="fadeIn"
        data-plugin-options="{'accY': -150}"
        style={{ animationDelay: "100ms" }}
        >
            <div className="container">
                <div className="row counters counters-sm pb-4 pt-3">
                  {props?.setting?.about_us_counter_sections?.map((counter, index) => (
                    <div className="col-sm-6 col-lg-3 mb-5 mb-lg-0" key={index}>
                      <div className="counter">
                        <i className={`icons ${counter.icon} text-color-light`} />
                        <CounterStart targetValue={counter.number} appendSymbol={counter.symbol} duration={counter.duration} />
                        <label className="text-4 mt-1 text-color-light">{counter.title}</label>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
        </section>

    </React.Fragment>
  );
};

export default Counter;
