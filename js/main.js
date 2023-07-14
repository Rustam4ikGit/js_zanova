let companies = [
    {
        name: "Rustam nosfrush",
        budget: 20000,
        tax: 12,
        expenses: [
            {
                title: "pockets",
                total: 3000,
            },
            {
                title: "rent",
                total: 5000,
            },
            {
                title: "transfer",
                total: 1000,
            },
        ]
    },
    {
        name: "Axror mashennik",
        budget: 100000,
        tax: 7,
        expenses: [
            {
                title: "idea",
                total: 10000,
            },
            {
                title: "rent",
                total: 14000,
            },
            {
                title: "car",
                total: 400,
            },
        ]
    },
    {
        name: "Xojimurod phones",
        budget: 70000,
        tax: 14,
        expenses: [
            {
                title: "goods",
                total: 30000,
            },
            {
                title: "rent",
                total: 2000,
            },
            {
                title: "tools",
                total: 1200,
            },
        ]
    },
    {
        name: "Ruxshod games",
        budget: 50000,
        tax: 14,
        expenses: [
            {
                title: "oborudovaniye",
                total: 13000,
            },
            {
                title: "rent",
                total: 800,
            },
            {
                title: "salary",
                total: 500,
            },
        ]
    },
]


// Посчитать месячцные расходы каждой компании и сохранить в новом ключе expensesPerMonth

let a = [];
let b = [];
let all = 0;
console.log(companies);
let arr = []
let objiyrashod
for (let item of companies) {
  let total = Math.round(
    item.expensesPerYear.reduce((a, b) => a + b.total, 0) / 12
  );
 
  let budget = Math.round(item.budget / 12);
  let tax_summ = (item.tax * budget) / 100;
  
  item.percent = (total * 100) / budget;

  objiyrashod = total + tax_summ;
  arr.push(objiyrashod)
  let asd = budget - objiyrashod;
  if (asd > 0) {
    a.push(item.company_name);
  } else b.push(item.company_name);
}

console.log(a, b);
console.log(all);