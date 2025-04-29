const XLSX = require('xlsx');
const fs = require('fs');

const workbook = XLSX.readFile('./Food_Display_Table.xlsx')
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const jsonData = XLSX.utils.sheet_to_json(sheet);

fs.writeFileSync('./src/data/food.json', JSON.stringify(jsonData, null, 2));

