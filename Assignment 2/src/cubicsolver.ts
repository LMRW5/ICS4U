export function cubicRoot(a:number,b:number,c:number,d:number) {
  let p = (3*a*c-b*b)/(3*a*a)
  let q = (27*a*a*d - 9*a*b*c + 2*b*b*b)/(27*a*a*a)
  let discriminant = (q/2)*(q/2) + (p/3)*(p/3)*(p/3)
  let imaginary = Math.sqrt(-1)
  if (discriminant < 0){
    // Case A (3 real roots)
    trigonomatricMethod(a,b,c,d,p,q)
  }
  else if (discriminant > 0){
    // Case B (1 real root and 2 imaginary)
    cardanoMethod(a,b,c,d,p,q)
    let w1 = (-1 + imaginary*Math.sqrt(3))/2
    let w2 = (-1 - imaginary*Math.sqrt(3))/2


  }
  else{
    if (p == q && p == 0){
      // Case C (triple root)
      cardanoMethod(a,b,c,d,p,q)
    }
    else if (p != 0){
      // Case D (double root + single root)
      cardanoMethod(a,b,c,d,p,q)
      let x3 = Math.cbrt(q/2)-(b/(3*a))
    }
  }
}

function trigonomatricMethod(a:number,b: number,c: number,d: number,p: number,q: number){
  const rval = new Array()
  const theta = (1/3)*Math.acos(-q/(2*Math.sqrt(-(p/3)*(p/3)*(p/3))))
  rval[0] = 2*Math.sqrt((-p)/3)*Math.cos(theta)-(b/3*a)
  rval[1] = 2*Math.sqrt((-p)/3)*Math.cos(theta + 2*Math.PI/3)-(b/3*a)
  rval[2] = 2*Math.sqrt((-p)/3)*Math.cos(theta + 4*Math.PI/3)-(b/3*a)
  return rval
}

function cardanoMethod(a:number,b: number,c: number,d: number,p: number,q: number){
  return Math.cbrt((-q/2)+Math.sqrt((q/2)*(q/2)+(p/3)*(p/3)*(p/3))) + Math.cbrt((-q/2)-Math.sqrt((q/2)*(q/2)+(p/3)*(p/3)*(p/3))) - (b/(3*a))
}