const moment = require('moment-timezone')
const jimp = require('jimp')
const { sizeFormatter } = require('human-readable')
const PhoneNumber = require('awesome-phonenumber') 


exports.tanggal = function tanggal(){
myMonths = ["1","2","3","4","5","6","7","8","9","10","11","12"];
myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
var tgl = new Date();
var day = tgl.getDate()
bulan = tgl.getMonth()
var thisDay = tgl.getDay(),
thisDay = myDays[thisDay];
var yy = tgl.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;
const tanggal = `${day}-${myMonths[bulan]}-${year}` 
return tanggal
}

exports.wib = function wib(){
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
return wib
}

exports.formatp = sizeFormatter({
    std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC'
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})

exports.wit = function wit(){
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
return wit
}

exports.wita = function wita(){
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
return wita
}

exports.ucapan = function ucapan(){
ucapan = "Selamat "+ moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
return ucapan
}

exports.bio = async function(hisoka){
try {
let bio_nya =  await hisoka.fetchStatus(m.sender)
bio = `${bio_nya.status}`
} catch (e){
	
bio = `-`
}
return bio
}

exports.getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}

