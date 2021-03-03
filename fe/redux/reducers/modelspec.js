import { createSlice } from '@reduxjs/toolkit';

const modelspecSlice = createSlice({
  name: 'modelspec',
  initialState: {
    type: '',
    custom: {
      exterior: 'white',
      wheel: '',
      interior: '#2C2220',
    },
  },
  reducers: {
    typeChange: (state, action) => ({
      type: action.payload,
    }),
    exteriorColorChange: (state, action) => ({
      custom: {
        ...state.custom,
        exterior: action.payload,
      },
    }),
    interiorColorChange: (state, action) => ({
      custom: {
        ...state.custom,
        interior: action.payload,
      },
    }),
    wheelColorChange: (state, action) => ({
      custom: {
        ...state.custom,
        wheel: action.payload,
      },
    }),
  },
});

export default modelspecSlice;
