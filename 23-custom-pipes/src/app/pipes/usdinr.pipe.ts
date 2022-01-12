import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uSDINR'
})
export class USDINRPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [price] = args;
    return value * price;
  }

}
