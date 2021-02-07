import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    menuOpend: false,
    windowWidth: 0,
  },
  reducers: {
    toggle: (state) => ({
      menuOpend: !state.menuOpend,
    }),
    windowWidthChange: (state, action) => ({
      windowWidth: action.payload,
    }),
  },
});

export default menuSlice;
