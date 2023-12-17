import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }
    const phone = value.replace(/\D/g, '');
    const phoneFormated = phone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    return phoneFormated;
  }
}