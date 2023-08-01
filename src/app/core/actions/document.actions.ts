import { createAction, props } from '@ngrx/store';

export const DocumentRequest = createAction(
  '[Document] Request',
  props<{params: any }>()
);

export const DocumentSuccess = createAction(
  '[Document] Success',
  (payload: any) => payload
);

export const DocumentFailure = createAction(
  '[Document] Failure',
  (payload: any) => payload
);

