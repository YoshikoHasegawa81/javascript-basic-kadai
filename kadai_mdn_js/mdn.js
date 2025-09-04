const executionDate = new Date();
const year = executionDate.getFullYear();
const month = executionDate.getMonth()+1;
const day = executionDate.getDate();

console.log(year + '年' + month + '月' + day + '日');
