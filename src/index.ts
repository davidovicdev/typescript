/* ZADATAK:
Napraviti projekat Shopping List:
Basic html+css
Input za ime
Dropdown tip proizvoda
Cena
Description(optional)
Create
Delete
Interface sa metodama
Item (id,name,price)
Food,Book etc (pages , calories, isVegetarian etc)
Iskoristiti Type,Interface,generic je plus
 */
var deleteButtons = [];
var products: Product[] = [];
interface IProduct {
  name: string;
  type: string;
  price: string;
  description?: string;
  delete(): void;
}
class Product implements IProduct {
  name: string;
  type: string;
  price: string;
  description?: string | undefined;
  delete(): void {
    console.log("RADI DELETE DUGME IZ KLASE");
  }
  constructor(name: string, type: string, price: string, description?: string) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.description = description;
  }
}

var table = document.getElementById("table") as HTMLTableElement;
var createButton = document.getElementById("createButton");
createButton?.addEventListener("click", function (e) {
  e.preventDefault();
  // VALIDATION
  //        DROPDOWN MENU (TYPES)
  var name = document.getElementById("name") as HTMLInputElement;

  if (name?.value == "") {
    alert("Please enter the product name");
    return;
  }
  var price = document.getElementById("price") as HTMLInputElement;
  var type = document.getElementById("type") as HTMLSelectElement;
  var valueId = type.selectedIndex;
  var valueText = type.options[valueId].text;
  if (valueId == 0) {
    alert("Please choose the type of product");
    return;
  }
  var description = (document.getElementById("description") as HTMLInputElement)
    .value;
  const product = new Product(name.value, valueText, price.value, description);
  products.push(product);
  table?.innerHTML = "";
  // OUTPUT
  products.forEach((product) => {
    table?.innerHTML += `<tr>
    <td>${product.name}</td>
    <td>${product.type}</td>
    <td>${product.price}</td>
    <td>${product.description}</td>
    <td class='delete'></td>
    </tr>`;
  });
});
var deleteButton = document.getElementById("deleteButton");
deleteButton?.addEventListener("click", function (e) {
  e.preventDefault();
  var deleteButtons = Array.from(document.getElementsByClassName("delete"));
  deleteButtons.forEach((db) => {
    db.innerHTML = "<button class='text-danger x'>X</button>";
  });
  var xs = Array.from(document.getElementsByClassName("x"));
  xs.forEach((x) => {
    x.addEventListener("click", function (e) {
      console.log("RADI");
      e.preventDefault();
      x.parentElement?.parentElement.remove();
    });
  });
});
