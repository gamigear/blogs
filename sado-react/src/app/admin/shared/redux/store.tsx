import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'

// User slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null as any,
    users: [] as any[],
    loading: false,
  },
  reducers: {
    setCurrentUser: (state, action: PayloadAction<any>) => {
      state.currentUser = action.payload
    },
    setUsers: (state, action: PayloadAction<any[]>) => {
      state.users = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
})

// UI slice
const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    sidebarCollapsed: false,
    theme: 'light',
  },
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarCollapsed = !state.sidebarCollapsed
    },
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload
    },
  },
})

export const { setCurrentUser, setUsers, setLoading } = userSlice.actions
export const { toggleSidebar, setTheme } = uiSlice.actions

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    ui: uiSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
