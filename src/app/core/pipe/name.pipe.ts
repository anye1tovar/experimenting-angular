import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name',
})
export class NamePipe implements PipeTransform {
  /*
name = true => First Name = Name First
undefined or false => First Name = First Name
*/
  transform(value: any, reverse?: boolean, arg?: string): string {
    if (reverse) {
      return `${value.lastName} ${value.firstName}`;
    }
    console.log('Second arg:', arg);

    return `${value.firstName} ${value.lastName}`;
  }
}
