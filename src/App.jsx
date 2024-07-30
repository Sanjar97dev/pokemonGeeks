import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeNamaz, setTimeNamaz] = useState([
    {name: 'Багымдат', time: '3:53 AM'},
    {name: 'Күн чыгуу', time: '4:53 AM'},
    {name: 'Бешим', time: '12:53 PM'},
    {name: 'Аср', time: '2:53 PM'},
    {name: 'Шам', time: '5:53 PM'},
    {name: 'Куптан', time: '7:53 PM'},
  ]);


  const [naasat, setNaasat] = useState([
    {description: 'Алган илимиң бул дүйнөдө да, акыретте да пайдалуу болуусу үчүн өзүңдү жана башкаларды дагы көзөмөлгө алгын.'},
    {description: 'Көчөдө жана мечитте тамактанбагын, Жолдун боюндагы көлмө менен агын суулардан ичпегин. Жолдун ортосуна олтурбагын. Олтурууга мажбур болсоң, мечиттерге барып отургун. Дүкөндөрдө да отурбагын.'},
    {description: 'Жаштыгында ар дайым илим менен алектенгин. себеби, жаштык - зээндин таза кези.'},
    {description: 'Эч кимди төмөн көрбөгүн. өз салабаттуулугуңду сактаганың сыяктуу эле башка адамдардын бедели менен кадыр-баркын коргогун.'}
  ]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return `${hours}:${minutes}:${seconds} ${ampm}`;
  };

  return (
    <div className='container'>
      <h1>Имам Абу Ханифа наасаттар</h1>
      <div className='clock'>
        <h2></h2>
        <p>{formatTime(currentTime)}</p>
      </div>
      <div className='namaz-time'>
        <h2>Namaz Times</h2>
        <ul>
          {timeNamaz.map((item, index) => (
            <li key={index}>
              <strong>{item.name}:</strong> {item.time}
            </li>
          ))}
        </ul>
      </div>
      <div className='cards'>
        {naasat.map((item, index) => (
          <div key={index} className='naasat-card'>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
