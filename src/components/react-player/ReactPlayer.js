import React from "react";
import Reactplayer from "react-player";

const ReactPlayer = () => {
  return (
    <div>
      <center>
        <Reactplayer
          controls
          width="480px"
          height="250px"
          url="https://youtu.be/7sDY4m8KNLc?list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM"
          onReady={() => console.log("onReady Callback")}
          onStart={() => console.log("onStart Callback")}
          onPause={() => console.log("onPause Callback")}
          onEnded={() => console.log("onEnded Callback")}
          onError={() => console.log("onError Callback")}
        ></Reactplayer>
      </center>
    </div>
  );
};

export default ReactPlayer;
