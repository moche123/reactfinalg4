/*
DEFINIR LAS REGLAS DE JUEGO DEL PROYECTO =====> REGLAS DE NEGOCIO

TESTS: "MUNDO APARTE" ---> SE EJECUTAN INDEPENDIENTEMENTE DE LOS COMPONENTES

ESTRUCTURA DE LOS TESTS

describe ===> TEST SUIT
it ==>  TEST INDIVIDUALES

TDD: METODOLOGÍA DE TESTING: REALIZAR PRUEHAS MEDIANTE 3 pasos

🔴 ROJA: PRIMERO ESCRIBES EL TEST Y AL CORRER LOS TEST, OBVIAMENTE VAN A FALLAR
🟡 AMARILLA: ESCRIBES LOS TEST Y VAN FALLANDO PERO MENOS
🟢 VERDE: TEST PASA OK



*/

import counterReducer, {
  increment,
  decrement,
  incrementByAmount,
} from './counterSlice';

describe('counter reducer', () => {
  const initialState = {
    value: 3,
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

  it('should handle increment', () => {
    const actual = counterReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual = counterReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it('should handle incrementByAmount', () => {
    const actual = counterReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
});
