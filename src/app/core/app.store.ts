import { ActionReducerMap } from "@ngrx/store";
import { DocumentInterface } from "./interfaces/account.interface";
import { reducerDocument } from "./reducers/document.reducer";


export interface AppState {
  document: DocumentInterface;
}

export const AppStore: ActionReducerMap<AppState> = {
  document: reducerDocument
}
