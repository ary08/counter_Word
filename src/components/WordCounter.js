import React from "react";
import { useState } from "react";

const WordCounter = () => {
  const [fontSize, setFontSize] = useState(16);
  const [limitChar, setLimitChar] = useState(50);
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  const onChangeHandler = (e) => {
    const text = e.target.value;

    let w_count = 0;
    if (text.trim().length > 0) w_count = text.split(" ").length;

    setWordCount(w_count);

    setCharCount(text.length);
  };

  return (
    <div>
      <p>Font size picker</p>
      <input
        type="range"
        id="fontSize-input"
        min="16"
        max="32"
        onChange={(e) => setFontSize(e.target.value)}
      />
      <br />
      <br />
      <p>Word limit input</p>
      <input
        type="number"
        id="char-limit-input"
        value={limitChar}
        onChange={(e) => setLimitChar(parseInt(e.target.value))}
      />
      <br />
      <br />
      <textarea
        style={{ fontSize: `${fontSize}px` }}
        maxLength={limitChar}
        onChange={onChangeHandler}
      />
      <br />
      <br />
      <div id="word-counter">Total number of words written {wordCount}</div>
      <br />
      <div id="char-counter">Total number of characters used {charCount}</div>
    </div>
  );
};

export default WordCounter;
