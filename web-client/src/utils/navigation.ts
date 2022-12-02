import { Router } from '@angular/router';

export function redirectTo(uri: string, router: Router)
{
    router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
    router.navigate([uri]));
}
