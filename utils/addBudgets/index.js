import { useState } from 'react';


const initialBudgets = [ // This could be moved to a separate data file and imported here
    {
        budgetTitle: "Coffee",
        budgetCategory: "Coffee",
        totalPrice: 50.45,
        totalBudget: 500.00
    },
    {
        budgetTitle: "Food",
        budgetCategory: "Food",
        totalPrice: 578.00,
        totalBudget: 1500.00
    },
    {
        budgetTitle: "Cheese",
        budgetCategory: "Cheese",
        totalPrice: 1570.00,
        totalBudget: 5000.00
    },
    {
        budgetTitle: "Wine",
        budgetCategory: "Wine",
        totalPrice: 4570.00,
        totalBudget: 5000.00
    },
];

export const useBudgets = () => {
    const [budgets, setBudgets] = useState(initialBudgets);

    const addBudget = (newBudget) => {
        setBudgets([...budgets, newBudget]);
    };

    return { budgets, addBudget };
};
