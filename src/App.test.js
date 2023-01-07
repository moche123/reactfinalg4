/*
DEFINIR LAS REGLAS DE JUEGO DEL PROYECTO =====> REGLAS DE NEGOCIO

TESTS: "MUNDO APARTE" ---> SE EJECUTAN INDEPENDIENTEMENTE DE LOS COMPONENTES

ESTRUCTURA DE LOS TESTS

SOLO PRUEBA LO QUE TENGAS QUE PROBAR

describe ===> TEST SUIT
it ==>  TEST INDIVIDUALES

TDD: METODOLOGÍA DE TESTING: REALIZAR PRUEHAS MEDIANTE 3 pasos

🔴 ROJA: PRIMERO ESCRIBES EL TEST Y AL CORRER LOS TEST, OBVIAMENTE VAN A FALLAR
🟡 AMARILLA: ESCRIBES LOS TEST Y VAN FALLANDO PERO MENOS
🟢 VERDE: TEST PASA OK



*/
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { maths } from './math';

describe('App suit test', () => { 

  it('renders learn react link', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  //! learn by doing
    expect(getByText(/learn/i)).toBeInTheDocument();
  });

  it('render an element with the word title', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  //! learn by doing
    expect(getByText(/title/i)).toBeInTheDocument();
  });


  it('Tests should work', () => {
    const number1=5
    const number2=3

    //*ESPERAR QUE LA MULTIPLICACION DE 5 Y 3 me resulte 15
    //toBe, toEqual...
    expect(maths.mul(number1,number2)).toBe(15)
  })


 })


