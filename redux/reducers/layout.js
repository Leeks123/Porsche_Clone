import { createSlice } from '@reduxjs/toolkit';

const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    menuOpend: false,
    windowWidth: 100,
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

export default layoutSlice;
