import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
  name: 'sortByPipe'
})
export class SortByPipePipe implements PipeTransform {

  transform(value: any[], order = '', column: string = '', searchText: string): any[] {
    if (!value || order === '' || !order) { return value; } // no array
    if (value.length <= 1) { return value; } // array with only one item
    if (!searchText) {
      return orderBy(value, [column], [order]);
    } else {
      searchText = searchText.toLowerCase();
      if (order === 'asc') {
        return value.filter( it => {
            return it.movieName.toLowerCase().includes(searchText);
        }).sort();
      } else {
        return value.filter( it => {
            return it.movieName.toLowerCase().includes(searchText);
        }).sort().reverse();
      }
    }
  }
}
