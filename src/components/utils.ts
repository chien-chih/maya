export class StringChain { 

    constructor(private current:string){
    } 

    add(text:string):string{
        
        text=text?' '+text.trim() : '';
        if(this.current.indexOf(text) == -1)
            this.current+=text;
        return this.toString();
    }

    remove(text:string):string{
        text=text?text.trim() : '';
        this.current=this.current.replace(text,'').replace('  ',' ');                
        return this.toString();
    }

    toString():string{
        return this.current.trim();
    }
 
    assign(text:string){
        this.current=text;
    }
 
}     