import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getLanguages, translateText } from '../redux/actions/translateActions';
import Select from 'react-select'
import { clearAnswer } from '../redux/slices/translateSlice';


const MainPage = () => {
const dispatch = useDispatch();
const state = useSelector(store => store.translateSlice);

// cevirilecek texti state`i
const [text,setText] = useState('');

// kaynak dil state`i ilk degeri turkce
const [sourceLang, setSourceLang] = useState({value: 'tr', label: 'Turkish'});
// hedef dil state`i ilk degeri ingilizce
const [targetLang, setTargetLang] = useState({value: 'en', label: 'English'});


useEffect(() => {
  // it gets languages and transfers them to the store.
  dispatch(getLanguages());
},[]);

const handleChange = () => {
  setTargetLang(sourceLang);
  setSourceLang(targetLang);
  // inputlaritemizleme
  setText('');
  dispatch(clearAnswer());
};




  return (
    <div className='main-page'>
        <div className='container'>
        <h1><span>By</span>Translate</h1>
        <div className="translate-area">
            {/* left side */}
          <div className="left">
            <Select 
            value={sourceLang}
            onChange={(e) => setSourceLang(e)}
            isDiabled={state.isLoading}
            isLoading={state.isLoading}
            className='select' options={state.languages}/>
            <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>

          <button
          onClick= {handleChange}
          className='change-btn'>Change</button>
          
          {/* right side */}
          <div className="right">
          <Select
          value={targetLang}
          onChange={(e) => setTargetLang(e)} 
          isDiabled={state.isLoading}
          isLoading={state.isLoading}
          className='select' options={state.languages}/>
            <textarea disabled value={state.answer}></textarea>
          </div>

        </div>
        <button
        onClick={() => dispatch(translateText({sourceLang,targetLang,text}))}
         className="submit-btn">Translate</button>
        </div>
    </div>
  )
}

export default MainPage;