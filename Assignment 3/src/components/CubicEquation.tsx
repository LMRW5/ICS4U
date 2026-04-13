import type { equationProps } from "../utils/types";

export function CubicEquation({a, b, c, d}:equationProps) {
    let terms: string[] = [];

    function formatTerm(coef: number, variable: string) {
        if (coef === 0) return;

        const sign: string = coef > 0 ? "+" : "-";
        const abs: number = Math.abs(coef); 

        let term: string = "";

        if (terms.length === 0) {
            // first term doesn't need leading +
            if (coef < 0) term += "-";
        } else {
            term += ` ${sign} `;
        }

        if (abs !== 1 || variable === "") {
            term += abs;
        }

        term += variable;

        terms.push(term);
    }

    formatTerm(a, "x³");
    formatTerm(b, "x²");
    formatTerm(c, "x");
    formatTerm(d, "");

    return <>
        <h2 className="text-xl font-bold text-black-500 mt-8 text-center mt-[10px]">Solving For: {terms.join("")}</h2>
    </>;
}