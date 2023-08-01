import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private _snackBar: MatSnackBar) { }

  open(msg: string, duration?: number, action?: string): void {
    this._snackBar.open(msg, action, { duration: duration ?? 7000, panelClass: ['snackbar-info'], verticalPosition: 'top', horizontalPosition: 'right' });
  }

  error(msg: string, duration?: number, action?: string): void {
    this._snackBar.open(msg, action, { duration: duration ?? 2000, panelClass: ['snackbar-error'], verticalPosition: 'top', horizontalPosition: 'right' });
  }

  success(msg: string, duration?: number, action?: string): void {
    this._snackBar.open(msg, action, { duration: duration ?? 2000, panelClass: ['snackbar-success'], verticalPosition: 'top', horizontalPosition: 'right' });
  }

  alert(msg: string, duration?: number, action?: string): void {
    this._snackBar.open(msg, action, { duration: duration ?? 2000, panelClass: ['snackbar-alert'], verticalPosition: 'top', horizontalPosition: 'right' });
  }

}
