import { Action } from '@ngrx/store';

export enum AccountActionTypes {
  LoadAccount = '[CMS] Load Account',
  LoadAccountSuccess = '[CMS] Load Account Success',
  LoadAccountFailure = '[CMS] Load Account Failure'
}

export class Account implements Action {
  readonly type = AccountActionTypes.LoadAccount;
}

export class AccountSuccess implements Action {
  readonly type = AccountActionTypes.LoadAccountSuccess;
}

export class AccountFailure implements Action {
  readonly type = AccountActionTypes.LoadAccountFailure;
}

export type AccountActions
  = Account
  | AccountSuccess
  | AccountFailure;
