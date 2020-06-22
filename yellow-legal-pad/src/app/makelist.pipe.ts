import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makelist'
})
export class MakelistPipe implements PipeTransform {

  transform(wrt: string[]): string {
    let list = '<ul>';
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < wrt.length; i++) {
      list += '<li>' +  wrt[i] + '</li>';
    }
    list += '</ul>';
    return list;
  }

}
