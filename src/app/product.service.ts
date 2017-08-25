import {Injectable} from '@angular/core';

@Injectable()
export class ProductList{
    
    shoppingList = [
        {name: "Молоко", done: false},
        {name: "Творог", done: false},
        {name: "Хлеб", done: false},
        {name: "Зубная паста", done: false},
        {name: "Картошка", done: false},
        {name: "Помидоры", done: false},
        {name: "Стиральный порошок", done: false},
        {name: "Гель для душа", done: false}
      ];
    
    
      addProduct(product){
       if(product.value){
        this.shoppingList.push({name: product.value, done: false});
        product.value = "";
       }
      }
    
      productClick(item){
        item.done = !item.done;
      }
}