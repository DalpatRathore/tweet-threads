import React from "react";
import CountUp, { useCountUp } from "react-countup";

const ReactCountUp = () => {
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    duration: 5,
    end: 10000,
    startOnMount: false,
  });
  return (
    <div>
      <div>
        <h1>{countUp}</h1>
        <button onClick={start}>Start</button>
        <button onClick={reset}>Reset</button>
        <button onClick={pauseResume}>Pause/Resume</button>
        <button onClick={() => update(2000)}>Update to 2000</button>
      </div>
      <h1>
        <CountUp end={200}></CountUp>
        <br />
        <CountUp end={200} duration={5}></CountUp>
        <br />
        <CountUp start={500} end={200} duration={10}></CountUp>
        <br />
        <CountUp prefix="$" decimals={2} end={1000} duration={5}></CountUp>
        <br />
        <CountUp suffix="USD" decimals={2} end={1000} duration={5}></CountUp>
      </h1>
    </div>
  );
};

export default ReactCountUp;
