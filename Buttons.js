//Coded by Tharindu Liyanage 2022
// Edit This File 
const fs = require('fs')
const chalk = require('chalk')
// You can Change this Buttons
// 👈 You Can change this your choice
global.list = ('List Menu 🧬')
global.allmenu = ('Semua Menu 🎉')
global.script = ('Script 🌈')
global.owner = ('Pemilik 🦋')
global.deploy = ('Deploy 🐥')
global.project = ('Proyek 🦋')
global.donate = ('Donasi 🚀')
global.stop = ('Berhenti 🛑')
global.skip = ('Lewati ⏩')
global.thanks = ('*Sama sama 💙*')
// 👈 You Can change this your choice
global.nextimg = ('Next Image ➡️')
global.audio = ('🎶 Audio')
global.video = ('Video 📽')
global.yts = ('YTSEARCH 🌐')
global.play = ('Mulai 🍿')
// 👈 You Can change this your choice

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
