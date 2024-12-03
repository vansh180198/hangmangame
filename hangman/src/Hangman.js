import React, { useEffect, useState } from "react";
import img1 from "./utils/img1.png";
import img2 from "./utils/img2.png";
import img3 from "./utils/img3.png";
import img4 from "./utils/img4.png";
import img5 from "./utils/img5.png";
import img6 from "./utils/img6.png";
import img7 from "./utils/img7.png";
import img8 from "./utils/img8loose.png";
const alphabetdata = [
  [
    { data: "Q", status: true },
    { data: "W", status: true },
    { data: "E", status: true },
    { data: "R", status: true },
    { data: "T", status: true },
    { data: "Y", status: true },
    { data: "U", status: true },
    { data: "I", status: true },
    { data: "O", status: true },
    { data: "P", status: true },
  ],
  [
    { data: "A", status: true },
    { data: "S", status: true },
    { data: "D", status: true },
    { data: "F", status: true },
    { data: "G", status: true },
    { data: "H", status: true },
    { data: "J", status: true },
    { data: "K", status: true },
    { data: "L", status: true },
  ],
  [
    { data: "Z", status: true },
    { data: "X", status: true },
    { data: "C", status: true },
    { data: "V", status: true },
    { data: "B", status: true },
    { data: "N", status: true },
    { data: "M", status: true },
  ],
];

const fruitsData = [
  [
    { data: "A", status: false },
    { data: "P", status: false },
    { data: "P", status: false },
    { data: "L", status: false },
    { data: "E", status: false },
  ], // Apple
  [
    { data: "B", status: false },
    { data: "A", status: false },
    { data: "N", status: false },
    { data: "A", status: false },
    { data: "N", status: false },
    { data: "A", status: false },
  ], // Banana
  [
    { data: "C", status: false },
    { data: "H", status: false },
    { data: "E", status: false },
    { data: "R", status: false },
    { data: "R", status: false },
    { data: "Y", status: false },
  ], // Cherry
  [
    { data: "M", status: false },
    { data: "A", status: false },
    { data: "N", status: false },
    { data: "G", status: false },
    { data: "O", status: false },
  ], // Mango
  [
    { data: "G", status: false },
    { data: "R", status: false },
    { data: "A", status: false },
    { data: "P", status: false },
    { data: "E", status: false },
    { data: "S", status: false },
  ], // Grapes
  [
    { data: "O", status: false },
    { data: "R", status: false },
    { data: "A", status: false },
    { data: "N", status: false },
    { data: "G", status: false },
    { data: "E", status: false },
  ], // Orange
  [
    { data: "W", status: false },
    { data: "A", status: false },
    { data: "T", status: false },
    { data: "E", status: false },
    { data: "R", status: false },
    { data: "M", status: false },
    { data: "E", status: false },
    { data: "L", status: false },
    { data: "O", status: false },
    { data: "N", status: false },
  ], // Watermelon
  [
    { data: "P", status: false },
    { data: "E", status: false },
    { data: "A", status: false },
    { data: "R", status: false },
  ], // Pear
  [
    { data: "P", status: false },
    { data: "I", status: false },
    { data: "N", status: false },
    { data: "E", status: false },
    { data: "A", status: false },
    { data: "P", status: false },
    { data: "P", status: false },
    { data: "L", status: false },
    { data: "E", status: false },
  ], // Pineapple
  [
    { data: "S", status: false },
    { data: "T", status: false },
    { data: "R", status: false },
    { data: "A", status: false },
    { data: "W", status: false },
    { data: "B", status: false },
    { data: "E", status: false },
    { data: "R", status: false },
    { data: "R", status: false },
    { data: "Y", status: false },
  ], // Strawberry
  [
    { data: "B", status: false },
    { data: "L", status: false },
    { data: "U", status: false },
    { data: "E", status: false },
    { data: "B", status: false },
    { data: "E", status: false },
    { data: "R", status: false },
    { data: "R", status: false },
    { data: "Y", status: false },
  ], // Blueberry
  [
    { data: "K", status: false },
    { data: "I", status: false },
    { data: "W", status: false },
    { data: "I", status: false },
  ], // Kiwi
  [
    { data: "P", status: false },
    { data: "A", status: false },
    { data: "P", status: false },
    { data: "A", status: false },
    { data: "Y", status: false },
    { data: "A", status: false },
  ], // Papaya
  [
    { data: "L", status: false },
    { data: "E", status: false },
    { data: "M", status: false },
    { data: "O", status: false },
    { data: "N", status: false },
  ], // Lemon
  [
    { data: "P", status: false },
    { data: "L", status: false },
    { data: "U", status: false },
    { data: "M", status: false },
  ], // Plum
  [
    { data: "G", status: false },
    { data: "U", status: false },
    { data: "A", status: false },
    { data: "V", status: false },
    { data: "A", status: false },
  ], // Guava
  [
    { data: "L", status: false },
    { data: "Y", status: false },
    { data: "C", status: false },
    { data: "H", status: false },
    { data: "E", status: false },
    { data: "E", status: false },
  ], // Lychee
];

