let listaknjiga=require("../modulKnjiga/knjiga");

//ok
function sveKnjige(){
    console.log(listaknjiga);
}
//ok
function addKnjiga(id,naziv,autor) {
    listaknjiga.ListaKnjiga.push({id,naziv,autor});
    console.log(listaknjiga)
}
//ok
function getKnjiga(id) {
    let tmp=false;
    listaknjiga.ListaKnjiga.forEach(el => {
        if(el.id===id){
            tmp=true;
            console.log(el);
        }
    });
    console.log(tmp)
    
}
//ok
function postaviAutora(naziv,autor) {
    listaknjiga.ListaKnjiga.forEach(el => {
        if(el.naziv===naziv){
            el.autor=autor;
        console.log(el);} 
    }); 
    
}
//ne
function deleteKnjiga(id) {
    listaknjiga.ListaKnjiga.splice(id-1) //Brise izmedju dva indeksa
    console.log(listaknjiga);
}

//ok
function GetKnjigaByAutor(autor) {
    //let copyLista=listaknjiga;
    listaknjiga.ListaKnjiga.forEach(el => {
        if(el.autor===autor){
        console.log(el);} 
    }); 
    
}


module.exports.sveKnjige = sveKnjige;
module.exports.addKnjiga = addKnjiga;
module.exports.getKnjiga = getKnjiga;
module.exports.postaviAutora = postaviAutora;
module.exports.deleteKnjiga = deleteKnjiga;
module.exports.GetKnjigaByAutor = GetKnjigaByAutor;
