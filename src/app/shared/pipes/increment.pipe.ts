import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'incrementByOne'
})
export class IncrementPipe implements PipeTransform {
  transform(data: number): any {
    return data + 1;
  }
}
