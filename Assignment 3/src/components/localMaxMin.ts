export function localMaxMin(a:number,b:number,c:number,d:number){
    const [a1,b1,c1] = derivative(a,b,c);
    const discriminant = b1**2 - 4*a1*c1;
    if (discriminant > 0) {
        const x1 = (-b1 + Math.sqrt(discriminant)) / (2*a1);
        const x2 = (-b1 - Math.sqrt(discriminant)) / (2*a1);
        return [{x: x1, y: evaluate(a,b,c,d,x1)}, {x: x2, y: evaluate(a,b,c,d,x2)}];
    } else if (discriminant === 0) {
        const x = -b1 / (2*a1);
        return [{x: x, y: evaluate(a,b,c,d,x)}, {x: x, y: evaluate(a,b,c,d,x)}];
    } else {
        return [{x: NaN, y: NaN}, {x: NaN, y: NaN}];
    }

}
function evaluate(a:number,b:number,c:number,d:number,x:number){
    return a*x**3 + b*x**2 + c*x + d;
}
function derivative(a:number,b:number,c:number){
    const a1 = 3*a;
    const b1 = 2*b;
    const c1 = c;
    return [a1,b1,c1];
}