const Hangman = () => {
  const [alphabet, setaphabet] = useState([...alphabetdata]);
  const [word, setword] = useState([]);
  const [lives, setlives] = useState(7);
  const [reset, setreset] = useState(false);
  useEffect(() => {
    let randomwordpick = Math.floor(fruitsData.length * Math.random());
    setword(fruitsData[randomwordpick]);
  }, []);
  useEffect(() => {
    let checkcnt = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i].status == true) {
        checkcnt++;
      }
    }
    console.log(checkcnt, word.length);
    if (checkcnt == word.length && checkcnt != 0) {
      setTimeout(() => {
        alert("You Won");
        resetfxn();
      }, 1500);
    }
  }, [word]);

  function handlekeyboard(key, rowindex) {
    if (lives === 0) {
        alert("Game Over");
        setreset(true);
        resetfxn();
        return;
      }
    console.log(key);
    let check = word.some((w) => w.data == key);
    console.log("check", check);
    if (!check) {
      
      
            
        setlives((lives) => lives - 1);
      
    }

    let arr = alphabet[rowindex].map((alp) => {
      console.log(alp, key);
      if (alp.data == key) {
        let obj = alp;
        obj.status = false;
        return obj;
      }
      return alp;
    });
    if (rowindex == 0) {
      let arr1 = [...arr];
      let arr2 = [...alphabet[1]];
      let arr3 = [...alphabet[2]];
      let ans = [[...arr1], [...arr2], [...arr3]];
      setaphabet(ans);
    } else if (rowindex == 1) {
      let arr1 = [...alphabet[0]];
      let arr2 = [...arr];
      let arr3 = [...alphabet[2]];
      let ans = [[...arr1], [...arr2], [...arr3]];
      setaphabet(ans);
    } else {
      let arr1 = [...alphabet[0]];
      let arr2 = [...alphabet[1]];
      let arr3 = [...arr];
      let ans = [[...arr1], [...arr2], [...arr3]];
      setaphabet(ans);
    }

    let arrword = word.map((alpdata) => {
      if (alpdata.data == key) {
        let obj = alpdata;
        obj.status = true;
        return obj;
      }
      return alpdata;
    });
    setword(arrword);
  }
  console.log(alphabetdata);

  function resetfxn() {
    setreset(!reset);
    setlives(7);
    let randomwordpick = Math.floor(fruitsData.length * Math.random());
    setword(fruitsData[randomwordpick]);
    const resetAlphabet = alphabetdata.map((row) =>
      row.map((cell) => ({ ...cell, status: true }))
    );
    setaphabet(resetAlphabet);
  }

  return (
    <div className="container">
        <div className="title-container">
        <h1>Hangman!</h1>
      </div>
      <div className="title-container">
        <h1>Guess Fruits</h1>
        <div className="joke">"If you can't name a fruit or two, you're one bad fruit basket away from letting a man perish in the jungle!" 🍍🍓🍑</div>
      </div>
      <div className="img-container">
        <div>
          <h2>Lives: {lives}</h2>
        </div>
        <div>{lives == 7 ? <img src={img1} /> : ""}</div>
        <div>{lives == 6 ? <img src={img2} /> : ""}</div>
        <div>{lives == 5 ? <img src={img3} /> : ""}</div>
        <div>{lives == 4 ? <img src={img4} /> : ""}</div>
        <div>{lives == 3 ? <img src={img5} /> : ""}</div>
        <div>{lives == 2 ? <img src={img6} /> : ""}</div>
        <div>{lives == 1 ? <img src={img7} /> : ""}</div>
        <div>{lives == 0 ? <img src={img8} /> : ""}</div>
      </div>
      <div className="row-word">
        {word.map((alp) => {
          return (
            <div className="word-alphabet">{alp.status ? alp.data : "_"}</div>
          );
        })}
      </div>
      <div>
        {reset && (
          <button onClick={resetfxn} className="reset">
            Play Again!
          </button>
        )}
        {!reset && (
          <>
            {alphabet.map((row, rowindex) => {
              return (
                <div className="row">
                  {row.map((cell) => {
                    return (
                      <button
                        onClick={() => handlekeyboard(cell.data, rowindex)}
                        className="cell"
                        disabled={!cell.status}
                      >
                        {cell.data}
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Hangman;
