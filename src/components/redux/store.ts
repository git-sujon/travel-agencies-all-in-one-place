import { configureStore } from '@reduxjs/toolkit'
import paginationReducer from './features/pagination/paginationSlice'
import sortingReducer from './features/sorting/sortingSlice'
import { api } from './api/apiSlice'
// ...

export const store = configureStore({
  reducer: {
    pagination:paginationReducer,
    sort:sortingReducer,
    [api.reducerPath]: api.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch