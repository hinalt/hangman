import React, { useState, useRef } from "react";
import "./App.scss";
import bar from "./assets/images/bar.png";
import folk1 from "./assets/images/1.png";
import folk2 from "./assets/images/2.png";
import folk3 from "./assets/images/3.png";
import folk4 from "./assets/images/4.png";
import folk5 from "./assets/images/5.png";
import folk6 from "./assets/images/6.png";
import folk7 from "./assets/images/7.png";
import folk8 from "./assets/images/8.png";
import folk9 from "./assets/images/9.png";
import folk10 from "./assets/images/10.png";
import folk11 from "./assets/images/11.png";

function App() {
  const [currentLetter, setCurrentLetter] = useState(null);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);
  const inputRef6 = useRef(null);
  const inputRef7 = useRef(null);
  const inputRef8 = useRef(null);
  const inputRef9 = useRef(null);
  const inputRef10 = useRef(null);
  const inputRef11 = useRef(null);
  const inputValueRef = useRef(null);

  const [currentWord, setCurrentWord] = useState(null);
  const [currentFolk, setCurrentFolk] = useState(null);
  const [currentFolkIndex, setCurrentFonkIndex] = useState(0);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [allEnteredLetters, setAllEnteredLetters] = useState([]);
  const [error, setError] = useState(null);
  async function getWord() {
    const url =
      "http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=15&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
    const res = await fetch(url);
    const data = await res.json();
    let word = data[0].word;
    if (word.length > 11) word = word.slice(0, 11);
    setCurrentWord(word);
  }

  useState(() => {
    getWord();
  }, []);

  function getAllInputs() {
    const inputBox = [];
    let ref;
    if (!currentWord) return;
    for (let i = 1; i <= currentWord.length; i++) {
      switch (i) {
        case 1:
          ref = inputRef1;
          break;
        case 2:
          ref = inputRef2;
          break;
        case 3:
          ref = inputRef3;
          break;
        case 4:
          ref = inputRef4;
          break;
        case 5:
          ref = inputRef5;
          break;
        case 6:
          ref = inputRef6;
          break;
        case 7:
          ref = inputRef7;
          break;
        case 8:
          ref = inputRef8;
          break;
        case 9:
          ref = inputRef9;
          break;
        case 10:
          ref = inputRef10;
          break;
        case 11:
          ref = inputRef11;
          break;
      }

      inputBox.push(
        <input
          key={i}
          type="text"
          maxLength={1}
          className="form-control"
          disabled={true}
          ref={ref}
        />
      );
    }
    return inputBox;
  }

  if (inputRef1.current) {
    console.log(inputRef1.current.value);
  }

  const handleSubmit = () => {
    setError(null);
    console.log(inputValueRef.current.value);
    if (!inputValueRef.current.value) {
      setError("empty letter is not allowed.");
      return;
    }
    inputValueRef.current.value = "";
    const isLetterAllreadyEntered = allEnteredLetters.find(
      (letter) => letter === currentLetter
    );
    if (isLetterAllreadyEntered) {
      setError(currentLetter + " is already entered.");
      setAllEnteredLetters((preValue) => [...preValue, currentLetter]);
      return;
    }
    setAllEnteredLetters((preValue) => [...preValue, currentLetter]);

    let indices = [];
    for (var i = 0; i < currentWord.length; i++) {
      if (currentWord[i] === currentLetter) indices.push(i + 1);
    }

    if (indices.length == 0) {
      setWrongLetters((prevValue) => {
        return [...prevValue, currentLetter];
      });

      switch (currentFolkIndex + 1) {
        case 1:
          setCurrentFolk(folk1);
          break;
        case 2:
          setCurrentFolk(folk2);
          break;
        case 3:
          setCurrentFolk(folk3);
          break;
        case 4:
          setCurrentFolk(folk4);
          break;
        case 5:
          setCurrentFolk(folk5);
          break;
        case 6:
          setCurrentFolk(folk6);
          break;
        case 7:
          setCurrentFolk(folk7);
          break;
        case 8:
          setCurrentFolk(folk8);
          break;
        case 9:
          setCurrentFolk(folk9);
          break;
        case 10:
          setCurrentFolk(folk10);
          break;
        case 11:
          setCurrentFolk(folk11);
          break;
      }

      setCurrentFonkIndex((preValue) => {
        return preValue + 1;
      });
      if (currentFolkIndex + 1 === 11) {
        setFeedback("GAME OVER");
        setShowOverlay(true);
      }
    } else {
      indices.map((item) => {
        switch (item) {
          case 1:
            inputRef1.current.value = currentLetter;
            break;
          case 2:
            inputRef2.current.value = currentLetter;
            break;
          case 3:
            inputRef3.current.value = currentLetter;
            break;
          case 4:
            inputRef4.current.value = currentLetter;
            break;
          case 5:
            inputRef5.current.value = currentLetter;
            break;
          case 6:
            inputRef6.current.value = currentLetter;
            break;
          case 7:
            inputRef7.current.value = currentLetter;
            break;
          case 8:
            inputRef8.current.value = currentLetter;
            break;
          case 9:
            inputRef9.current.value = currentLetter;
            break;
          case 10:
            inputRef10.current.value = currentLetter;
            break;
          case 11:
            inputRef11.current.value = currentLetter;
            break;
        }
      });

      if (correctCount + indices.length === currentWord.length) {
        setFeedback("YOU WON");
        setShowOverlay(true);
      }
      setCorrectCount((prevValue) => prevValue + indices.length);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="rect-cross"></div>
        <div
          className="overlay"
          onClick={() => {
            setShowOverlay(false);
            window.location.reload();
          }}
          style={{ display: [!showOverlay ? "none" : "block"] }}
        >
          <div className="text">
            <h className="main_text">{feedback}</h>
            <h className="button_text">NEW WORD</h>
          </div>
        </div>
        <div className="d-flex pt-3 justify-content-space-between">
          <div className="bar">
            <img src={bar} alt="bar" />
            <div className="folk">
              <img src={currentFolk} />
            </div>
          </div>

          <div className="mistakes">
            <p className="missed">You Missed:</p>
            <h>{wrongLetters}</h>
          </div>
        </div>

        <div className="form">
          {getAllInputs() && (
            <div className="form-div">
              {getAllInputs().map((item) => {
                return item;
              })}
            </div>
          )}
          <div className="input-form-control">
            <input
              className="input-control"
              ref={inputValueRef}
              type="text"
              placeholder="Please enter a letter"
              maxLength="1"
              onChange={(e) => {
                setCurrentLetter(e.target.value);
              }}
            />
            <button onClick={handleSubmit}>submit</button>
            
          </div>
          <p>{error}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
