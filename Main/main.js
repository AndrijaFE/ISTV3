var provera= require("../modulFunkcionalnost/funkcionalnost");

console.log("Sve knjige: ");
provera.sveKnjige();
console.log("Dodaj knjigu: ");
provera.addKnjiga(6,"Neka knjiga","Ja");
console.log("Vrati id za knjigu:");
provera.getKnjiga(1);
console.log("Postavi autora: ");
provera.postaviAutora("Hajduci","Pera");
console.log("Obrisi knjigu: ");
provera.deleteKnjiga(6);
console.log("Vrati knjigu za autora: Branko Copic");
provera.GetKnjigaByAutor("Branko Copic");