export function cubicRoot(a:number,b:number,c:number,d:number) {
  let p = (3*a*c-b*b)/(3*a*a)
  let q = (27*a*a*d - 9*a*b*c + 2*b*b*b)/(27*a*a*a)
  let discriminant = (q/2)*(q/2) + (p/3)*(p/3)*(p/3)
  if (discriminant < 0){
    // Case A
  }
  else if (discriminant > 0){
    // Case B
  }
  else{
    if (p == q && p == 0){
      // Case C
    }
    else if (p != 0){
      // Case D
    }
  }
}

function trigonomatricMethod(a:number,b: number,c: number,d: number,p: number,q: number){
  const rval = new Array()
  const theta = 1
  let x1 = 2*Math.sqrt((-p)/3)*Math.cos(theta)-(b/3*a)
  let x2 = 2*Math.sqrt((-p)/3)*Math.cos(theta + 2*Math.PI/3)-(b/3*a)
  let x3 = 2*Math.sqrt((-p)/3)*Math.cos(theta + 4*Math.PI/3)-(b/3*a)
}