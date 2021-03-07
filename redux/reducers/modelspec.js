import { createSlice } from '@reduxjs/toolkit';

const modelspecSlice = createSlice({
  name: 'modelspec',
  initialState: {
    type: 0,
    custom: {
      exterior: '#000000',
      wheel: '',
      interior: '#2C2220',
    },
  },
  reducers: {
    typeChange: (state, action) => ({
      ...state,
      type: action.payload,
    }),
    exteriorColorChange: (state, action) => ({
      ...state,
      custom: {
        ...state.custom,
        exterior: action.payload,
      },
    }),
    interiorColorChange: (state, action) => ({
      ...state,
      custom: {
        ...state.custom,
        interior: action.payload,
      },
    }),
    wheelColorChange: (state, action) => ({
      ...state,
      custom: {
        ...state.custom,
        wheel: action.payload,
      },
    }),
  },
});

export default modelspecSlice;
