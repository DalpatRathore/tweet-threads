import React, { forwardRef } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const ColoredTooltip = () => {
  return <span style={{ color: "yellow" }}>Colored Component</span>;
};

const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>First Line</div>
      <div>Second Line</div>
    </div>
  );
});

const ReactTippy = () => {
  return (
    <>
      <div style={{ padding: "1.25rem" }}>
        <Tippy content="Basic Tooltip" arrow={false} placement="right">
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ padding: "1.25rem" }}>
        <Tippy
          content={
            <span style={{ color: "maroon", backgroundColor: "whitesmoke" }}>
              Colored
            </span>
          }
          delay={1000}
          placement="bottom-start"
        >
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ padding: "1.25rem" }}>
        <Tippy content={<ColoredTooltip />}>
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ padding: "1.25rem" }}>
        <Tippy content={<ColoredTooltip />}>
          <CustomChild></CustomChild>
        </Tippy>
      </div>
    </>
  );
};

export default ReactTippy;
