import { NgForm } from '@angular/forms';

export function clearForm(form: NgForm)
{
    form.resetForm();
}
