class Elem{
    #elem;
    
    constructor(elem) {
        this.#elem = elem.find(".divElem").find("p");
        
        elem.on("click", ()=>{             
            this.#beleIr();
        });
    }

#beleIr(){
    let txt ="X";
    this.#elem.text(txt);
}} 
export default Elem;