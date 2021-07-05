import React from 'react';
import '../style/style.scss';
import 'material-icons/iconfont/material-icons.css';
import { useState } from 'react';
import ShowText from './showText';
import { store, mapStateToProps, mapDispatchToProps } from './toggleSwitcher/theme'
import { Provider , connect } from 'react-redux';


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
        // if(storedValue.length -1 !== fun && storedValue.length -1 !== {``}){
        //   const newValue = storedValue.slice(0 , storedValue.length-1);
        //   setStoredValue(newValue + fun)    
        // }
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
          case '÷':
            setStoredValue(`${Math.round(`${(parseFloat(storedValue) / parseFloat(value)) * 1000}`) / 1000}`);
            break;
          case '×':
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

    const Component = ({
      headerBackground,
      containerBackground,
      buttonsColor,
      buttonsBackground,
      outputsColor,
      outputsBackground,
      iconsBackground,
      iconsValuesColor,
      dark_mode, light_mode
    }) => (
      <section className="calculator">
            <div style={{ background: headerBackground }} className="calculator__bg-color">
                <div className="calculator__main-conponents">
                  <div className="calculator__display">
                      <div className="calculator__display--icons">
                        <div style={{ background: iconsBackground }} className="calculator__icons">
                          <span style={{ color: iconsValuesColor }} onClick={ dark_mode } className="light_mode calculator__icons--value material-icons-outlined">
                              light_mode
                          </span>
                          <span style={{ color: iconsValuesColor }} onClick={ light_mode } className="dark_mode calculator__icons--value material-icons-outlined">
                              dark_mode
                          </span>
                        </div>
                      </div>
                      <div style={{ background:outputsBackground }} className="calculator__outputs">
                          <ShowText color={outputsColor} value={value} storedValue={storedValue} />
                      </div>
                  </div>
                  <div style={{ background: containerBackground }} className="calculator__buttons">
                      <div className="calculator__buttons--values calculator__buttons--bg-color">
                          <button style={{ background: buttonsBackground }} value='AC' onClick={handleAllclear} className="button button-checked">AC</button>
                          <button style={{ background: buttonsBackground }} value='+/-' onClick={handleNavigate} className="button button-checked">+/-</button>
                          <button style={{ background: buttonsBackground }} value='%' onClick={handleFunctionality} className="button button-checked">%</button>
                          <button style={{ background: buttonsBackground }} value='÷' onClick={handleFunctionality} className="button button-functionality">÷</button>
                          <button style={{ background: buttonsBackground, color: buttonsColor}} value={7} onClick={handleNumber} className="button button-numbers">7</button>
                          <button style={{ background: buttonsBackground, color: buttonsColor}} value={8} onClick={handleNumber} className="button button-numbers">8</button>
                          <button style={{ background: buttonsBackground, color: buttonsColor}} value={9} onClick={handleNumber} className="button button-numbers">9</button>
                          <button style={{ background: buttonsBackground }} value='×' onClick={handleFunctionality} className="button button-functionality">×</button>
                          <button style={{ background: buttonsBackground, color: buttonsColor}} value={4} onClick={handleNumber} className="button button-numbers">4</button>
                          <button style={{ background: buttonsBackground, color: buttonsColor}} value={5} onClick={handleNumber} className="button button-numbers">5</button>
                          <button style={{ background: buttonsBackground, color: buttonsColor}} value={6} onClick={handleNumber} className="button button-numbers">6</button>
                          <button style={{ background: buttonsBackground }} value='-' onClick={handleFunctionality} className="button button-functionality">-</button>
                          <button style={{ background: buttonsBackground, color: buttonsColor}} value={1} onClick={handleNumber} className="button button-numbers">1</button>
                          <button style={{ background: buttonsBackground, color: buttonsColor}} value={2} onClick={handleNumber} className="button button-numbers">2</button>
                          <button style={{ background: buttonsBackground, color: buttonsColor}} value={3} onClick={handleNumber} className="button button-numbers">3</button>
                          <button style={{ background: buttonsBackground }} value='+' onClick={handleFunctionality} className="button button-functionality">+</button>
                          <button style={{ background: buttonsBackground, color: buttonsColor}} value='C' onClick={handleClear} className="button button-numbers">C</button>
                          <button style={{ background: buttonsBackground, color: buttonsColor}} value={0} onClick={handleNumber} className="button button-numbers">0</button>
                          <button style={{ background: buttonsBackground, color: buttonsColor}} value='.' onClick={handleNumber} className="button button-numbers">.</button>
                          <button style={{ background: buttonsBackground }} value='=' onClick={handleEqual} className="button button-functionality">=</button>
                      </div>
                  </div>
                </div>
            </div>
        </section>
    
    )

    const Container = connect(mapStateToProps , mapDispatchToProps)(Component)

    return (
      <Provider store={store}>
          <Container />
      </Provider>
        )
}
