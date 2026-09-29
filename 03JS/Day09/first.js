const d = new Date();// it can give 1/1/1970 s date deta h pass value in miliseccond 
console.log(d);
console.log(d.toDateString());
console.log(d.toString());
console.log(d.toISOString());
console.log(typeof d);
console.log(d.getDate());
console.log(d.getDay()); // 0 for sun 
console.log(d.getMonth()); // 0 for jan
console.log(d.getMilliseconds());  // why milisecond beacuse it give which is first or say less timestamp
console.log(d.getTime());

const now = Date.now();
console.log(now);

const de = new Date("2026-09-14");// if pass in number (2024,5,28) than 0 based if pass string same 
console.log(de);
console.log(de.toDateString());

const Date1 = new Date();
const Date2 = new Date("2026-09-15");
console.log(Date2-Date1); // shows in milisecond if we get in days /1000*60*60*24  for hour(1000*60*60)%24
const Date3 =Date2-Date1;
const Days = Math.floor(Date3/(1000*60*60*24));
const Hours = Math.floor(Date3/(1000*60*60)%24);
const Minute = Math.floor(Date3/(1000*60)%60);
const second = Math.floor(Date3/(1000)%60);
console.log(`days:${Days} hour:${Hours} minute:${Minute} second${second}`);