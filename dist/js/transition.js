class Transition{
    constructor(obj){
        if(obj != null){ this.obj = document.querySelectorAll(obj) }
        if(this instanceof Transition){  /* ignore */ }
        else{ return new Transition(obj) }
    }
    Lerp(position, speed){
        if(position >= this.obj.length){ return 0 }
        var styleIn = { opacity: 1, transition: 'opacity ease-in-out 0.5s',}
        //var styleOut = { opacity: 0.2, transition: 'opacity ease-in-out 0.5s',}
        //Array(...this.obj).map(x => x == this.obj[position] ? Object.assign(x.style, styleIn) : Object.assign(x.style, styleOut));
        Object.assign(this.obj[position].style, styleIn);
        position < this.obj.length ? position++ : 0;
        var typeOut = this.obj.children;
        setTimeout(()=> this.Lerp(position, speed), speed);
    }
    onScroll(ob, speed){
        var elementsToShow = null;
        if(!speed){ speed = 0.5 }
        try { elementsToShow = document.querySelectorAll(ob)}
        catch(e){ console.log("Error: Not a valid query selector") }
        elementsToShow.forEach(element => {
            if(element.getBoundingClientRect().top < window.innerHeight){
                var styles = {
                    opacity: 1,
                    transition: `opacity ease-in-out ${speed}`,
                }
                Object.assign(element.style, styles);
            }
            else{
                var styles = {
                    opacity: 0.000001,
                    transition: 'opacity ease-in-out 1s',
                }
                Object.assign(element.style, styles);
            } 
        });
    }
}