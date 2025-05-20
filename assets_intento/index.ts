const MyPrompt = require('prompt-sync')();
type single = {}
type Album = {band:Array<string> | string, year:string}
type Song = {name:string, release_date:string, from?: Album | single}


type PRODUCT = {
    TYPE_P : string | Album | Song,
    NAME: string,
    PRICE?: number,
    
}
const WelcomeToTheBlackParade:Album = {
    "band" : "My Chemichal Romance",
    "year" : "2000"

}

const AvailablesProds:Array<PRODUCT> = [
    
]
const breaking  = Number(MyPrompt("Do you want to break? <1:yes, 0:no>"));
do{
    const quantity = Number(MyPrompt("¿How many products do you want? (no seas rata):"));
    const total = quantity > 0 ? quantity *1 /** */ : null;

    total 
        ? console.info(`✅ \nTOTAL: $${total.toLocaleString('es-AR')}`)
        : console.error("❌ Poné un número válido, maestro");
}while(breaking != 1)