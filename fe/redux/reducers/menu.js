import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    menuOpend: false,
  },
  reducers: {
    toggle: (state) => ({
      menuOpend: !state.menuOpend,
    }),
  },
});

export default menuSlice;
