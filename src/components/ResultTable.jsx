import React from 'react';
import './ResultTable.css';

const ResultTable = ({ prop1, prop2, op, isActive, isActive2 }) => {

    const andOperation = (P, Q) => P && Q;
    const orOperation = (P, Q) => P || Q;
    const conditionalOperation = (P, Q) => !P || Q;
    const biconditionalOperation = (P, Q) => P === Q;
    const negate = (value) => !value;

    const getResult = (P, Q) => {

        const finalP = isActive ? negate(P) : P;
        const finalQ = isActive2 ? negate(Q) : Q;

        switch (op) {
            case 'and':
                return andOperation(finalP, finalQ);
            case 'or':
                return orOperation(finalP, finalQ);
            case 'implies':
                return conditionalOperation(finalP, finalQ);
            case 'biconditional':
                return biconditionalOperation(finalP, finalQ);
            default:
                return false;
        }
    }

    const rows = [
        { A: true, B: true, result: getResult(true, true) },
        { A: true, B: false, result: getResult(true, false) },
        { A: false, B: true, result: getResult(false, true) },
        { A: false, B: false, result: getResult(false, false) },
    ];

    const formatLabel = (label, isNegated) => isNegated ? `~${label}` : label;

    const formatValue = (value, isNegated) => {
        const actualValue = isNegated ? negate(value) : value;

        return actualValue ? 'V' : 'F';
    }

    return (
        <div className='container'>
            <table>
                <caption><h2>Tabela verdade do {op}</h2></caption>
                <thead>
                    <tr>
                        <th>{formatLabel(prop1, isActive)}</th>
                        <th>{formatLabel(prop2, isActive2)}</th>
                        <th>{`${formatLabel(prop1, isActive)} ${op} ${formatLabel(prop2, isActive2)}`}</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td>{formatValue(row.A, isActive)}</td>
                            <td>{formatValue(row.B, isActive2)}</td>
                            <td>{row.result ? 'V' : 'F'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ResultTable;
