import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypeWriterForm = () => {
    return (
        <div>
              <h1 style={{ paddingTop: '1rem', margin: 'auto 0', fontWeight: 'normal',fontSize: "33px" }}>
        SubScribe
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[ 'Let"s get Started!']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
         
          />
        </span>
      </h1>
        </div>
    );
};

export default TypeWriterForm;