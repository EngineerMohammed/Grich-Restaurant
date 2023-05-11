import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuiteam">
    <div className="app__menuiteam-head">
      <div className="app__menuiteam-name">
        <p className="p__cormorant" style={{ color: "#dcca87" }}>
          {title}
        </p>

      </div>
      
      <div className="app__menuiteam-dash" />

      <div className="app__menuiteam-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>
    <div className="app__menuiteam-sub">
      <p className="p__opensans" style={{ color: "#AAA" }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
