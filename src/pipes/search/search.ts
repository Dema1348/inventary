import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: Array<any>, searchTerm: string) {
     return items.filter((item) => {
     	return item
            // return item.codigo_de_barras.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });  
  }
}
