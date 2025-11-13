import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn
} from "@angular/forms";

export function PrimeraLetraMayuscula(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valor = < string > control.value;

    if (valor.length === 0) return null;
    if (!valor) return null;

    const PrimeraLetra = valor[0];

    if (PrimeraLetra !== PrimeraLetra.toUpperCase()) {
      return {
        PrimeraLetraMayuscula: {
          mensaje: 'La primera letra debe ser mayuscula'
        }
      };
    }
    return null;
  }
}


export function validarFechaNacimiento(control: AbstractControl): ValidationErrors | null {
  const fechaNacimiento = new Date(control.value);
  const hoy = new Date();

  if (fechaNacimiento >= hoy) {
    return {
      fechaNacimientoInvalida: {
        mensaje: 'La fecha de nacimiento debe ser anterior a la fecha actual'
      }
    };
  }

  return null;
}
