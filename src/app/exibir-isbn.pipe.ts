import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exibirISBN'
})
export class ExibirISBNPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
