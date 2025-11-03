import { createContext, useContext, useReducer, useEffect } from 'react';
import moment from 'moment-timezone';

const ClockContext = createContext();

const getInitialState = () => {
  const savedClocks = localStorage.getItem('clocks');
  return {
    defaultClock: {
      id: 'default',
      location: 'Local Time',
      timezone: moment.tz.guess(),
    },
    clocks: savedClocks ? JSON.parse(savedClocks) : [],
  };
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_CLOCK':
      return {
        ...state,
        clocks: [...state.clocks, action.payload],
      };
    case 'REMOVE_CLOCK':
      return {
        ...state,
        clocks: state.clocks.filter(clock => clock.id !== action.payload),
      };
    default:
      return state;
  }
}

export const ClockProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {}, getInitialState);

  useEffect(() => {
    localStorage.setItem('clocks', JSON.stringify(state.clocks));
  }, [state.clocks]);

  const addClock = (location, timezone) => {
    const id = `${location}-${Date.now()}`;
    dispatch({
      type: 'ADD_CLOCK',
      payload: { id, location, timezone },
    });
  };

  const removeClock = (id) => {
    dispatch({ type: 'REMOVE_CLOCK', payload: id });
  };

  return (
    <ClockContext.Provider value={{ ...state, addClock, removeClock }}>
      {children}
    </ClockContext.Provider>
  );
};

export const useClockContext = () => useContext(ClockContext);
