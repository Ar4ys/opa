import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit'
import ky from 'ky'
import { example as exampleAction } from '../slices/example'
import { RootState } from '../slices'

interface Options {
  state: RootState
}

const kyUser = ky.extend({
  prefixUrl: '/test'
})

export const example: AsyncThunk<void, undefined, Options> =
  createAsyncThunk(
    'example/testStatus',
    async (_, { dispatch }) => {
      const response = await kyUser.post('test', {
        json: {
          test: 'test'
        }
      })

      if (response instanceof Response) {
        dispatch(exampleAction('test'))
      }
      else
        throw new Error('Test')
    })
