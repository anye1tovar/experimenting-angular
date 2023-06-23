import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  /*
 sort = "same" => Fist Name = First Last
 sort = "backwards" or undefined = TsaL Tsrif
*/
  transform(value: string, sort?: 'same' | 'backwards'): string {
    if (sort !== 'same') {
      return value.split('').reverse().toString().replaceAll(',', '');
    }
    return value;
  }
}
