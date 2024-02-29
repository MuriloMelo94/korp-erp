import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Item } from '../item.model';
import { Observable, empty, of } from 'rxjs';
import { ItemService } from '../item.service';

@Injectable({
  providedIn: 'root'
})
export class ItemResolverService implements Resolve<Item> {

  constructor(private itemService: ItemService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Item | Observable<Item> | Promise<Item> {

    const id = route.params["id"];
    if(id){
      return this.itemService.pesquisarPorId(id);
    }
    return of({} as Item);
  }
}
