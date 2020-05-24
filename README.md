# Introduction

A React hook npm module to use debounce feature in your React App.

## Installation

```
npm i use-debounce --save
```

## How to use

```
import React, { useState, useEffect } from "react";
import {useDebounce} from "npm-use-debounce";

export default function App() {
  const [textChange, setTextChange] = useState("");
  const [countOfNetworkCall, setNetworkCallCount] = useState(0);

  const debouncingInput = useDebounce(textChange, 500);

  useEffect(() => {
    // can do network api calls here
    if (debouncingInput) {
      // do network calls here
    }
  }, [debouncingInput]);

  const onTextChange = e => {
    setTextChange(e.target.value);
  };

  return (
    <div className="App">
      <div>
        Search:{" "}
        <input
          type="text"
          value={textChange}
          onChange={event => onTextChange(event)}
        />
      </div>
  );
}

```

## Options

colorBoxShadow supports two options, both of which are mandatory

- value of input box
- delay timer

