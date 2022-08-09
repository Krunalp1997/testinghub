function getDaysInMonth(month) {
  return new Date(month, 0).getDate();
}

const date = new Date();
const currentMonth = date.getMonth() + 1; 


const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);
console.log(daysInCurrentMonth);

// 👇️ Other Months
const daysInJanuary = getDaysInMonth(1);
console.log(daysInJanuary); // 👉️ 31

