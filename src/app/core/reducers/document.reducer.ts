import { createReducer, on } from "@ngrx/store";
import { DocumentFailure, DocumentRequest, DocumentSuccess } from "../actions/document.actions";
import { DocumentInterface } from "../interfaces/account.interface";


export const initialState: DocumentInterface = {
  data: null,
  error: null,
  loading: false
}

export const reducerDocument = createReducer(
  initialState,
  on(DocumentRequest, () => ({
    ...initialState,
    loading: true
  })),
  on(DocumentSuccess, (state, payload) => ({
    ...initialState,
    data: payload.data,
    loading: true
  })),
  on(DocumentFailure, (state, payload) => ({
    ...initialState,
    error: payload,
    loading: true
  }))
);
