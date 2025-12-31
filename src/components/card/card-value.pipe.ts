import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardValue'
})
export class CardValuePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case '11':
        return 'J';
      case '12':
        return 'Q';
      case '13':
        return 'K';
      case '14':
        return 'A';
      default:
        return value;
    }
  }

}
