import {Injectable, Pipe, PipeTransform} from '@angular/core';
import { Baby } from './entities/baby';

@Pipe({name: 'filterBabies'})
@Injectable()
export class FilterBabies implements PipeTransform {
     transform(items: Baby[], args: string): any {
     
      if (args && items.length > 0) {

       let itemsFound = items.filter(
         item => item.firstname && 
         item.firstname.toLowerCase().includes(args.toLowerCase()) ||
          item.firstname && item.age && (item.firstname.toLowerCase() + " " + item.age).includes(args.toLowerCase())
       );
       if (itemsFound && itemsFound.length > 0 ){
         return itemsFound;
       }
       return [-1]; // to display error message (none found) in view.
     }
   return [];
 }
}


