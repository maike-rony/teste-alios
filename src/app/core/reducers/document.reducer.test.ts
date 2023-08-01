import * as fromAction from '../actions/document.actions';
import * as fromReducer from './document.reducer';

describe('Document Reducer', () => {

  it ('should return the default state', () => {
    const action = {
      type: '',
      payload: null
    }
    const state = fromReducer.reducerDocument(undefined, action);
    expect({ ... (state as any)}).toEqual({
      ...fromReducer.initialState
    });
  });

  it ('should return the success state', () => {
    const payload = {
      type: '[Document] Success',
      data: {
        teste: 'teste'
      }
    };
    const action = fromAction.DocumentSuccess(payload);
    const state = fromReducer.reducerDocument(undefined, action);

    expect({ ... (state as any)}).toEqual({
      ...fromReducer.reducerDocument(undefined, action),
      data: payload.data,
    });
  })

  it ('should return the failure state', () => {
    const payload = {
      type: '[Document] Failure',
      error: {
        teste: 'teste'
      }
    };
    const action = fromAction.DocumentFailure(payload);
    const state = fromReducer.reducerDocument(undefined, action);

    expect({ ... (state as any)}).toEqual({
      ...fromReducer.reducerDocument(undefined, action),
      data: payload.error,
    });
  })

})
