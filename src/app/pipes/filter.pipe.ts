import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<any>, phrase: string, key?: string): any {
    if (!phrase || !value) {
      return value;
    }

    return value.filter( (item) => {
      if (!item || !item.name) {
        return true;
      }

      if (!key) {
        let jsonItem: string = JSON.stringify(item)
          .replace(/"[^"]*"\:/g, '')
          .replace(/[",\{\}]/g, '');
        console.log(jsonItem);
        return jsonItem.toLowerCase()
          .indexOf(phrase.toLowerCase()) > -1;
      } else {
        return ("" + item[key]).toLowerCase()
          .indexOf(phrase.toLowerCase()) > -1;
      }
    });
  }

}
