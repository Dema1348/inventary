import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: [any], searchTerm: string) {
     if(!searchTerm)
       return items;
     return items.filter((item) => {
           if(!item.codigo_de_barras)
             return;
           return item.codigo_de_barras.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });  
  }
}
