import React from 'react';
import '../style/style.scss';
import 'material-icons/iconfont/material-icons.css';
import { useState } from 'react';

export default function Calculator(){
    const [value, setValue] = useState("");
    const [storedValue, setStoredValue] = useState("");
    const [functionality, setFunction] = useState("");

    const handleNumber = (e) => {
      if (e.target.value === '.' && value.indexOf('.') !== -1) {
        return;
      }
      setValue(value.concat(e.target.value));
    }

    const handleAllclear = (e) => {
      setValue('');
      setStoredValue('');
    }

    const handleNavigate = () => {
      if (value) {
        if (value > 0) {
          setValue(`-${value}`);
        } else {
          const positiveNumber = value.slice(1);
          setValue(positiveNumber);
        }
      } else if (storedValue > 0) {
          setStoredValue(`-${storedValue}`);
      } else {
        const positiveNumber = storedValue.slice(1);
          setStoredValue(positiveNumber);
      }
    };

    const handleFunctionality = type => {
      const fun = type.target.value
    
      if (value) {
        setFunction(fun);
        setStoredValue(value + fun);
        setValue('');
      }
      if (storedValue) {
        setFunction(fun);
        if(storedValue.length -1 !== fun){
          const newValue = storedValue.slice(0 , storedValue.length-1);
          setStoredValue(newValue + fun)   
        }
      }
    }; 

    const handleClear = (e) => {
      if (value !== '') {
        const deletedNumber = value.slice(0, value.length - 1);
        setValue(deletedNumber);
      } 
    }
    const handleEqual = () => {
      if (value && storedValue) {
        switch (functionality) {
          case '+':
            setStoredValue(`${Math.round(`${(parseFloat(storedValue) + parseFloat(value)) * 100}`) / 100}`);
            break;
          case '-':
            setStoredValue(`${Math.round(`${(parseFloat(storedValue) - parseFloat(value)) * 1000}`) / 1000}`);
            break;
          case '/':
            setStoredValue(`${Math.round(`${(parseFloat(storedValue) / parseFloat(value)) * 1000}`) / 1000}`);
            break;
          case '*':
            setStoredValue(`${Math.round(`${parseFloat(storedValue) * parseFloat(value) * 1000}`) / 1000}`);
            break;
          case '%':
            setStoredValue(`${Math.round(`${(parseFloat(storedValue) / 100) * parseFloat(value) * 1000}`) / 1000}`);
            break;
          default:
            break;
        }
        setValue('');
      }
    }

    return (
        <section className="calculator">
            <div className="calculator__bg-color">
                <div className="calculator__main-conponents">
                  <div className="calculator__display">
                      <div className="calculator__display--icons">
                          <div className="calculator__icons">
                              <span className="light_mode calculator__icons--value material-icons-outlined">
                                  light_mode
                              </span>
                              <span className="dark_mode calculator__icons--value material-icons-outlined">
                                  dark_mode
                              </span>
                          </div>
                      </div>
                      <div className="calculator__outputs">
                          <input type="text" value={storedValue} className="calculator__output calculator__output--history" />
                          <input type="text" value={value} className="calculator__output calculator__output--output" />
                      </div>
                  </div>
                  <div className="calculator__buttons">
                      <div className="calculator__buttons--values calculator__buttons--bg-color">
                          <button value='AC' onClick={handleAllclear} className="button button-checked">AC</button>
                          <button value='+/-' onClick={handleNavigate} className="button button-checked">+/-</button>
                          <button value='%' onClick={handleFunctionality} className="button button-checked">%</button>
                          <button value='/' onClick={handleFunctionality} className="button button-functionality">/</button>
                          <button value={7} onClick={handleNumber} className="button button-numbers">7</button>
                          <button value={8} onClick={handleNumber} className="button button-numbers">8</button>
                          <button value={9} onClick={handleNumber} className="button button-numbers">9</button>
                          <button value='*' onClick={handleFunctionality} className="button button-functionality">*</button>
                          <button value={4} onClick={handleNumber} className="button button-numbers">4</button>
                          <button value={5} onClick={handleNumber} className="button button-numbers">5</button>
                          <button value={6} onClick={handleNumber} className="button button-numbers">6</button>
                          <button value='-' onClick={handleFunctionality} className="button button-functionality">-</button>
                          <button value={1} onClick={handleNumber} className="button button-numbers">1</button>
                          <button value={2} onClick={handleNumber} className="button button-numbers">2</button>
                          <button value={3} onClick={handleNumber} className="button button-numbers">3</button>
                          <button value='+' onClick={handleFunctionality} className="button button-functionality">+</button>
                          <button value='C' onClick={handleClear} className="button button-numbers">C</button>
                          <button value={0} onClick={handleNumber} className="button button-numbers">0</button>
                          <button value='.' onClick={handleNumber} className="button button-numbers">.</button>
                          <button value='=' onClick={handleEqual} className="button button-functionality">=</button>
                      </div>
                  </div>
                </div>
            </div>
        </section>
        
    )
}
