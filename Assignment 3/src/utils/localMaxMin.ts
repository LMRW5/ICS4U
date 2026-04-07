export function localMaxMin(a:number,b:number,c:number,d:number){
    const [a1,b1,c1] = derivative(a,b,c);
    const discriminant: number = b1**2 - 4*a1*c1;
    if (discriminant > 0) {
        const x1:number = (-b1 + Math.sqrt(discriminant)) / (2*a1);
        const x2: number = (-b1 - Math.sqrt(discriminant)) / (2*a1);
        const y1:number = evaluate(a,b,c,d,x1);
        const y2:number = evaluate(a,b,c,d,x2);
        if (y1 < y2){
            return [{x: x1, y: y1}, {x: x2, y: y2}];
        } else{
            return [{x: x1, y: y2}, {x: x2, y: y1}];
        }
    } else {
        return [{x: NaN, y: NaN}, {x: NaN, y: NaN}];
    }

}
function evaluate(a:number,b:number,c:number,d:number,x:number):number{
    return a*x**3 + b*x**2 + c*x + d;
}
function derivative(a:number,b:number,c:number):number[]{
    const a1 = 3*a;
    const b1 = 2*b;
    const c1 = c;
    return [a1,b1,c1];
}