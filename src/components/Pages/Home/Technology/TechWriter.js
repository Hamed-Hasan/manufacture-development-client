import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TechWriter = () => {
  return (
    <div>
      <h1
        style={{
          paddingTop: "14px",
          margin: "auto 0",
          fontWeight: "normal",
          fontSize: "14px",
          marginLeft: "24px",
        }}
      >
        <span style={{ color: "yellow", fontWeight: "bold" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[
              "await userCollection.updateOne(filter, updateDoc, options)",
            ]}
            loop={5}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  );
};

export default TechWriter;
