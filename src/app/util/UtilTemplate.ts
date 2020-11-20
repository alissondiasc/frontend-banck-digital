import { FormArray, FormGroup } from '@angular/forms';

export class UtilTemplate{
  static verificarValidacaoForm(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((campo) => {
      const controle = formGroup.get(campo);
      controle.markAsDirty({ onlySelf: true });
      controle.markAsTouched({ onlySelf: true });
      controle.updateValueAndValidity({ onlySelf: true });
      if (controle instanceof FormGroup) {
        this.verificarValidacaoForm(controle);
      }
      if (controle instanceof FormArray) {
        for (const x of controle.controls) {
          if (x instanceof FormGroup) {
            this.verificarValidacaoForm(x);
          }
        }
      }
    });
  }
}
