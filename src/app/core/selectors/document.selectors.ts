import { AppState } from "../app.store";
import { DocumentInterface } from "../interfaces/account.interface";

export const selectDocument = (state: AppState): DocumentInterface => state.document;
