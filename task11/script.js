var sites = [
  { 'name': 'Токио — Иокогама', 'country': 'Япония','population':37843  },
  { 'name': 'Джакарта', 'country': 'Индонезия','population':30539 },
  { 'name': 'Дели', 'country': 'Индия','population':24998 },
  { 'name': 'Пекин', 'country': 'КНР','population':21009 },
  { 'name': 'Нью-Йорк', 'country': 'США','population':20630 },
  { 'name': 'Шанхай', 'country': 'КНР','population':23416 },
  { 'name': 'Сеул — Инчхон', 'country': 'Республика Корея','population':23480 },
  { 'name': 'Карачи', 'country': 'Пакистан','population':22123 },
  { 'name': 'Манила', 'country': 'Филиппины','population':24123 }
];
function sortObj(object,fieldName,dir,count) {

return object.sort(function (a,b) {
	return (dir&&a[fieldName]<b[fieldName])||(!dir&&a[fieldName]>b[fieldName]);
}).slice(count,object.length-1);
}

console.log(sortObj(sites,'population',true,4));