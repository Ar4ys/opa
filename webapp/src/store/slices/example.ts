import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import * as Thunks from '../thunks/example'

export interface ExampleSlice {
  example?: string
  error?: Error
}

const exampleSlice = createSlice({
  name: "user",
  initialState: {} as ExampleSlice,
  reducers: {
    example: (state, { payload }: PayloadAction<string>) =>
      void (state.example = payload)
  },
  extraReducers: builder => builder
    .addCase(Thunks.example.rejected, state =>
      void (state.error = {
        name: "TestError",
        message: "Test"
      }))
    .addCase(Thunks.example.fulfilled, state =>
      void delete state.error)
})

export default exampleSlice.reducer
export const { example } = exampleSlice.actions
