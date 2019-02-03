import { AbstractControl } from '@angular/forms';

export function PasswordValidator(control: AbstractControl):{
  [key:string]:boolean} | null{
  const pass = control.get('password');
  const confirmedPass = control.get('confirmedPassword');

  return pass && confirmedPass && pass.value != confirmedPass.value ?
  {'misMatch' : true}:
  null;
}
