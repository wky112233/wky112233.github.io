import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import dogdog from './dogdog.gif';
import './bubble.css';
import sun from './sun.png';
import cake from './cake.gif';


const Bubble = ({ x, y, text}) => {
  const [position, setPosition] = useState(y);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => prevPosition - 1);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bubble" style={{ top: `${position}px`, left: `${x}px` }}>
      {text}
    </div>
  );
};
function App() {

  const [bubbles, setBubbles] = useState([]);
  const [textList, setTextList] = useState([
    '最可爱的蔓蔓生日快乐！！',
    '最好的蔓蔓生日快乐！！',
    '最漂亮的蔓蔓生日快乐！！',
    '最美的蔓蔓生日快乐！！',
    '最好的蔓蔓生日快乐！！',
    '蔓蔓宝贝生日快乐！！',
    '有钱了一起去旅游~',
    '没有难过~',
    '没有烦恼~',
    '谁惹你生气就暴揍！',
    '天天快乐，年年好运',
    '猪你生日快乐！',
    '温馨甜蜜~',
    '事事顺心~',
    '万事如意~',
    '好好照顾自己',
    '永远是少女',
    '每天都能活成自己喜欢的样子',
    '我一直都在哦❤',
    '爱你哦~',
    '排位把把都超神!',
    '要快乐哦！'
  ]);
  const handleClick = (event) => {
    const { clientX, clientY } = event;
    const randomIndex = Math.floor(Math.random() * textList.length);
    const randomText = textList[randomIndex];

    setBubbles((prevBubbles) => [
      ...prevBubbles,
      { x: clientX, y: clientY, text: randomText },
    ]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={sun} className="App-top" alt="logo" />
        <div>
          <img src={cake} className="App-footer"/>
          <img src={dogdog} className='dog' onClick={handleClick}/>
        </div>
        {bubbles.map((bubble, index) => (
          <Bubble key={index} x={bubble.x} y={bubble.y} text={bubble.text}/>
        ))}
      </header>

    </div>
  );
}

export default App;
