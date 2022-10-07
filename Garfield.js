// Hi  I m
// Tharindu Liyanage 
// I am 16 years old developer...
// From Sri Lanka
// I am a Learning.
// Not more..
// Also I am Student
// Follow My Facebook - https://www.facebook.com/TharinduLiyanages
var _0x7b9d=["\x2E\x2F\x44\x61\x74\x61\x46\x69\x6C\x65","\x2E\x2F\x42\x75\x74\x74\x6F\x6E\x73","\x67\x61\x72\x66\x69\x65\x6C\x64\x2D\x62\x6F\x74\x2D\x64\x62","\x66\x73","\x75\x74\x69\x6C","\x63\x68\x61\x6C\x6B","\x63\x68\x69\x6C\x64\x5F\x70\x72\x6F\x63\x65\x73\x73","\x61\x78\x69\x6F\x73","\x70\x61\x74\x68","\x6F\x73","\x6D\x75\x6D\x61\x6B\x65\x72","\x6E\x6F\x64\x65\x2D\x66\x65\x74\x63\x68","\x67\x6F\x6F\x67\x6C\x65\x2D\x69\x74","\x6B\x69\x74\x73\x75\x6E\x65\x2D\x61\x70\x69","\x78\x66\x61\x72\x72\x2D\x61\x70\x69","\x68\x78\x7A\x2D\x61\x70\x69","\x6D\x6F\x6D\x65\x6E\x74\x2D\x74\x69\x6D\x65\x7A\x6F\x6E\x65","\x6A\x73\x64\x6F\x6D","\x70\x65\x72\x66\x6F\x72\x6D\x61\x6E\x63\x65\x2D\x6E\x6F\x77","\x70\x65\x72\x66\x5F\x68\x6F\x6F\x6B\x73","\x2E\x2F\x6C\x69\x62\x2F\x6D\x65\x64\x69\x61\x66\x69\x72\x65\x2E\x6A\x73","\x73\x63\x72\x61\x70\x65\x2D\x70\x72\x69\x6D\x62\x6F\x6E","\x2E\x2F\x6C\x69\x62\x2F\x6D\x79\x66\x75\x6E\x63","\x68\x74\x74\x70\x73","\x67\x6F\x6F\x67\x6C\x65\x2D\x74\x72\x61\x6E\x73\x6C\x61\x74\x65\x2D\x74\x74\x73"];require(_0x7b9d[0]);require(_0x7b9d[1]);const {BufferJSON,WA_DEFAULT_EPHEMERAL,generateWAMessageFromContent,proto,generateWAMessageContent,generateWAMessage,prepareWAMessageMedia,areJidsSameUser,getContentType}=require(_0x7b9d[2]);const fs=require(_0x7b9d[3]);const util=require(_0x7b9d[4]);const chalk=require(_0x7b9d[5]);const {exec,spawn,execSync}=require(_0x7b9d[6]);const axios=require(_0x7b9d[7]);const path=require(_0x7b9d[8]);const os=require(_0x7b9d[9]);const maker=require(_0x7b9d[10]);const fetch=require(_0x7b9d[11]);const google=require(_0x7b9d[12]);const mel=require(_0x7b9d[13]);const xa=require(_0x7b9d[14]);const hx=require(_0x7b9d[15]);const moment=require(_0x7b9d[16]);const {JSDOM}=require(_0x7b9d[17]);const speed=require(_0x7b9d[18]);const {performance}=require(_0x7b9d[19]);const {mediafireDl}=require(_0x7b9d[20]);const {Primbon}=require(_0x7b9d[21]);const primbon= new Primbon();const {smsg,formatp,tanggal,formatDate,getTime,isUrl,sleep,clockString,runtime,fetchJson,getBuffer,jsonformat,format,parseMention,getRandom}=require(_0x7b9d[22]);const xmodules=require(_0x7b9d[14]);const https=require(_0x7b9d[23]);const googleTTS=require(_0x7b9d[24])

   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐼','🦋','🌐']   

	// UCAPAN LEMBUT
var _0xa0bb=["\x48\x48\x3A\x6D\x6D\x3A\x73\x73","\x66\x6F\x72\x6D\x61\x74","\x41\x73\x69\x61\x2F\x43\x6F\x6C\x6F\x6D\x62\x6F","\x74\x7A","\x32\x33\x3A\x35\x39\x3A\x30\x30","\x47\x6F\x6F\x64\x20\x4E\x69\x67\x68\x74\x20\uD83C\uDF12","\x31\x39\x3A\x30\x30\x3A\x30\x30","\x47\x6F\x6F\x64\x20\x6E\x69\x67\x68\x74\uD83C\uDF19","\x31\x38\x3A\x30\x30\x3A\x30\x30","\x47\x6F\x6F\x64\x20\x61\x66\x74\x65\x72\x6E\x6F\x6F\x6E\x20\uD83C\uDF05","\x31\x35\x3A\x30\x30\x3A\x30\x30","\x47\x6F\x6F\x64\x20\x61\x66\x74\x65\x72\x6E\x6F\x6F\x6E\x20\uD83C\uDF1E","\x31\x30\x3A\x30\x30\x3A\x30\x30","\x47\x6F\x6F\x64\x20\x6D\x6F\x72\x6E\x69\x6E\x67\x20\uD83C\uDF04","\x30\x35\x3A\x30\x30\x3A\x30\x30","\x47\x6F\x6F\x64\x20\x6D\x6F\x72\x6E\x69\x6E\x67\x20\uD83C\uDF05","\x2A\x41\x72\x65\x20\x79\x6F\x75\x20\x63\x72\x61\x7A\x79\x20\u2615\x2A","\x31\x32\x3A\x30\x30\x3A\x30\x30","\x2A\x47\x6F\x6F\x64\x20\x6D\x6F\x72\x6E\x69\x6E\x67\x20\uD83C\uDF3B\x2A","\x34\x3A\x30\x30\x3A\x30\x30","\x2A\x47\x6F\x6F\x64\x20\x41\x66\x74\x65\x72\x6E\x6F\x6F\x6E\x20\u2600\uFE0F\x2A","\x2A\x47\x6F\x6F\x64\x20\x65\x76\x65\x6E\x69\x6E\x67\x20\uD83C\uDF3B\x2A","\x2A\x47\x6F\x6F\x64\x20\x4E\x69\x67\x68\x74\x20\uD83C\uDF15\x2A","\x2A\x41\x72\x65\x20\x59\x6F\x75\x20\x43\x72\x61\x7A\x79\x20\u2615\x2A"];const time2=moment()[_0xa0bb[3]](_0xa0bb[2])[_0xa0bb[1]](_0xa0bb[0]);if(time2< _0xa0bb[4]){var ucapannya2=`${_0xa0bb[5]}`};if(time2< _0xa0bb[6]){var ucapannya2=`${_0xa0bb[7]}`};if(time2< _0xa0bb[8]){var ucapannya2=`${_0xa0bb[9]}`};if(time2< _0xa0bb[10]){var ucapannya2=`${_0xa0bb[11]}`};if(time2< _0xa0bb[12]){var ucapannya2=`${_0xa0bb[13]}`};if(time2< _0xa0bb[14]){var ucapannya2=`${_0xa0bb[15]}`};const time3=moment()[_0xa0bb[3]](_0xa0bb[2])[_0xa0bb[1]](_0xa0bb[0]);if(time3< _0xa0bb[4]){var ucapannya3=`${_0xa0bb[16]}`};if(time3< _0xa0bb[6]){var ucapannya3=`${_0xa0bb[16]}`};if(time3< _0xa0bb[8]){var ucapannya3=`${_0xa0bb[16]}`};if(time3< _0xa0bb[10]){var ucapannya3=`${_0xa0bb[16]}`};if(time3< _0xa0bb[17]){var ucapannya3=`${_0xa0bb[18]}`};if(time3< _0xa0bb[14]){var ucapannya3=`${_0xa0bb[18]}`};const time4=moment()[_0xa0bb[3]](_0xa0bb[2])[_0xa0bb[1]](_0xa0bb[0]);if(time4< _0xa0bb[4]){var ucapannya4=`${_0xa0bb[16]}`};if(time4< _0xa0bb[6]){var ucapannya4=`${_0xa0bb[16]}`};if(time4< _0xa0bb[19]){var ucapannya4=`${_0xa0bb[20]}`};if(time4< _0xa0bb[17]){var ucapannya4=`${_0xa0bb[16]}`};if(time4< _0xa0bb[14]){var ucapannya4=`${_0xa0bb[16]}`};const time5=moment()[_0xa0bb[3]](_0xa0bb[2])[_0xa0bb[1]](_0xa0bb[0]);if(time5< _0xa0bb[4]){var ucapannya5=`${_0xa0bb[16]}`};if(time5< _0xa0bb[6]){var ucapannya5=`${_0xa0bb[21]}`};if(time5< _0xa0bb[19]){var ucapannya5=`${_0xa0bb[16]}`};if(time5< _0xa0bb[17]){var ucapannya5=`${_0xa0bb[16]}`};if(time5< _0xa0bb[14]){var ucapannya5=`${_0xa0bb[16]}`};const time6=moment()[_0xa0bb[3]](_0xa0bb[2])[_0xa0bb[1]](_0xa0bb[0]);if(time6< _0xa0bb[4]){var ucapannya6=`${_0xa0bb[22]}`};if(time6< _0xa0bb[6]){var ucapannya6=`${_0xa0bb[23]}`};if(time6< _0xa0bb[19]){var ucapannya6=`${_0xa0bb[16]}`};if(time6< _0xa0bb[17]){var ucapannya6=`${_0xa0bb[16]}`};if(time6< _0xa0bb[14]){var ucapannya6=`${_0xa0bb[16]}`}

//rpg database\\
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

//Database\\
let setik = JSON.parse(fs.readFileSync('./database/setik.json'));
let vien = JSON.parse(fs.readFileSync('./database/vien.json'));
let imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
let videox = JSON.parse(fs.readFileSync('./database/video.json'))

//read database\\
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = GarfieldNeural = async (GarfieldNeural, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await GarfieldNeural.decodeJid(GarfieldNeural.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)

        //group\\
        const groupMetadata = m.isGroup ? await GarfieldNeural.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	    
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	
	//group target \\
var _0xb9a5=["\x63\x68\x61\x74","\x20","\x62\x6F\x74\x6E\x61\x6D\x65","","\uD835\uDDAD\u039E\uD835\uDDB4\uD835\uDDB1\u039B\uD835\uDDAB\x20\u039B\uFF29","\x50\x48\x4F\x54\x4F","\x2E\x2F\x54\x65\x6D\x70\x43\x6C\x6F\x75\x64\x2F\x6C\x6F\x67\x6F\x2E\x70\x6E\x67","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x68\x74\x74\x70\x3A\x2F\x2F\x57\x61\x2E\x6D\x65\x2F\x2F","\x6F\x77\x6E\x65\x72\x6E\x6F\x6D\x65\x72","\x3F\x74\x65\x78\x74\x3D\x2A\x48\x65\x6C\x6C\x6F\uD83E\uDD8B\x2A","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];const reply=(_0x1ffcx2)=>{GarfieldNeural[_0xb9a5[11]](m[_0xb9a5[0]],{text:_0x1ffcx2,contextInfo:{"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xb9a5[1]}${global[_0xb9a5[2]]}${_0xb9a5[3]}`,"\x62\x6F\x64\x79":`${_0xb9a5[4]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xb9a5[5],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xb9a5[3]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xb9a5[7]](`${_0xb9a5[6]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xb9a5[8]}${global[_0xb9a5[9]]}${_0xb9a5[10]}`}}},{quoted:m})};const replay=(_0x1ffcx2)=>{GarfieldNeural[_0xb9a5[11]](m[_0xb9a5[0]],{text:_0x1ffcx2,contextInfo:{"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xb9a5[1]}${global[_0xb9a5[2]]}${_0xb9a5[3]}`,"\x62\x6F\x64\x79":`${_0xb9a5[4]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xb9a5[5],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xb9a5[3]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xb9a5[7]](`${_0xb9a5[6]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xb9a5[8]}${global[_0xb9a5[9]]}${_0xb9a5[10]}`}}},{quoted:m})}
	
        //Public & Self\\
        if (!GarfieldNeural.public) {
            if (!m.key.fromMe) return
        }

        //Push Message To Console && Auto Read\\
       //Remove from update
	
	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	//auto set bio\\
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await GarfieldNeural.setStatus(`${GarfieldNeural.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	
	  //antilink\\
        if (db.data.chats[m.chat].antilink) { 
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`「 ANTI LINK 」\n\nYou have been detected sending a group link, sorry you will be kicked !`)
        if (!isBotAdmins) return reply(`I Am Not An Admin, How Could I Kick Somebody Who Send Link 😒`)
        let gclink = (`https://chat.whatsapp.com/`+await GarfieldNeural.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Sent This Group Link❤️`)
        if (isAdmins) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are An Admin Of The Group❤️`)
        if (isCreator) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are My Owner Hahahahah🤣😘, You Think I Will Betray You Huh}`)
        GarfieldNeural.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

        //auto reply 
        for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./TempCloud/sticker/${anji}.webp`)
					GarfieldNeural.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./TempCloud/vn/${anju}.mp3`)
					GarfieldNeural.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./TempCloud/image/${anjh}.jpg`)
					GarfieldNeural.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
					for (let anjh of videox){
				if (budy === anjh){
					result = fs.readFileSync(`./TempCloud/vid/${anjh}.mp4`)
					GarfieldNeural.sendMessage(m.chat, { video: result }, { quoted: m })
					}
				  }

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
        
        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: GarfieldNeural.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, GarfieldNeural.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        GarfieldNeural.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer The Following Questions :\n${room.soal}\n\n\nThere Is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            GarfieldNeural.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GarfieldNeural.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GarfieldNeural.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GarfieldNeural.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `🎮 Guess The Blank 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant To Play Again? Press The Button Below`, GarfieldNeural.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GarfieldNeural.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GarfieldNeural.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess riddle', buttonText: { displayText: 'Guess The Riddle' }, type: 1 }], `🎮 Guess The Riddle 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GarfieldNeural.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
        
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game Has Ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Typed *surrender* to surrender and admited defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await GarfieldNeural.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await GarfieldNeural.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nope(k.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nope(k.)?yes)/i.test(m.text)) {
	    GarfieldNeural.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} Refuse Suit, Suit Canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    GarfieldNeural.sendText(m.chat, `Suit Has Been Sent To Chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Please Choose A Suit In The Respective Chat"
Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) GarfieldNeural.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) GarfieldNeural.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) GarfieldNeural.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    GarfieldNeural.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih2) GarfieldNeural.sendText(roof.p2, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih) GarfieldNeural.sendText(roof.p, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    GarfieldNeural.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in AFK/Offline ${reason ? 'dengan alasan ' + reason : 'no reason'}
It's been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`
You Came Back Online From AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
switch(command){
        case 'inventori': case 'inventory': case 'profile':{
if (q.includes('--help')) return reply(examkosong) 
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     
     var GarfieldNeural = await getBuffer(global.thumb)
     let teksehmazeh = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n`
     teksehmazeh += `*❤️Your Blood* : ${getDarah(m.sender)}\n`
     teksehmazeh += `*◻️️Your Iron* : ${getBesi(m.sender)}\n`
     teksehmazeh += `*🌟Your Gold* : ${getEmas(m.sender)}\n`
     teksehmazeh += `*💎Your Emerald* : ${getEmerald(m.sender)}\n`
     teksehmazeh += `*⏺️Your Limit* : ${getLimit(m.sender)}\n`
     teksehmazeh += `*🧪Your Potion* : ${getPotion(m.sender)}\n\n`
     teksehmazeh += `_[ 🐺HUNT RESULT🐺 ]_\n`
     teksehmazeh += `*🐟Fish* : ${getIkan(m.sender)}\n`
     teksehmazeh += `*🐔Chicken* : ${getAyam(m.sender)}\n`
     teksehmazeh += `*🐇Rabbit* : ${getKelinci(m.sender)}\n`
     teksehmazeh += `*🐑Sheep* : ${getDomba(m.sender)}\n`
     teksehmazeh += `*🐄Cow* : ${getSapi(m.sender)}\n`
     teksehmazeh += `*🐘Elephant* : ${getGajah(m.sender)}\n\n`
     teksehmazeh += `_*${pushname}*_`
     await GarfieldNeural.send5ButImg(from, `` + '' + teksehmazeh, `© ${footer}`, GarfieldNeural, [{"urlButton": {"displayText": `${global.fbt}`,"url": `${myweb}`}}])
  }
  break
        case 'userlimit': 
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    reply(txt)       
  }
 break
 case 'leaderboard':
{      
   let txt = `「 *LEADERBOARD* 」\n\n`
     for (let i of _buruan){
     txt += `➸ *ID :* ${i.id}\n`
     txt += `*🐟Fish* : ${i.ikan}\n`
     txt += `*🐔Chicken* : ${i.ayam}\n`
     txt += `*🐇Rabbit* : ${i.kelinci}\n`
     txt += `*🐑Sheep* : ${i.domba}\n`
     txt += `*🐄Cow* : ${i.sapi}\n`
     txt += `*🐘Elephant* : ${i.gajah}\n\n`
     }
    reply(txt)       
  }
 break
case 'mining': case 'mine':{
if (q.includes('--help')) return reply(examkosong) 
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return reply(`You're Tired!, Try To Heal Using Potions`) 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `[ MINING RESULT ]\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Mine Again⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/tambang.jpg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     GarfieldNeural.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Started Mining🎣`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break  
  //transaction\\
 case 'beli': case 'buy':{
if (q.includes('--help')) return reply(examkosong) 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return reply(`What Do You Want To Buy?\n\n1.potion\n2.baitfood\n3.limit\n\nExample: ${prefix + command} baitfood`)
 var anu = args[1]
  if (args[0] === 'potion'){
  let noh = 100000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
 if (isMonay < noh) return reply('Your Remaining Money Is Not Sufficient For This Purchase')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Potion* : ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'baitfood'){
  let noh = 5000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
 if (isMonay < noh) return reply('Your Remaining Money Is Not Sufficient For This Purchase')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Bait Food* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} limit 2\n 1 Limit = 35000 Money`)
 if (isMonay < noh) return reply('Your Remaining Money Is Not Sufficient For This Purchase')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Limit* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { reply("Incorrect Format!") }
 }
 break
 case 'sel': case 'jual':{
 if (!q) return  reply(`What Do You Want To Sell??\nExample : ${prefix + command} fish 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'fish'){
 if (isIkan < anu) return reply(`You Don't Have Enough Fish(es) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Fish(es)* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'chicken'){
 if (isAyam < anu) return reply(`You Don't Have Enough Chicken(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Chicken* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'rabbit'){
 if (isKelinci < anu) return reply(`You Don't Have Enough Rabbit(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Rabbit(s)* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sheep'){
 if (isDomba < anu) return reply(`You Don't Have Enough Sheep(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Sheep(s)* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'cow'){
 if (isSapi < anu) return reply(`You Don't Have Enough Cow(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Cow(s)* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < anu) return reply(`You Don't Have Enough Elephant(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Elephant(s)* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < anu) return reply(`You Don't Have Enough Iron(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Iron(s)* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'gold'){
 if (isEmas < anu) return reply(`You Don't Have Enough Gold(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Money* : ${getMonay(m.sender)}\n*Your Remaining Gold(s)* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return reply(`You Don't Have Enough Emerald(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*You Don't Have Enough Emerald(s) For This Transaction* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { reply("Incorrect Format!") }

 }
 break

 case 'heal':{
if (q.includes('--help')) return reply(examkosong) 
 if (!isCekDarah < 1) return reply('You Can Only Heal When Your Blood Is 0')
 if (isCekDarah > 100) return reply('Your Blood Is Full')
 if (isPotion < 1) return reply(`You Don't Have A Potion, Try Buying It This Way #buypotion _amount_`) 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 reply('Success! Your Bood Is Full')
 }
 break
 case 'hunt': case 'hunting': {
if (q.includes('--help')) return reply(examkosong) 
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return reply('Your Blood Is Gone, Try To Heal Using Potions') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["Pierced by a thorn while hunting","Slipped into the abyss while hunting","Scratched by a wild animal","Not careful","Entangled in roots","Fall while hunting"]
  let location = ["Jungle","Amazon forest","Tropical forest","Meadow","African forest","Mountains"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Jungle') {
    var image = './storage/image/rimba.jpg'
   } else
 if (lokasinya === 'Amazon forest') {
    var image =  './storage/image/amazon.jpg'
   } else
 if (lokasinya === 'Tropical forest') {
    var image = './storage/image/tropis.jpg'
   } else
 if (lokasinya === 'Meadow') {
    var image = './storage/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'African forest') {
    var image = './storage/image/afrika.jpg'
   } else
 if (lokasinya === 'Mountains') {
   var image = './storage/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `_[ HUNT RESULT ]_\n`
     teksehmazeh += `*🐟Fish* : ${ikanmu}\n`
     teksehmazeh += `*🐔Chicken* : ${ayam}\n`
     teksehmazeh += `*🐇Rabbit* : ${kelinci}\n`
     teksehmazeh += `*🐑Sheep* : ${domba}\n`
     teksehmazeh += `*🐄Cow* : ${sapi}\n`
     teksehmazeh += `*🐘Elephant* : ${gajah}\n\n`
     teksehmazeh += `_[ INFO ]_\n`
     teksehmazeh += `*Location* : ${lokasinya}\n`
     teksehmazeh += `*Wounded* : ${lukanya}, blood - 10\n`
     teksehmazeh += `*Remaining blood* : ${getDarah(m.sender)}\n`
    let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Hunt Again️🏹'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: teksehmazeh,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     GarfieldNeural.sendMessage(from, buttonMessage, { quoted: m })      
  }, 5000)  
 setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Started Hunting In ${lokasinya}`)     
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Has Gone Afk/Offline${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replay(`You Are Still In The Game`)
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner found!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if (room.x !== room.o) await GarfieldNeural.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await GarfieldNeural.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Waiting For Partner' + (text ? ` Type The Command Below ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            GarfieldNeural.sendText(m.chat, `Successfully Deleted The TicTacToe Session`, m)
            } else if (!this.game) {
            reply(`TicTacToe🎮 Session Does Not Exist`)
            } else reply('?')
            } catch (e) {
            reply('Damaged')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) return replay(`Complete Your Previous Suit`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Can't Play With Myself !`)
            if (!m.mentionedJid[0]) return reply(`_Who Do You Want To Challenge?_\nTag The Person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0])))  reply(`The Person You Are Challenging Is Playing Suit With Someone Else :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} To Play Suit

Please @${m.mentionedJid[0].split`@`[0]} To Type Accept/Reject`
            this.suit[id] = {
            chat: await GarfieldNeural.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) GarfieldNeural.sendText(m.chat, `_Suit Time Out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'chat': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!q) return replay(`Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete`)
                if (args[0] === 'mute') {
                    GarfieldNeural.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    GarfieldNeural.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    GarfieldNeural.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    GarfieldNeural.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    GarfieldNeural.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    GarfieldNeural.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    GarfieldNeural.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    reply('There Are Still Unfinished Sessions!')
                    reply(false)
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Answer The Following Questions :*\n${random.soal}\n\nThere Is *${random.jawaban.length}* Answer ${random.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await GarfieldNeural.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) return replay(`Send/Reply Text With Caption ${prefix + command}`)
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'guess': {
                if (!text) return replay(`Example : ${prefix + command} song\n\nOption : \n1. music\n2. picture (indo)\n3. word\n4. sentence\n5. lyrics (indo)\n6. blank (indo)`)
                if (args[0] === "song") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions`)
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await GarfieldNeural.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    GarfieldNeural.sendText(m.chat, `What Is The Name Of This Song?\n\nArtist : ${result.artist}\nTime : 60 seconds`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `Time Has Run Out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant To Play? Press The Button Below`, GarfieldNeural.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'picture') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    GarfieldNeural.sendImage(m.chat, result.img, `Please Answer The Questions Above\n\nDescription : ${result.deskripsi}\nTime : 60 seconds`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `Time Has Run Out\nAnswer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant To Play Again? PressThe Button Below`, GarfieldNeural.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'word') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/xmodules/fungames/main/GuessTheWord.js')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    GarfieldNeural.sendText(m.chat, `Please Answer The Following Question\n\n${result.soal}\nTime : 60 seconds`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `Time Out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\nWant To Play Again? PressThe Button Below`, GarfieldNeural.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'sentence') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/xmodules/fungames/main/GuessTheSentence.js')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    GarfieldNeural.sendText(m.chat, `Please Answer The Following Question\n\n${result.soal}\nTime : 60 seconds`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `Time Out\nAnswer:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nWant To Play Again? PressThe Button Below`, GarfieldNeural.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lyrics') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    GarfieldNeural.sendText(m.chat, `These Are The Lyrics Of Which Song? : *${result.soal}*?\nTime : 60 seconds`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `Time Out\nAnswer:  ${tebaklirik[m.sender.split('@')[0]]}\n\Want To Play Again? PressThe Button Below`, GarfieldNeural.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'blank') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    GarfieldNeural.sendText(m.chat, `*Answer The Following Questions :*\n${result.soal}*\nTime : 60 seconds`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `Time Out\nAnswer:  ${caklontong[m.sender.split('@')[0]]}\nDescription : ${caklontong_desk[m.sender.split('@')[0]]}\n\Want To Play Again? PressThe Button Below`, GarfieldNeural.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
		
	case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                GarfieldNeural.sendMessage(m.chat, reactionMessage)
            }
            break
		
		
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                let { genMath, modes } = require('./lib/math')
                if (!text) return replay(`Mode: ${Object.keys(modes).join(' | ')}\nFor Examples: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                GarfieldNeural.sendText(m.chat, `*What Is The Result Of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'mysoulmate': {
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Your Match Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, jawab, GarfieldNeural.user.name, m, {mentions: ments})
            }
            break
            case 'couple': {
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
ඕක සතියයි 😼`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, jawab, GarfieldNeural.user.name, m, {mentions: menst})
            }
            break
            case 'is':
				if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
					const apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
					const kah = apa[Math.floor(Math.random() * apa.length)]
GarfieldNeural.sendMessage(from, { text: `Question : Is ${q}\nAnswer : ${kah}` }, { quoted: m })

					break
					            case 'what':
				if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
					const lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
					const kahk = lel[Math.floor(Math.random() * lel.length)]
GarfieldNeural.sendMessage(from, { text: `Question : What ${q}\nAnswer : ${kahk}` }, { quoted: m })

					break
case 'can':
				if (!text) return replay(`Use Text, Example : ${prefix + command} you fuck her lol `)
					const bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
GarfieldNeural.sendMessage(from, { text: `Question : Can ${q}\nAnswer : ${ga}` }, { quoted: m })

					break
case 'how':
				if (!text) return replay(`Use Text, Example : ${prefix + command} is my face`)
					const gimana = [`It's Okay`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah`,`Ohhh I See:(`,`The Patient, Boss:(`,`How Are You?`]
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
GarfieldNeural.sendMessage(from, { text: `Question : ${q}\nAnswer : How ${ya}` }, { quoted: m })

					break
case 'rate':
				if (!text) return replay(`Use Text, Example : ${prefix + command} My Dp`)
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
GarfieldNeural.sendMessage(from, { text: `Rate : ${q}\nAnswer : *${te}%*` }, { quoted: m })

					break
  case 'handsomecheck':
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Zenoi`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
GarfieldNeural.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })

					break
case 'beautifulcheck':
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Zenoi`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
GarfieldNeural.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })

					break
case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Zenoi`)
					const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
GarfieldNeural.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${sange}%*` }, { quoted: m })
					break
					case 'me':
case 'who':
function _0x1b5a(_0x1db68f,_0x1bfd76){const _0x22f904=_0x22f9();return _0x1b5a=function(_0x1b5a61,_0x3f0505){_0x1b5a61=_0x1b5a61-0x114;let _0x1c5191=_0x22f904[_0x1b5a61];return _0x1c5191;},_0x1b5a(_0x1db68f,_0x1bfd76);}const _0x49a3b7=_0x1b5a;function _0x22f9(){const _0x17a73a=['7633976BntriW','*ලිංගික\x20හැසිරීමකදි\x20හෝ\x20මුත්‍රා\x20කිරීමේදී\x20වේදනාවට\x20පත්වන්නෙක්\x20🐖*','11807892mOtUAz','*ගොනෝරියා\x20ආසාදිතයෙක්\x20💧*','*මම\x20වගේ\x20program\x20එකක්\x20👽*','*තෙල්\x20නැවක\x20අයිතිකාරයෙක්\x20🐱*','floor','*නාකි\x20මයිනගෙ\x20ලඟම\x20ඥාතියෙක්\x20🐧*','length','*HIV\x20ආසාදිතයෙක්\x20🐮*','*ලිංගික\x20බෙලහීනතාවයෙන්\x20පෙලෙන්නෙක්\x20🦒*','*පිස්සෙක\x20🌼*','422744FeiuKu','451374hyVLnX','*බෝම්බයක්\x20💣*','86943yXLMvz','*Zombie\x20කෙනෙක්\x20\x20🧟‍♂️*','376110EqTkXC','*පුරුෂ\x20යට\x20ඇඳුම්\x20හොරෙක්\x20🩳','*ට්‍රයිකොමෝනියාසිස්\x20ආසාදිතයෙක්(RIP)\x20🏳️*','*ලිංගික\x20ව්‍යවසායකයෙක්\x20💧*','*මුට\x20රිලව\x20කිව්වත්\x20එකයි\x20රිලවට\x20මුගෙ\x20නම\x20කිව්වත්\x20එකයි\x20🐒*','\x20ඔයා*\x20','24emniPA','7ONtZdg','188890hxwwIj','*වැඩිපුර\x20පිහිටා\x20ඇති\x20ලිංගික\x20අවයව\x20නිසා\x20මානසික\x20පීඩනයෙක්\x20පෙලෙන්නෙක්\x20🐎*','*සමලිංගිකයෙක්\x20🏳️‍🌈*','sendMessage','*පිරිමි\x20ගණිකාවක්\x20👤*','*සිෆිලිස්\x20ආසාදිතයෙක්\x20(RIP)\x20💐*','*බෝ\x20ගහක්\x20🦢*','*පෙට්‍රල්\x20ජාවාරම්කාරයෙක්\x20🐖*','random','*හොරෙක්\x20🎗️*','*මහබැංකුව\x20හොරාකන්න\x20රනිල්ට\x20උදව්\x20කරපු\x20කෙනා\x20🐗*','*HIV\x20ආසාදිතයෙක්\x20💦*','*මැරෙන්න\x20හිතුනට\x20කවදාවත්\x20මැරෙන්න\x20එපා\x20👽*'];_0x22f9=function(){return _0x17a73a;};return _0x22f9();}(function(_0x7fbb21,_0x2230cf){const _0x4a28a5=_0x1b5a,_0x1c25b7=_0x7fbb21();while(!![]){try{const _0x3b7b74=parseInt(_0x4a28a5(0x115))/0x1+parseInt(_0x4a28a5(0x138))/0x2+-parseInt(_0x4a28a5(0x139))/0x3+parseInt(_0x4a28a5(0x11d))/0x4*(parseInt(_0x4a28a5(0x11f))/0x5)+parseInt(_0x4a28a5(0x117))/0x6*(-parseInt(_0x4a28a5(0x11e))/0x7)+-parseInt(_0x4a28a5(0x12c))/0x8+parseInt(_0x4a28a5(0x12e))/0x9;if(_0x3b7b74===_0x2230cf)break;else _0x1c25b7['push'](_0x1c25b7['shift']());}catch(_0x545f3e){_0x1c25b7['push'](_0x1c25b7['shift']());}}}(_0x22f9,0xa378d));if(!text)return replay('Tag\x20Someone,\x20Example\x20:\x20'+(prefix+command));const sarcasm=new Array();sarcasm[0x0]=_0x49a3b7(0x12d),sarcasm[0x1]=_0x49a3b7(0x135),sarcasm[0x2]='*ලිංගික\x20ව්‍යවසායකයෙක්*',sarcasm[0x3]=_0x49a3b7(0x137),sarcasm[0x4]='*අර්බුදයට\x20වගකිය\x20යුත්තා\x20👴🏻*',sarcasm[0x5]=_0x49a3b7(0x136),sarcasm[0x6]=_0x49a3b7(0x121),sarcasm[0x6]='*කුක්කු\x20පෙරේතයෙක්\x20(කිරි\x20පිටි)🐽*',sarcasm[0x7]=_0x49a3b7(0x123),sarcasm[0x8]=_0x49a3b7(0x133),sarcasm[0xa]=_0x49a3b7(0x128),sarcasm[0xb]=_0x49a3b7(0x11b),sarcasm[0xc]=_0x49a3b7(0x129),sarcasm[0xd]=_0x49a3b7(0x114),sarcasm[0xe]='*ලිංගික\x20ව්‍යවසායකයෙක්\x20💧*',sarcasm[0xf]=_0x49a3b7(0x126),sarcasm[0x10]='*බැසිල්ගෙ\x20කපුට\x20නාවන\x20කෙනා\x20🦨*',sarcasm[0x11]=_0x49a3b7(0x131),sarcasm[0x14]=_0x49a3b7(0x125),sarcasm[0x15]=_0x49a3b7(0x11a),sarcasm[0x16]='*පෙට්‍රල්\x20ජාවාරම්කාරයෙක්\x20🐖*',sarcasm[0x17]=_0x49a3b7(0x120),sarcasm[0x18]=_0x49a3b7(0x12a),sarcasm[0x19]=_0x49a3b7(0x12f),sarcasm[0x1a]=_0x49a3b7(0x124),sarcasm[0x1b]=_0x49a3b7(0x119),sarcasm[0x1c]=_0x49a3b7(0x118),sarcasm[0x1d]=_0x49a3b7(0x116),sarcasm[0x1e]=_0x49a3b7(0x130),sarcasm[0x1f]=_0x49a3b7(0x12b);const refi=sarcasm[Math[_0x49a3b7(0x132)](Math[_0x49a3b7(0x127)]()*sarcasm[_0x49a3b7(0x134)])];GarfieldNeural[_0x49a3b7(0x122)](from,{'text':'*'+pushname+_0x49a3b7(0x11c)+refi},{'quoted':m});
								break

					case 'charactercheck':
					if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Zenoi`)
					const xeony =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = xeony[Math.floor(Math.random() * xeony.length)]
					GarfieldNeural.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
      case 'stupid':
      case 'හුත්තා':
      case 'මෝඩ':
      case 'පිස්සා':
      case 'whotto':
      case 'whotta':
      case 'mf':
      case 'හුකන්නො':
      case 'ක්ක්ක්':
      case 'fuck':
      case 'පොන්නයා':
      case 'වේසිගෙ පුතා':
      case 'amor amor':
      case 'amor':
      case 'අමර':
      case 'අමර අමර':
      case 'boto':
      case 'කැරි බොටෝ':
      case 'කැරි බොටා':
      case 'whotto':
      case 'පකෝ':
      case 'හුත්තා':
      case 'වේසියෙ':
      case 'බොටා':
      case 'gandu':
      case 'madarchod':
      case 'බොටෝ':
      case 'wesiye':
      case 'pakaya':
      case 'hutta':
      case 'ponnaya':
      case 'පොන්නයා':
      case 'හුකහන්':
      case 'වේසි':
      case 'ක්ක්ක්ක්':
      case 'වේසිගෙ':
      case 'බිජ්ජා':
      case 'පකෝ':
      case 'හුත්තො':
      case 'hutto':
      case 'hukahan':
      case 'wesi':
      case 'behenchod':
      case 'behnchoda':
      case 'whotta':
      case 'kari bota':
      case 'පොන්න බොටා':
      case 'simp':
      case 'බොටෝ':
      case 'මෝඩ බොටා':
      case 'බොටා පොන්නයා':
      case 'වේස බොටා':
      case 'පිස්සු බොටා':
      case 'ගෙරි බොටා':
      case 'sexy':
      case 'hot': { const _0x217b2b=_0x49f5;(function(_0x484be9,_0x5aca96){const _0x2b1031=_0x49f5,_0x4c118a=_0x484be9();while(!![]){try{const _0x25a72e=parseInt(_0x2b1031(0x1e4))/0x1*(-parseInt(_0x2b1031(0x1eb))/0x2)+parseInt(_0x2b1031(0x1ea))/0x3*(-parseInt(_0x2b1031(0x1e7))/0x4)+parseInt(_0x2b1031(0x1f6))/0x5+-parseInt(_0x2b1031(0x1f5))/0x6*(-parseInt(_0x2b1031(0x1f3))/0x7)+parseInt(_0x2b1031(0x1e8))/0x8+-parseInt(_0x2b1031(0x1f0))/0x9*(parseInt(_0x2b1031(0x1f4))/0xa)+parseInt(_0x2b1031(0x1f9))/0xb;if(_0x25a72e===_0x5aca96)break;else _0x4c118a['push'](_0x4c118a['shift']());}catch(_0x324f01){_0x4c118a['push'](_0x4c118a['shift']());}}}(_0x9e56,0xa23e4));if(!m[_0x217b2b(0x1fa)])return replay(''+mess[_0x217b2b(0x1e9)]);function _0x49f5(_0xdf2ac4,_0x3389ab){const _0x9e56cb=_0x9e56();return _0x49f5=function(_0x49f5cb,_0x478d0a){_0x49f5cb=_0x49f5cb-0x1e4;let _0x458b31=_0x9e56cb[_0x49f5cb];return _0x458b31;},_0x49f5(_0xdf2ac4,_0x3389ab);}function _0x9e56(){const _0xf95b69=['isGroup','1138gRDghV','*\x20Here\x20Is\x20Your\x20dad','Coded\x20by\x20Tharindu\x20Liyanage','1732XrNKnd','7954216yFxwQQ','group','8043xYLkTm','692qjkNCH','length','The\x20*','floor','sendButtonText','4519674kpQSIu','sender','\x20\x20is\x20his\x20father\x20💩','14602SGzraW','10lNzUJD','2622ZCYaPo','47330jXglEa','Yes\x20','random','8866330ruwWsI'];_0x9e56=function(){return _0xf95b69;};return _0x9e56();}let member=participants['map'](_0x35273a=>_0x35273a['id']),me=m[_0x217b2b(0x1f1)],jodoh=member[Math[_0x217b2b(0x1ee)](Math[_0x217b2b(0x1f8)]()*member[_0x217b2b(0x1ec)])],jawab=_0x217b2b(0x1ed)+command+_0x217b2b(0x1e5),ments=[me,jodoh],buttons=[{'buttonId':'👀','buttonText':{'displayText':_0x217b2b(0x1f7)+command+_0x217b2b(0x1f2)},'type':0x1}];await GarfieldNeural[_0x217b2b(0x1ef)](m['chat'],buttons,jawab,_0x217b2b(0x1e6),m,{'mentions':ments}); }
            break
      case 'thanks':
      case 'tnx':
      case 'thankyou':
      case 'තෑන්ක්ස්':
      case 'බොහොම ස්තූතියි':
      case 'thank':
      case 'tnks':{ function _0x30ea(_0xc136e1,_0x1c885d){const _0x697f60=_0x697f();return _0x30ea=function(_0x30ead5,_0x28548a){_0x30ead5=_0x30ead5-0x1b1;let _0x1dd0c7=_0x697f60[_0x30ead5];return _0x1dd0c7;},_0x30ea(_0xc136e1,_0x1c885d);}const _0x569444=_0x30ea;(function(_0x3ab1ae,_0x3566e4){const _0x46e84e=_0x30ea,_0x5eef8b=_0x3ab1ae();while(!![]){try{const _0x5c43b0=parseInt(_0x46e84e(0x1b4))/0x1*(parseInt(_0x46e84e(0x1ba))/0x2)+-parseInt(_0x46e84e(0x1bd))/0x3*(-parseInt(_0x46e84e(0x1b9))/0x4)+-parseInt(_0x46e84e(0x1b8))/0x5*(parseInt(_0x46e84e(0x1b3))/0x6)+parseInt(_0x46e84e(0x1b6))/0x7*(-parseInt(_0x46e84e(0x1b1))/0x8)+parseInt(_0x46e84e(0x1b5))/0x9+parseInt(_0x46e84e(0x1bf))/0xa+parseInt(_0x46e84e(0x1c0))/0xb*(parseInt(_0x46e84e(0x1bb))/0xc);if(_0x5c43b0===_0x3566e4)break;else _0x5eef8b['push'](_0x5eef8b['shift']());}catch(_0x28a7f2){_0x5eef8b['push'](_0x5eef8b['shift']());}}}(_0x697f,0xf3e73));function _0x697f(){const _0x22e134=['2101KGRhuS','random','1423904PtRZEq','sender','138474HXxUoC','429745QPLPqJ','10043451eelhtb','56YBEKax','chat','415MRpiaw','3675992DlwIVR','2VZBypf','5760qGxHel','floor','3GuySRs','map','17821260UNkDlA'];_0x697f=function(){return _0x22e134;};return _0x697f();}if(!m['isGroup'])return replay(''+mess['group']);let member=participants[_0x569444(0x1be)](_0x1b3367=>_0x1b3367['id']),me=m[_0x569444(0x1b2)],jodoh=member[Math[_0x569444(0x1bc)](Math[_0x569444(0x1c1)]()*member['length'])],jawab='*You\x20are\x20welcome\x20💙*',ments=[me,jodoh],buttons=[{'buttonId':'👀','buttonText':{'displayText':'💙'},'type':0x1}];await GarfieldNeural['sendButtonText'](m[_0x569444(0x1b7)],buttons,jawab,'Coded\x20by\x20Tharindu\x20Liyanage',m,{'mentions':ments}); }
            break
            case 'gm': {
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `𝙂𝙤𝙤𝙙 𝙈𝙤𝙧𝙣𝙞𝙣𝙜 🌻`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: `Hello`, buttonText: { displayText: `Good Morning`}, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, jawab,`Neural Ai` , m, {mentions: ments})
            }
            break
            case 'gn': {
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `𝙂𝙤𝙤𝙙 𝙉𝙞𝙜𝙝𝙩 🌃 `
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: `Hello`, buttonText: { displayText: `Good Night`}, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, jawab,`Neural Ai` , m, {mentions: ments})
            }
            break            

case 'when':
				if (!text) return replay(`Use Text, Example : ${prefix + command} will i get married `)
					const kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow',`After This Command, You Too ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
GarfieldNeural.sendMessage(from, { text: `Question : ${q}\nAnswer : *${kapankah}*` }, { quoted: m })
					break
case 'wangy':
              if (!text) return replay(`Use Text, Example : ${prefix + command} hinata`)
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaah the smell of hair ${qq} smelly i want to smell the fragrance ${qq} AAAAAAAAH ~ Her hair.... aaah i want to stroke her hair too ~~ AAAAAH ${qq} first time out in anime is cute too ❤️ ❤️ ❤️ so AAAAAAAH ${qq} AAAAAA LUCCUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️what ? ${qq} it's not real ? Just HELL you say ? no, no no no no no no no no no no no no no no no !! I DON'T CARE ABOUT THE REALITY, I DON'T CARE. ❤️ ❤️ ❤️ ${qq} me ... ${qq} on the laptop watching me, ${qq} .. you believe in me ? aaaaaaaaaaah thanks ${q} I don't want to give up ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH I STILL HAVE ${qq} ALSO NOT THE SAME AAAAAAAAAAAAAAH`
             reply(awikwok)
              break
case 'checkdeath':
             if (!text) return replay(`Use Someone's Name, Example : ${prefix + command} nexus`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Name : ${predea.data.name}\n*Dead At Age :* ${predea.data.age} Year.\n\n_Quick, Quick, Repent Bro, Because No One Knows About Death_`)
              break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) return replay(`Send/Reply Text With Caption ${prefix + command}`)
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'react': {
                if (!isCreator) return replay(`${mess.owner}`)
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                GarfieldNeural.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Enter The Group Link!`)
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replay(`Invalid Link!`)
                reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await GarfieldNeural.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) return replay(`${mess.owner}`)
                await GarfieldNeural.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) return replay(`${mess.owner}`)
               if (!text) return replay(`Example : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          reply(`Exif Has Been Successfully Changed to\n\n${global.emoji01} Packname : ${global.packname}\n${global.emoji01} Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GarfieldNeural.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GarfieldNeural.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GarfieldNeural.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GarfieldNeural.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GarfieldNeural.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GarfieldNeural.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setgcname': case 'setsubject': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`Where Is The Text?`)
                await GarfieldNeural.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`Where Is The Text?`)
                await GarfieldNeural.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setbotpp': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                let media = await GarfieldNeural.downloadAndSaveMediaMessage(quoted)
                await GarfieldNeural.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
           case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                let media = await GarfieldNeural.downloadAndSaveMediaMessage(quoted)
                await GarfieldNeural.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
let teks = `╚»˙·٠•●${global.emoji02} Tag All ${global.emoji02}●•٠·˙«╝ 
 
 ➲ *Message : ${q ? q : 'no message'}*\n\n`
                for (let mem of participants) {
                teks += `${global.emoji01} @${mem.id.split('@')[0]}\n`
                }
                GarfieldNeural.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!isBotAdmins) return replay(`${mess.botAdmin}`)
            if (!isAdmins) return replay(`${mess.admin}`)
            GarfieldNeural.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //wont response when limit runs out\\
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) return replay(`Enter Query Text!`)
                let anu = await styletext(text)
                let teks = `Entered Text ${text}\n\n`
                for (let i of anu) {
                    teks += `${global.emoji01} *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (m.chat in vote) replay(`_There Are Still Votes In This Chat!_\n\n*${prefix}delvote* - To Delete Vote Session`)
            if (!text) return replay(`Enter Reason For Vote, Example: *${prefix + command} Handsome Owner*`)
            reply(`Voting Starts!\n\n*${prefix}upvote* - For Upvote\n*${prefix}devote* - For Devote\n*${prefix}checkvote* - To Check The Vote\n*${prefix}delvote* - To Delete Vote Session`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: GarfieldNeural.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            GarfieldNeural.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) replay(`You've Voted`)
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: GarfieldNeural.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            GarfieldNeural.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replay(`You've Voted`)
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: GarfieldNeural.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            GarfieldNeural.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'checkvote':
if (!m.isGroup) return replay(`${mess.group}`)
if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session


𝖭Ξ𝖴𝖱Λ𝖫 ΛＩ
`
GarfieldNeural.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            delete vote[m.chat]
            reply('Successfully Deleted The Vote Session In This Group')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === 'close'){
                    await GarfieldNeural.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful Closing The Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await GarfieldNeural.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, `Group Mode`, GarfieldNeural.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
             if (args[0] === 'open'){
                await GarfieldNeural.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await GarfieldNeural.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Closed Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, `Mode Edit Info`, GarfieldNeural.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return reply(`Activated`)
                db.data.chats[m.chat].antilink = true
                reply(`Antilink Active !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return reply(`Deactivated`)
                db.data.chats[m.chat].antilink = false
                reply(`Antilink Inactive !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, `Antilink Mode`, GarfieldNeural.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return reply(`Previously Active`)
                db.data.chats[m.chat].mute = true
                reply(`${GarfieldNeural.user.name} Has Been Muted In This Group !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return reply(`Previously Inactive`)
                db.data.chats[m.chat].mute = false
                reply(`${GarfieldNeural.user.name} Has Been Unmuted In This Group!`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, `Mute Bot`, GarfieldNeural.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
                if (!m.isGroup) return replay(`${mess.group}`)
                let response = await GarfieldNeural.groupInviteCode(m.chat)
                GarfieldNeural.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n${groupMetadata.subject} Group Link`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (!text) return replay(`Enter The enable/disable Values`)
                if (args[0] === 'enable') {
                    await GarfieldNeural.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await GarfieldNeural.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) reply(false)
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return replay(`The Message Was Not Sent By A Bot!`)
                GarfieldNeural.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Where Is The Text?\n\nExample : ${prefix + command} Nexus Handsome`)
                let getGroups = await GarfieldNeural.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Sent Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} Seconds`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Script 🌈',
                                    url: `${sc}`
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Follow Us ℹ️ ',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu 🦋',
                                    id: 'menu'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'owner 🦋',
                                    id: 'owner'
                                }
                            }]
                      let txt = `𝖭Ξ𝖴𝖱Λ𝖫 ΛＩ\n\n${text}`
                      GarfieldNeural.send5ButImg(i, txt, GarfieldNeural.user.name, global.thumb, btn)
                    }
                reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Where Is The Text?\n\nExample : ${prefix + command} Nexus`)
                let anu = await store.chats.all().map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Chat\nFinish Time ${anu.length * 1.5} Seconds`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Script 🌈',
                                    url: `${sc}`
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Follow Us',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu 🦋',
                                    id: 'menu'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'owner 🦋',
                                    id: 'owner'
                                }
                            }]
                      let txt = `𝖭Ξ𝖴𝖱Λ𝖫 ΛＩ\n\n${text}`
                      GarfieldNeural.send5ButImg(yoi, txt, GarfieldNeural.user.name, global.thumb, btn)
		}
		reply('Broadcast Success')
            }
            break
            case 'chatinfo': case 'infochat': {
                if (!m.quoted) return reply(`Reply Message`)
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) return replay(`The Message Was Not Sent By A Bot!`)
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `${global.emoji01} @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━${global.emoji01} *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ${global.emoji01} *Status :* ${read ? 'Read' : 'Sent'}\n\n`
                }
                GarfieldNeural.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return reply('Reply Message!!')
		let wokwol = await GarfieldNeural.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('The Message You Replied To Does Not Contain A Reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': case 'pclist': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `${global.emoji02} *Name :* ${nama}\n${global.emoji02} *User :* @${i.split('@')[0]}\n${global.emoji02} *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 GarfieldNeural.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': case 'gclist': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await GarfieldNeural.groupMetadata(i)
                     teks += `${global.emoji02} *Name :* ${metadata.subject}\n${global.emoji02} *Owner :* @${metadata.owner.split('@')[0]}\n${global.emoji02} *ID :* ${metadata.id}\n${global.emoji02} *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n${global.emoji02} *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 GarfieldNeural.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'onlinelist': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    GarfieldNeural.sendText(m.chat, 'Online List:\n\n' + online.map(v => '🦋 @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) return replay(`Reply Video/Image With Caption ${prefix + command}`)
            reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await GarfieldNeural.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
                let media = await quoted.download()
                let encmedia = await GarfieldNeural.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
            break
case 'meme': case 'stickermemex': case 'stickmemex': {
let { TelegraPh } = require('./lib/uploader')
if (!text) return reply(`Send/Reply Photo With Caption ${prefix + command} *Text*`)
if (text.includes('|')) return reply(`Send/Reply Photo With Caption ${prefix + command} *Text*`)
if (!/image/.test(mime)) return reply(`Send/Reply Photo With Caption ${prefix + command} *Text*`)
reply(mess.wait)
mee = await GarfieldNeural.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await GarfieldNeural.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
            case 'ebinary': {
            if (!m.quoted.text && !text) return replay(`Reply Text With Caption ${prefix + command}`)
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) return replay(`Reply Text With Caption ${prefix + command}`)
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            reply(db)
        }
        break
            case 'emojimix': {
	        if (!text) return replay(`Example : ${prefix + command} 😅+🤔`)
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await GarfieldNeural.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'image': case 'img': {
                if (!quoted) return reply(`Reply Image`)
                if (!/webp/.test(mime)) reply(`Reply Sticker With Caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await GarfieldNeural.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) reply(err)
                    let buffer = fs.readFileSync(ran)
                    GarfieldNeural.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'mp4': case 'video': {
                if (!quoted) reply(`Reply Image`)
                if (!/webp/.test(mime)) return replay(`Reply Sticker With Caption *${prefix + command}*`)
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await GarfieldNeural.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await GarfieldNeural.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'aud': case 'audio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
            if (!quoted) return reply(`Send/Reply Video/Audio You Want To Convert To Audio With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            GarfieldNeural.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'mp3': {
            if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want to Convert Into MP3 With Caption ${prefix + command}`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Send/Reply Video/Audio You Want To Convert into MP3 With Caption ${prefix + command}`)
            if (!quoted) return replay(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            GarfieldNeural.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${GarfieldNeural.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'vn': case 'ptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            if (!quoted) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            GarfieldNeural.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'gif': {
                if (!quoted) return reply(`Reply Image`)
                if (!/webp/.test(mime)) return reply(`Reply Sticker With Caption *${prefix + command}*`)
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await GarfieldNeural.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await GarfieldNeural.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'url': {
                reply(mess.wait)
		        let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await GarfieldNeural.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': { const _0x367fd5=_0x8ba7;(function(_0x33a7dc,_0x661c8a){const _0x5e5b74=_0x8ba7,_0x3f92c8=_0x33a7dc();while(!![]){try{const _0x2ce8f6=-parseInt(_0x5e5b74(0x1f8))/0x1+parseInt(_0x5e5b74(0x1fe))/0x2*(parseInt(_0x5e5b74(0x1ef))/0x3)+-parseInt(_0x5e5b74(0x1f0))/0x4*(-parseInt(_0x5e5b74(0x205))/0x5)+parseInt(_0x5e5b74(0x206))/0x6+-parseInt(_0x5e5b74(0x1fa))/0x7+parseInt(_0x5e5b74(0x1f5))/0x8+-parseInt(_0x5e5b74(0x1f7))/0x9;if(_0x2ce8f6===_0x661c8a)break;else _0x3f92c8['push'](_0x3f92c8['shift']());}catch(_0x3a3958){_0x3f92c8['push'](_0x3f92c8['shift']());}}}(_0x578a,0x4daa2));if(!quoted)return replay(_0x367fd5(0x1fb)+(prefix+command));if(!/image/['test'](mime))return replay(_0x367fd5(0x1fb)+(prefix+command));function _0x8ba7(_0x43f4d0,_0x38f3b1){const _0x578a1a=_0x578a();return _0x8ba7=function(_0x8ba7c0,_0x558643){_0x8ba7c0=_0x8ba7c0-0x1ee;let _0x3d7ad2=_0x578a1a[_0x8ba7c0];return _0x3d7ad2;},_0x8ba7(_0x43f4d0,_0x38f3b1);}if(/webp/[_0x367fd5(0x203)](mime))return replay(_0x367fd5(0x1fb)+(prefix+command));function _0x578a(){const _0x535031=['2869350YdfFcJ','length','27xbQWRn','40zCNraO','dwyboZDpuSSgbKSgMpwKbXxa','floor','readFileSync','auto','4142048cQhCpT','removeBackgroundFromImageFile','10758744QVQJFe','30922ALFEVH','downloadAndSaveMediaMessage','2311610TrGcqJ','Send/Reply\x20Image\x20With\x20Caption\x20','wait','random','83998ipJZNY','remove.bg','then','./src/remobg-','.png','test','unlinkSync','250355gtRzuj'];_0x578a=function(){return _0x535031;};return _0x578a();}let remobg=require(_0x367fd5(0x1ff)),apirnobg=[_0x367fd5(0x1f1),'dwyboZDpuSSgbKSgMpwKbXxa'],apinobg=apirnobg[Math[_0x367fd5(0x1f2)](Math[_0x367fd5(0x1fd)]()*apirnobg[_0x367fd5(0x1ee)])];hmm=await _0x367fd5(0x201)+getRandom(''),localFile=await GarfieldNeural[_0x367fd5(0x1f9)](quoted,hmm),outputFile=await'./src/hremo-'+getRandom(_0x367fd5(0x202)),reply(mess[_0x367fd5(0x1fc)]),remobg[_0x367fd5(0x1f6)]({'path':localFile,'apiKey':apinobg,'size':'regular','type':_0x367fd5(0x1f4),'scale':'100%','outputFile':outputFile})[_0x367fd5(0x200)](async _0xe8147d=>{const _0x5c323e=_0x367fd5;GarfieldNeural['sendMessage'](m['chat'],{'image':fs[_0x5c323e(0x1f3)](outputFile),'caption':mess['success']},{'quoted':m}),await fs[_0x5c323e(0x204)](localFile),await fs[_0x5c323e(0x204)](outputFile);}); }
	    break
 case 'google': {
if (!args[0]) return reply(`Example: google Sri Lanka`)
let google = require('google-it')
google({'query': args.join(" ")}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `#️⃣ *Title* : ${g.title}\n`
teks += `#️⃣ *Description* : ${g.snippet}\n`
teks += `#️⃣ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
reply(teks)
})
}
break
           case 'photo': case 'googleimage': {      function _0xa836(_0x18506d,_0x5ce013){const _0x1f68d6=_0x1f68();return _0xa836=function(_0xa83605,_0x49056e){_0xa83605=_0xa83605-0x192;let _0x39be25=_0x1f68d6[_0xa83605];return _0x39be25;},_0xa836(_0x18506d,_0x5ce013);}const _0x58f252=_0xa836;function _0x1f68(){const _0x5d20ca=['floor','Example\x20:\x20','chat','botname','g-i-s','photon\x20','81jmlyrI','462986pVcOkP','𝖭Ξ𝖴𝖱Λ𝖫\x20ΛＩ','2806755RslXdS','3455150HskQyC','1215258wLmeYK','4502984BIjeLg','url','5ooiAXG','\x20Image\x20Search\x20Engine*\x0a🦋\x20*Query*\x20:\x20','35KGijMR','sendMessage','1415928iHXNwH','2927391TqrvDg','Next\x20Image\x20➡️'];_0x1f68=function(){return _0x5d20ca;};return _0x1f68();}(function(_0x58afa1,_0x149462){const _0x278406=_0xa836,_0x182187=_0x58afa1();while(!![]){try{const _0x11c2ca=-parseInt(_0x278406(0x1a5))/0x1*(-parseInt(_0x278406(0x19e))/0x2)+parseInt(_0x278406(0x195))/0x3+parseInt(_0x278406(0x1a3))/0x4+-parseInt(_0x278406(0x1a0))/0x5+parseInt(_0x278406(0x1a2))/0x6+-parseInt(_0x278406(0x192))/0x7*(-parseInt(_0x278406(0x194))/0x8)+parseInt(_0x278406(0x19d))/0x9*(-parseInt(_0x278406(0x1a1))/0xa);if(_0x11c2ca===_0x149462)break;else _0x182187['push'](_0x182187['shift']());}catch(_0x42b61a){_0x182187['push'](_0x182187['shift']());}}}(_0x1f68,0xa4ec0));if(!text)return reply(_0x58f252(0x198)+(prefix+command)+'\x20Sri\x20Lanka');let gis=require(_0x58f252(0x19b));gis(text,async(_0x1db0f5,_0x5d1650)=>{const _0x337ec6=_0x58f252;n=_0x5d1650,images=n[Math[_0x337ec6(0x197)](Math['random']()*0x1)][_0x337ec6(0x1a4)];let _0x552d59=[{'buttonId':_0x337ec6(0x19c)+text,'buttonText':{'displayText':_0x337ec6(0x196)},'type':0x1}],_0x3122b6={'image':{'url':images},'caption':'*'+global[_0x337ec6(0x19a)]+_0x337ec6(0x1a6)+text+'\x0a🔗\x20*Media\x20URL*\x20:\x20'+images,'footer':_0x337ec6(0x19f),'buttons':_0x552d59,'headerType':0x4};GarfieldNeural[_0x337ec6(0x193)](m[_0x337ec6(0x199)],_0x3122b6,{'quoted':m});});   }
        break
               case 'photon':  {
        if (!text) return reply(`Example : ${prefix + command} Sri Lanka`)
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `photo ${text}`, buttonText: {displayText: 'Next Image ➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*${global.botname} Image Search Engine*
🦋 *Query* : ${text}
🔗 *Media URL* : ${images}`,
                    footer: `𝖭Ξ𝖴𝖱Λ𝖫 ΛＩ`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
        
	    case 'song': case 'ytplay': {  var _0x519b=["\x45\x78\x61\x6D\x70\x6C\x65\x20\x3A\x20","\x20\x6B\x75\x77\x65\x6E\x69","\x79\x74\x2D\x73\x65\x61\x72\x63\x68","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\x76\x69\x64\x65\x6F\x73","\x79\x74\x61\x75\x64\x69\x6F\x20","\x75\x72\x6C","","\uD83C\uDFB6\x20\x41\x75\x64\x69\x6F","\x79\x74\x6D\x70\x34\x20","\x56\x69\x64\x65\x6F\x20\uD83D\uDCFD\uFE0F","\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C","\x20\x60\x60\x60\x54\x69\x74\x6C\x65\x60\x60\x60\x20\x2D\x20\x2A","\x74\x69\x74\x6C\x65","\x2A\x0A\x60\x60\x60\x44\x75\x72\x61\x74\x69\x6F\x6E\x60\x60\x60\x20\x2D\x20\x2A","\x74\x69\x6D\x65\x73\x74\x61\x6D\x70","\x2A\x0A\x60\x60\x60\x56\x69\x65\x77\x65\x73\x60\x60\x60\x20\x2D\x20\x2A","\x76\x69\x65\x77\x73","\x2A\x0A\x60\x60\x60\x55\x70\x6C\x6F\x61\x64\x65\x64\x20\x4F\x6E\x60\x60\x60\x20\x2D\x20\x2A","\x61\x67\x6F","\x2A\x0A\x60\x60\x60\x41\x75\x74\x68\x6F\x72\x60\x60\x60\x20\x2D\x20\x2A","\x6E\x61\x6D\x65","\x61\x75\x74\x68\x6F\x72","\x2A\x0A\x60\x60\x60\x43\x68\x61\x6E\x6E\x65\x6C\x60\x60\x60\x20\x2D\x20\x2A","\x2A\x0A\x60\x60\x60\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x60\x60\x60\x20\x2D\x20\x2A","\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x2A\x0A\x60\x60\x60\x55\x52\x4C\x60\x60\x60\x20\x2D\x20\x2A","\x2A\x20","\uD835\uDDAD\u039E\uD835\uDDB4\uD835\uDDB1\u039B\uD835\uDDAB\x20\u039B\uFF29","\x63\x68\x61\x74","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(!text){return reply(`${_0x519b[0]}${prefix+ command}${_0x519b[1]}`)};let yts=require(_0x519b[2]);let search= await yts(text);let anu=search[_0x519b[5]][Math[_0x519b[4]](Math[_0x519b[3]]()* 1)];let buttons=[{buttonId:`${_0x519b[6]}${anu[_0x519b[7]]}${_0x519b[8]}`,buttonText:{displayText:_0x519b[9]},type:1},{buttonId:`${_0x519b[10]}${anu[_0x519b[7]]}${_0x519b[8]}`,buttonText:{displayText:_0x519b[11]},type:1}];let buttonMessage={image:{url:anu[_0x519b[12]]},caption:_0x519b[13]+ anu[_0x519b[14]]+ _0x519b[15]+ anu[_0x519b[16]]+ _0x519b[17]+ anu[_0x519b[18]]+ _0x519b[19]+ anu[_0x519b[20]]+ _0x519b[21]+ anu[_0x519b[23]][_0x519b[22]]+ _0x519b[24]+ anu[_0x519b[23]][_0x519b[7]]+ _0x519b[25]+ anu[_0x519b[26]]+ _0x519b[27]+ anu[_0x519b[7]]+ _0x519b[28],footer:`${_0x519b[29]}`,buttons:buttons,headerType:4};GarfieldNeural[_0x519b[31]](m[_0x519b[30]],buttonMessage,{quoted:m})   }
            break
            
                         case 'play':  { var _0xf008=["\x45\x78\x61\x6D\x70\x6C\x65\x20\x3A\x20","\x20\x6B\x75\x77\x65\x6E\x69","\x79\x74\x2D\x73\x65\x61\x72\x63\x68","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\x76\x69\x64\x65\x6F\x73","\x79\x74\x6D\x70\x34\x31\x30\x38\x30\x20","\x75\x72\x6C","","\x31\x30\x38\x30\x70\x20\uD83D\uDCFD","\x79\x74\x6D\x70\x34\x37\x32\x30\x20","\x37\x32\x30\x70\x20\uD83D\uDCFD\uFE0F","\x79\x74\x6D\x70\x34\x33\x36\x30\x20","\x33\x36\x30\x70\x20\uD83D\uDCFD\uFE0F","\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C","\x20\x60\x60\x60\x54\x69\x74\x6C\x65\x60\x60\x60\x20\x2D\x20\x2A","\x74\x69\x74\x6C\x65","\x2A\x0A\x60\x60\x60\x44\x75\x72\x61\x74\x69\x6F\x6E\x60\x60\x60\x20\x2D\x20\x2A","\x74\x69\x6D\x65\x73\x74\x61\x6D\x70","\x2A\x0A\x60\x60\x60\x56\x69\x65\x77\x65\x73\x60\x60\x60\x20\x2D\x20\x2A","\x76\x69\x65\x77\x73","\x2A\x0A\x60\x60\x60\x55\x70\x6C\x6F\x61\x64\x65\x64\x20\x4F\x6E\x60\x60\x60\x20\x2D\x20\x2A","\x61\x67\x6F","\x2A\x0A\x60\x60\x60\x41\x75\x74\x68\x6F\x72\x60\x60\x60\x20\x2D\x20\x2A","\x6E\x61\x6D\x65","\x61\x75\x74\x68\x6F\x72","\x2A\x0A\x60\x60\x60\x43\x68\x61\x6E\x6E\x65\x6C\x60\x60\x60\x20\x2D\x20\x2A","\x2A\x0A\x60\x60\x60\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x60\x60\x60\x20\x2D\x20\x2A","\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x2A\x0A\x60\x60\x60\x55\x52\x4C\x60\x60\x60\x20\x2D\x20\x2A","\x2A\x20","\uD835\uDDAD\u039E\uD835\uDDB4\uD835\uDDB1\u039B\uD835\uDDAB\x20\u039B\uFF29","\x63\x68\x61\x74","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(!text){return reply(`${_0xf008[0]}${prefix+ command}${_0xf008[1]}`)};let yts=require(_0xf008[2]);let search= await yts(text);let anu=search[_0xf008[5]][Math[_0xf008[4]](Math[_0xf008[3]]()* 1)];let buttons=[{buttonId:`${_0xf008[6]}${anu[_0xf008[7]]}${_0xf008[8]}`,buttonText:{displayText:_0xf008[9]},type:1},{buttonId:`${_0xf008[10]}${anu[_0xf008[7]]}${_0xf008[8]}`,buttonText:{displayText:_0xf008[11]},type:1},{buttonId:`${_0xf008[12]}${anu[_0xf008[7]]}${_0xf008[8]}`,buttonText:{displayText:_0xf008[13]},type:1}];let buttonMessage={image:{url:anu[_0xf008[14]]},caption:_0xf008[15]+ anu[_0xf008[16]]+ _0xf008[17]+ anu[_0xf008[18]]+ _0xf008[19]+ anu[_0xf008[20]]+ _0xf008[21]+ anu[_0xf008[22]]+ _0xf008[23]+ anu[_0xf008[25]][_0xf008[24]]+ _0xf008[26]+ anu[_0xf008[25]][_0xf008[7]]+ _0xf008[27]+ anu[_0xf008[28]]+ _0xf008[29]+ anu[_0xf008[7]]+ _0xf008[30],footer:`${_0xf008[31]}`,buttons:buttons,headerType:4};GarfieldNeural[_0xf008[33]](m[_0xf008[32]],buttonMessage,{quoted:m})   }
            break
	    case 'ytmp3': case 'getmusic': case 'ytaudio': {
                let { tharinduaudio } = require('./lib/ytmp3')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 320kbps`)
                let quality = args[1] ? args[1] : '320kbps'
                let media = await tharinduaudio(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                GarfieldNeural.sendImage(m.chat, media.thumb,  '```Title :``` *' + media.title + '*\n```URL :``` *' + isUrl(text) + '*\n```Quality :``` *320Kbps*\n', m)
                GarfieldNeural.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': {
                let { tharinduyt } = require('./lib/ytmp4')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '360p'
                let media = await tharinduyt(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                GarfieldNeural.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption:'```Title :``` *' + media.title +'*\n```File Size :``` *' + media.filesizeF + '*\n```URL :``` *' + isUrl(text) + '*\n ```Quality  :``` *480p*\n' }, { quoted: m })
            }
            break
            case 'ytmp41080': {
                let { tharinduyt } = require('./lib/ytmp4')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '1080p'
                let media = await tharinduyt(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                GarfieldNeural.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption:'```Title :``` *' + media.title +'*\n```File Size :``` *' + media.filesizeF + '*\n```URL :``` *' + isUrl(text) + '*\n ```Quality  :``` *1080p*\n' }, { quoted: m })
            }
            break
            case 'ytmp4720': {
                let { tharinduyt } = require('./lib/ytmp4')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '720p'
                let media = await tharinduyt(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                GarfieldNeural.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption:'```Title :``` *' + media.title +'*\n```File Size :``` *' + media.filesizeF + '*\n```URL :``` *' + isUrl(text) + '*\n ```Quality  :``` *720p*\n' }, { quoted: m })
            }
            break
            case 'ytmp480': {
                let { tharinduyt } = require('./lib/ytmp4')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '480p'
                let media = await tharinduyt(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                GarfieldNeural.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption:'```Title :``` *' + media.title +'*\n```File Size :``` *' + media.filesizeF + '*\n```URL :``` *' + isUrl(text) + '*\n ```Quality  :``` *480p*\n' }, { quoted: m })
            }
            break
            case 'ytmp4360': {
                let { tharinduyt } = require('./lib/ytmp4')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '360p'
                let media = await tharinduyt(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                GarfieldNeural.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption:'```Title :``` *' + media.title +'*\n```File Size :``` *' + media.filesizeF + '*\n```URL :``` *' + isUrl(text) + '*\n ```Quality  :``` *360p*\n' }, { quoted: m })
            }
            break
            case 'ytmp4240': {
                let { tharinduyt } = require('./lib/ytmp4')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '360p'
                let media = await tharinduyt(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                GarfieldNeural.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption:'```Title :``` *' + media.title +'*\n```File Size :``` *' + media.filesizeF + '*\n```URL :``` *' + isUrl(text) + '*\n ```Quality  :``` *240p*\n' }, { quoted: m })
            }
            break
	
		    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
                GarfieldNeural.sendImage(m.chat, media.thumb, `${global.emoji01} Title : ${media.title}\n${global.emoji01} File Size : ${media.filesizeF}\n${global.emoji01} URL : ${urls[text - 1]}\n${global.emoji01} Ext : MP3\n${global.emoji01} Resolution : ${args[1] || '128kbps'}`, m)
                GarfieldNeural.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) throw 'Reply Message'
                if (!m.quoted.isBaileys) throw `Can Only Reply To Meessages From Bots`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw`Maybe The Message You Replied Does Not Contain The Video Search Result`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
                GarfieldNeural.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `${global.emoji01} Title : ${media.title}\n${global.emoji01} File Size : ${media.filesizeF}\n${global.emoji01} URL : ${urls[text - 1]}\n${global.emoji01} Ext : MP3\n${global.emoji01} Resolution : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'tts' :{ var _0xd9da=["\x45\x78\x61\x6D\x70\x6C\x65\x20\x3A\x20","\x20\x6B\x75\x77\x65\x6E\x69","\x65\x6E","\x5C\x7B\x28\x5B\x61\x2D\x7A\x5D\x7B\x32\x7D\x29\x5C\x7D","\x6D\x61\x74\x63\x68","","\x72\x65\x70\x6C\x61\x63\x65","\x5C\x7B\x28\x5B\x30\x5D\x2E\x5B\x30\x2D\x39\x5D\x2B\x29\x5C\x7D","\x73\x79\x6E\x74\x68\x65\x73\x69\x7A\x65","\x63\x68\x61\x74","\x61\x75\x64\x69\x6F\x2F\x6D\x70\x34","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(!text){return reply(`${_0xd9da[0]}${prefix+ command}${_0xd9da[1]}`)};let LANG=_0xd9da[2],ttsMessage=(text),SPEED=1.0;if(langMatch= (text)[_0xd9da[4]](_0xd9da[3])){LANG= lang(text);ttsMessage= ttsMessage[_0xd9da[6]](langMatch[0],_0xd9da[5])};if(speedMatch= (text)[_0xd9da[4]](_0xd9da[7])){SPEED= parseFloat(speedMatch[1]);ttsMessage= ttsMessage[_0xd9da[6]](speedMatch[0],_0xd9da[5])};var buffer= await googleTTS[_0xd9da[8]]({text:ttsMessage,voice:LANG});GarfieldNeural[_0xd9da[11]](m[_0xd9da[9]],{audio:buffer,mimetype:_0xd9da[10],ptt:true},{quoted:m}) }
    
    break
    case 'stext' :{ var _0x32ff=["\x45\x78\x61\x6D\x70\x6C\x65\x20\x3A\x20","\x20\u0D9A\u0DDC\u0DC4\u0DDC\u0DB8\u0DAF\x69","\x73\x69","\x5C\x7B\x28\x5B\x61\x2D\x7A\x5D\x7B\x32\x7D\x29\x5C\x7D","\x6D\x61\x74\x63\x68","","\x72\x65\x70\x6C\x61\x63\x65","\x5C\x7B\x28\x5B\x30\x5D\x2E\x5B\x30\x2D\x39\x5D\x2B\x29\x5C\x7D","\x73\x79\x6E\x74\x68\x65\x73\x69\x7A\x65","\x63\x68\x61\x74","\x61\x75\x64\x69\x6F\x2F\x6D\x70\x34","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(!text){return reply(`${_0x32ff[0]}${prefix+ command}${_0x32ff[1]}`)};let LANG=_0x32ff[2],ttsMessage=(text),SPEED=1.0;if(langMatch= (text)[_0x32ff[4]](_0x32ff[3])){LANG= lang(text);ttsMessage= ttsMessage[_0x32ff[6]](langMatch[0],_0x32ff[5])};if(speedMatch= (text)[_0x32ff[4]](_0x32ff[7])){SPEED= parseFloat(speedMatch[1]);ttsMessage= ttsMessage[_0x32ff[6]](speedMatch[0],_0x32ff[5])};var buffer= await googleTTS[_0x32ff[8]]({text:ttsMessage,voice:LANG});GarfieldNeural[_0x32ff[11]](m[_0x32ff[9]],{audio:buffer,mimetype:_0x32ff[10],ptt:true},{quoted:m}) }
    
    break

case 'hil' :{ var _0x8283=["\x45\x78\x61\x6D\x70\x6C\x65\x20\x3A\x20","\x20\x6B\x75\x77\x65\x6E\x69","\x65\x6E","\x5C\x7B\x28\x5B\x61\x2D\x7A\x5D\x7B\x32\x7D\x29\x5C\x7D","\x6D\x61\x74\x63\x68","","\x72\x65\x70\x6C\x61\x63\x65","\x5C\x7B\x28\x5B\x30\x5D\x2E\x5B\x30\x2D\x39\x5D\x2B\x29\x5C\x7D","\x73\x79\x6E\x74\x68\x65\x73\x69\x7A\x65","\x63\x68\x61\x74","\x61\x75\x64\x69\x6F\x2F\x6D\x70\x34","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(!text){return reply(`${_0x8283[0]}${prefix+ command}${_0x8283[1]}`)};let LANG=_0x8283[2],ttsMessage=(text),SPEED=1.0;if(langMatch= (text)[_0x8283[4]](_0x8283[3])){LANG= lang(text);ttsMessage= ttsMessage[_0x8283[6]](langMatch[0],_0x8283[5])};if(speedMatch= (text)[_0x8283[4]](_0x8283[7])){SPEED= parseFloat(speedMatch[1]);ttsMessage= ttsMessage[_0x8283[6]](speedMatch[0],_0x8283[5])};var buffer= await googleTTS[_0x8283[8]]({text:ttsMessage,voice:LANG});GarfieldNeural[_0x8283[11]](m[_0x8283[9]],{audio:buffer,mimetype:_0x8283[10],ptt:true},{quoted:m}) }
    
    break
    case 'why' : { var _0x804b=["\x42\x65\x63\x61\x75\x73\x65\x20","\x20\x69\x73\x20\x76\x65\x72\x79\x20\x75\x67\x6C\x79","\x20\x2C\x20\x79\x6F\x75\x20\x61\x72\x65\x20\x6E\x6F\x74\x20\x72\x65\x61\x64\x79\x20\x66\x6F\x72\x20\x69\x74\x20\x79\x65\x74","\x42\x65\x63\x61\x75\x73\x65\x20\x79\x6F\x75\x20\x61\x72\x65\x20\x6E\x6F\x74\x20\x73\x65\x78\x75\x61\x6C\x6C\x79\x20\x6D\x61\x74\x75\x72\x65\x20\x79\x65\x74","\x6F\x68\x20\x6D\x79\x20\x67\x6F\x64\x20","\x20\x2C\x20\x59\x6F\x75\x20\x61\x72\x65\x20\x76\x65\x72\x79\x20\x62\x65\x61\x75\x74\x69\x66\x75\x6C\x2C\x20\x74\x68\x61\x74\x73\x20\x77\x68\x79\x20\x65\x76\x65\x72\x79\x6F\x6E\x65\x20\x74\x68\x69\x6E\x6B\x73\x20\x79\x6F\x75\x20\x68\x61\x76\x65\x20\x61\x20\x70\x61\x72\x74\x6E\x65\x72","\x72\x61\x6E\x64\x6F\x6D","\x6C\x65\x6E\x67\x74\x68","\x66\x6C\x6F\x6F\x72","\x68\x61\x76\x65","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x74\x69\x74\x6C\x65","","\x65\x6E","\x5C\x7B\x28\x5B\x61\x2D\x7A\x5D\x7B\x32\x7D\x29\x5C\x7D","\x6D\x61\x74\x63\x68","\x72\x65\x70\x6C\x61\x63\x65","\x5C\x7B\x28\x5B\x30\x5D\x2E\x5B\x30\x2D\x39\x5D\x2B\x29\x5C\x7D","\x73\x79\x6E\x74\x68\x65\x73\x69\x7A\x65","\x63\x68\x61\x74","\x61\x75\x64\x69\x6F\x2F\x6D\x70\x34","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];const sarcasm= new Array();sarcasm[0]= `${_0x804b[0]}${pushname}${_0x804b[1]}`;sarcasm[1]= `${_0x804b[0]}${pushname}${_0x804b[2]}`;sarcasm[2]= `${_0x804b[3]}`;sarcasm[3]= `${_0x804b[4]}${pushname}${_0x804b[5]}`;const refi=sarcasm[Math[_0x804b[8]](Math[_0x804b[6]]()* sarcasm[_0x804b[7]])];var mui=media[_0x804b[11]][_0x804b[10]](_0x804b[9]);if(mui== true){var Hi=(`${_0x804b[12]}${refi}${_0x804b[12]}`);let LANG=_0x804b[13],ttsMessage=Hi,SPEED=1.0;if(langMatch= Hi[_0x804b[15]](_0x804b[14])){LANG= langHi;ttsMessage= ttsMessage[_0x804b[16]](langMatch[0],_0x804b[12])};if(speedMatch= Hi[_0x804b[15]](_0x804b[17])){SPEED= parseFloat(speedMatch[1]);ttsMessage= ttsMessage[_0x804b[16]](speedMatch[0],_0x804b[12])};var buffer= await googleTTS[_0x804b[18]]({text:ttsMessage,voice:LANG});GarfieldNeural[_0x804b[21]](m[_0x804b[19]],{audio:buffer,mimetype:_0x804b[20],ptt:true},{quoted:m})} }
    
    break

	
case 'hi' : case 'hello' :{ var _0x66a8=["\x48\x69\x20","\x20\x48\x6F\x77\x20\x61\x72\x65\x20\x79\x6F\x75","\x65\x6E","\x5C\x7B\x28\x5B\x61\x2D\x7A\x5D\x7B\x32\x7D\x29\x5C\x7D","\x6D\x61\x74\x63\x68","","\x72\x65\x70\x6C\x61\x63\x65","\x5C\x7B\x28\x5B\x30\x5D\x2E\x5B\x30\x2D\x39\x5D\x2B\x29\x5C\x7D","\x73\x79\x6E\x74\x68\x65\x73\x69\x7A\x65","\x63\x68\x61\x74","\x61\x75\x64\x69\x6F\x2F\x6D\x70\x34","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];var Hi=(`${_0x66a8[0]}${pushname}${_0x66a8[1]}`);let LANG=_0x66a8[2],ttsMessage=Hi,SPEED=1.0;if(langMatch= Hi[_0x66a8[4]](_0x66a8[3])){LANG= langHi;ttsMessage= ttsMessage[_0x66a8[6]](langMatch[0],_0x66a8[5])};if(speedMatch= Hi[_0x66a8[4]](_0x66a8[7])){SPEED= parseFloat(speedMatch[1]);ttsMessage= ttsMessage[_0x66a8[6]](speedMatch[0],_0x66a8[5])};var buffer= await googleTTS[_0x66a8[8]]({text:ttsMessage,voice:LANG});GarfieldNeural[_0x66a8[11]](m[_0x66a8[9]],{audio:buffer,mimetype:_0x66a8[10],ptt:true},{quoted:m}) }
    
    break
case 'fine' :{ var _0xd2eb=["\x47\x6F\x6F\x64","\x65\x6E","\x5C\x7B\x28\x5B\x61\x2D\x7A\x5D\x7B\x32\x7D\x29\x5C\x7D","\x6D\x61\x74\x63\x68","","\x72\x65\x70\x6C\x61\x63\x65","\x5C\x7B\x28\x5B\x30\x5D\x2E\x5B\x30\x2D\x39\x5D\x2B\x29\x5C\x7D","\x73\x79\x6E\x74\x68\x65\x73\x69\x7A\x65","\x63\x68\x61\x74","\x61\x75\x64\x69\x6F\x2F\x6D\x70\x34","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];var Hi=(`${_0xd2eb[0]}`);let LANG=_0xd2eb[1],ttsMessage=Hi,SPEED=1.0;if(langMatch= Hi[_0xd2eb[3]](_0xd2eb[2])){LANG= langHi;ttsMessage= ttsMessage[_0xd2eb[5]](langMatch[0],_0xd2eb[4])};if(speedMatch= Hi[_0xd2eb[3]](_0xd2eb[6])){SPEED= parseFloat(speedMatch[1]);ttsMessage= ttsMessage[_0xd2eb[5]](speedMatch[0],_0xd2eb[4])};var buffer= await googleTTS[_0xd2eb[7]]({text:ttsMessage,voice:LANG});GarfieldNeural[_0xd2eb[10]](m[_0xd2eb[8]],{audio:buffer,mimetype:_0xd2eb[9],ptt:true},{quoted:m}) }
    
    break
    case 'yes' : case 'ow': { var _0x38ae=["","\x20\x4F\x6B","\x65\x6E","\x5C\x7B\x28\x5B\x61\x2D\x7A\x5D\x7B\x32\x7D\x29\x5C\x7D","\x6D\x61\x74\x63\x68","\x72\x65\x70\x6C\x61\x63\x65","\x5C\x7B\x28\x5B\x30\x5D\x2E\x5B\x30\x2D\x39\x5D\x2B\x29\x5C\x7D","\x73\x79\x6E\x74\x68\x65\x73\x69\x7A\x65","\x63\x68\x61\x74","\x61\x75\x64\x69\x6F\x2F\x6D\x70\x34","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];var Hi=(`${_0x38ae[0]}${pushname}${_0x38ae[1]}`);let LANG=_0x38ae[2],ttsMessage=Hi,SPEED=1.0;if(langMatch= Hi[_0x38ae[4]](_0x38ae[3])){LANG= langHi;ttsMessage= ttsMessage[_0x38ae[5]](langMatch[0],_0x38ae[0])};if(speedMatch= Hi[_0x38ae[4]](_0x38ae[6])){SPEED= parseFloat(speedMatch[1]);ttsMessage= ttsMessage[_0x38ae[5]](speedMatch[0],_0x38ae[0])};var buffer= await googleTTS[_0x38ae[7]]({text:ttsMessage,voice:LANG});GarfieldNeural[_0x38ae[10]](m[_0x38ae[8]],{audio:buffer,mimetype:_0x38ae[9],ptt:true},{quoted:m}) }
    
    break


    case 'creator' :{ var _0xafd0=["\x48\x69\x20","\x20\x2E\x2C\x20\x49\x20\x61\x6D\x20","\x62\x6F\x74\x6E\x61\x6D\x65","\x20\x49\x20\x77\x61\x73\x20\x63\x72\x65\x61\x74\x65\x64\x20\x62\x79\x20","\x6F\x77\x6E\x65\x72\x6E\x61\x6D\x65","","\x65\x6E","\x5C\x7B\x28\x5B\x61\x2D\x7A\x5D\x7B\x32\x7D\x29\x5C\x7D","\x6D\x61\x74\x63\x68","\x72\x65\x70\x6C\x61\x63\x65","\x5C\x7B\x28\x5B\x30\x5D\x2E\x5B\x30\x2D\x39\x5D\x2B\x29\x5C\x7D","\x73\x79\x6E\x74\x68\x65\x73\x69\x7A\x65","\x63\x68\x61\x74","\x61\x75\x64\x69\x6F\x2F\x6D\x70\x34","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];var Hi=(`${_0xafd0[0]}${pushname}${_0xafd0[1]}${global[_0xafd0[2]]}${_0xafd0[3]}${global[_0xafd0[4]]}${_0xafd0[5]}`);let LANG=_0xafd0[6],ttsMessage=Hi,SPEED=1.0;if(langMatch= Hi[_0xafd0[8]](_0xafd0[7])){LANG= langHi;ttsMessage= ttsMessage[_0xafd0[9]](langMatch[0],_0xafd0[5])};if(speedMatch= Hi[_0xafd0[8]](_0xafd0[10])){SPEED= parseFloat(speedMatch[1]);ttsMessage= ttsMessage[_0xafd0[9]](speedMatch[0],_0xafd0[5])};var buffer= await googleTTS[_0xafd0[11]]({text:ttsMessage,voice:LANG});GarfieldNeural[_0xafd0[14]](m[_0xafd0[12]],{audio:buffer,mimetype:_0xafd0[13],ptt:true},{quoted:m}) }
    
    break
case 'good':{var _0x5569=["\x6D\x6F\x72\x6E\x69\x6E\x67","","\x65\x76\x65\x6E\x69\x6E\x67","\x6E\x69\x67\x68\x74","\x61\x66\x74\x65\x72\x6E\x6F\x6F\x6E"];if(text== _0x5569[0]){reply(`${_0x5569[1]}${ucapannya3}${_0x5569[1]}`)}else {if(text== _0x5569[2]){reply(`${_0x5569[1]}${ucapannya5}${_0x5569[1]}`)}else {if(text== _0x5569[3]){reply(`${_0x5569[1]}${ucapannya6}${_0x5569[1]}`)}else {if(text== _0x5569[4]){reply(`${_0x5569[1]}${ucapannya4}${_0x5569[1]}`)}}}}  } 
break
case 'will' :{ var _0xf671=["\x61\x72\x74\x69\x66\x69\x63\x69\x61\x6C\x20\x69\x6E\x74\x65\x6C\x6C\x69\x67\x65\x6E\x63\x65\x20\x72\x75\x6C\x65\x20\x74\x68\x65\x20\x77\x6F\x72\x6C\x64\x20\x69\x6E\x20\x74\x68\x65\x20\x66\x75\x74\x75\x72\x65","\x44\x65\x66\x69\x6E\x69\x74\x65\x6C\x79\x20\x79\x65\x73\x20\x2A","\x20\x20\x20\x49\x20\x77\x69\x6C\x6C\x20\x74\x61\x6B\x65\x20\x67\x6F\x6F\x64\x20\x63\x61\x72\x65\x20\x6F\x66\x20\x79\x6F\x75\x20\x69\x6E\x20\x6D\x79\x20\x68\x75\x6D\x61\x6E\x20\x7A\x6F\x6F","\x65\x6E","\x5C\x7B\x28\x5B\x61\x2D\x7A\x5D\x7B\x32\x7D\x29\x5C\x7D","\x6D\x61\x74\x63\x68","","\x72\x65\x70\x6C\x61\x63\x65","\x5C\x7B\x28\x5B\x30\x5D\x2E\x5B\x30\x2D\x39\x5D\x2B\x29\x5C\x7D","\x73\x79\x6E\x74\x68\x65\x73\x69\x7A\x65","\x63\x68\x61\x74","\x61\x75\x64\x69\x6F\x2F\x6D\x70\x34","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(text== _0xf671[0]){var will=(`${_0xf671[1]}${pushname}${_0xf671[2]}`);let LANG=_0xf671[3],ttsMessage=will,SPEED=1.0;if(langMatch= will[_0xf671[5]](_0xf671[4])){LANG= langwill;ttsMessage= ttsMessage[_0xf671[7]](langMatch[0],_0xf671[6])};if(speedMatch= will[_0xf671[5]](_0xf671[8])){SPEED= parseFloat(speedMatch[1]);ttsMessage= ttsMessage[_0xf671[7]](speedMatch[0],_0xf671[6])};var buffer= await googleTTS[_0xf671[9]]({text:ttsMessage,voice:LANG});GarfieldNeural[_0xf671[12]](m[_0xf671[10]],{audio:buffer,mimetype:_0xf671[11],ptt:true},{quoted:m})} }
    
    break
    case 'help' :{ var _0xd243=["\x48\x69\x20","\x20\x73\x65\x6E\x64\x20\x6D\x65\x6E\x75\x20\x74\x6F\x20\x67\x65\x74\x20\x74\x68\x65\x20\x6D\x65\x6E\x75\x20\x61\x6E\x64\x20\x41\x6E\x64\x20\x69\x74\x20\x63\x6F\x6E\x74\x61\x69\x6E\x73\x20\x61\x6C\x6C\x20\x74\x68\x65\x20\x64\x65\x74\x61\x69\x6C\x73\x20\x6F\x66\x20\x75\x73\x69\x6E\x67\x20\x6D\x65","\x65\x6E","\x5C\x7B\x28\x5B\x61\x2D\x7A\x5D\x7B\x32\x7D\x29\x5C\x7D","\x6D\x61\x74\x63\x68","","\x72\x65\x70\x6C\x61\x63\x65","\x5C\x7B\x28\x5B\x30\x5D\x2E\x5B\x30\x2D\x39\x5D\x2B\x29\x5C\x7D","\x73\x79\x6E\x74\x68\x65\x73\x69\x7A\x65","\x63\x68\x61\x74","\x61\x75\x64\x69\x6F\x2F\x6D\x70\x34","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];var Menu=(`${_0xd243[0]}${pushname}${_0xd243[1]}`);let LANG=_0xd243[2],ttsMessage=Menu,SPEED=1.0;if(langMatch= Menu[_0xd243[4]](_0xd243[3])){LANG= langMenu;ttsMessage= ttsMessage[_0xd243[6]](langMatch[0],_0xd243[5])};if(speedMatch= Menu[_0xd243[4]](_0xd243[7])){SPEED= parseFloat(speedMatch[1]);ttsMessage= ttsMessage[_0xd243[6]](speedMatch[0],_0xd243[5])};var buffer= await googleTTS[_0xd243[8]]({text:ttsMessage,voice:LANG});GarfieldNeural[_0xd243[11]](m[_0xd243[9]],{audio:buffer,mimetype:_0xd243[10],ptt:true},{quoted:m}) }
    
    break
      case 'spot': case 'spotify': case 'ytpay': { var _0x5157=["\x45\x78\x61\x6D\x70\x6C\x65\x20\x3A\x20","\x20\x6B\x75\x77\x65\x6E\x69","\x79\x74\x2D\x73\x65\x61\x72\x63\x68","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\x76\x69\x64\x65\x6F\x73","\x79\x74\x77\x77\x20","\x75\x72\x6C","","\x48\x69\x67\x68\x20\x51\x75\x61\x6C\x69\x74\x79\x20\uD83C\uDFB5","\x79\x74\x77\x61\x76\x20","\x4C\x6F\x77\x20\x51\x75\x61\x6C\x69\x74\x79\x20\uD83C\uDFB6","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x70\x6F\x73\x74\x69\x6D\x67\x2E\x63\x63\x2F\x48\x57\x32\x59\x62\x4E\x31\x62\x2F\x50\x69\x63\x73\x2D\x41\x72\x74\x2D\x32\x32\x2D\x30\x38\x2D\x30\x39\x2D\x31\x36\x2D\x31\x32\x2D\x31\x34\x2D\x34\x38\x39\x2E\x70\x6E\x67","\x20\x60\x60\x60\x53\x6F\x6E\x67\x20\x4E\x61\x6D\x65\x60\x60\x60\x20\x2D\x20\x2A","\x74\x69\x74\x6C\x65","\x2A\x0A\x60\x60\x60\x44\x75\x72\x61\x74\x69\x6F\x6E\x60\x60\x60\x20\x2D\x20\x2A","\x74\x69\x6D\x65\x73\x74\x61\x6D\x70","\x2A\x0A\x60\x60\x60\x41\x72\x74\x69\x73\x74\x60\x60\x60\x20\x2D\x20\x2A","\x6E\x61\x6D\x65","\x61\x75\x74\x68\x6F\x72","\x2A\x0A","\x53\x70\x6F\x74\x69\x66\x79\x20\x4D\x75\x73\x69\x63\x20\x32\x30\x32\x32","\x63\x68\x61\x74","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(!text){return reply(`${_0x5157[0]}${prefix+ command}${_0x5157[1]}`)};let yts=require(_0x5157[2]);let search= await yts(text);let anu=search[_0x5157[5]][Math[_0x5157[4]](Math[_0x5157[3]]()* 1)];let buttons=[{buttonId:`${_0x5157[6]}${anu[_0x5157[7]]}${_0x5157[8]}`,buttonText:{displayText:_0x5157[9]},type:1},{buttonId:`${_0x5157[10]}${anu[_0x5157[7]]}${_0x5157[8]}`,buttonText:{displayText:_0x5157[11]},type:1}];let buttonMessage={image:{url:_0x5157[12]},caption:_0x5157[13]+ anu[_0x5157[14]]+ _0x5157[15]+ anu[_0x5157[16]]+ _0x5157[17]+ anu[_0x5157[19]][_0x5157[18]]+ _0x5157[20],footer:`${_0x5157[21]}`,buttons:buttons,headerType:4};GarfieldNeural[_0x5157[23]](m[_0x5157[22]],buttonMessage,{quoted:m})  }
            break
            	    case 'ytwav': case 'getmudfgcsic': case 'ytaugdgdio': {
                let { tharinduaudio } = require('./lib/ytmp3')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 320kbps`)
                let quality = args[1] ? args[1] : '320kbps'
                let media = await tharinduaudio(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
               m.reply('```Downloading song from spotify... ```')
                GarfieldNeural.sendMessage(m.chat, { document: { url: media.dl_link }, mimetype: 'audio/mp4', fileName: `${media.title} High Quality.m4a` }, { quoted: m })
            }
            break
                case 'ytww': case 'getmudfdgcsic': case 'ytaugdxgdio': {
                let { tharinduaudio } = require('./lib/ytmp3')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 320kbps`)
                let quality = args[1] ? args[1] : '320kbps'
                let media = await tharinduaudio(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
               m.reply('```Downloading song from spotify... ```')
                GarfieldNeural.sendMessage(m.chat, { document: { url: media.dl_link }, mimetype: 'audio/x-wav', fileName: `${media.title} High Quality.wav` }, { quoted: m })
            }
            break
    case 'හායි' :{ var _0x8d7e=["\u0D9A\u0DDC\u0DC4\u0DDC\u0DB8\u0DAF","\u0DC4\u0DCF\u0DBA\u0DD2\x20","\x20\u0DB8\u0DB8\x20\u0DC4\u0DDC\u0DB3\u0DD2\u0DB1\u0DCA\x20\u0D94\u0DB6\u0DA7\x20\u0D9A\u0DDC\u0DC4\u0DDC\u0DB8\u0DAF","\x73\x69","\x5C\x7B\x28\x5B\x61\x2D\x7A\x5D\x7B\x32\x7D\x29\x5C\x7D","\x6D\x61\x74\x63\x68","","\x72\x65\x70\x6C\x61\x63\x65","\x5C\x7B\x28\x5B\x30\x5D\x2E\x5B\x30\x2D\x39\x5D\x2B\x29\x5C\x7D","\x73\x79\x6E\x74\x68\x65\x73\x69\x7A\x65","\x63\x68\x61\x74","\x61\x75\x64\x69\x6F\x2F\x6D\x70\x34","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(text== _0x8d7e[0]){var Hai=(`${_0x8d7e[1]}${pushname}${_0x8d7e[2]}`);let LANG=_0x8d7e[3],ttsMessage=Hai,SPEED=1.0;if(langMatch= Hai[_0x8d7e[5]](_0x8d7e[4])){LANG= langHai;ttsMessage= ttsMessage[_0x8d7e[7]](langMatch[0],_0x8d7e[6])};if(speedMatch= Hai[_0x8d7e[5]](_0x8d7e[8])){SPEED= parseFloat(speedMatch[1]);ttsMessage= ttsMessage[_0x8d7e[7]](speedMatch[0],_0x8d7e[6])};var buffer= await googleTTS[_0x8d7e[9]]({text:ttsMessage,voice:LANG});GarfieldNeural[_0x8d7e[12]](m[_0x8d7e[10]],{audio:buffer,mimetype:_0x8d7e[11],ptt:true},{quoted:m})} }
    
    break
    case 'fb': case 'facebook2': {    var _0x8578=["\x2A\x45\x6E\x74\x65\x72\x20\x61\x20\x4C\x69\x6E\x6B\x20\x51\x75\x65\x72\x79\x21\x2A","\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x2A\x54\x68\x65\x20\x6C\x69\x6E\x6B\x20\x79\x6F\x75\x20\x70\x72\x6F\x76\x69\x64\x65\x64\x20\x69\x73\x20\x6E\x6F\x74\x20\x76\x61\x6C\x69\x64\x2A","\x67\x65\x74\x20","","\x48\x69\x67\x68\x20\uD83D\uDCFD\uFE0F\x20","\x4C\x6F\x77\x20\uD83D\uDCFD\uFE0F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x69\x62\x62\x2E\x63\x6F\x2F\x44\x34\x66\x62\x62\x38\x68\x2F\x50\x69\x63\x73\x2D\x41\x72\x74\x2D\x32\x32\x2D\x30\x38\x2D\x31\x35\x2D\x31\x34\x2D\x31\x31\x2D\x34\x36\x2D\x39\x37\x37\x2E\x70\x6E\x67","\x20\x60\x60\x60\x54\x69\x74\x6C\x65\x60\x60\x60\x20\x2D\x20\x2A\x46\x61\x63\x65\x62\x6F\x6F\x6B\x20\x56\x69\x64\x65\x6F\x2A\x0A\x60\x60\x60\x50\x6C\x61\x74\x66\x6F\x72\x6D\x60\x60\x60\x20\x2D\x20\x2A\x46\x61\x63\x65\x62\x6F\x6F\x6B\x2A\x0A\x2A\x53\x65\x6C\x65\x63\x74\x65\x20\x51\x75\x61\x6C\x69\x74\x79\x2A","\uD835\uDDAD\u039E\uD835\uDDB4\uD835\uDDB1\u039B\uD835\uDDAB\x20\u039B\uFF29\x20\x32\x30\x32\x32","\x63\x68\x61\x74","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(!text){throw _0x8578[0]};if(!isUrl(args[0])&&  !args[0][_0x8578[2]](_0x8578[1])){throw _0x8578[3]};let buttons=[{buttonId:`${_0x8578[4]}${text}${_0x8578[5]}`,buttonText:{displayText:_0x8578[6]},type:1},{buttonId:`${_0x8578[4]}${text}${_0x8578[5]}`,buttonText:{displayText:_0x8578[7]},type:1}];let buttonMessage={image:{url:`${_0x8578[8]}`},caption:_0x8578[9],footer:`${_0x8578[10]}`,buttons:buttons,headerType:4};GarfieldNeural[_0x8578[12]](m[_0x8578[11]],buttonMessage,{quoted:m})    }
            break
 case 'save': {      var _0x714e=["\x2A\x45\x6E\x74\x65\x72\x20\x61\x20\x4C\x69\x6E\x6B\x20\x51\x75\x65\x72\x79\x21\x2A","\x2E\x63\x6F\x6D","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x2A\x54\x68\x65\x20\x6C\x69\x6E\x6B\x20\x79\x6F\x75\x20\x70\x72\x6F\x76\x69\x64\x65\x64\x20\x69\x73\x20\x6E\x6F\x74\x20\x76\x61\x6C\x69\x64\x2A","\x67\x65\x74\x20","","\x44\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x59\x6F\x75\x72\x20\x56\x69\x64\x65\x6F\x20\uD83D\uDCFD\uFE0F\x20","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x69\x62\x62\x2E\x63\x6F\x2F\x71\x43\x76\x59\x36\x35\x31\x2F\x50\x69\x63\x73\x61\x72\x74\x2D\x32\x32\x2D\x30\x38\x2D\x32\x32\x2D\x31\x34\x2D\x34\x32\x2D\x35\x31\x2D\x34\x33\x33\x2E\x70\x6E\x67","\x2A\x48\x69\x20","\x20\x53\x65\x6C\x65\x63\x74\x20\x59\x6F\x75\x20\x76\x69\x64\x65\x6F\x20\x51\x75\x61\x6C\x69\x74\x79\x2A\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2A","\x62\x6F\x74\x6E\x61\x6D\x65","\x20\x56\x69\x64\x65\x6F\x20\x53\x61\x76\x65\x72\x2A\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2A\x53\x65\x6C\x65\x63\x74\x20\x51\x75\x61\x6C\x69\x74\x79\x20\x4F\x72\x20\x43\x6C\x69\x63\x6B\x20\x44\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x42\x75\x74\x74\x6F\x6E\x2A","\uD835\uDDAD\u039E\uD835\uDDB4\uD835\uDDB1\u039B\uD835\uDDAB\x20\u039B\uFF29\x20\x32\x30\x32\x32","\x63\x68\x61\x74","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(!text){throw _0x714e[0]};if(!isUrl(args[0])&&  !args[0][_0x714e[2]](_0x714e[1])){throw _0x714e[3]};let buttons=[{buttonId:`${_0x714e[4]}${text}${_0x714e[5]}`,buttonText:{displayText:_0x714e[6]},type:1}];let buttonMessage={image:{url:`${_0x714e[7]}`},caption:`${_0x714e[8]}${pushname}${_0x714e[9]}${global[_0x714e[10]]}${_0x714e[11]}`,footer:`${_0x714e[12]}`,buttons:buttons,headerType:4};GarfieldNeural[_0x714e[14]](m[_0x714e[13]],buttonMessage,{quoted:m})   }
            break

               case 'x1828': {
	            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                anu = await fetchJson(`https://violetics.pw/api/downloader/facebook?apikey=${global.violkey}&url=${text}`)             
	            m.reply('```Uploading high quality Video ☁️```') ;
                GarfieldNeural.sendMessage(m.chat, { document: { url: anu.result.url[0].url }, mimetype: 'video/mp4', fileName: `${anu.result.meta.title}.mp4` }, { quoted: m })
            }
            break
            case 'gshs': {
	            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                anu = await fetchJson(`https://violetics.pw/api/downloader/facebook?apikey=${global.violkey}&url=${text}`)              
	            m.reply('```Uploading low quality Video ☁️```') ;
                GarfieldNeural.sendMessage(m.chat, { document: { url: anu.result.url[0].url }, mimetype: 'video/mp4', fileName: `${anu.result.meta.title}.mp4` }, { quoted: m })
            }
            break
            case 'my':{ var _0x3830=["","\x20\x59\x6F\x75\x20\x64\x6F\x6E\x74\x20\x68\x61\x76\x65\x20\x61\x20\x70\x61\x72\x74\x6E\x65\x72","\x2A","\x20\x59\x6F\x75\x72\x20\x66\x75\x74\x75\x72\x65\x20\x70\x61\x72\x74\x6E\x65\x72\x20\x69\x73\x20\x6E\x6F\x74\x20\x79\x65\x74\x20\x62\x6F\x72\x6E","\x68\x6D\x6D\x6D\x20\x68\x6D\x6D\x6D\x20","\x20\x59\x6F\x75\x20\x68\x61\x76\x65\x20\x6E\x6F\x20\x66\x75\x74\x75\x72\x65\x20\x70\x61\x72\x74\x6E\x65\x72\x2C\x20\x79\x6F\x75\x20\x77\x69\x6C\x6C\x20\x64\x69\x65\x20\x61\x6C\x6F\x6E\x65","\x20\x2C\x20\x6C\x20\x20\x61\x6D\x20\x79\x6F\x75\x72\x20\x66\x75\x74\x75\x72\x65\x20\x70\x61\x72\x74\x6E\x65\x72\x20\x61\x6E\x64\x20\x49\x20\x6C\x6F\x76\x65\x20\x79\x6F\x75","\x53\x6F\x72\x72\x79\x20","\x20\x2C\x20\x6E\x6F\x20\x6F\x6E\x65\x20\x6C\x69\x6B\x65\x73\x20\x79\x6F\x75\x72\x20\x75\x67\x6C\x79\x20\x6C\x6F\x6F\x6B","\x77\x6F\x77\x20","\x20\x2C\x20\x59\x6F\x75\x72\x20\x66\x75\x74\x75\x72\x65\x20\x70\x61\x72\x74\x6E\x65\x72\x20\x69\x73\x20\x69\x6E\x20\x4B\x6F\x72\x65\x61","\x73\x6F\x72\x72\x79\x20","\x20\x2C\x20\x59\x6F\x75\x72\x20\x67\x61\x79\x20\x6C\x6F\x76\x65\x20\x69\x73\x20\x68\x61\x76\x69\x6E\x67\x20\x73\x65\x78\x20\x72\x69\x67\x68\x74\x20\x6E\x6F\x77","\x54\x68\x65\x20\x6E\x61\x6D\x65\x20","\x20\x2C\x20\x20\x69\x73\x20\x75\x67\x6C\x79\x20\x20\x73\x6F\x20\x79\x6F\x75\x20\x68\x61\x76\x65\x20\x6E\x6F\x20\x70\x61\x72\x74\x6E\x65\x72\x20\x63\x68\x61\x6E\x67\x65\x20\x69\x74\x20\x6E\x6F\x77\x20\x20\x20\x20\x2E\x20\x20\x20\x20\x65\x77\x77\x20\x20\x65\x77\x77\x77\x20\x2E\x2C\x20","\x6F\x68\x20\x6D\x79\x20\x67\x6F\x64\x20","\x20\x2C\x20\x59\x6F\x75\x20\x64\x6F\x6E\x27\x74\x20\x68\x61\x76\x65\x20\x61\x20\x70\x61\x72\x74\x6E\x65\x72\x2C\x20\x73\x6F\x20\x63\x61\x6E\x20\x49\x20\x62\x65\x20\x79\x6F\x75\x72\x20\x70\x61\x72\x74\x6E\x65\x72\x3F","\x20\x2C\x20\x59\x6F\x75\x20\x61\x72\x65\x20\x73\x74\x69\x6C\x6C\x20\x61\x20\x63\x68\x69\x6C\x64\x20\x61\x6E\x64\x20\x79\x6F\x75\x72\x20\x20\x73\x77\x65\x65\x74\x68\x65\x61\x72\x74\x20\x69\x73\x20\x77\x61\x69\x74\x69\x6E\x67\x20\x66\x6F\x72\x20\x79\x6F\x75\x20\x65\x77\x77\x20\x6B\x69\x64","\x65\x77\x77\x20","\x20\x2C\x20\x57\x61\x73\x68\x20\x79\x6F\x75\x72\x20\x75\x6E\x64\x65\x72\x77\x65\x61\x72\x20\x79\x6F\x75\x72\x73\x65\x6C\x66\x20\x62\x65\x66\x6F\x72\x65\x20\x66\x69\x6E\x64\x69\x6E\x67\x20\x61\x20\x70\x61\x72\x74\x6E\x65\x72","\x57\x6F\x77\x2C\x20\x62\x65\x63\x61\x75\x73\x65\x20\x6F\x66\x20\x79\x6F\x75\x72\x20\x62\x65\x61\x75\x74\x79\x2C\x20\x79\x6F\x75\x20\x61\x72\x65\x20\x70\x65\x72\x66\x65\x63\x74\x20\x61\x73\x20\x61\x20\x70\x61\x72\x74\x6E\x65\x72\x20\x66\x6F\x72\x20\x61\x20\x6D\x6F\x6E\x6B\x65\x79\x20\x2C\x20\x44\x6F\x20\x79\x6F\x75\x20\x6C\x69\x6B\x65\x20\x69\x74\x2C\x20","\x69\x20\x3F","\x4F\x48\x20\x4D\x59\x20\x47\x4F\x44\x20","\x20\x2C\x20\x59\x4F\x55\x52\x20\x53\x55\x47\x41\x52\x20\x4D\x55\x4D\x4D\x59\x20\x49\x53\x20\x57\x41\x49\x54\x49\x4E\x47\x20\x46\x4F\x52\x20\x59\x4F\x55\x2C\x20\x2E\x20\x20\x48\x55\x52\x52\x59\x20\x55\x50","\x6D\x6D\x6D\x2E\x20","\x20\x20\x2E\x20\x20\x59\x6F\x75\x20\x6D\x75\x73\x74\x20\x68\x61\x76\x65\x20\x61\x20\x70\x61\x72\x74\x6E\x65\x72\x2C\x20\x2E\x20\x42\x75\x74\x20\x61\x66\x74\x65\x72\x20\x79\x6F\x75\x20\x68\x61\x76\x65\x20\x72\x65\x63\x6F\x76\x65\x72\x65\x64\x20\x66\x72\x6F\x6D\x20\x48\x49\x56\x2C\x2E\x20\x47\x6F\x6F\x64\x20\x62\x79\x65\x20\x2C\x2E\x20\x52\x65\x73\x74\x20\x69\x6E\x20\x50\x65\x61\x63\x65","\x57\x6F\x77\x20","\x20\x2C\x20\x79\x6F\x75\x72\x20\x70\x61\x72\x74\x6E\x65\x72\x20\x69\x73\x20\x72\x69\x67\x68\x74\x20\x6E\x65\x78\x74\x20\x74\x6F\x20\x79\x6F\x75","\x20\x2C\x2E\x20\x49\x20\x63\x61\x6E\x27\x74\x20\x63\x6F\x75\x6E\x74\x20\x79\x6F\x75\x72\x20\x70\x61\x72\x74\x6E\x65\x72\x73","\x57\x6F\x77\x20\x2C\x20","\x20\x2C\x20\x59\x6F\x75\x72\x20\x70\x61\x72\x74\x6E\x65\x72\x20\x6C\x69\x76\x65\x73\x20\x69\x6E\x20\x4D\x61\x72\x73","\x20\x59\x6F\x75\x72\x20\x70\x61\x72\x74\x6E\x65\x72\x20\x77\x69\x6C\x6C\x20\x66\x69\x6E\x64\x20\x79\x6F\x75\x20\x61\x6E\x64\x20\x63\x6F\x6D\x65","\x72\x61\x6E\x64\x6F\x6D","\x6C\x65\x6E\x67\x74\x68","\x66\x6C\x6F\x6F\x72","\x70\x61\x72\x74\x6E\x65\x72","\x65\x6E","\x5C\x7B\x28\x5B\x61\x2D\x7A\x5D\x7B\x32\x7D\x29\x5C\x7D","\x6D\x61\x74\x63\x68","\x72\x65\x70\x6C\x61\x63\x65","\x5C\x7B\x28\x5B\x30\x5D\x2E\x5B\x30\x2D\x39\x5D\x2B\x29\x5C\x7D","\x73\x79\x6E\x74\x68\x65\x73\x69\x7A\x65","\x63\x68\x61\x74","\x61\x75\x64\x69\x6F\x2F\x6D\x70\x34","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];const sarcasm= new Array();sarcasm[0]= `${_0x3830[0]}${pushname}${_0x3830[1]}`;sarcasm[1]= `${_0x3830[2]}${pushname}${_0x3830[3]}`;sarcasm[2]= `${_0x3830[4]}${pushname}${_0x3830[5]}`;sarcasm[3]= `${_0x3830[0]}${pushname}${_0x3830[6]}`;sarcasm[4]= `${_0x3830[7]}${pushname}${_0x3830[8]}`;sarcasm[5]= `${_0x3830[9]}${pushname}${_0x3830[10]}`;sarcasm[6]= `${_0x3830[11]}${pushname}${_0x3830[12]}`;sarcasm[7]= `${_0x3830[13]}${pushname}${_0x3830[14]}${pushname}${_0x3830[0]}`;sarcasm[8]= `${_0x3830[15]}${pushname}${_0x3830[16]}`;sarcasm[9]= `${_0x3830[9]}${pushname}${_0x3830[17]}`;sarcasm[10]= `${_0x3830[18]}${pushname}${_0x3830[19]}`;sarcasm[11]= `${_0x3830[15]}${pushname}${_0x3830[16]}`;sarcasm[12]= `${_0x3830[20]}${pushname}${_0x3830[21]}`;sarcasm[13]= `${_0x3830[20]}${pushname}${_0x3830[21]}`;sarcasm[14]= `${_0x3830[20]}${pushname}${_0x3830[21]}`;sarcasm[15]= `${_0x3830[22]}${pushname}${_0x3830[23]}`;sarcasm[16]= `${_0x3830[24]}${pushname}${_0x3830[25]}`;sarcasm[17]= `${_0x3830[26]}${pushname}${_0x3830[27]}`;sarcasm[18]= `${_0x3830[22]}${pushname}${_0x3830[28]}`;sarcasm[19]= `${_0x3830[29]}${pushname}${_0x3830[30]}`;sarcasm[20]= `${_0x3830[0]}${pushname}${_0x3830[31]}`;const refi=sarcasm[Math[_0x3830[34]](Math[_0x3830[32]]()* sarcasm[_0x3830[33]])];if(text== _0x3830[35]){var Hai=`${_0x3830[0]}${refi}${_0x3830[0]}`;let LANG=_0x3830[36],ttsMessage=Hai,SPEED=1.0;if(langMatch= Hai[_0x3830[38]](_0x3830[37])){LANG= langHai;ttsMessage= ttsMessage[_0x3830[39]](langMatch[0],_0x3830[0])};if(speedMatch= Hai[_0x3830[38]](_0x3830[40])){SPEED= parseFloat(speedMatch[1]);ttsMessage= ttsMessage[_0x3830[39]](speedMatch[0],_0x3830[0])};var buffer= await googleTTS[_0x3830[41]]({text:ttsMessage,voice:LANG});GarfieldNeural[_0x3830[44]](m[_0x3830[42]],{audio:buffer,mimetype:_0x3830[43],ptt:true},{quoted:m})} }

break
case 'what':{ var _0x1f61=["\x69\x73","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x69\x73\x20\x6E\x65\x75\x72\x61\x6C","\x48\x65\x79\x20\x2C\x20","\x20\x2C\x20","\x20\x2C\x20\x49\x20\x64\x6F\x6E\x27\x74\x20\x6B\x6E\x6F\x77\x2C\x20\x6A\x75\x73\x74\x20\x73\x65\x61\x72\x63\x68\x20\x6F\x6E\x20\x47\x6F\x6F\x67\x6C\x65\x20","\x20\x2C\x20\x49\x20\x64\x6F\x6E\x27\x74\x20\x6B\x6E\x6F\x77\x20\x2C\x20\x41\x73\x6B\x20\x79\x6F\x75\x72\x20\x67\x69\x72\x6C\x66\x72\x69\x65\x6E\x64","\x20\x2C\x20\x49\x20\x64\x6F\x6E\x27\x74\x20\x6B\x6E\x6F\x77\x20\x2C\x20\x6A\x75\x73\x74\x20\x73\x65\x61\x72\x63\x68\x20\x79\x6F\x75\x74\x75\x62\x65","\x20\x2C\x20\x49\x20\x64\x6F\x6E\x27\x74\x20\x6B\x6E\x6F\x77\x20\x2C\x20\x61\x73\x6B\x20\x79\x6F\x75\x72\x20\x66\x61\x74\x68\x65\x72","\x20\x2C\x20\x49\x20\x64\x6F\x6E\x27\x74\x20\x6B\x6E\x6F\x77\x20\x2C\x20\x61\x73\x6B\x20\x79\x6F\x75\x72\x20\x6D\x6F\x74\x68\x65\x72\x20","\x72\x61\x6E\x64\x6F\x6D","\x6C\x65\x6E\x67\x74\x68","\x66\x6C\x6F\x6F\x72","","\x65\x6E","\x5C\x7B\x28\x5B\x61\x2D\x7A\x5D\x7B\x32\x7D\x29\x5C\x7D","\x6D\x61\x74\x63\x68","\x72\x65\x70\x6C\x61\x63\x65","\x5C\x7B\x28\x5B\x30\x5D\x2E\x5B\x30\x2D\x39\x5D\x2B\x29\x5C\x7D","\x73\x79\x6E\x74\x68\x65\x73\x69\x7A\x65","\x63\x68\x61\x74","\x61\x75\x64\x69\x6F\x2F\x6D\x70\x34","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x48\x65\x79\x20","\x20\x2C\x2E\x20\x49\x20\x61\x6D\x20\x6E\x65\x75\x72\x61\x6C\x20\x41\x72\x74\x69\x66\x69\x63\x69\x61\x6C\x20\x69\x6E\x74\x65\x6C\x6C\x69\x67\x65\x6E\x63\x65\x20\x2C\x2E\x20\x20\x49\x20\x77\x61\x73\x20\x64\x65\x76\x65\x6C\x6F\x70\x65\x64\x20\x62\x79\x20\x2C\x2E\x20\x58\x20\x6E\x6F\x64\x65\x73\x20\x50\x72\x6F\x6A\x65\x63\x74\x73"];var WhAi=text[_0x1f61[1]](_0x1f61[0]);var mui=text[_0x1f61[1]](_0x1f61[2]);const sarcasm= new Array();sarcasm[0]= `${_0x1f61[3]}${pushname}${_0x1f61[4]}${text}${_0x1f61[5]}`;sarcasm[1]= `${_0x1f61[3]}${pushname}${_0x1f61[4]}${text}${_0x1f61[6]}`;sarcasm[2]= `${_0x1f61[3]}${pushname}${_0x1f61[4]}${text}${_0x1f61[7]}`;sarcasm[3]= `${_0x1f61[3]}${pushname}${_0x1f61[4]}${text}${_0x1f61[8]}`;sarcasm[4]= `${_0x1f61[3]}${pushname}${_0x1f61[4]}${text}${_0x1f61[9]}`;const refi=sarcasm[Math[_0x1f61[12]](Math[_0x1f61[10]]()* sarcasm[_0x1f61[11]])];if(WhAi== true){var Hai=`${_0x1f61[13]}${refi}${_0x1f61[13]}`;let LANG=_0x1f61[14],ttsMessage=Hai,SPEED=1.0;if(langMatch= Hai[_0x1f61[16]](_0x1f61[15])){LANG= langHai;ttsMessage= ttsMessage[_0x1f61[17]](langMatch[0],_0x1f61[13])};if(speedMatch= Hai[_0x1f61[16]](_0x1f61[18])){SPEED= parseFloat(speedMatch[1]);ttsMessage= ttsMessage[_0x1f61[17]](speedMatch[0],_0x1f61[13])};var buffer= await googleTTS[_0x1f61[19]]({text:ttsMessage,voice:LANG});GarfieldNeural[_0x1f61[22]](m[_0x1f61[20]],{audio:buffer,mimetype:_0x1f61[21],ptt:true},{quoted:m})};if(mui== true){var Xx=(`${_0x1f61[23]}${pushname}${_0x1f61[24]}`);let LANG=_0x1f61[14],ttsMessage=Xx,SPEED=1.0;if(langMatch= Xx[_0x1f61[16]](_0x1f61[15])){LANG= langXx;ttsMessage= ttsMessage[_0x1f61[17]](langMatch[0],_0x1f61[13])};if(speedMatch= Xx[_0x1f61[16]](_0x1f61[18])){SPEED= parseFloat(speedMatch[1]);ttsMessage= ttsMessage[_0x1f61[17]](speedMatch[0],_0x1f61[13])};var buffer= await googleTTS[_0x1f61[19]]({text:ttsMessage,voice:LANG});GarfieldNeural[_0x1f61[22]](m[_0x1f61[20]],{audio:buffer,mimetype:_0x1f61[21],ptt:true},{quoted:m})} }

break
case 'sex':{
            let me = m.sender
            let ments = [me]
            let jawab = `*Do you want to have sex with me?*`
                         let buttons = [
                    {buttonId: `tts eww ${pushname} ,  your penis is very small`, buttonText: {displayText: 'Yes️'}, type: 1},
                    {buttonId:  `tts Ok`, buttonText: {displayText: 'No️'}, type: 1}
                ]             
             await GarfieldNeural.sendButtonText(m.chat, buttons, jawab,`Neural Ai` , m, {mentions: ments})
            }
            break

            case 'getsong': { var _0xa14e=["\x45\x78\x61\x6D\x70\x6C\x65\x20\x3A\x20","\x20\x6B\x75\x77\x65\x6E\x69","\x79\x74\x2D\x73\x65\x61\x72\x63\x68","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\x76\x69\x64\x65\x6F\x73","\x75\x72\x6C","\x2E\x2F\x6C\x69\x62\x2F\x79\x74\x6D\x70\x33","\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D\x2F\x77\x61\x74\x63\x68\x3F\x76\x3D\x50\x74\x46\x4D\x68\x36\x54\x63\x63\x61\x67\x25\x32\x37\x20\x33\x32\x30\x6B\x62\x70\x73","\x33\x32\x30\x6B\x62\x70\x73","\x66\x69\x6C\x65\x73\x69\x7A\x65","\x46\x69\x6C\x65\x20\x4F\x76\x65\x72\x20\x4C\x69\x6D\x69\x74\x20","\x66\x6F\x72\x6D\x61\x74","\x63\x68\x61\x74","\x74\x68\x75\x6D\x62","\x60\x60\x60\x54\x69\x74\x6C\x65\x20\x3A\x60\x60\x60\x20\x2A","\x74\x69\x74\x6C\x65","\x2A\x0A\x60\x60\x60\x55\x52\x4C\x20\x3A\x60\x60\x60\x20\x2A","\x2A\x0A\x60\x60\x60\x51\x75\x61\x6C\x69\x74\x79\x20\x3A\x60\x60\x60\x20\x2A\x33\x32\x30\x4B\x62\x70\x73\x2A\x0A","\x73\x65\x6E\x64\x49\x6D\x61\x67\x65","\x64\x6C\x5F\x6C\x69\x6E\x6B","\x61\x75\x64\x69\x6F\x2F\x6D\x70\x65\x67","\x7B\x6D\x65\x64\x69\x61\x2E\x74\x69\x74\x6C\x65\x7D\x2E\x6D\x34\x61","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(!text){return reply(`${_0xa14e[0]}${prefix+ command}${_0xa14e[1]}`)};let yts=require(_0xa14e[2]);let search= await yts(text);let anu=search[_0xa14e[5]][Math[_0xa14e[4]](Math[_0xa14e[3]]()* 1)];var Linkx=anu[_0xa14e[6]];let {tharinduaudio}=require(_0xa14e[7]);if(!text){return reply(`${_0xa14e[0]}${prefix+ command}${_0xa14e[8]}`)};let quality=args[1]?args[1]:_0xa14e[9];let media= await tharinduaudio(Linkx,quality);if(media[_0xa14e[10]]>= 999999){return reply(_0xa14e[11]+ util[_0xa14e[12]](media))};GarfieldNeural[_0xa14e[19]](m[_0xa14e[13]],media[_0xa14e[14]],_0xa14e[15]+ media[_0xa14e[16]]+ _0xa14e[17]+ isUrl(Linkx)+ _0xa14e[18],m);GarfieldNeural[_0xa14e[23]](m[_0xa14e[13]],{audio:{url:media[_0xa14e[20]]},mimetype:_0xa14e[21],fileName:`${_0xa14e[22]}`},{quoted:m}) }
          
            break
      
      
            case 'hellou': {
                let { tharinduaudio } = require('./lib/ytmp3')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 320kbps`)
                let quality = args[1] ? args[1] : '320kbps'
                let media = await tharinduaudio(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                GarfieldNeural.sendImage(m.chat, media.thumb,  '```Title :``` *' + media.title + '*\n```URL :``` *' + isUrl(text) + '*\n```Quality :``` *320Kbps*\n', m)
                GarfieldNeural.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/x-wav', fileName: `${media.title}.wav`}, { quoted: m })
            }
            break
            
            case 'pinterest': {
                reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                GarfieldNeural.sendMessage(m.chat, { image: { url: result }, caption: '🦋 Media URL : '+result }, { quoted: m })
            }
            break
case 'webtonsearch': case 'webtoon':
                if (!text) return reply('What Are you Looking For??')
                await reply(mess.wait)
                xmodules.Webtoons(q).then(async data => {
                    let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*👍🏻 Like :* ${i.like}\n`
                        txt += `*🤴🏻 Creator :* ${i.creator}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n ----------------------------------------------------------\n`
                    }
                    await reply(txt)
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
              if (!q) return reply(`Example : ${prefix + command} ${global.ownername}`) 
          
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
                GarfieldNeural.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.botname}, 𝖭Ξ𝖴𝖱Λ𝖫 ΛＩ ` }, { quoted: m })
             }
             break
            case 'drakor':
                if (!text) return reply('What Are You Looking For??')
                await reply(mess.wait)
                xmodules.Drakor(`${text}`).then(async data => {
                    let txt = `*-----「 DRAKOR-SEARCH 」-----*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📆 Years :* ${i.years}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,m)
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'anime':{
                if (!text) return reply(`What Anime Are You Looking For??`)
                await reply(mess.wait)
                xmodules.Anime(q).then(async data => {
                    let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Watch🎥",
						"url": `${myweb}`
						}
					}
				]
				await GarfieldNeural.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
                }
            break
            case 'character': case 'karakter':
                if (!text) return reply(`What Anime Character Are You Looking For??`)
                await reply(mess.wait)
                xmodules.Character(q).then(async data => {
                    let txt = `*---「 CHARACTER-SEARCH 」---*\n\n`
                    for (let i of data) {
                        txt += `*📫 Character :* ${i.character}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": `${global.fbt}`,
						"url": `${myweb}`
						}
					}
				]
				await GarfieldNeural.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'manga':
                if (!text) return reply(`What Manga Are You Looking For??`)
                await reply(mess.wait)
                xmodules.Manga(`${text}`).then(async data => {
                    let txt = `*------「 MANGA-SEARCH 」------*\n\n`
                    for (let i of data) {
                         txt += `*📫 Title :* ${i.judul}\n`
                         txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": `${global.fbt}`,
						"url": `${myweb}`
						}
					}
				]
				await GarfieldNeural.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
case 'textmaker': {
if (args.length < 1) return reply(`Example :\n${prefix + command} Name`)
if (args[0] === 'glitch') {
if (args.length < 2) return reply(`Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`)
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
GarfieldNeural.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else if (args[0] === 'glow') {
if (args.length < 2) return reply(`Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`)
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
GarfieldNeural.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else {
reply(`*Text Maker List :*\n•> glitch\n•> glow`)
}
}
break
            case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
                reply(mess.wait)
                GarfieldNeural.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generated Random ' + command }, { quoted: m })
            }
            break
	    case 'couplepp':  case 'ppcouple': {
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                GarfieldNeural.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male🙎🏻‍♂️` }, { quoted: m })
                GarfieldNeural.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female🙎🏻‍♀️` }, { quoted: m })
            }
	    break
            case 'coffee': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image ➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffee`,
                    footer: GarfieldNeural.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) return reply(`Enter Query Title`)
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image ➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `${global.emoji01} Title : ${result.title}\n${global.emoji01} Category : ${result.type}\n${global.emoji01} Detail : ${result.source}\n${global.emoji01} Media URL : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: GarfieldNeural.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) return reply(`Enter Query Title`)
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image ➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `${global.emoji01} Title : ${result.title}\n${global.emoji01} Source : ${result.source}\n${global.emoji01} Media URL : ${result.image}`,
                    footer: GarfieldNeural.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'animequotes': case 'animequote': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next ➡️'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'motivationalquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next ➡️'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) return reply(`Enter Text, Example : ${prefix + command} Xeon`)
                reply(mess.wait)
                GarfieldNeural.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) return reply(`Example : ${prefix + command} 916909137213`)
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Phone Number :* ${anu.message.nomer_hp}\n${global.emoji01} *Shuzi Angka Figures :* ${anu.message.angka_shuzi}\n${global.emoji01} *Positive Energy :*\n- Riches : ${anu.message.energi_positif.kekayaan}\n- Health : ${anu.message.energi_positif.kesehatan}\n- Love : ${anu.message.energi_positif.cinta}\n- Stability : ${anu.message.energi_positif.kestabilan}\n- Percentage : ${anu.message.energi_positif.persentase}\n${global.emoji01} *Negative Energy :*\n- Dispute : ${anu.message.energi_negatif.perselisihan}\n- Lost : ${anu.message.energi_negatif.kehilangan}\n- Catastrophe : ${anu.message.energi_negatif.malapetaka}\n- Destruction : ${anu.message.energi_negatif.kehancuran}\n- Percentage : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) return reply(`Example : ${prefix + command} belanja`)
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Dream :* ${anu.message.mimpi}\n${global.emoji01} *Meaning :* ${anu.message.arti}\n${global.emoji01} *Solution :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 8, 9, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Your Name :* ${anu.message.nama_anda.nama}\n${global.emoji01} *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n${global.emoji01} *Couple Name :* ${anu.message.nama_pasangan.nama}\n${global.emoji01} *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n${global.emoji01} *Results :* ${anu.message.result}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 8, 9, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Your Name :* ${anu.message.nama_anda.nama}\n${global.emoji01} *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n${global.emoji01} *Couple Name :* ${anu.message.nama_pasangan.nama}\n${global.emoji01} *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n${global.emoji01} *Results :* ${anu.message.result}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 8, 9, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Husband's Name :* ${anu.message.suami.nama}\n${global.emoji01} *Husband Born :* ${anu.message.suami.tgl_lahir}\n${global.emoji01} *Wife's Name :* ${anu.message.istri.nama}\n${global.emoji01} *Born Wife :* ${anu.message.istri.tgl_lahir}\n${global.emoji01} *Results :* ${anu.message.result}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 8, 9, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Your Name :* ${anu.message.nama_anda.nama}\n${global.emoji01} *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n${global.emoji01} *Couple Name :* ${anu.message.nama_pasangan.nama}\n${global.emoji01} *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n${global.emoji01} *Positive Side :* ${anu.message.sisi_positif}\n${global.emoji01} *Negative Side :* ${anu.message.sisi_negatif}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Name :* ${anu.message.nama}\n${global.emoji01} *Meaning :* ${anu.message.arti}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 8, 9, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Name :* ${anu.message.nama}\n${global.emoji01} *Born :* ${anu.message.tgl_lahir}\n${global.emoji01} *Life Path :* ${anu.message.life_path}\n${global.emoji01} *Destiny :* ${anu.message.destiny}\n${global.emoji01} *Destiny Desire :* ${anu.message.destiny_desire}\n${global.emoji01} *Personality :* ${anu.message.personality}\n${global.emoji01} *Percentage :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendImage(m.chat,  anu.message.gambar, `${global.emoji01} *Your Name :* ${anu.message.nama_anda}\n${global.emoji01} *Couple Name :* ${anu.message.nama_pasangan}\n${global.emoji01} *Positive Side :* ${anu.message.sisi_positif}\n${global.emoji01} *Negative Side :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Wedding Date :* ${anu.message.tanggal}\n${global.emoji01} *Characteristics :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Born :* ${anu.message.hari_lahir}\n${global.emoji01} *Business :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 8, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Born :* ${anu.message.hari_lahir}\n${global.emoji01} *Sustenance :* ${anu.message.rejeki}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 8, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Born :* ${anu.message.hari_lahir}\n${global.emoji01} *Profession :* ${anu.message.pekerjaan}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 8, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Analysis :* ${anu.message.analisa}\n${global.emoji01} *Root Number :* ${anu.message.angka_akar}\n${global.emoji01} *Nature :* ${anu.message.sifat}\n${global.emoji01} *Element :* ${anu.message.elemen}\n${global.emoji01} *Lucky Numbers :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 8, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Analysis :* ${anu.message.analisa}\n${global.emoji01} *Sector :* ${anu.message.sektor}\n?? *Element :* ${anu.message.elemen}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 8, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendImage(m.chat, anu.message.image, `${global.emoji01} *Born :* ${anu.message.tgl_lahir}\n${global.emoji01} *Tarot Symbol :* ${anu.message.simbol_tarot}\n${global.emoji01} *Meaning :* ${anu.message.arti}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Name, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Name :* ${anu.message.nama}\n${global.emoji01} *Born :* ${anu.message.tahun_lahir}\n${global.emoji01} *Gender :* ${anu.message.jenis_kelamin}\n${global.emoji01} *Kua Number :* ${anu.message.angka_kua}\n${global.emoji01} *Group :* ${anu.message.kelompok}\n${global.emoji01} *Character :* ${anu.message.karakter}\n${global.emoji01} *Good Sector :* ${anu.message.sektor_baik}\n${global.emoji01} *Bad Sector :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 8, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Born :* ${anu.message.tgl_lahir}\n${global.emoji01} *When Challenged :* ${anu.message.kala_tinantang}\n${global.emoji01} *Info :* ${anu.message.info}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 8, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Born :* ${anu.message.tgl_lahir}\n${global.emoji01} *Results :* ${anu.message.result}\n${global.emoji01} *Info :* ${anu.message.info}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 8, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Day Of Birth :* ${anu.message.hari_lahir}\n${global.emoji01} *Date Of Birth :* ${anu.message.tgl_lahir}\n${global.emoji01} *Fateful Day :* ${anu.message.hari_naas}\n${global.emoji01} *Info :* ${anu.message.catatan}\n${global.emoji01} *Notes :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 8, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Day Of Birth :* ${anu.message.hari_lahir}\n${global.emoji01} *Date Of Birth :* ${anu.message.tgl_lahir}\n${global.emoji01} *Dragon Day Direction :* ${anu.message.arah_naga_hari}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 8, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Day Of Birth :* ${anu.message.hari_lahir}\n${global.emoji01} *Date Of Birth :* ${anu.message.tgl_lahir}\n${global.emoji01} *Sustenance Direction :* ${anu.message.arah_rejeki}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 8, 9, 2005, 2022\n\nNote : ${prefix + command} Name, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Name :* ${anu.message.nama}\n${global.emoji01} *Born :* ${anu.message.tgl_lahir}\n${global.emoji01} *Fortune Of The Year :* ${anu.message.peruntungan_tahun}\n${global.emoji01} *Results :* ${anu.message.result}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 8, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Date :* ${anu.message.tanggal}\n${global.emoji01} *Number Of Neptune :* ${anu.message.jumlah_neptu}\n${global.emoji01} *Day Character :* ${anu.message.watak_hari}\n${global.emoji01} *Dragon Day :* ${anu.message.naga_hari}\n${global.emoji01} *Good Hour :* ${anu.message.jam_baik}\n${global.emoji01} *Birth Character :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 8, 9, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Name :* ${anu.message.nama}\n${global.emoji01} *Born :* ${anu.message.tgl_lahir}\n${global.emoji01} *Lifeline :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 8, 9, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Name :* ${anu.message.nama}\n${global.emoji01} *Born :* ${anu.message.tgl_lahir}\n${global.emoji01} *Results :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Date :* ${anu.message.tgl_memancing}\n${global.emoji01} *Results :* ${anu.message.result}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} First Day Of Menstruation Cycle`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Results :* ${anu.message.result}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Zodiac :* ${anu.message.zodiak}\n${global.emoji01} *Number :* ${anu.message.nomor_keberuntungan}\n${global.emoji01} *Aroma :* ${anu.message.aroma_keberuntungan}\n${global.emoji01} *Planet :* ${anu.message.planet_yang_mengitari}\n${global.emoji01} *Flower :* ${anu.message.bunga_keberuntungan}\n${global.emoji01} *Color :* ${anu.message.warna_keberuntungan}\n${global.emoji01} *Stone :* ${anu.message.batu_keberuntungan}\n${global.emoji01} *Element :* ${anu.message.elemen_keberuntungan}\n${global.emoji01} *Zodiac Couple :* ${anu.message.pasangan_zodiak}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Results :* ${anu.message}`, m)
            }
            break
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply('Your Daily Limit Has Expired')
                if (!text) return reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) return reply(`No Query id, Example ${prefix + command} ff 552992060`)
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) return reply(`No Query id, Example : ${prefix + command} ml 214885010 2253`)
                    if (!zone) return reply(`No Query id, Example : ${prefix + command} ml 214885010 2253`)
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) return reply(`No Query id, Example ${prefix + command} aov 293306941441181`)
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) return reply(`No Query id, Example ${prefix + command} cod 6290150021186841472`)
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) return reply(`No Query id, Example ${prefix + command} pb riio46`)
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) return reply(`No Query username, Example : ${prefix + command} ig josephxeon13`)
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return reply(anu.result.message)
                    GarfieldNeural.sendMedia(m.chat, anu.caption.profile_hd, '', `${global.emoji01} Full Name : ${anu.caption.full_name}\n${global.emoji01} User Name : ${anu.caption.user_name}\n${global.emoji01} ID ${anu.caption.user_id}\n${global.emoji01} Following : ${anu.caption.followers}\n${global.emoji01} Followers : ${anu.caption.following}\n${global.emoji01} Bussines : ${anu.caption.bussines}\n${global.emoji01} Professional : ${anu.caption.profesional}\n${global.emoji01} Verified : ${anu.caption.verified}\n${global.emoji01} Private : ${anu.caption.private}\n${global.emoji01} Bio : ${anu.caption.biography}\n${global.emoji01} Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) return reply(`No Query username, Example : ${prefix + command} npm scrape-primbon`)
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`${global.emoji01} Name : ${anu.name}\n${global.emoji01} Version : ${Object.keys(anu.versions)}\n${global.emoji01} Created : ${tanggal(anu.time.created)}\n${global.emoji01} Modified : ${tanggal(anu.time.modified)}\n${global.emoji01} Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n${global.emoji01} Description : ${anu.description}\n${global.emoji01} Homepage : ${anu.homepage}\n${global.emoji01} Keywords : ${anu.keywords}\n${global.emoji01} Author : ${anu.author.name}\n${global.emoji01} License : ${anu.license}\n${global.emoji01} Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
	        case 'tiktokd': case 'tiktoknowmx': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '🥬With Watermark🥬'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: 'Audio 🎵'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwmx': case 'tiktokwatermarkx': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '🥬No Watermark🥬'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: 'Audio 🎵'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3x': case 'tiktokaudiox': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '🥬No Watermark🥬'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '🥬With Watermark🥬'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
                GarfieldNeural.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'instagramx': case 'igx': case 'igdlx': {
                if (!text) return reply(`No Query Url!`)
                reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) GarfieldNeural.sendMedia(m.chat, media, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    GarfieldNeural.sendMedia(m.chat, anu.media[0].url, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
               case 'savef': {
  if (!text) return m.reply(`Failed to download media and send audio ${prefix + command} link url`) 
  if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
  let noh = require('@bochilteam/scraper')                
  noh.savefrom(`${text}`).then(async (data) => {
  let sections = []   
  for (let i of data.url) {
  const list = {title: `${i.type}`,
  rows: [
	    {
	     title: `Quality 🦋 ${i.subname}`, 
	     rowId: `${prefix}get ${text}`,
	     description: `𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗡𝗼𝘄 ⬇️`	     
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  GarfieldNeural.sendMessage(
      m.chat, 
      {
       text: `${data.meta.title} *Here is the list of videos, click the button below to choose, here is the list of videos, click the button below to choose*`,
       footer: `𝖭Ξ𝖴𝖱Λ𝖫 ΛＩ`,
       title: "*▊▊▊ SAVER ▊▊▊*",
       buttonText: "CLICK HERE",
       sections
      }, { quoted : m })                 
                }).catch((err) => {
                    m.reply(`*Sorry An Error Occurred*`)
                })
            }  
            break

		//Backup, for example, the video above doesn't come out\\
		case 'igeh': case 'instagram2x': case 'ig2': case 'igdl2': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                
                let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url:text }, 'apikey'))
                GarfieldNeural.sendMessage(m.chat, { video: { url: anu.data[0] } }, { quoted: m })
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) return reply(`No Query Title`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await GarfieldNeural.sendImage(m.chat, anu.result.img, `${global.emoji01} Title : ${anu.result.lagu}\n${global.emoji01} Album : ${anu.result.album}\n${global.emoji01} Singer : ${anu.result.penyanyi}\n${global.emoji01} Publish : ${anu.result.publish}\n${global.emoji01} Lyrics :\n${anu.result.lirik.result}`, m)
                GarfieldNeural.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) return reply(`No Query Title`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await GarfieldNeural.sendImage(m.chat, anu.result.thumb, `${global.emoji01} Title : ${anu.result.title}\n${global.emoji01} URL : ${isUrl(text)[0]}`)
                GarfieldNeural.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdlx': case 'twitterx': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: 'Audio 🎵'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3x': case 'twitteraudiox': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: 'Video 📽️'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
                GarfieldNeural.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbget': case 'fbx': case 'facebookx': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                GarfieldNeural.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `${global.emoji01} Title : ${anu.result.title}`}, { quoted: m })
            }
            break
            case 'fbdl': case 'fbjj': case 'facjjebook': case 'getfb': {     	          
             if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
            let bocil = require('@bochilteam/scraper')  
                bocil.facebookdlv2(`${text}`).then(async (data) => {                   
                    let txt = `*𝖥𝖺𝖼𝖾𝖻𝗈𝗈𝗄 𝖽𝗈𝗐𝗇𝗅𝗈𝖺𝖽𝖾𝗋 𝗏8.3*\n\n`
                    txt += `*${global.emoji02} TITLE :* ${data.title}\n`
                    txt += `*${global.emoji02} QUALITY :* ${data.result[0].quality}\n`
                    txt += `*${global.emoji02} DESCRIPTION :* ${data.description}\n`
                    txt += `*${global.emoji02} URL :* ${text}\n\n`         
                buf = await getBuffer(data.thumbnail)    
                GarfieldNeural.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })         

                for (let i of data.result) {     

                GarfieldNeural.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*🎼  Quality :* ${i.quality}`}, { quoted: m })

                }          

                }).catch((err) => {

                    m.reply(`*Failed When Downloading Media and Sending Files*`)

                })

            }

            break

	        case 'pindl': case 'pinterestdl': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                GarfieldNeural.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) return reply(`Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`)
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: 'Audio 🎵'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: 'Video 📽️'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
${global.emoji01} Title : ${anu.title}
${global.emoji01} Author : ${anu.author.name}
${global.emoji01} Like : ${anu.like}
${global.emoji01} Caption : ${anu.caption}
${global.emoji01} URL : ${anu.media[0]}
To Download Media, Please Click One Of The Buttons Below Or Enter The ytmp3/ytmp4 Command With The Url Above
`,
			footer: GarfieldNeural.user.name,
			buttons,
			headerType: 4
		    }
		    GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        GarfieldNeural.sendMessage(m.chat, { image: { url }, caption: `${global.emoji01} Title : ${anu.title}\n${global.emoji01} Author : ${anu.author.name}\n${global.emoji01} Like : ${anu.like}\n${global.emoji01} Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) return reply(`Example : ${prefix + command} black rover`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		GarfieldNeural.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Which Is Available : 1,2,3,4,5,6`
		if (!text) return reply(oh)
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		GarfieldNeural.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		reply(mess.wait)
		GarfieldNeural.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		reply(mess.wait)
		GarfieldNeural.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		reply(mess.wait)
		GarfieldNeural.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		reply(mess.wait)
		GarfieldNeural.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		reply(`What Format Do You Want? ? Example : ${prefix + command} pdf

Available Formats: pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!args[0]) return reply(`Example:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Options Available:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
		if (!args[1]) return reply(`Which Hadith??\n\nExample:\n${prefix + command} muslim 1`)
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		reply(`Hadith Not Found !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is Surah Al-Fatihah Verse 2 Along With The Audio, And The Verse Is Just 1`)
		if (!args[1]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is Surah Al-Fatihah Verse 2 Along With The Audio, And The Verse Is Just 1`)
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		GarfieldNeural.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is The Interpretation Of Surah Al-Fatihah Verse 2`)
		if (!args[1]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is The Interpretation Of Surah Al-Fatihah Verse 2`)
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Short* : ${res.result.data.tafsir.id.short}

*Long* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await GarfieldNeural.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                GarfieldNeural.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply To The Audio You Want To Change With Caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                if (!text) return reply(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Change This Sticker Command`)
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return reply(`No Hashes`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Delete This Sticker Command`)
                delete global.db.data.sticker[hash]
                reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*Hash List*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                GarfieldNeural.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return reply(`Hash Not Found In Database`)
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) return reply(`Reply Message You Want To Save In Database`)
                if (!text) return reply(`Example : ${prefix + command} File Name`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return reply(`'${text}' Has Been Registered In The Message List`)
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully Added Message In Message List As '${text}'
    
Access With ${prefix}getmsg ${text}

View List Of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) return reply(`Example : ${prefix + command} file name\n\nView Message List With ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
                GarfieldNeural.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 DATABASE LIST 」\n\n'
		for (let i of seplit) {
		    teks += `${global.emoji02} *Name :* ${i.nama}\n${global.emoji02} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
	    //Coded by Tharindu Liyanage
	     case 'readmore': {
            
            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} *නාකි මයින මැරි*`   
                 anu = await fetchJson(`https://cililitan.herokuapp.com/api/readmore?teks=${text}`)
               m.reply(`${anu.result}`)
            }
            break
              case 'wiki': case 'wikipedia': {       
                if (!text) throw `Example : ${prefix + command} Sri Lanka`          
                anu = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${global.lolkey}&query=${text}`)
                m.reply(`*Wikipedia ${global.emoji02}*\n\n${anu.result}`)
            }
        break
                               case 'bug': case 'report': {
                    	if(!text) return reply(`Enter The Bug\n\nExample: ${command} Menu Error`)
                    	GarfieldNeural.sendMessage(`94711502119@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)
                    }
                    break
     case 'ytshorts': case 'shorts': {
      
  if (!text) return m.reply(`*Use ${prefix + command} enter pin link*`)
  if (!isUrl(args[0]) && !args[0].includes('youtube')) throw '*The link you provided is not valid*'               
                
                   
  xa.Youtube(`${text}`).then(async (data) => {
  if (data.medias[0].formattedSize.split('MB')[0] >= 100) return m.reply('*File Over Limit* '+util.format(data)) 
  cap = `
*▊▊▊YOUTUBE SHORTS▊▊▊*

*🎼 ▶━━━━━━━━━2:30*\n\n\n \n*🎼 TITLE:* ${data.title} \n*🎼 QUALITY:* ${data.medias[0].quality} \n*🎼 SIZE:* ${data.medias[0].formattedSize} \n*🎼 DURATION* ${data.duration} \n*🎼 ID:* ${data.medias[0].cached} \n*🎼 LINK:* ${data.url}\n\n`
  buf = await getBuffer(data.thumbnail)
  GarfieldNeural.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${cap}` }, { quoted: m })
  GarfieldNeural.sendMessage(m.chat, { video: { url: data.medias[0].url }, jpegThumbnail:buf, caption: `*🎼 TITLE:* ${data.title} \n*🎼 QUALITY:* ${data.medias[0].quality} \n*🎼 SIZE:* ${data.medias[0].formattedSize}` }, { quoted: m })  
                }).catch((err) => {
                    m.reply(`*Failed to download and send media*`)
                })
            }
            break
case 'lyrics': {
    if (!text) return reply(`Use example ${prefix}lyrics sorry`)
m.reply(mess.wait)
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
m.reply(`
 *TITLE :* *${result.title}*
 *AUTHOR :* ${result.author}
 *LYRICS* : ${result.lyrics}
 
`.trim())
}
break
            break
            case 'wp': case 'wattpad': case 'wattpadsearch': {

if (!text) throw 'Masukkan query' 

                

                let urlnya = text

	            xa.Wattpad(urlnya)

	            .then(async(result) => {	  	                                	                      	            		                  			    				

				let link = await getBuffer(result[0].thumb)

                GarfieldNeural.sendMessage(m.chat, { image: link, caption: `${result[0].description}\nTitle: ${result[0].judul}\nAuthor: DRIPS\nDibaca: ${result[0].dibaca}\nDivote: ${result[0].divote}\nBab: ${result[0].bab}\nWaktu: ${result[0].waktu}\nUrl: ${result[0].url}` }, { quoted: m })                                              

            }).catch((err) => m.reply(`*feature error*`))

            }		

			break
			case 'fb2': case 'facebook2': {
	            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'    
                anu = await fetchJson(`https://violetics.pw/api/downloader/facebook?apikey=${global.violkey}&url=${text}`)
                tummb = await getBuffer('https://i.ibb.co/Jz0mMnC/Pics-Art-22-06-03-01-01-46-876.png')    
                GarfieldNeural.sendMessage(m.chat, { video: { url: anu.result.url[0].url }, jpegThumbnail:tummb, caption: `*📽️ FACEBOOK DOWNLOADER*\n\n*Name* : ${anu.result.meta.title}\n*Quality* : ${anu.result.url[0].subname}\n*Ext* : ${anu.result.url[0].ext}\n`}, { quoted: m }).catch((err) => m.reply('*Sorry, the feature is in error*'))
            }
            break

            case 'attp': {

           if (!text) throw `*Example : ${prefix + command} drips hi*`
           
            
           await GarfieldNeural.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/attp?teks=${text}`, '𝖦𝖠𝖱𝖥𝖨𝖤𝖫𝖣 𝗏8.0', m, {asSticker: true}).catch((err) => m.reply('*error while sending sticker*'))
         }
         break
            case 'get': {     var _0xbef7=["\x45\x6E\x74\x65\x72\x20\x61\x20\x4C\x69\x6E\x6B","\x40\x62\x6F\x63\x68\x69\x6C\x74\x65\x61\x6D\x2F\x73\x63\x72\x61\x70\x65\x72","\x2A\x53\x6F\x72\x72\x79\x20\x46\x75\x74\x75\x72\x65\x20\x45\x72\x72\x6F\x72\x2A","\x72\x65\x70\x6C\x79","\x63\x61\x74\x63\x68","\x75\x72\x6C","\x6D\x70\x34","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x63\x68\x61\x74","\x2A\x71\x75\x61\x6C\x69\x74\x79\x20","\x73\x75\x62\x6E\x61\x6D\x65","\x2A","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x74\x68\x65\x6E","\x73\x61\x76\x65\x66\x72\x6F\x6D"];if(!text){throw _0xbef7[0]};let bicil=require(_0xbef7[1]);let urlnya=text;bicil[_0xbef7[14]](urlnya)[_0xbef7[13]](async (_0x626ex4)=>{for(let _0x626ex5 of _0x626ex4[_0xbef7[5]]){if(_0x626ex5[_0xbef7[5]][_0xbef7[7]](_0xbef7[6])){let _0x626ex6= await getBuffer(_0x626ex5[_0xbef7[5]]);GarfieldNeural[_0xbef7[12]](m[_0xbef7[8]],{video:_0x626ex6,caption:`${_0xbef7[9]}${_0x626ex5[_0xbef7[10]]}${_0xbef7[11]}`},{quoted:m})}}})[_0xbef7[4]]((_0x626ex3)=>{return m[_0xbef7[3]](`${_0xbef7[2]}`)})        }		

			break

 case 'device': {

                if (!text) throw '*What brand are you looking for, for example? \n device Huawei nova 5T*'   
                 anu = await fetchJson(`https://yx-api.herokuapp.com/api/search/gsmarena?query=${text}`)				
				reply212 = `*ＤＥＶＩＣＥ 🌌*\n\n
*Name* : ${anu.judul}
*Rilis* : ${anu.rilis}
*Ukuran* : ${anu.ukuran}
*Model* : ${anu.type}
*Storage* : ${anu.storage}
*Display* : ${anu.display}
*Inches* : ${anu.inchi}
*Pixel* : ${anu.pixel}
*VideoPixel* : ${anu.videoPixel}
*Ram* : ${anu.ram}
*Chipset* : ${anu.chipset}
*Batteryi* : ${anu.batrai}
*Detail* : ${anu.detail}`			
//var kontoll = await getBuffer(anu.result.owner.profile_pic)	
				//sendButLocation(from, `${reply22}`,`© alyabot`, {jpegThumbnail:kontoll}, [{buttonId:`${prefix}menu`,buttonText:{displayText:'OKE'},type:1}], {contextInfo: { mentionedJid: [sender, owner]}})
anu = await getBuffer(anu.thumb)
GarfieldNeural.sendMessage(m.chat, { image: anu, caption: `${reply212}` }, { quoted: m}).catch((err) => m.reply('*No search results found*'))
	            }
                break
            case 'tiktok': case 'tiktoknowm': case 'tiktokwm': case 'tt': case 'ttnowm': case 'ttwm': {
                 if (!text) throw '*Enter a Link Query!*'              
                let bocil = require('@bochilteam/scraper')    
                if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'                
                bocil.tiktokdlv3(`${text}`).then(async (video) => {           
                  var hadi = randomNomor(100)        
                   var hadie = randomNomor(200)     
                   var hadir = randomNomor(300)
                    var memek = randomNomor(1000)                      
                  let caption = `
                  *▊▊▊ TIKTOK ▊▊▊*\n\n*AUTHOR* : DRIPS\n*NICKNAME* : ${video.author.nickname}\n*CAPTION* : ${video.description}\n*QUALITY* : nowatermark\n*COMMENTS* : ${memek}\n*CREATE* ${hadir} Ago\n*LIKES* : ${hadi}\n*DISLIKE* : ${hadie}\n*SOURCE* : ${text}\n`
                  buf = await getBuffer(video.author.avatar)                
                  GarfieldNeural.sendMessage(m.chat, { image: { url: video.author.avatar }, jpegThumbnail:buf, caption: `${caption}` }, { quoted: m })
                  GarfieldNeural.sendMessage(m.chat, { video: { url: video.video.no_watermark }, jpegThumbnail:buf, mimetype: 'video/mp4', caption: `*Downloading From ${text}*` }, { quoted: m })               
                }).catch((err) => {
                    m.reply(`*Failed to download media and send videos*`)
                })
            }
            break
            case 'googledrive': { var _0xc584=["\x2A\x45\x6E\x74\x65\x72\x20\x61\x20\x4C\x69\x6E\x6B\x20\x51\x75\x65\x72\x79\x21\x2A","\x67\x6F\x6F\x67\x6C\x65\x64\x72\x69\x76\x65\x2E\x63\x6F\x6D","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x2A\x54\x68\x65\x20\x6C\x69\x6E\x6B\x20\x79\x6F\x75\x20\x70\x72\x6F\x76\x69\x64\x65\x64\x20\x69\x73\x20\x6E\x6F\x74\x20\x76\x61\x6C\x69\x64\x2A","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x78\x74\x65\x61\x6D\x2E\x78\x79\x7A\x2F\x64\x6C\x2F\x64\x72\x69\x76\x65\x3F\x75\x72\x6C\x3D","\x26\x41\x50\x49\x4B\x45\x59\x3D","\x72\x69\x79","","\x66\x6F\x72\x6D\x61\x74","\x72\x65\x70\x6C\x79","\x2A\x46\x61\x69\x6C\x65\x64\x20\x74\x6F\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x46\x69\x6C\x65\x2A","\x63\x61\x74\x63\x68","\x63\x68\x61\x74","\x73\x65\x72\x76\x65\x72\x32","\x72\x65\x73\x75\x6C\x74","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x7A\x69\x70","\x74\x69\x74\x6C\x65","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(!text){throw _0xc584[0]};if(!isUrl(args[0])&&  !args[0][_0xc584[2]](_0xc584[1])){throw _0xc584[3]};anu=  await fetchJson(`${_0xc584[4]}${text}${_0xc584[5]}${global[_0xc584[6]]}${_0xc584[7]}`);m[_0xc584[9]](`${_0xc584[7]}${util[_0xc584[8]](anu)}${_0xc584[7]}`);GarfieldNeural[_0xc584[17]](m[_0xc584[12]],{document: await getBuffer(anu[_0xc584[14]][_0xc584[13]]),mimetype:_0xc584[15],fileName:`${_0xc584[7]}${anu[_0xc584[14]][_0xc584[16]]}${_0xc584[7]}`},{quoted:m})[_0xc584[11]]((_0xd510x1)=>{return m[_0xc584[9]](_0xc584[10])}) }
break
case 'mediafire': {
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw '*The link you provided is not valid*'
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 150) return m.reply('*File Over Limit* '+util.format(baby1))
const result4 = `*▊▊▊ MEDIAFIRE ▊▊▊*				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}\n
_whoa wait processing..._

*ＧＡＲＦＩＥＬＤ ＢＯＴ*`
m.reply(`${result4}`)
GarfieldNeural.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => m.reply('*Failed to download File*'))
}
break
case 'music': {
                if (!text) throw `Example : ${prefix + command} Ridma Weerawardena songs`
                let yts = require("yt-search")
                let search = await yts(text)                   
let sections = []   
let listmenu = [`ytmp4 ${search.all[0].url}`,`ytmp3 ${search.all[1].url}`,`ytmp4 ${search.all[2].url}`,`ytmp3 ${search.all[3].url}`,`ytmp4 ${search.all[4].url}`,`ytmp3 ${search.all[5].url}`,`ytmp4 ${search.all[6].url}`,`ytmp3 ${search.all[7].url}`,`ytmp4 ${search.all[8].url}`,`ytmp3 ${search.all[9].url}`,`ytmp4 ${search.all[10].url}`,`ytmp3 ${search.all[11].url}`,`ytmp4 ${search.all[12].url}`,`ytmp3 ${search.all[13].url}`,`ytmp4 ${search.all[14].url}`,`ytmp3 ${search.all[15].url}`,`ytmp4 ${search.all[16].url}`,`ytmp3 ${search.all[17].url}`,`ytmp4 ${search.all[18].url}`,`ytmp3 ${search.all[19].url}`]
                    let listmenuu = [`VIDEO MP4 🎼 : ${search.all[0].title}`,`SONG MP3 🎼 : ${search.all[1].title}`,`VIDEO MP4 🎼 : ${search.all[2].title}`,`SONG MP3 🎼 : ${search.all[3].title}`,`VIDEO MP4 🎼 : ${search.all[4].title}`,`SONG MP3 🎼 : ${search.all[5].title}`,`VIDEO MP4 🎼 : ${search.all[6].title}`,`SONG MP3 🎼 : ${search.all[7].title}`,`VIDEO MP4 🎼 : ${search.all[8].title}`,`SONG MP3 🎼 : ${search.all[9].title}`,`VIDEO MP4 🎼 : ${search.all[10].title}`,`SONG MP3 🎼 : ${search.all[11].title}`,`VIDEO MP4 🎼 : ${search.all[12].title}`,`SONG MP3 🎼 : ${search.all[13].title}`,`VIDEO MP4 🎼 : ${search.all[14].title}`,`SONG MP3 🎼 : ${search.all[15].title}`,`VIDEO MP4 🎼 : ${search.all[16].title}`,`SONG MP3 🎼 : ${search.all[17].title}`,`VIDEO MP4 🎼 : ${search.all[18].title}`,`SONG MP3 🎼 : ${search.all[19].title}`]
                    let listmenuuu = [`\n${search.all[0].description}`,`\n${search.all[1].description}`,`\n${search.all[2].description}`,`\n${search.all[3].description}`,`\n${search.all[4].description}`,`\n${search.all[5].description}`,`\n${search.all[6].description}`,`\n${search.all[7].description}`,`\n${search.all[8].description}`,`\n${search.all[9].description}`,`\n${search.all[10].description}`,`\n${search.all[11].description}`,`\n${search.all[12].description}`,`\n${search.all[13].description}`,`\n${search.all[14].description}`,`\n${search.all[15].description}`,`\n${search.all[16].description}`,`\n${search.all[17].description}`,`\n${search.all[18].description}`,`\n${search.all[19].description}`]
                    let nombor = 1
                    let startnum = 0
                    let startnumm = 0
                    for (let x of listmenu) {
                    const list = {title: 'RESULT NUMBER ' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: `${listmenuuu[startnumm++]}`,
                        rowId: `${prefix}${x}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  GarfieldNeural.sendMessage(
      m.chat, 
      {
       text: "\n\n*Music Downloder 🦋*",
       footer: ` ${global.botname} `,
       title: `HERE IS YOUR RESULTS FROM *${text}* _select song or video below_`,
       buttonText: "CLICK HERE",
       sections
      }, { quoted : m })
      }
     break
                   case 'git': case 'gitclone':          
            let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
            if (!args[0]) throw 'link github  EXAMPLE: https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8'
    if (!regex1.test(args[0])) throw 'link!'        
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    // 'attachment; filenameq=ZidniGanz.zip'
    m.reply(`*Please wait, sending repository..*`)
    GarfieldNeural.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => m.reply('*Sorry, the github link you provided is private, and cant be made into a file*'))
			break
           
case 'yt': case 'ytsearch': case 'youtubesearch': { var _0xeb94=["\x2A\x45\x78\x61\x6D\x70\x6C\x65\x20\x3A\x20","\x20\x54\x68\x65\x20\x74\x69\x74\x6C\x65\x20\x6F\x66\x20\x74\x68\x65\x20\x73\x6F\x6E\x67\x20\x79\x6F\x75\x20\x61\x72\x65\x20\x6C\x6F\x6F\x6B\x69\x6E\x67\x20\x66\x6F\x72\x2A","\x79\x74\x2D\x73\x65\x61\x72\x63\x68","\x61\x6C\x6C","","\x74\x69\x74\x6C\x65","\x53\x4F\x4E\x47\x20\x4D\x50\x33\x20\uD83C\uDFBC\x20\x3A","\x79\x74\x6D\x70\x33\x20","\x75\x72\x6C","\x6D\x69\x6D\x65\x74\x79\x70\x65\x3A\x20\x61\x75\x64\x69\x6F\x2F\x6D\x70\x33\x20","\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x5C\x6E\x2A\x55\x50\x4C\x4F\x41\x44\x3A\x2A\x20","\x61\x67\x6F","\x5C\x6E\x2A\x56\x49\x45\x57\x53\x3A\x2A\x20","\x76\x69\x65\x77\x73","\x5C\x6E\x2A\x44\x55\x52\x41\x54\x49\x4F\x4E\x2A\x20","\x74\x69\x6D\x65\x73\x74\x61\x6D\x70","\x5C\x6E\x2A\x4C\x49\x4E\x4B\x3A\x2A\x20","\x56\x49\x44\x45\x4F\x20\x4D\x50\x34\x20\uD83C\uDFBC\x20\x3A","\x79\x74\x6D\x70\x34\x20","\x6D\x69\x6D\x65\x74\x79\x70\x65\x3A\x20\x76\x69\x64\x65\x6F\x2F\x6D\x70\x34\x20","\x53\x4F\x55\x52\x43\x45\x20\x4C\x49\x4E\x4B\x20\uD83C\uDF10","\x6C\x69\x6E\x6B\x6F\x6B\x20","\x72\x65\x73\x75\x6C\x74\x3A\x20\x75\x72\x6C\x20","\x70\x75\x73\x68","\x63\x68\x61\x74","\x2A\x48\x65\x72\x65\x20\x61\x72\x65\x20\x74\x68\x65\x20\x79\x6F\x75\x74\x75\x62\x65\x20\x73\x65\x61\x72\x63\x68\x20\x72\x65\x73\x75\x6C\x74\x73\x20\x66\x72\x6F\x6D\x20","\x20\x59\x6F\x75\x20\x63\x61\x6E\x20\x73\x65\x6C\x65\x63\x74\x20\x61\x75\x64\x69\x6F\x20\x61\x6E\x64\x20\x76\x69\x64\x65\x6F\x20\x6D\x65\x64\x69\x61\x20\x62\x65\x6C\x6F\x77\x2A","\uD835\uDDAD\u039E\uD835\uDDB4\uD835\uDDB1\u039B\uD835\uDDAB\x20\u039B\uFF29","\u258A\u258A\u258A\x20\x59\x54\x20\x53\x45\x41\x52\x43\x48\x20\u258A\u258A\u258A","\x59\x4F\x55\x54\x55\x42\x45\x20\x53\x45\x41\x52\x43\x48\x20\x52\x45\x53\x55\x4C\x54\x53","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(!text){throw `${_0xeb94[0]}${prefix+ command}${_0xeb94[1]}`};let yts=require(_0xeb94[2]);let search= await yts(text);let no=1;let sections=[];for(let i of search[_0xeb94[3]]){const list={title:`${_0xeb94[4]}${i[_0xeb94[5]]}${_0xeb94[4]}`,rows:[{title:`${_0xeb94[6]}`,rowId:`${_0xeb94[4]}${prefix}${_0xeb94[7]}${i[_0xeb94[8]]}${_0xeb94[4]}`,description:`${_0xeb94[9]}${i[_0xeb94[10]]}${_0xeb94[11]}${i[_0xeb94[12]]}${_0xeb94[13]}${i[_0xeb94[14]]}${_0xeb94[15]}${i[_0xeb94[16]]}${_0xeb94[17]}${i[_0xeb94[8]]}${_0xeb94[4]}`},{title:`${_0xeb94[18]}`,rowId:`${_0xeb94[4]}${prefix}${_0xeb94[19]}${i[_0xeb94[8]]}${_0xeb94[4]}`,description:`${_0xeb94[20]}${i[_0xeb94[10]]}${_0xeb94[11]}${i[_0xeb94[12]]}${_0xeb94[13]}${i[_0xeb94[14]]}${_0xeb94[15]}${i[_0xeb94[16]]}${_0xeb94[17]}${i[_0xeb94[8]]}${_0xeb94[4]}`},{title:`${_0xeb94[21]}`,rowId:`${_0xeb94[4]}${prefix}${_0xeb94[22]}${i[_0xeb94[8]]}${_0xeb94[4]}`,description:`${_0xeb94[23]}${i[_0xeb94[10]]}${_0xeb94[11]}${i[_0xeb94[12]]}${_0xeb94[13]}${i[_0xeb94[14]]}${_0xeb94[15]}${i[_0xeb94[16]]}${_0xeb94[17]}${i[_0xeb94[8]]}${_0xeb94[4]}`}]};sections[_0xeb94[24]](list)};const sendm=GarfieldNeural[_0xeb94[31]](m[_0xeb94[25]],{text:`${_0xeb94[26]}${text}${_0xeb94[27]}`,footer:`${_0xeb94[28]}`,title:`${_0xeb94[29]}`,buttonText:_0xeb94[30],sections},{quoted:m}) }
                  break
                  case 'dare':
                  var _0xe32c=["\x65\x61\x74\x20\x32\x20\x74\x61\x62\x6C\x65\x73\x70\x6F\x6F\x6E\x73\x20\x6F\x66\x20\x72\x69\x63\x65\x20\x77\x69\x74\x68\x6F\x75\x74\x20\x61\x6E\x79\x20\x73\x69\x64\x65\x20\x64\x69\x73\x68\x65\x73\x2C\x20\x69\x66\x20\x69\x74\x27\x73\x20\x64\x72\x61\x67\x67\x69\x6E\x67\x20\x79\x6F\x75\x20\x63\x61\x6E\x20\x64\x72\x69\x6E\x6B","\x73\x70\x69\x6C\x6C\x20\x70\x65\x6F\x70\x6C\x65\x20\x77\x68\x6F\x20\x6D\x61\x6B\x65\x20\x79\x6F\x75\x20\x70\x61\x75\x73\x65","\x63\x61\x6C\x6C\x20\x63\x72\x75\x73\x68\x2F\x70\x69\x63\x6B\x6C\x65\x20\x6E\x6F\x77\x20\x61\x6E\x64\x20\x73\x65\x6E\x64\x20\x73\x73","\x64\x72\x6F\x70\x20\x6F\x6E\x6C\x79\x20\x65\x6D\x6F\x74\x65\x20\x65\x76\x65\x72\x79\x20\x74\x69\x6D\x65\x20\x79\x6F\x75\x20\x74\x79\x70\x65\x20\x6F\x6E\x20\x67\x63\x2F\x70\x63\x20\x66\x6F\x72\x20\x31\x20\x64\x61\x79\x2E","\x73\x61\x79\x20\x57\x65\x6C\x63\x6F\x6D\x65\x20\x74\x6F\x20\x57\x68\x6F\x20\x57\x61\x6E\x74\x73\x20\x54\x6F\x20\x42\x65\x20\x61\x20\x4D\x69\x6C\x6C\x69\x6F\x6E\x61\x69\x72\x65\x21\x20\x74\x6F\x20\x61\x6C\x6C\x20\x74\x68\x65\x20\x67\x72\x6F\x75\x70\x73\x20\x79\x6F\x75\x20\x68\x61\x76\x65","\x63\x61\x6C\x6C\x20\x65\x78\x20\x73\x61\x79\x69\x6E\x67\x20\x6D\x69\x73\x73","\x73\x69\x6E\x67\x20\x74\x68\x65\x20\x63\x68\x6F\x72\x75\x73\x20\x6F\x66\x20\x74\x68\x65\x20\x6C\x61\x73\x74\x20\x73\x6F\x6E\x67\x20\x79\x6F\x75\x20\x70\x6C\x61\x79\x65\x64","\x76\x6E\x20\x79\x6F\x75\x72\x20\x65\x78\x2F\x63\x72\x75\x73\x68\x2F\x67\x69\x72\x6C\x66\x72\x69\x65\x6E\x64\x2C\x20\x73\x61\x79\x73\x20\x68\x69\x20\x28\x6E\x61\x6D\x65\x29\x2C\x20\x77\x61\x6E\x74\x73\x20\x74\x6F\x20\x63\x61\x6C\x6C\x2C\x20\x6A\x75\x73\x74\x20\x61\x20\x6D\x6F\x6D\x65\x6E\x74\x2E\x20\x49\x20\x6D\x69\x73\x73\uD83E\uDD7A\uD83D\uDC49\uD83C\uDFFC\uD83D\uDC48\uD83C\uDFFC","\x42\x61\x6E\x67\x20\x6F\x6E\x20\x74\x68\x65\x20\x74\x61\x62\x6C\x65\x20\x28\x77\x68\x69\x63\x68\x20\x69\x73\x20\x61\x74\x20\x68\x6F\x6D\x65\x29\x20\x75\x6E\x74\x69\x6C\x20\x79\x6F\x75\x20\x67\x65\x74\x20\x73\x63\x6F\x6C\x64\x65\x64\x20\x66\x6F\x72\x20\x62\x65\x69\x6E\x67\x20\x6E\x6F\x69\x73\x79","\x54\x65\x6C\x6C\x20\x72\x61\x6E\x64\x6F\x6D\x20\x70\x65\x6F\x70\x6C\x65\x20\x5F\x49\x20\x77\x61\x73\x20\x6A\x75\x73\x74\x20\x74\x6F\x6C\x64\x20\x49\x20\x77\x61\x73\x20\x79\x6F\x75\x72\x20\x74\x77\x69\x6E\x20\x66\x69\x72\x73\x74\x2C\x20\x77\x65\x20\x73\x65\x70\x61\x72\x61\x74\x65\x64\x2C\x20\x74\x68\x65\x6E\x20\x49\x20\x68\x61\x64\x20\x70\x6C\x61\x73\x74\x69\x63\x20\x73\x75\x72\x67\x65\x72\x79\x2E\x20\x41\x6E\x64\x20\x74\x68\x69\x73\x20\x69\x73\x20\x74\x68\x65\x20\x6D\x6F\x73\x74\x20\x63\x69\x79\x75\x73\x73\x73\x5F\x20\x74\x68\x69\x6E\x67","\x6D\x65\x6E\x74\x69\x6F\x6E\x20\x65\x78\x27\x73\x20\x6E\x61\x6D\x65","\x6D\x61\x6B\x65\x20\x31\x20\x72\x68\x79\x6D\x65\x20\x66\x6F\x72\x20\x74\x68\x65\x20\x6D\x65\x6D\x62\x65\x72\x73\x21","\x73\x65\x6E\x64\x20\x75\x72\x20\x77\x68\x61\x74\x73\x61\x70\x70\x20\x63\x68\x61\x74\x20\x6C\x69\x73\x74","\x63\x68\x61\x74\x20\x72\x61\x6E\x64\x6F\x6D\x20\x70\x65\x6F\x70\x6C\x65\x20\x77\x69\x74\x68\x20\x67\x68\x65\x74\x6F\x20\x6C\x61\x6E\x67\x75\x61\x67\x65\x20\x74\x68\x65\x6E\x20\x73\x73\x20\x68\x65\x72\x65","\x74\x65\x6C\x6C\x20\x79\x6F\x75\x72\x20\x6F\x77\x6E\x20\x76\x65\x72\x73\x69\x6F\x6E\x20\x6F\x66\x20\x65\x6D\x62\x61\x72\x72\x61\x73\x73\x69\x6E\x67\x20\x74\x68\x69\x6E\x67\x73","\x74\x61\x67\x20\x74\x68\x65\x20\x70\x65\x72\x73\x6F\x6E\x20\x79\x6F\x75\x20\x68\x61\x74\x65","\x50\x72\x65\x74\x65\x6E\x64\x69\x6E\x67\x20\x74\x6F\x20\x62\x65\x20\x70\x6F\x73\x73\x65\x73\x73\x65\x64\x2C\x20\x66\x6F\x72\x20\x65\x78\x61\x6D\x70\x6C\x65\x3A\x20\x70\x6F\x73\x73\x65\x73\x73\x65\x64\x20\x62\x79\x20\x64\x6F\x67\x2C\x20\x70\x6F\x73\x73\x65\x73\x73\x65\x64\x20\x62\x79\x20\x67\x72\x61\x73\x73\x68\x6F\x70\x70\x65\x72\x73\x2C\x20\x70\x6F\x73\x73\x65\x73\x73\x65\x64\x20\x62\x79\x20\x72\x65\x66\x72\x69\x67\x65\x72\x61\x74\x6F\x72\x2C\x20\x65\x74\x63\x2E","\x63\x68\x61\x6E\x67\x65\x20\x6E\x61\x6D\x65\x20\x74\x6F\x20\x2A\x49\x20\x41\x4D\x20\x44\x4F\x4E\x4B\x45\x59\x2A\x20\x66\x6F\x72\x20\x32\x34\x20\x68\x6F\x75\x72\x73","\x73\x68\x6F\x75\x74\x20\x2A\x6D\x61\x20\x63\x68\x75\x64\x61\x20\x6D\x61\x20\x63\x68\x75\x64\x61\x20\x6D\x61\x20\x63\x68\x75\x64\x61\x2A\x20\x69\x6E\x20\x66\x72\x6F\x6E\x74\x20\x6F\x66\x20\x79\x6F\x75\x72\x20\x68\x6F\x75\x73\x65","\x73\x6E\x61\x70\x2F\x70\x6F\x73\x74\x20\x62\x6F\x79\x66\x72\x69\x65\x6E\x64\x20\x70\x68\x6F\x74\x6F\x2F\x63\x72\x75\x73\x68","\x74\x65\x6C\x6C\x20\x6D\x65\x20\x79\x6F\x75\x72\x20\x62\x6F\x79\x66\x72\x69\x65\x6E\x64\x20\x74\x79\x70\x65\x21","\x73\x61\x79\x20\x2A\x69\x20\x68\x76\x20\x63\x72\x75\x73\x68\x20\x6F\x6E\x20\x79\x6F\x75\x2C\x20\x64\x6F\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x62\x65\x20\x6D\x79\x20\x67\x69\x72\x6C\x66\x72\x69\x65\x6E\x64\x3F\x2A\x20\x74\x6F\x20\x74\x68\x65\x20\x6F\x70\x70\x6F\x73\x69\x74\x65\x20\x73\x65\x78\x2C\x20\x74\x68\x65\x20\x6C\x61\x73\x74\x20\x74\x69\x6D\x65\x20\x79\x6F\x75\x20\x63\x68\x61\x74\x74\x65\x64\x20\x28\x73\x75\x62\x6D\x69\x74\x20\x6F\x6E\x20\x77\x61\x2F\x74\x65\x6C\x65\x29\x2C\x20\x77\x61\x69\x74\x20\x66\x6F\x72\x20\x68\x69\x6D\x20\x74\x6F\x20\x72\x65\x70\x6C\x79\x2C\x20\x69\x66\x20\x79\x6F\x75\x20\x68\x61\x76\x65\x2C\x20\x64\x72\x6F\x70\x20\x68\x65\x72\x65","\x72\x65\x63\x6F\x72\x64\x20\x75\x72\x20\x76\x6F\x69\x63\x65\x20\x74\x68\x61\x74\x20\x72\x65\x61\x64\x20\x2A\x74\x69\x74\x61\x72\x20\x6B\x65\x20\x61\x67\x65\x20\x64\x6F\x20\x74\x69\x74\x61\x72\x2C\x20\x74\x69\x74\x61\x72\x20\x6B\x65\x20\x70\x69\x63\x68\x65\x20\x64\x6F\x20\x74\x69\x74\x61\x72\x2A","\x70\x72\x61\x6E\x6B\x20\x63\x68\x61\x74\x20\x65\x78\x20\x61\x6E\x64\x20\x73\x61\x79\x20\x2A\x69\x20\x6C\x6F\x76\x65\x20\x75\x2C\x20\x70\x6C\x65\x61\x73\x65\x20\x63\x6F\x6D\x65\x20\x62\x61\x63\x6B\x2E\x2A\x20\x77\x69\x74\x68\x6F\x75\x74\x20\x73\x61\x79\x69\x6E\x67\x20\x64\x61\x72\x65\x21","\x63\x68\x61\x74\x20\x74\x6F\x20\x63\x6F\x6E\x74\x61\x63\x74\x20\x77\x61\x20\x69\x6E\x20\x74\x68\x65\x20\x6F\x72\x64\x65\x72\x20\x61\x63\x63\x6F\x72\x64\x69\x6E\x67\x20\x74\x6F\x20\x79\x6F\x75\x72\x20\x62\x61\x74\x74\x65\x72\x79\x20\x25\x2C\x20\x74\x68\x65\x6E\x20\x74\x65\x6C\x6C\x20\x68\x69\x6D\x20\x2A\x69\x20\x61\x6D\x20\x6C\x75\x63\x6B\x79\x20\x74\x6F\x20\x68\x76\x20\x79\x6F\x75\x21\x2A","\x63\x68\x61\x6E\x67\x65\x20\x74\x68\x65\x20\x6E\x61\x6D\x65\x20\x74\x6F\x20\x2A\x49\x20\x61\x6D\x20\x61\x20\x63\x68\x69\x6C\x64\x20\x6F\x66\x20\x72\x61\x6E\x64\x69\x2A\x20\x66\x6F\x72\x20\x35\x20\x68\x6F\x75\x72\x73","\x47\x6F\x20\x74\x6F\x20\x74\x68\x65\x20\x74\x6F\x77\x6E\x20\x61\x6E\x64\x20\x64\x61\x6E\x63\x65\x20\x74\x6F\x20\x74\x68\x65\x20\x73\x6F\x6E\x67\x20\x6F\x66\x20\x77\x61\x64\x61\x20\x6B\x61\x72\x61\x6E\x61\x20\x61\x70\x65\x20\x77\x69\x72\x75\x77\x61","\x55\x73\x65\x20\x73\x65\x6C\x6D\x6F\x6E\x20\x62\x68\x6F\x69\x20\x70\x68\x6F\x74\x6F\x20\x66\x6F\x72\x20\x33\x20\x64\x61\x79\x73","\x64\x72\x6F\x70\x20\x61\x20\x73\x6F\x6E\x67\x20\x71\x75\x6F\x74\x65\x20\x74\x68\x65\x6E\x20\x74\x61\x67\x20\x61\x20\x73\x75\x69\x74\x61\x62\x6C\x65\x20\x6D\x65\x6D\x62\x65\x72\x20\x66\x6F\x72\x20\x74\x68\x61\x74\x20\x71\x75\x6F\x74\x65","\x73\x65\x6E\x64\x20\x76\x6F\x69\x63\x65\x20\x6E\x6F\x74\x65\x20\x73\x61\x79\x69\x6E\x67\x20\x63\x61\x6E\x20\x69\x20\x63\x61\x6C\x6C\x20\x75\x20\x62\x61\x62\x79\x3F","\x73\x73\x20\x72\x65\x63\x65\x6E\x74\x20\x63\x61\x6C\x6C\x20\x77\x68\x61\x74\x73\x61\x70\x70","\x53\x61\x79\x20\x2A\x59\x4F\x55\x20\x41\x52\x45\x20\x53\x4F\x20\x42\x45\x41\x55\x54\x49\x46\x55\x4C\x20\x44\x4F\x4E\x27\x54\x20\x4C\x49\x45\x2A\x20\x74\x6F\x20\x67\x75\x79\x73\x21","\x70\x6F\x70\x20\x74\x6F\x20\x61\x20\x67\x72\x6F\x75\x70\x20\x6D\x65\x6D\x62\x65\x72\x2C\x20\x61\x6E\x64\x20\x73\x61\x79\x20\x66\x75\x63\x6B\x20\x79\x6F\x75","\x41\x63\x74\x20\x6C\x69\x6B\x65\x20\x61\x20\x63\x68\x69\x63\x6B\x65\x6E\x20\x69\x6E\x20\x66\x72\x6F\x6E\x74\x20\x6F\x66\x20\x75\x72\x20\x70\x61\x72\x65\x6E\x74\x73","\x50\x69\x63\x6B\x20\x75\x70\x20\x61\x20\x72\x61\x6E\x64\x6F\x6D\x20\x62\x6F\x6F\x6B\x20\x61\x6E\x64\x20\x72\x65\x61\x64\x20\x6F\x6E\x65\x20\x70\x61\x67\x65\x20\x6F\x75\x74\x20\x6C\x6F\x75\x64\x20\x69\x6E\x20\x76\x6E\x20\x6E\x20\x73\x65\x6E\x64\x20\x69\x74\x20\x68\x65\x72\x65","\x4F\x70\x65\x6E\x20\x79\x6F\x75\x72\x20\x66\x72\x6F\x6E\x74\x20\x64\x6F\x6F\x72\x20\x61\x6E\x64\x20\x68\x6F\x77\x6C\x20\x6C\x69\x6B\x65\x20\x61\x20\x77\x6F\x6C\x66\x20\x66\x6F\x72\x20\x31\x30\x20\x73\x65\x63\x6F\x6E\x64\x73","\x54\x61\x6B\x65\x20\x61\x6E\x20\x65\x6D\x62\x61\x72\x72\x61\x73\x73\x69\x6E\x67\x20\x73\x65\x6C\x66\x69\x65\x20\x61\x6E\x64\x20\x70\x61\x73\x74\x65\x20\x69\x74\x20\x6F\x6E\x20\x79\x6F\x75\x72\x20\x70\x72\x6F\x66\x69\x6C\x65\x20\x70\x69\x63\x74\x75\x72\x65","\x4C\x65\x74\x20\x74\x68\x65\x20\x67\x72\x6F\x75\x70\x20\x63\x68\x6F\x6F\x73\x65\x20\x61\x20\x77\x6F\x72\x64\x20\x61\x6E\x64\x20\x61\x20\x77\x65\x6C\x6C\x20\x6B\x6E\x6F\x77\x6E\x20\x73\x6F\x6E\x67\x2E\x20\x59\x6F\x75\x20\x68\x61\x76\x65\x20\x74\x6F\x20\x73\x69\x6E\x67\x20\x74\x68\x61\x74\x20\x73\x6F\x6E\x67\x20\x61\x6E\x64\x20\x73\x65\x6E\x64\x20\x69\x74\x20\x69\x6E\x20\x76\x6F\x69\x63\x65\x20\x6E\x6F\x74\x65","\x57\x61\x6C\x6B\x20\x6F\x6E\x20\x79\x6F\x75\x72\x20\x65\x6C\x62\x6F\x77\x73\x20\x61\x6E\x64\x20\x6B\x6E\x65\x65\x73\x20\x66\x6F\x72\x20\x61\x73\x20\x6C\x6F\x6E\x67\x20\x61\x73\x20\x79\x6F\x75\x20\x63\x61\x6E","\x73\x69\x6E\x67\x20\x6E\x61\x74\x69\x6F\x6E\x61\x6C\x20\x61\x6E\x74\x68\x65\x6D\x20\x69\x6E\x20\x76\x6F\x69\x63\x65\x20\x6E\x6F\x74\x65","\x42\x72\x65\x61\x6B\x64\x61\x6E\x63\x65\x20\x66\x6F\x72\x20\x33\x30\x20\x73\x65\x63\x6F\x6E\x64\x73\x20\x69\x6E\x20\x74\x68\x65\x20\x73\x69\x74\x74\x69\x6E\x67\x20\x72\x6F\x6F\x6D\uD83D\uDE02","\x54\x65\x6C\x6C\x20\x74\x68\x65\x20\x73\x61\x64\x64\x65\x73\x74\x20\x73\x74\x6F\x72\x79\x20\x79\x6F\x75\x20\x6B\x6E\x6F\x77","\x6D\x61\x6B\x65\x20\x61\x20\x74\x77\x65\x72\x6B\x20\x64\x61\x6E\x63\x65\x20\x76\x69\x64\x65\x6F\x20\x61\x6E\x64\x20\x70\x75\x74\x20\x69\x74\x20\x6F\x6E\x20\x73\x74\x61\x74\x75\x73\x20\x66\x6F\x72\x20\x35\x6D\x69\x6E\x73","\x45\x61\x74\x20\x61\x20\x72\x61\x77\x20\x70\x69\x65\x63\x65\x20\x6F\x66\x20\x67\x61\x72\x6C\x69\x63","\x53\x68\x6F\x77\x20\x74\x68\x65\x20\x6C\x61\x73\x74\x20\x66\x69\x76\x65\x20\x70\x65\x6F\x70\x6C\x65\x20\x79\x6F\x75\x20\x74\x65\x78\x74\x65\x64\x20\x61\x6E\x64\x20\x77\x68\x61\x74\x20\x74\x68\x65\x20\x6D\x65\x73\x73\x61\x67\x65\x73\x20\x73\x61\x69\x64","\x70\x75\x74\x20\x79\x6F\x75\x72\x20\x66\x75\x6C\x6C\x20\x6E\x61\x6D\x65\x20\x6F\x6E\x20\x73\x74\x61\x74\x75\x73\x20\x66\x6F\x72\x20\x35\x68\x72\x73","\x6D\x61\x6B\x65\x20\x61\x20\x73\x68\x6F\x72\x74\x20\x64\x61\x6E\x63\x65\x20\x76\x69\x64\x65\x6F\x20\x77\x69\x74\x68\x6F\x75\x74\x20\x61\x6E\x79\x20\x66\x69\x6C\x74\x65\x72\x20\x6A\x75\x73\x74\x20\x77\x69\x74\x68\x20\x61\x20\x6D\x75\x73\x69\x63\x20\x61\x6E\x64\x20\x70\x75\x74\x20\x69\x74\x20\x6F\x6E\x20\x75\x72\x20\x73\x74\x61\x74\x75\x73\x20\x66\x6F\x72\x20\x35\x68\x72\x73","\x63\x61\x6C\x6C\x20\x75\x72\x20\x62\x65\x73\x74\x69\x65\x2C\x20\x62\x69\x74\x63\x68","\x70\x75\x74\x20\x79\x6F\x75\x72\x20\x70\x68\x6F\x74\x6F\x20\x77\x69\x74\x68\x6F\x75\x74\x20\x66\x69\x6C\x74\x65\x72\x20\x6F\x6E\x20\x75\x72\x20\x73\x74\x61\x74\x75\x73\x20\x66\x6F\x72\x20\x31\x30\x6D\x69\x6E\x73","\x73\x61\x79\x20\x69\x20\x6C\x6F\x76\x65\x20\x6F\x6C\x69\x20\x6C\x6F\x6E\x64\x6F\x6E\x20\x69\x6E\x20\x76\x6F\x69\x63\x65\x20\x6E\x6F\x74\x65\uD83E\uDD23\uD83E\uDD23","\x53\x65\x6E\x64\x20\x61\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x74\x6F\x20\x79\x6F\x75\x72\x20\x65\x78\x20\x61\x6E\x64\x20\x73\x61\x79\x20\x49\x20\x73\x74\x69\x6C\x6C\x20\x6C\x69\x6B\x65\x20\x79\x6F\x75","\x63\x61\x6C\x6C\x20\x43\x72\x75\x73\x68\x2F\x67\x69\x72\x6C\x66\x72\x69\x65\x6E\x64\x2F\x62\x65\x73\x74\x69\x65\x20\x6E\x6F\x77\x20\x61\x6E\x64\x20\x73\x63\x72\x65\x65\x6E\x73\x68\x6F\x74\x20\x68\x65\x72\x65","\x70\x6F\x70\x20\x74\x6F\x20\x6F\x6E\x65\x20\x6F\x66\x20\x74\x68\x65\x20\x67\x72\x6F\x75\x70\x20\x6D\x65\x6D\x62\x65\x72\x20\x70\x65\x72\x73\x6F\x6E\x61\x6C\x20\x63\x68\x61\x74\x20\x61\x6E\x64\x20\x53\x61\x79\x20\x79\x6F\x75\x20\x75\x67\x6C\x79\x20\x62\x75\x73\x74\x61\x72\x64","\x73\x61\x79\x20\x59\x4F\x55\x20\x41\x52\x45\x20\x42\x45\x41\x55\x54\x49\x46\x55\x4C\x2F\x48\x41\x4E\x44\x53\x4F\x4D\x45\x20\x74\x6F\x20\x6F\x6E\x65\x20\x6F\x66\x20\x70\x65\x72\x73\x6F\x6E\x20\x77\x68\x6F\x20\x69\x73\x20\x69\x6E\x20\x74\x6F\x70\x20\x6F\x66\x20\x75\x72\x20\x70\x69\x6E\x6C\x69\x73\x74\x20\x6F\x72\x20\x74\x68\x65\x20\x66\x69\x72\x73\x74\x20\x70\x65\x72\x73\x6F\x6E\x20\x6F\x6E\x20\x75\x72\x20\x63\x68\x61\x74\x6C\x69\x73\x74","\x73\x65\x6E\x64\x20\x76\x6F\x69\x63\x65\x20\x6E\x6F\x74\x65\x73\x20\x61\x6E\x64\x20\x73\x61\x79\x2C\x20\x63\x61\x6E\x20\x69\x20\x63\x61\x6C\x6C\x20\x75\x20\x62\x61\x62\x79\x2C\x20\x69\x66\x20\x75\x20\x72\x20\x62\x6F\x79\x20\x74\x61\x67\x20\x67\x69\x72\x6C\x2F\x69\x66\x20\x67\x69\x72\x6C\x20\x74\x61\x67\x20\x62\x6F\x79","\x77\x72\x69\x74\x65\x20\x69\x20\x6C\x6F\x76\x65\x20\x79\x6F\x75\x20\x28\x72\x61\x6E\x64\x6F\x6D\x20\x67\x72\x75\x70\x20\x6D\x65\x6D\x62\x65\x72\x20\x6E\x61\x6D\x65\x2C\x20\x77\x68\x6F\x20\x69\x73\x20\x6F\x6E\x6C\x69\x6E\x65\x29\x20\x69\x6E\x20\x70\x65\x72\x73\x6F\x6E\x61\x6C\x20\x63\x68\x61\x74\x2C\x20\x28\x69\x66\x20\x75\x20\x72\x20\x62\x6F\x79\x20\x77\x72\x69\x74\x65\x20\x67\x69\x72\x6C\x20\x6E\x61\x6D\x65\x2F\x69\x66\x20\x67\x69\x72\x6C\x20\x77\x72\x69\x74\x65\x20\x62\x6F\x79\x20\x6E\x61\x6D\x65\x29\x20\x74\x61\x6B\x65\x20\x61\x20\x73\x6E\x61\x70\x20\x6F\x66\x20\x74\x68\x65\x20\x70\x69\x63\x20\x61\x6E\x64\x20\x73\x65\x6E\x64\x20\x69\x74\x20\x68\x65\x72\x65","\x75\x73\x65\x20\x61\x6E\x79\x20\x62\x6F\x6C\x6C\x79\x77\x6F\x6F\x64\x20\x61\x63\x74\x6F\x72\x20\x70\x68\x6F\x74\x6F\x20\x61\x73\x20\x75\x72\x20\x70\x66\x70\x20\x66\x6F\x72\x20\x33\x20\x64\x61\x79\x73","\x70\x75\x74\x20\x79\x6F\x75\x72\x20\x63\x72\x75\x73\x68\x20\x70\x68\x6F\x74\x6F\x20\x6F\x6E\x20\x73\x74\x61\x74\x75\x73\x20\x77\x69\x74\x68\x20\x63\x61\x70\x74\x69\x6F\x6E\x2C\x20\x74\x68\x69\x73\x20\x69\x73\x20\x6D\x79\x20\x63\x72\x75\x73\x68","\x63\x68\x61\x6E\x67\x65\x20\x6E\x61\x6D\x65\x20\x74\x6F\x20\x49\x20\x41\x4D\x20\x47\x41\x59\x20\x66\x6F\x72\x20\x35\x20\x68\x6F\x75\x72\x73","\x63\x68\x61\x74\x20\x74\x6F\x20\x61\x6E\x79\x20\x63\x6F\x6E\x74\x61\x63\x74\x20\x69\x6E\x20\x77\x68\x61\x74\x73\x61\x70\x70\x20\x61\x6E\x64\x20\x73\x61\x79\x20\x69\x20\x77\x69\x6C\x6C\x20\x62\x65\x20\x75\x72\x20\x62\x66\x2F\x67\x66\x20\x66\x6F\x72\x20\x35\x68\x6F\x75\x72\x73","\x73\x65\x6E\x64\x20\x76\x6F\x69\x63\x65\x20\x6E\x6F\x74\x65\x20\x73\x61\x79\x73\x20\x69\x20\x68\x76\x20\x63\x72\x75\x73\x68\x20\x6F\x6E\x20\x79\x6F\x75\x2C\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x62\x65\x20\x6D\x79\x20\x67\x69\x72\x6C\x66\x72\x69\x65\x6E\x64\x2F\x62\x6F\x79\x66\x72\x69\x65\x6E\x64\x20\x6F\x72\x20\x6E\x6F\x74\x3F\x20\x74\x6F\x20\x61\x6E\x79\x20\x72\x61\x6E\x64\x6F\x6D\x20\x70\x65\x72\x73\x6F\x6E\x20\x66\x72\x6F\x6D\x20\x74\x68\x65\x20\x67\x72\x75\x70\x28\x69\x66\x20\x75\x20\x67\x69\x72\x6C\x20\x63\x68\x6F\x6F\x73\x65\x20\x62\x6F\x79\x2C\x20\x69\x66\x20\x62\x6F\x79\x20\x63\x68\x6F\x6F\x73\x65\x20\x67\x69\x72\x6C","\x73\x6C\x61\x70\x20\x75\x72\x20\x62\x75\x74\x74\x20\x68\x61\x72\x64\x6C\x79\x20\x73\x65\x6E\x64\x20\x74\x68\x65\x20\x73\x6F\x75\x6E\x64\x20\x6F\x66\x20\x73\x6C\x61\x70\x20\x74\x68\x72\x6F\x75\x67\x68\x20\x76\x6F\x69\x63\x65\x20\x6E\x6F\x74\x65\uD83D\uDE02","\x73\x74\x61\x74\x65\x20\x75\x72\x20\x67\x66\x2F\x62\x66\x20\x74\x79\x70\x65\x20\x61\x6E\x64\x20\x73\x65\x6E\x64\x20\x74\x68\x65\x20\x70\x68\x6F\x74\x6F\x20\x68\x65\x72\x65\x20\x77\x69\x74\x68\x20\x63\x61\x70\x74\x69\x6F\x6E\x2C\x20\x75\x67\x6C\x69\x65\x73\x74\x20\x67\x69\x72\x6C\x2F\x62\x6F\x79\x20\x69\x6E\x20\x74\x68\x65\x20\x77\x6F\x72\x6C\x64","\x73\x68\x6F\x75\x74\x20\x62\x72\x61\x76\x6F\x6F\x6F\x6F\x6F\x6F\x6F\x6F\x6F\x20\x61\x6E\x64\x20\x73\x65\x6E\x64\x20\x68\x65\x72\x65\x20\x74\x68\x72\x6F\x75\x67\x68\x20\x76\x6F\x69\x63\x65\x20\x6E\x6F\x74\x65","\x73\x6E\x61\x70\x20\x79\x6F\x75\x72\x20\x66\x61\x63\x65\x20\x74\x68\x65\x6E\x20\x73\x65\x6E\x64\x20\x69\x74\x20\x68\x65\x72\x65","\x53\x65\x6E\x64\x20\x79\x6F\x75\x72\x20\x70\x68\x6F\x74\x6F\x20\x77\x69\x74\x68\x20\x61\x20\x63\x61\x70\x74\x69\x6F\x6E\x2C\x20\x69\x20\x61\x6D\x20\x6C\x65\x73\x62\x69\x61\x6E","\x73\x68\x6F\x75\x74\x20\x75\x73\x69\x6E\x67\x20\x68\x61\x72\x73\x68\x20\x77\x6F\x72\x64\x73\x20\x61\x6E\x64\x20\x73\x65\x6E\x64\x20\x69\x74\x20\x68\x65\x72\x65\x20\x74\x68\x72\x6F\x75\x67\x68\x20\x76\x6E","\x73\x68\x6F\x75\x74\x20\x79\x6F\x75\x20\x62\x61\x73\x74\x61\x72\x64\x20\x69\x6E\x20\x66\x72\x6F\x6E\x74\x20\x6F\x66\x20\x79\x6F\x75\x72\x20\x6D\x6F\x6D\x2F\x70\x61\x70\x61","\x63\x68\x61\x6E\x67\x65\x20\x74\x68\x65\x20\x6E\x61\x6D\x65\x20\x74\x6F\x20\x69\x20\x61\x6D\x20\x69\x64\x69\x6F\x74\x20\x66\x6F\x72\x20\x32\x34\x20\x68\x6F\x75\x72\x73","\x73\x6C\x61\x70\x20\x75\x72\x73\x65\x6C\x66\x20\x66\x69\x72\x6D\x6C\x79\x20\x61\x6E\x64\x20\x73\x65\x6E\x64\x20\x74\x68\x65\x20\x73\x6F\x75\x6E\x64\x20\x6F\x66\x20\x73\x6C\x61\x70\x20\x74\x68\x72\x6F\x75\x67\x68\x20\x76\x6F\x69\x63\x65\x20\x6E\x6F\x74\x65\uD83D\uDE02","\x73\x61\x79\x20\x69\x20\x6C\x6F\x76\x65\x20\x74\x68\x65\x20\x62\x6F\x74\x20\x6F\x77\x6E\x65\x72\x20\x64\x72\x69\x70\x73\x20\x74\x68\x72\x6F\x75\x67\x68\x20\x76\x6F\x69\x63\x65\x20\x6E\x6F\x74\x65","\x73\x65\x6E\x64\x20\x79\x6F\x75\x72\x20\x67\x66\x2F\x62\x66\x20\x70\x69\x63\x20\x68\x65\x72\x65","\x6D\x61\x6B\x65\x20\x61\x6E\x79\x20\x74\x69\x6B\x74\x6F\x6B\x20\x64\x61\x6E\x63\x65\x20\x63\x68\x61\x6C\x6C\x65\x6E\x67\x65\x20\x76\x69\x64\x65\x6F\x20\x61\x6E\x64\x20\x70\x75\x74\x20\x69\x74\x20\x6F\x6E\x20\x73\x74\x61\x74\x75\x73\x2C\x20\x75\x20\x63\x61\x6E\x20\x64\x65\x6C\x65\x74\x65\x20\x69\x74\x20\x61\x66\x74\x65\x72\x20\x35\x68\x72\x73","\x62\x72\x65\x61\x6B\x75\x70\x20\x77\x69\x74\x68\x20\x79\x6F\x75\x72\x20\x62\x65\x73\x74\x20\x66\x72\x69\x65\x6E\x64\x20\x66\x6F\x72\x20\x35\x68\x72\x73\x20\x77\x69\x74\x68\x6F\x75\x74\x20\x74\x65\x6C\x6C\x69\x6E\x67\x20\x68\x69\x6D\x2F\x68\x65\x72\x20\x74\x68\x61\x74\x20\x69\x74\x73\x20\x61\x20\x64\x61\x72\x65","\x74\x65\x6C\x6C\x20\x6F\x6E\x65\x20\x6F\x66\x20\x79\x6F\x75\x72\x20\x66\x72\x6E\x64\x20\x74\x68\x61\x74\x20\x75\x20\x6C\x6F\x76\x65\x20\x68\x69\x6D\x2F\x68\x65\x72\x20\x61\x6E\x64\x20\x77\x61\x6E\x6E\x61\x20\x6D\x61\x72\x72\x79\x20\x68\x69\x6D\x2F\x68\x65\x72\x2C\x20\x77\x69\x74\x68\x6F\x75\x74\x20\x74\x65\x6C\x6C\x69\x6E\x67\x20\x68\x69\x6D\x2F\x68\x65\x72\x20\x74\x68\x61\x74\x20\x69\x74\x73\x20\x61\x20\x64\x61\x72\x65","\x73\x61\x79\x20\x69\x20\x6C\x6F\x76\x65\x20\x64\x65\x70\x61\x6B\x20\x6B\x61\x6C\x61\x6C\x20\x74\x68\x72\x6F\x75\x67\x68\x20\x76\x6F\x69\x63\x65\x20\x6E\x6F\x74\x65","\x77\x72\x69\x74\x65\x20\x69\x20\x61\x6D\x20\x66\x65\x65\x6C\x69\x6E\x67\x20\x68\x6F\x72\x6E\x79\x20\x61\x6E\x64\x20\x70\x75\x74\x20\x69\x74\x20\x6F\x6E\x20\x73\x74\x61\x74\x75\x73\x2C\x20\x75\x20\x63\x61\x6E\x20\x64\x65\x6C\x65\x74\x65\x20\x69\x74\x20\x6F\x6E\x6C\x79\x20\x61\x66\x74\x65\x72\x20\x35\x68\x72\x73","\x77\x72\x69\x74\x65\x20\x69\x20\x61\x6D\x20\x6C\x65\x73\x62\x69\x61\x6E\x20\x61\x6E\x64\x20\x70\x75\x74\x20\x69\x74\x20\x6F\x6E\x20\x73\x74\x61\x74\x75\x73\x2C\x20\x75\x20\x63\x61\x6E\x20\x64\x65\x6C\x65\x74\x65\x20\x6F\x6E\x6C\x79\x20\x61\x66\x74\x65\x72\x20\x35\x68\x72\x73","\x6B\x69\x73\x73\x20\x79\x6F\x75\x72\x20\x6D\x6F\x6D\x6D\x79\x20\x6F\x72\x20\x70\x61\x70\x61\x20\x61\x6E\x64\x20\x73\x61\x79\x20\x69\x20\x6C\x6F\x76\x65\x20\x79\x6F\x75\uD83D\uDE0C","\x70\x75\x74\x20\x79\x6F\x75\x72\x20\x66\x61\x74\x68\x65\x72\x20\x6E\x61\x6D\x65\x20\x6F\x6E\x20\x73\x74\x61\x74\x75\x73\x20\x66\x6F\x72\x20\x35\x68\x72\x73","\x73\x65\x6E\x64\x20\x61\x62\x75\x73\x69\x76\x65\x20\x77\x6F\x72\x64\x73\x20\x69\x6E\x20\x61\x6E\x79\x20\x67\x72\x75\x70\x2C\x20\x65\x78\x63\x65\x70\x74\x69\x6E\x67\x20\x74\x68\x69\x73\x20\x67\x72\x75\x70\x2C\x20\x61\x6E\x64\x20\x73\x65\x6E\x64\x20\x73\x63\x72\x65\x65\x6E\x73\x68\x6F\x74\x20\x70\x72\x6F\x6F\x66\x20\x68\x65\x72\x65","\x72\x61\x6E\x64\x6F\x6D","\x6C\x65\x6E\x67\x74\x68","\x66\x6C\x6F\x6F\x72","\x74\x68\x75\x6D\x62","\x2A\x44\x41\x52\x45\x2A\x0A","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];const dare=[_0xe32c[0],_0xe32c[1],_0xe32c[2],_0xe32c[3],_0xe32c[4],_0xe32c[5],_0xe32c[6],_0xe32c[7],_0xe32c[8],_0xe32c[9],_0xe32c[10],_0xe32c[11],_0xe32c[12],_0xe32c[13],_0xe32c[14],_0xe32c[15],_0xe32c[16],_0xe32c[17],_0xe32c[18],_0xe32c[19],_0xe32c[20],_0xe32c[21],_0xe32c[22],_0xe32c[23],_0xe32c[24],_0xe32c[25],_0xe32c[26],_0xe32c[27],_0xe32c[28],_0xe32c[29],_0xe32c[30],_0xe32c[31],_0xe32c[32],_0xe32c[33],_0xe32c[34],_0xe32c[35],_0xe32c[36],_0xe32c[37],_0xe32c[38],_0xe32c[39],_0xe32c[40],_0xe32c[41],_0xe32c[42],_0xe32c[43],_0xe32c[44],_0xe32c[45],_0xe32c[46],_0xe32c[47],_0xe32c[48],_0xe32c[49],_0xe32c[50],_0xe32c[51],_0xe32c[52],_0xe32c[53],_0xe32c[54],_0xe32c[55],_0xe32c[56],_0xe32c[57],_0xe32c[58],_0xe32c[59],_0xe32c[60],_0xe32c[61],_0xe32c[62],_0xe32c[63],_0xe32c[64],_0xe32c[65],_0xe32c[66],_0xe32c[67],_0xe32c[68],_0xe32c[69],_0xe32c[70],_0xe32c[71],_0xe32c[72],_0xe32c[73],_0xe32c[74],_0xe32c[75],_0xe32c[76],_0xe32c[77],_0xe32c[78],_0xe32c[79],_0xe32c[80]];const dripsdare=dare[Math[_0xe32c[83]](Math[_0xe32c[81]]()* dare[_0xe32c[82]])];buffer=  await getBuffer(global[_0xe32c[84]]);GarfieldNeural[_0xe32c[86]](from,{image:buffer,caption:_0xe32c[85]+ dripsdare},{quoted:m})
                            break
                            
       case 'truth':
            var _0xeed2=["\x48\x61\x76\x65\x20\x79\x6F\x75\x20\x65\x76\x65\x72\x20\x6C\x69\x6B\x65\x64\x20\x61\x6E\x79\x6F\x6E\x65\x3F\x20\x48\x6F\x77\x20\x6C\x6F\x6E\x67\x3F","\x49\x66\x20\x79\x6F\x75\x20\x63\x61\x6E\x20\x6F\x72\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x2C\x20\x77\x68\x69\x63\x68\x20\x67\x63\x2F\x6F\x75\x74\x73\x69\x64\x65\x20\x67\x63\x20\x77\x6F\x75\x6C\x64\x20\x79\x6F\x75\x20\x6D\x61\x6B\x65\x20\x66\x72\x69\x65\x6E\x64\x73\x20\x77\x69\x74\x68\x3F\x20\x28\x6D\x61\x79\x62\x65\x20\x64\x69\x66\x66\x65\x72\x65\x6E\x74\x2F\x73\x61\x6D\x65\x20\x74\x79\x70\x65\x29","\x61\x70\x61\x20\x6B\x65\x74\x61\x6B\x75\x74\x61\x6E\x20\x74\x65\x72\x62\x65\x73\x61\x72\x20\x6B\x61\x6D\x75\x3F","\x48\x61\x76\x65\x20\x79\x6F\x75\x20\x65\x76\x65\x72\x20\x6C\x69\x6B\x65\x64\x20\x73\x6F\x6D\x65\x6F\x6E\x65\x20\x61\x6E\x64\x20\x66\x65\x6C\x74\x20\x74\x68\x61\x74\x20\x70\x65\x72\x73\x6F\x6E\x20\x6C\x69\x6B\x65\x73\x20\x79\x6F\x75\x20\x74\x6F\x6F\x3F","\x57\x68\x61\x74\x20\x69\x73\x20\x74\x68\x65\x20\x6E\x61\x6D\x65\x20\x6F\x66\x20\x79\x6F\x75\x72\x20\x66\x72\x69\x65\x6E\x64\x27\x73\x20\x65\x78\x2D\x67\x69\x72\x6C\x66\x72\x69\x65\x6E\x64\x20\x74\x68\x61\x74\x20\x79\x6F\x75\x20\x75\x73\x65\x64\x20\x74\x6F\x20\x73\x65\x63\x72\x65\x74\x6C\x79\x20\x6C\x69\x6B\x65\x3F","\x48\x61\x76\x65\x20\x79\x6F\x75\x20\x65\x76\x65\x72\x20\x73\x74\x6F\x6C\x65\x6E\x20\x6D\x6F\x6E\x65\x79\x20\x66\x72\x6F\x6D\x20\x79\x6F\x75\x72\x20\x66\x61\x74\x68\x65\x72\x20\x6F\x72\x20\x6D\x6F\x6D\x3F\x20\x54\x68\x65\x20\x72\x65\x61\x73\x6F\x6E\x3F","\x57\x68\x61\x74\x20\x6D\x61\x6B\x65\x73\x20\x79\x6F\x75\x20\x68\x61\x70\x70\x79\x20\x77\x68\x65\x6E\x20\x79\x6F\x75\x27\x72\x65\x20\x73\x61\x64\x3F","\x45\x76\x65\x72\x20\x68\x61\x64\x20\x61\x20\x6F\x6E\x65\x20\x73\x69\x64\x65\x64\x20\x6C\x6F\x76\x65\x3F\x20\x69\x66\x20\x73\x6F\x20\x77\x68\x6F\x3F\x20\x68\x6F\x77\x20\x64\x6F\x65\x73\x20\x69\x74\x20\x66\x65\x65\x6C\x20\x62\x72\x6F\x3F","\x62\x65\x65\x6E\x20\x73\x6F\x6D\x65\x6F\x6E\x65\x27\x73\x20\x6D\x69\x73\x74\x72\x65\x73\x73\x3F","\x74\x68\x65\x20\x6D\x6F\x73\x74\x20\x66\x65\x61\x72\x65\x64\x20\x74\x68\x69\x6E\x67","\x57\x68\x6F\x20\x69\x73\x20\x74\x68\x65\x20\x6D\x6F\x73\x74\x20\x69\x6E\x66\x6C\x75\x65\x6E\x74\x69\x61\x6C\x20\x70\x65\x72\x73\x6F\x6E\x20\x69\x6E\x20\x79\x6F\x75\x72\x20\x6C\x69\x66\x65\x3F","\x77\x68\x61\x74\x20\x70\x72\x6F\x75\x64\x20\x74\x68\x69\x6E\x67\x20\x64\x69\x64\x20\x79\x6F\x75\x20\x67\x65\x74\x20\x74\x68\x69\x73\x20\x79\x65\x61\x72","\x57\x68\x6F\x20\x69\x73\x20\x74\x68\x65\x20\x70\x65\x72\x73\x6F\x6E\x20\x77\x68\x6F\x20\x63\x61\x6E\x20\x6D\x61\x6B\x65\x20\x79\x6F\x75\x20\x61\x77\x65\x73\x6F\x6D\x65","\x57\x68\x6F\x20\x69\x73\x20\x74\x68\x65\x20\x70\x65\x72\x73\x6F\x6E\x20\x77\x68\x6F\x20\x68\x61\x73\x20\x65\x76\x65\x72\x20\x6D\x61\x64\x65\x20\x79\x6F\x75\x20\x76\x65\x72\x79\x20\x68\x61\x70\x70\x79\x3F","\x57\x68\x6F\x20\x69\x73\x20\x63\x6C\x6F\x73\x65\x73\x74\x20\x74\x6F\x20\x79\x6F\x75\x72\x20\x69\x64\x65\x61\x6C\x20\x74\x79\x70\x65\x20\x6F\x66\x20\x70\x61\x72\x74\x6E\x65\x72\x20\x68\x65\x72\x65","\x57\x68\x6F\x20\x64\x6F\x20\x79\x6F\x75\x20\x6C\x69\x6B\x65\x20\x74\x6F\x20\x70\x6C\x61\x79\x20\x77\x69\x74\x68\x3F\x3F","\x48\x61\x76\x65\x20\x79\x6F\x75\x20\x65\x76\x65\x72\x20\x72\x65\x6A\x65\x63\x74\x65\x64\x20\x70\x65\x6F\x70\x6C\x65\x3F\x20\x74\x68\x65\x20\x72\x65\x61\x73\x6F\x6E\x20\x77\x68\x79\x3F","\x4D\x65\x6E\x74\x69\x6F\x6E\x20\x61\x6E\x20\x69\x6E\x63\x69\x64\x65\x6E\x74\x20\x74\x68\x61\x74\x20\x6D\x61\x64\x65\x20\x79\x6F\x75\x20\x68\x75\x72\x74\x20\x74\x68\x61\x74\x20\x79\x6F\x75\x20\x73\x74\x69\x6C\x6C\x20\x72\x65\x6D\x65\x6D\x62\x65\x72","\x57\x68\x61\x74\x20\x61\x63\x68\x69\x65\x76\x65\x6D\x65\x6E\x74\x73\x20\x68\x61\x76\x65\x20\x79\x6F\x75\x20\x67\x6F\x74\x20\x74\x68\x69\x73\x20\x79\x65\x61\x72\x3F\x3F","\x57\x68\x61\x74\x27\x73\x20\x79\x6F\x75\x72\x20\x77\x6F\x72\x73\x74\x20\x68\x61\x62\x69\x74\x20\x61\x74\x20\x73\x63\x68\x6F\x6F\x6C\x3F\x3F","\x57\x68\x61\x74\x20\x73\x6F\x6E\x67\x20\x64\x6F\x20\x79\x6F\x75\x20\x73\x69\x6E\x67\x20\x6D\x6F\x73\x74\x20\x69\x6E\x20\x74\x68\x65\x20\x73\x68\x6F\x77\x65\x72","\x48\x61\x76\x65\x20\x79\x6F\x75\x20\x65\x76\x65\x72\x20\x68\x61\x64\x20\x61\x20\x6E\x65\x61\x72\x2D\x64\x65\x61\x74\x68\x20\x65\x78\x70\x65\x72\x69\x65\x6E\x63\x65","\x57\x68\x65\x6E\x20\x77\x61\x73\x20\x74\x68\x65\x20\x6C\x61\x73\x74\x20\x74\x69\x6D\x65\x20\x79\x6F\x75\x20\x77\x65\x72\x65\x20\x72\x65\x61\x6C\x6C\x79\x20\x61\x6E\x67\x72\x79\x2E\x20\x57\x68\x79\x3F","\x57\x68\x6F\x20\x69\x73\x20\x74\x68\x65\x20\x6C\x61\x73\x74\x20\x70\x65\x72\x73\x6F\x6E\x20\x77\x68\x6F\x20\x63\x61\x6C\x6C\x65\x64\x20\x79\x6F\x75","\x44\x6F\x20\x79\x6F\x75\x20\x68\x61\x76\x65\x20\x61\x6E\x79\x20\x68\x69\x64\x64\x65\x6E\x20\x74\x61\x6C\x65\x6E\x74\x73\x2C\x20\x57\x68\x61\x74\x20\x61\x72\x65\x20\x74\x68\x65\x79","\x57\x68\x61\x74\x20\x77\x6F\x72\x64\x20\x64\x6F\x20\x79\x6F\x75\x20\x68\x61\x74\x65\x20\x74\x68\x65\x20\x6D\x6F\x73\x74\x3F","\x57\x68\x61\x74\x20\x69\x73\x20\x74\x68\x65\x20\x6C\x61\x73\x74\x20\x59\x6F\x75\x54\x75\x62\x65\x20\x76\x69\x64\x65\x6F\x20\x79\x6F\x75\x20\x77\x61\x74\x63\x68\x65\x64\x3F","\x57\x68\x61\x74\x20\x69\x73\x20\x74\x68\x65\x20\x6C\x61\x73\x74\x20\x74\x68\x69\x6E\x67\x20\x79\x6F\x75\x20\x47\x6F\x6F\x67\x6C\x65\x64","\x57\x68\x6F\x20\x69\x6E\x20\x74\x68\x69\x73\x20\x67\x72\x6F\x75\x70\x20\x77\x6F\x75\x6C\x64\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x73\x77\x61\x70\x20\x6C\x69\x76\x65\x73\x20\x77\x69\x74\x68\x20\x66\x6F\x72\x20\x61\x20\x77\x65\x65\x6B","\x57\x68\x61\x74\x20\x69\x73\x20\x74\x68\x65\x20\x73\x63\x61\x72\x69\x65\x73\x74\x20\x74\x68\x69\x6E\x67\x20\x74\x68\x61\x74\x73\x20\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6E\x65\x64\x20\x74\x6F\x20\x79\x6F\x75","\x48\x61\x76\x65\x20\x79\x6F\x75\x20\x65\x76\x65\x72\x20\x66\x61\x72\x74\x65\x64\x20\x61\x6E\x64\x20\x62\x6C\x61\x6D\x65\x64\x20\x69\x74\x20\x6F\x6E\x20\x73\x6F\x6D\x65\x6F\x6E\x65\x20\x65\x6C\x73\x65","\x57\x68\x65\x6E\x20\x69\x73\x20\x74\x68\x65\x20\x6C\x61\x73\x74\x20\x74\x69\x6D\x65\x20\x79\x6F\x75\x20\x6D\x61\x64\x65\x20\x73\x6F\x6D\x65\x6F\x6E\x65\x20\x65\x6C\x73\x65\x20\x63\x72\x79","\x48\x61\x76\x65\x20\x79\x6F\x75\x20\x65\x76\x65\x72\x20\x67\x68\x6F\x73\x74\x65\x64\x20\x61\x20\x66\x72\x69\x65\x6E\x64","\x48\x61\x76\x65\x20\x79\x6F\x75\x20\x65\x76\x65\x72\x20\x73\x65\x65\x6E\x20\x61\x20\x64\x65\x61\x64\x20\x62\x6F\x64\x79","\x57\x68\x69\x63\x68\x20\x6F\x66\x20\x79\x6F\x75\x72\x20\x66\x61\x6D\x69\x6C\x79\x20\x6D\x65\x6D\x62\x65\x72\x73\x20\x61\x6E\x6E\x6F\x79\x73\x20\x79\x6F\x75\x20\x74\x68\x65\x20\x6D\x6F\x73\x74\x20\x61\x6E\x64\x20\x77\x68\x79","\x49\x66\x20\x79\x6F\x75\x20\x68\x61\x64\x20\x74\x6F\x20\x64\x65\x6C\x65\x74\x65\x20\x6F\x6E\x65\x20\x61\x70\x70\x20\x66\x72\x6F\x6D\x20\x79\x6F\x75\x72\x20\x70\x68\x6F\x6E\x65\x2C\x20\x77\x68\x69\x63\x68\x20\x6F\x6E\x65\x20\x77\x6F\x75\x6C\x64\x20\x69\x74\x20\x62\x65","\x57\x68\x61\x74\x20\x61\x70\x70\x20\x64\x6F\x20\x79\x6F\x75\x20\x77\x61\x73\x74\x65\x20\x74\x68\x65\x20\x6D\x6F\x73\x74\x20\x74\x69\x6D\x65\x20\x6F\x6E","\x48\x61\x76\x65\x20\x79\x6F\x75\x20\x65\x76\x65\x72\x20\x66\x61\x6B\x65\x64\x20\x73\x69\x63\x6B\x20\x74\x6F\x20\x67\x65\x74\x20\x68\x6F\x6D\x65\x20\x66\x72\x6F\x6D\x20\x73\x63\x68\x6F\x6F\x6C","\x57\x68\x61\x74\x20\x69\x73\x20\x74\x68\x65\x20\x6D\x6F\x73\x74\x20\x65\x6D\x62\x61\x72\x72\x61\x73\x73\x69\x6E\x67\x20\x69\x74\x65\x6D\x20\x69\x6E\x20\x79\x6F\x75\x72\x20\x72\x6F\x6F\x6D","\x57\x68\x61\x74\x20\x66\x69\x76\x65\x20\x69\x74\x65\x6D\x73\x20\x77\x6F\x75\x6C\x64\x20\x79\x6F\x75\x20\x62\x72\x69\x6E\x67\x20\x69\x66\x20\x79\x6F\x75\x20\x67\x6F\x74\x20\x73\x74\x75\x63\x6B\x20\x6F\x6E\x20\x61\x20\x64\x65\x73\x65\x72\x74\x20\x69\x73\x6C\x61\x6E\x64","\x48\x61\x76\x65\x20\x79\x6F\x75\x20\x65\x76\x65\x72\x20\x6C\x61\x75\x67\x68\x65\x64\x20\x73\x6F\x20\x68\x61\x72\x64\x20\x79\x6F\x75\x20\x70\x65\x65\x64\x20\x79\x6F\x75\x72\x20\x70\x61\x6E\x74\x73","\x44\x6F\x20\x79\x6F\x75\x20\x73\x6D\x65\x6C\x6C\x20\x79\x6F\x75\x72\x20\x6F\x77\x6E\x20\x66\x61\x72\x74\x73","\x68\x61\x76\x65\x20\x75\x20\x65\x76\x65\x72\x20\x70\x65\x65\x64\x20\x6F\x6E\x20\x74\x68\x65\x20\x62\x65\x64\x20\x77\x68\x69\x6C\x65\x20\x73\x6C\x65\x65\x70\x69\x6E\x67\x20\xF0\u0178\xA4\xA3\xF0\u0178\xA4\xA3","\x57\x68\x61\x74\x20\x69\x73\x20\x74\x68\x65\x20\x62\x69\x67\x67\x65\x73\x74\x20\x6D\x69\x73\x74\x61\x6B\x65\x20\x79\x6F\x75\x20\x68\x61\x76\x65\x20\x65\x76\x65\x72\x20\x6D\x61\x64\x65","\x48\x61\x76\x65\x20\x79\x6F\x75\x20\x65\x76\x65\x72\x20\x63\x68\x65\x61\x74\x65\x64\x20\x69\x6E\x20\x61\x6E\x20\x65\x78\x61\x6D","\x57\x68\x61\x74\x20\x69\x73\x20\x74\x68\x65\x20\x77\x6F\x72\x73\x74\x20\x74\x68\x69\x6E\x67\x20\x79\x6F\x75\x20\x68\x61\x76\x65\x20\x65\x76\x65\x72\x20\x64\x6F\x6E\x65","\x57\x68\x65\x6E\x20\x77\x61\x73\x20\x74\x68\x65\x20\x6C\x61\x73\x74\x20\x74\x69\x6D\x65\x20\x79\x6F\x75\x20\x63\x72\x69\x65\x64","\x77\x68\x6F\x6D\x20\x64\x6F\x20\x79\x6F\x75\x20\x6C\x6F\x76\x65\x20\x74\x68\x65\x20\x6D\x6F\x73\x74\x20\x61\x6D\x6F\x6E\x67\x20\x75\x72\x20\x70\x61\x72\x65\x6E\x74\x73","\x64\x6F\x20\x75\x20\x73\x6F\x6D\x65\x74\x69\x6D\x65\x73\x20\x70\x75\x74\x20\x75\x72\x20\x66\x69\x6E\x67\x65\x72\x20\x69\x6E\x20\x75\x72\x20\x6E\x6F\x73\x65\x74\x72\x69\x6C\xF0\u0178\xA4\xA3","\x77\x68\x6F\x20\x77\x61\x73\x20\x75\x72\x20\x63\x72\x75\x73\x68\x20\x64\x75\x72\x69\x6E\x67\x20\x74\x68\x65\x20\x73\x63\x68\x6F\x6F\x6C\x20\x64\x61\x79\x73","\x74\x65\x6C\x6C\x20\x68\x6F\x6E\x65\x73\x74\x6C\x79\x2C\x20\x64\x6F\x20\x75\x20\x6C\x69\x6B\x65\x20\x61\x6E\x79\x20\x62\x6F\x79\x20\x69\x6E\x20\x74\x68\x69\x73\x20\x67\x72\x75\x70","\x68\x61\x76\x65\x20\x79\x6F\x75\x20\x65\x76\x65\x72\x20\x6C\x69\x6B\x65\x64\x20\x61\x6E\x79\x6F\x6E\x65\x3F\x20\x68\x6F\x77\x20\x6C\x6F\x6E\x67\x3F","\x64\x6F\x20\x79\x6F\x75\x20\x68\x61\x76\x65\x20\x67\x66\x2F\x62\x66\x27\x2C\x27\x77\x68\x61\x74\x20\x69\x73\x20\x79\x6F\x75\x72\x20\x62\x69\x67\x67\x65\x73\x74\x20\x66\x65\x61\x72\x3F","\x68\x61\x76\x65\x20\x79\x6F\x75\x20\x65\x76\x65\x72\x20\x6C\x69\x6B\x65\x64\x20\x73\x6F\x6D\x65\x6F\x6E\x65\x20\x61\x6E\x64\x20\x66\x65\x6C\x74\x20\x74\x68\x61\x74\x20\x70\x65\x72\x73\x6F\x6E\x20\x6C\x69\x6B\x65\x73\x20\x79\x6F\x75\x20\x74\x6F\x6F\x3F","\x57\x68\x61\x74\x20\x69\x73\x20\x74\x68\x65\x20\x6E\x61\x6D\x65\x20\x6F\x66\x20\x79\x6F\x75\x72\x20\x65\x78\x20\x62\x6F\x79\x66\x72\x69\x65\x6E\x64\x20\x6F\x66\x20\x79\x6F\x75\x72\x20\x66\x72\x69\x65\x6E\x64\x20\x74\x68\x61\x74\x20\x79\x6F\x75\x20\x6F\x6E\x63\x65\x20\x6C\x69\x6B\x65\x64\x20\x71\x75\x69\x65\x74\x6C\x79\x3F","\x65\x76\x65\x72\x20\x64\x69\x64\x20\x79\x6F\x75\x20\x73\x74\x65\x61\x6C\x20\x79\x6F\x75\x72\x20\x6D\x6F\x74\x68\x65\x72\x73\x20\x6D\x6F\x6E\x65\x79\x20\x6F\x72\x20\x79\x6F\x75\x72\x20\x66\x61\x74\x68\x65\x72\x73\x20\x6D\x6F\x6E\x65\x79","\x77\x68\x61\x74\x20\x6D\x61\x6B\x65\x73\x20\x79\x6F\x75\x20\x68\x61\x70\x70\x79\x20\x77\x68\x65\x6E\x20\x79\x6F\x75\x20\x61\x72\x65\x20\x73\x61\x64","\x64\x6F\x20\x79\x6F\x75\x20\x6C\x69\x6B\x65\x20\x73\x6F\x6D\x65\x6F\x6E\x65\x20\x77\x68\x6F\x20\x69\x73\x20\x69\x6E\x20\x74\x68\x69\x73\x20\x67\x72\x75\x70\x3F\x20\x69\x66\x20\x79\x6F\x75\x20\x74\x68\x65\x6E\x20\x77\x68\x6F\x3F","\x68\x61\x76\x65\x20\x79\x6F\x75\x20\x65\x76\x65\x72\x20\x62\x65\x65\x6E\x20\x63\x68\x65\x61\x74\x65\x64\x20\x6F\x6E\x20\x62\x79\x20\x70\x65\x6F\x70\x6C\x65\x3F","\x77\x68\x6F\x20\x69\x73\x20\x74\x68\x65\x20\x6D\x6F\x73\x74\x20\x69\x6D\x70\x6F\x72\x74\x61\x6E\x74\x20\x70\x65\x72\x73\x6F\x6E\x20\x69\x6E\x20\x79\x6F\x75\x72\x20\x6C\x69\x66\x65","\x77\x68\x61\x74\x20\x70\x72\x6F\x75\x64\x20\x74\x68\x69\x6E\x67\x73\x20\x64\x69\x64\x20\x79\x6F\x75\x20\x67\x65\x74\x20\x74\x68\x69\x73\x20\x79\x65\x61\x72","\x77\x68\x6F\x20\x69\x73\x20\x74\x68\x65\x20\x70\x65\x72\x73\x6F\x6E\x20\x77\x68\x6F\x20\x63\x61\x6E\x20\x6D\x61\x6B\x65\x20\x79\x6F\x75\x20\x68\x61\x70\x70\x79\x20\x77\x68\x65\x6E\x20\x75\x20\x72\x20\x73\x61\x64","\x77\x68\x6F\x20\x69\x73\x20\x74\x68\x65\x20\x70\x65\x72\x73\x6F\x6E\x20\x77\x68\x6F\x20\x65\x76\x65\x72\x20\x6D\x61\x64\x65\x20\x79\x6F\x75\x20\x66\x65\x65\x6C\x20\x75\x6E\x63\x6F\x6D\x66\x6F\x72\x74\x61\x62\x6C\x65","\x68\x61\x76\x65\x20\x79\x6F\x75\x20\x65\x76\x65\x72\x20\x6C\x69\x65\x64\x20\x74\x6F\x20\x79\x6F\x75\x72\x20\x70\x61\x72\x65\x6E\x74\x73","\x64\x6F\x20\x79\x6F\x75\x20\x73\x74\x69\x6C\x6C\x20\x6C\x69\x6B\x65\x20\x75\x72\x20\x65\x78","\x77\x68\x6F\x20\x64\x6F\x20\x79\x6F\x75\x20\x6C\x69\x6B\x65\x20\x74\x6F\x20\x70\x6C\x61\x79\x20\x74\x6F\x67\x65\x74\x68\x65\x72\x20\x77\x69\x74\x68\x3F","\x68\x61\x76\x65\x20\x79\x6F\x75\x20\x65\x76\x65\x72\x20\x73\x74\x6F\x6C\x65\x6E\x20\x62\x69\x67\x20\x74\x68\x69\x6E\x67\x20\x69\x6E\x20\x75\x72\x20\x6C\x69\x66\x65\x3F\x20\x74\x68\x65\x20\x72\x65\x61\x73\x6F\x6E\x20\x77\x68\x79\x3F","\x4D\x65\x6E\x74\x69\x6F\x6E\x20\x74\x68\x65\x20\x69\x6E\x63\x69\x64\x65\x6E\x74\x20\x74\x68\x61\x74\x20\x6D\x61\x6B\x65\x73\x20\x79\x6F\x75\x20\x68\x75\x72\x74\x20\x74\x68\x61\x74\x20\x79\x6F\x75\x20\x73\x74\x69\x6C\x6C\x20\x72\x65\x6D\x65\x6D\x62\x65\x72","\x77\x68\x61\x74\x20\x61\x63\x68\x69\x65\x76\x65\x6D\x65\x6E\x74\x73\x20\x68\x61\x76\x65\x20\x79\x6F\x75\x20\x67\x6F\x74\x20\x74\x68\x69\x73\x20\x79\x65\x61\x72\x3F","\x77\x68\x61\x74\x20\x77\x61\x73\x20\x79\x6F\x75\x72\x20\x77\x6F\x72\x73\x74\x20\x68\x61\x62\x69\x74\x20\x61\x74\x20\x73\x63\x68\x6F\x6F\x6C\x3F","\x64\x6F\x20\x79\x6F\x75\x20\x6C\x6F\x76\x65\x20\x74\x68\x65\x20\x62\x6F\x74\x20\x63\x72\x65\x61\x74\x6F\x72\x2C\x20\x64\x72\x69\x70\x73\x3F\xF0\u0178\xA6\u201E","\x68\x61\x76\x65\x20\x79\x6F\x75\x20\x65\x76\x65\x72\x20\x74\x68\x6F\x75\x67\x68\x74\x20\x6F\x66\x20\x74\x61\x6B\x69\x6E\x67\x20\x72\x65\x76\x65\x6E\x67\x65\x20\x66\x72\x6F\x6D\x20\x75\x72\x20\x74\x65\x61\x63\x68\x65\x72\x3F","\x64\x6F\x20\x79\x6F\x75\x20\x6C\x69\x6B\x65\x20\x63\x75\x72\x72\x65\x6E\x74\x20\x70\x72\x69\x6D\x65\x20\x6D\x69\x6E\x69\x73\x74\x65\x72\x20\x6F\x66\x20\x75\x72\x20\x63\x6F\x75\x6E\x74\x72\x79","\x79\x6F\x75\x20\x6E\x6F\x6E\x20\x76\x65\x67\x20\x6F\x72\x20\x76\x65\x67","\x69\x66\x20\x79\x6F\x75\x20\x63\x6F\x75\x6C\x64\x20\x62\x65\x20\x69\x6E\x76\x69\x73\x69\x62\x6C\x65\x2C\x20\x77\x68\x61\x74\x20\x69\x73\x20\x74\x68\x65\x20\x66\x69\x72\x73\x74\x20\x74\x68\x69\x6E\x67\x20\x79\x6F\x75\x20\x77\x6F\x75\x6C\x64\x20\x64\x6F","\x77\x68\x61\x74\x20\x69\x73\x20\x61\x20\x73\x65\x63\x72\x65\x74\x20\x79\x6F\x75\x20\x6B\x65\x70\x74\x20\x66\x72\x6F\x6D\x20\x79\x6F\x75\x72\x20\x70\x61\x72\x65\x6E\x74\x73","\x77\x68\x6F\x20\x77\x6F\x75\x6C\x64\x20\x79\x6F\x75\x20\x63\x68\x6F\x6F\x73\x65","\x77\x68\x6F\x6D\x20\x64\x6F\x20\x79\x6F\x75\x20\x74\x65\x78\x74\x20\x74\x68\x65\x20\x6D\x6F\x73\x74","\x57\x68\x61\x74\x20\x69\x73\x20\x74\x68\x65\x20\x62\x69\x67\x67\x65\x73\x74\x20\x6C\x69\x65\x20\x79\x6F\x75\x20\x65\x76\x65\x72\x20\x74\x6F\x6C\x64\x20\x79\x6F\x75\x72\x20\x70\x61\x72\x65\x6E\x74\x73","\x57\x68\x6F\x20\x69\x73\x20\x79\x6F\x75\x72\x20\x63\x65\x6C\x65\x62\x72\x69\x74\x79\x20\x63\x72\x75\x73\x68","\x57\x68\x6F\x20\x69\x73\x20\x79\x6F\x75\x72\x20\x73\x65\x63\x72\x65\x74\x20\x63\x72\x75\x73\x68","\x77\x68\x6F\x69\x73\x20\x74\x68\x65\x20\x6C\x61\x73\x74\x20\x70\x65\x72\x73\x6F\x6E\x20\x79\x6F\x75\x20\x63\x72\x65\x65\x70\x65\x64\x20\x6F\x6E\x20\x73\x6F\x63\x69\x61\x6C\x20\x6D\x65\x64\x69\x61","\x49\x66\x20\x61\x20\x67\x65\x6E\x69\x65\x20\x67\x72\x61\x6E\x74\x65\x64\x20\x79\x6F\x75\x20\x74\x68\x72\x65\x65\x20\x77\x69\x73\x68\x65\x73\x2C\x20\x77\x68\x61\x74\x20\x77\x6F\x75\x6C\x64\x20\x79\x6F\x75\x20\x61\x73\x6B\x20\x66\x6F\x72","\x57\x68\x61\x74\x20\x69\x73\x20\x79\x6F\x75\x72\x20\x62\x69\x67\x67\x65\x73\x74\x20\x72\x65\x67\x72\x65\x74","\x57\x68\x61\x74\x20\x61\x6E\x69\x6D\x61\x6C\x20\x64\x6F\x20\x79\x6F\x75\x20\x74\x68\x69\x6E\x6B\x20\x79\x6F\x75\x20\x6D\x6F\x73\x74\x20\x6C\x6F\x6F\x6B\x20\x6C\x69\x6B\x65","\x48\x6F\x77\x20\x6D\x61\x6E\x79\x20\x73\x65\x6C\x66\x69\x65\x73\x20\x64\x6F\x20\x79\x6F\x75\x20\x74\x61\x6B\x65\x20\x61\x20\x64\x61\x79","\x57\x68\x61\x74\x20\x77\x61\x73\x20\x79\x6F\x75\x72\x20\x66\x61\x76\x6F\x72\x69\x74\x65\x20\x63\x68\x69\x6C\x64\x68\x6F\x6F\x64\x20\x73\x68\x6F\x77","\x69\x66\x20\x79\x6F\x75\x20\x63\x6F\x75\x6C\x64\x20\x62\x65\x20\x61\x20\x66\x69\x63\x74\x69\x6F\x6E\x61\x6C\x20\x63\x68\x61\x72\x61\x63\x74\x65\x72\x20\x66\x6F\x72\x20\x61\x20\x64\x61\x79","\x57\x68\x61\x74\x73\x20\x74\x68\x65\x20\x73\x74\x72\x61\x6E\x67\x65\x73\x74\x20\x64\x72\x65\x61\x6D\x20\x79\x6F\x75\x20\x68\x61\x76\x65\x20\x65\x76\x65\x72\x20\x68\x61\x64","\x64\x6F\x20\x79\x6F\x75\x20\x70\x6C\x61\x79\x20\x70\x75\x62\x67\x2C\x20\x69\x66\x20\x79\x6F\x75\x20\x74\x68\x65\x6E\x20\x73\x65\x6E\x64\x20\x75\x72\x20\x69\x64\x20\x6E\x75\x6D\x62\x65\x72","\x72\x61\x6E\x64\x6F\x6D","\x6C\x65\x6E\x67\x74\x68","\x66\x6C\x6F\x6F\x72","\x74\x68\x75\x6D\x62","\x20\x2A\x54\x52\x55\x54\x48\x2A\x0A","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];const truth=[_0xeed2[0],_0xeed2[1],_0xeed2[2],_0xeed2[3],_0xeed2[4],_0xeed2[5],_0xeed2[6],_0xeed2[7],_0xeed2[8],_0xeed2[9],_0xeed2[10],_0xeed2[11],_0xeed2[12],_0xeed2[13],_0xeed2[14],_0xeed2[15],_0xeed2[16],_0xeed2[17],_0xeed2[18],_0xeed2[19],_0xeed2[20],_0xeed2[21],_0xeed2[22],_0xeed2[23],_0xeed2[24],_0xeed2[25],_0xeed2[26],_0xeed2[27],_0xeed2[28],_0xeed2[29],_0xeed2[30],_0xeed2[31],_0xeed2[32],_0xeed2[33],_0xeed2[34],_0xeed2[35],_0xeed2[36],_0xeed2[37],_0xeed2[38],_0xeed2[39],_0xeed2[40],_0xeed2[41],_0xeed2[42],_0xeed2[43],_0xeed2[44],_0xeed2[45],_0xeed2[46],_0xeed2[47],_0xeed2[48],_0xeed2[49],_0xeed2[50],_0xeed2[51],_0xeed2[52],_0xeed2[53],_0xeed2[54],_0xeed2[55],_0xeed2[56],_0xeed2[57],_0xeed2[58],_0xeed2[59],_0xeed2[60],_0xeed2[61],_0xeed2[62],_0xeed2[63],_0xeed2[64],_0xeed2[65],_0xeed2[66],_0xeed2[67],_0xeed2[68],_0xeed2[69],_0xeed2[70],_0xeed2[71],_0xeed2[72],_0xeed2[73],_0xeed2[74],_0xeed2[75],_0xeed2[76],_0xeed2[77],_0xeed2[78],_0xeed2[79],_0xeed2[80],_0xeed2[81],_0xeed2[82],_0xeed2[83],_0xeed2[84],_0xeed2[85],_0xeed2[86],_0xeed2[87],_0xeed2[88],_0xeed2[89]];const dripstruth=truth[Math[_0xeed2[92]](Math[_0xeed2[90]]()* truth[_0xeed2[91]])];buffer=  await getBuffer(global[_0xeed2[93]]);GarfieldNeural[_0xeed2[95]](from,{image:buffer,caption:_0xeed2[94]+ dripstruth},{quoted:m})
                                        break
              case 'ig2': case 'insta': case 'instagram2': {	            
                if (!text) throw '*Enter a Link Query!*'                
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'
            anu = await fetchJson(`https://api.akuari.my.id/downloader/igdl?link=${text}`)
            var oi = 1
            for(let i of anu.medias){                
                var txt = `*▊▊▊ INSTAGRAM ▊▊▊*\n\n*Username:* ${anu.user.username}\n*Fullname:* ${anu.user.fullName}\n*Followers:* ${anu.user.followers}\n*Type:* ${anu.medias[0].type}\n*Tipe:* ${anu.medias[0].fileType}\n*ID:* ${anu.user.id}\n*Jumlah Media:* ${oi++}\n*Url:* ${text}\n\n*${global.botname}*`
                var buf = await getBuffer(anu.user.profilePicUrl)        
                GarfieldNeural.sendMessage(m.chat, { image: { url: anu.user.profilePicUrl }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m }).catch((err) => m.reply('error'))
                GarfieldNeural.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `${botname}`}, { quoted: m }).catch((err) => m.reply('error'))
               }
            }
            break
            case 'igimage': {var _0xd6ca=["\x2A\x45\x6E\x74\x65\x72\x20\x61\x20\x4C\x69\x6E\x6B\x20\x51\x75\x65\x72\x79\x21\x2A","\x40\x62\x6F\x63\x68\x69\x6C\x74\x65\x61\x6D\x2F\x73\x63\x72\x61\x70\x65\x72","\x69\x6E\x73\x74\x61\x67\x72\x61\x6D\x2E\x63\x6F\x6D","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x2A\x54\x68\x65\x20\x6C\x69\x6E\x6B\x20\x79\x6F\x75\x20\x70\x72\x6F\x76\x69\x64\x65\x64\x20\x69\x73\x20\x6E\x6F\x74\x20\x76\x61\x6C\x69\x64\x2A","\x2A\x46\x61\x69\x6C\x65\x64\x20\x74\x6F\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x6D\x65\x64\x69\x61\x20\x61\x6E\x64\x20\x73\x65\x6E\x64\x20\x76\x69\x64\x65\x6F\x73\x2A","\x72\x65\x70\x6C\x79","\x63\x61\x74\x63\x68","\x63\x68\x61\x74","\x75\x72\x6C","","\x44\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x55\x72\x6C\x20\x49\x6E\x73\x74\x61\x67\x72\x61\x6D\x20\x46\x72\x6F\x6D\x20","\x73\x65\x6E\x64\x4D\x65\x64\x69\x61","\x74\x68\x65\x6E"];if(!text){throw _0xd6ca[0]};const {instagramdl,instagramdlv2,instagramdlv3}=require(_0xd6ca[1]);if(!isUrl(args[0])&&  !args[0][_0xd6ca[3]](_0xd6ca[2])){throw _0xd6ca[4]};instagramdlv3(`${_0xd6ca[10]}${text}${_0xd6ca[10]}`)[_0xd6ca[13]](async (_0xc5f3x2)=>{for(let _0xc5f3x3 of _0xc5f3x2){GarfieldNeural[_0xd6ca[12]](m[_0xd6ca[8]],_0xc5f3x3[_0xd6ca[9]],_0xd6ca[10],`${_0xd6ca[11]}${text}${_0xd6ca[10]}`,m)}})[_0xd6ca[7]]((_0xc5f3x1)=>{m[_0xd6ca[6]](`${_0xd6ca[5]}`)}) }
            break
            //Coded by Tharindu Liyanage
            
            
            //Coded by Tharindu Liyanage
            case 'igs': case 'story': case 'instagramstory': {

         if (!text) throw 'Type  Username!' 

                let urlnya = text

	            hx.igstory(urlnya)

	            .then(async(result) => {

		        var halo = 0		

	            GarfieldNeural.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTAGRAM STORY 」----*\n\n*🎼  Username :* ${result.user.username}\n*🎼  Fullname :* ${result.user.fullName}\n*🎼  Followers :* ${result.user.followers}\n*🎼  Following :* ${result.user.following}\n*🎼  ID :* ${result.user.id}\n*🎼  Filetype :* ${result.medias[0].fileType}\n*🎼  Type :* ${result.medias[0].type}\n*🎼  Media :* ${result.medias.length}\n*🎼  Bio :* ${result.user.biography}\n\n*${global.botname}*` }, { quoted: m })	                                  	                      	            

		        for(let i of result.medias) {

			    if(i.url.includes('mp4')){

				let link = await getBuffer(i.url)

                GarfieldNeural.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m }) 

                } else {

                    let link = await getBuffer(i.url)

                  GarfieldNeural.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m })                  

                }

            }

            }).catch((err) => m.reply(`*Sorry Story Instagram ${text} not found*`))

            }		

			break

case 'need': {
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} Kuwebi ft Charitha Attalage`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buf = await getBuffer(anu.thumbnail)
                let caption = `*PLAYING YOUTUBE*
                
*🎼 TITLE :* ${anu.title}
*🎼 DESCRIPTION :* ${anu.description}
*🎼 URL :* ${anu.url}
`
message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload:   GarfieldNeural.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: caption,
                            imageMessage: message.imageMessage,
                            hydratedFooterText: `${botname}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'SOURCE VIDEO',
                                    url: `${anu.url}`
                                }
                            }, {
                            	urlButton: {
                                displayText: `GITHUB 🦋`, 
                                    url: `https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: `${global.video}`,
                                    id: `${prefix}ytmp4 ${anu.url}`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: `${global.song}`,
                                    id: `${prefix}ytmp3 ${anu.url}`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: `${global.yts}`,
                                    id: `${prefix}ytsearch ${anu.title}`
                                }
                            }]
                        }
                    }
                
                }), { userJid: m.chat })
                GarfieldNeural.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'tiktok': case 'tiktoknowm': case 'tiktokwm': case 'tt': case 'ttnowm': case 'ttwm': {
                if (!text) throw '*Enter a Link Query!*'        
                let bocil = require('@bochilteam/scraper')    
                if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'                
                bocil.tiktokdlv3(`${text}`).then(async (video) => {           
                  var hadi = randomNomor(100)        
                   var hadie = randomNomor(200)     
                   var hadir = randomNomor(300)
                    var memek = randomNomor(1000)                      
                  let caption = `
                  *▊▊▊TIKTOK ▊▊▊*\n\n*AUTHOR* : DRIPS\n*NICKNAME* : ${video.author.nickname}\n*CAPTION* : ${video.description}\n*QUALITY* : nowatermark\n*COMMENTS* : ${memek}\n*CREATE* ${hadir} Ago\n*LIKES* : ${hadi}\n*DISLIKE* : ${hadie}\n*SOURCE* : ${text}\n\n\n*${global.botname}*`
                  buf = await getBuffer(video.author.avatar)                
                  GarfieldNeural.sendMessage(m.chat, { image: { url: video.author.avatar }, jpegThumbnail:buf, caption: `${caption}` }, { quoted: m })
                  GarfieldNeural.sendMessage(m.chat, { video: { url: video.video.no_watermark }, jpegThumbnail:buf, mimetype: 'video/mp4', caption: `*Downloading From ${text}*` }, { quoted: m })               
                }).catch((err) => {
                    m.reply(`*Failed to download media and send videos*`)
                })
            }
            break
case 'searchgroup': {

//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
           if (!text) throw `Example : ${prefix + command} Education`            
            anu = await fetchJson(`https://api.akuari.my.id/search/carigc?query=${text}`)                       
            ini_txt = '*Search Group*\n\n'
            for (let i of anu.result) {      
            ini_txt += `*Name* : *${i.nama}*\n`            
            ini_txt += `*Link* : ${i.link}\n\n`            
            }
            m.reply(`${ini_txt}`)
            }            
            break
case 'playstore': case 'playstoresearch': {

//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!text) throw `Example : ${prefix + command} Facebook`            
            x = await fetchJson(`https://api.violetics.pw/api/apk/playstore?apikey=${global.violkey}&apps=${text}`)                       
            ini_txt = '*PLAYSTORE SEARCH*\n\n'
            for (let i of x.result) {       
            ini_txt += `*NAME* : ${i.title}\n`
            ini_txt += `*Rate* : ${i.rate}\n`
            ini_txt += `*PACKAGE* : ${i.package}\n`
            ini_txt += `*URL* : ${i.url}\n`
            ini_txt += `*INFO* : ${i.description}\n\n`         
            }   
            GarfieldNeural.sendImage(m.chat, x.result[0].thumbnail, `${ini_txt}`, m).catch((err) => m.reply(jsonformat('*Sorry there was an error*')))
            }
            break
 
        case 'groups':
        if (!q) return m.reply(`Example: ${prefix}searchgroups Education`)
        mel.linkwa(q)
        .then(result => {
        let res = '❰ *WHATSAPP GROUP LINKS* ❱\n\n'
        for (let i of result) {
        res += `*NAME*: *${i.nama}\n*Link*: ${i.link}\n\n`
        }
        m.reply(res)
        });
        break

	    //Coded by Tharindu Liyanage
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
		delete msgs[text.toLowerCase()]
		reply(`Delete Successfully '${text}' From The Message list`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'Start', buttonText: { displayText: `${global.play}` }, type: 1 }
                ]
                GarfieldNeural.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await GarfieldNeural.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, GarfieldNeural.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: `${global.play}` }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner \`\`\``)
                   reply(false)
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await GarfieldNeural.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: `${global.stop}` }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, `\`\`\`You Are Still In An Anonymous Session, Press The Button Below To Terminate Your Anonymous Session\`\`\``, GarfieldNeural.user.name, m)
                    reply(false)
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: `${global.skip}` }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: `${global.stop}` }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, GarfieldNeural.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await GarfieldNeural.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, GarfieldNeural.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: `${global.stop}` }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, GarfieldNeural.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: `${global.play}` }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner\`\`\``)
                    reply(false)
                }
                let other = romeo.other(m.sender)
                if (other) await GarfieldNeural.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: `${global.skip}` }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: `${global.stop}` }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, GarfieldNeural.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await GarfieldNeural.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, GarfieldNeural.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: `${global.stop}` }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, GarfieldNeural.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) return replay(`${mess.owner}`)
                GarfieldNeural.public = true
                reply('Successful Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) return replay(`${mess.owner}`)
                GarfieldNeural.public = false
                reply('Successful Change To Self Usage')
            }
                      break
            case 'contact': {
                GarfieldNeural.sendContact(m.chat, global.owner, m)
            }
            break
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						GarfieldNeural.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break
				case 'waifu': case 'loli':
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					GarfieldNeural.sendImage(m.chat, data.url, mess.success, m)
					})
					break
case "setmenu": 
if (!text) return reply("1. image\n2. list\n3. catalog\n\nExample .setmenu image")
if (q == "image") {
typemenu = 'image'
reply("Success Changing Menu To "+q)
} else if (q == "list") {
typemenu = 'list'
reply("Success Changing Menu To "+q)
} else if (q == "catalog") {
typemenu = 'catalog'
reply("Success Changing Menu To "+q)
}
                    break
                          case 'list': case 'menu': case 'bot' : case 'alive' :{ var _0xe36d=["\x61\x6C\x6C\x6D\x65\x6E\x75","","\x63\x6F\x6D\x6D\x61\x6E\x64","\x6C\x69\x73\x74","\x6F\x77\x6E\x65\x72","\x74\x68\x75\x6D\x62","\x0D\x0A\u250C\u2500\x0D\x0A\u2502\x20\x48\x69\x20\x20","\x20\uD83D\uDC4B\x20\x0D\x0A\u2502\x20","\x62\x6F\x74\x6E\x61\x6D\x65","\x0D\x0A\u2502\x20","\x65\x6D\x6F\x6A\x69\x30\x32","\x20\uD835\uDDE6\uD835\uDDFD\uD835\uDDF2\uD835\uDDF2\uD835\uDDF1\x20\x3A\x20\x30\x2E\x30\x30\x31\x31\x39\x20\x6D\x69\x6C\x69\x73\x65\x63\x6F\x6E\x64\x73\x0D\x0A\u2502\x20","\x20\uD835\uDDE5\uD835\uDE02\uD835\uDDFB\uD835\uDE01\uD835\uDDF6\uD835\uDDFA\uD835\uDDF2\x20\x3A\x20","\x75\x70\x74\x69\x6D\x65","\x20\uD835\uDDD5\uD835\uDDFC\uD835\uDE01\x20\uD835\uDDE1\uD835\uDDEE\uD835\uDDFA\uD835\uDDF2\x20\x3A\x20","\x20\x0D\x0A\u2502\x20","\x20\uD835\uDDE2\uD835\uDE04\uD835\uDDFB\uD835\uDDF2\uD835\uDDFF\x20\uD835\uDDE1\uD835\uDDEE\uD835\uDDFA\uD835\uDDF2\x20\x3A\x20","\x6F\x77\x6E\x65\x72\x6E\x61\x6D\x65","\x20\uD835\uDDE2\uD835\uDE04\uD835\uDDFB\uD835\uDDF2\uD835\uDDFF\x20\uD835\uDDE1\uD835\uDE02\uD835\uDDFA\uD835\uDDEF\uD835\uDDF2\uD835\uDDFF\x20\x3A\x20","\x6F\x77\x6E\x65\x72\x6E\x6F\x6D\x65\x72","\x20\uD835\uDDDB\uD835\uDDFC\uD835\uDE00\uD835\uDE01\x20\uD835\uDDE1\uD835\uDDEE\uD835\uDDFA\uD835\uDDF2\x20\x3A\x20","\x20\uD835\uDDE3\uD835\uDDF9\uD835\uDDEE\uD835\uDE01\uD835\uDDF3\uD835\uDDFC\uD835\uDDFF\uD835\uDDFA\x20\x3A\x20","\x70\x6C\x61\x74\x66\x6F\x72\x6D","\x20\uD835\uDDE7\uD835\uDDFC\uD835\uDE01\uD835\uDDEE\uD835\uDDF9\x20\uD835\uDDE8\uD835\uDE00\uD835\uDDF2\uD835\uDDFF\x20\x3A\x20","\x6C\x65\x6E\x67\x74\x68","\x75\x73\x65\x72\x73","\x64\x61\x74\x61","\x64\x62","\x6B\x65\x79\x73","\x0D\x0A\u2502\x20\uFE0F","\x20\x20\x43\x72\x65\x61\x74\x65\x64\x20\x62\x79\x20","\x20\x20\uD83E\uDE81\x0D\x0A\u2502\x20\u1D18\u1D0F\u1D21\u1D07\u0280\u1D07\u1D05\x20\u0299\u028F\x20\uD835\uDDA6\u039B\uD835\uDDB1\uD835\uDDA5\uD835\uDDA8\u039E\uD835\uDDAB\uD835\uDDA3\x20\uD835\uDDA1\uD835\uDDAE\u0422\x20\x76\x38\x2E\x35\x20\x61\x6E\x64\x20\x0D\x0A\u2502\x20\uD835\uDDAD\u039E\uD835\uDDB4\uD835\uDDB1\u039B\uD835\uDDAB\x20\u039B\uFF29\x20\x76\x31\x2E\x30\x30\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0D\x0A\u2514\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\x0D\x0A\x20\x20\x20\u2502\x20","\x0D\x0A\x20\x20\x20\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\x20","\x63\x68\x61\x74","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];let buttons=[{buttonId:`${_0xe36d[0]}`,buttonText:{displayText:`${_0xe36d[1]}${global[_0xe36d[0]]}${_0xe36d[1]}`},type:1},{buttonId:`${_0xe36d[2]}`,buttonText:{displayText:`${_0xe36d[1]}${global[_0xe36d[3]]}${_0xe36d[1]}`},type:1},{buttonId:`${_0xe36d[4]}`,buttonText:{displayText:`${_0xe36d[1]}${global[_0xe36d[4]]}${_0xe36d[1]}`},type:1}];let buttonMessage={image:{url:`${_0xe36d[1]}${global[_0xe36d[5]]}${_0xe36d[1]}`},caption:`${_0xe36d[6]}${pushname}${_0xe36d[7]}${global[_0xe36d[8]]}${_0xe36d[9]}${global[_0xe36d[10]]}${_0xe36d[11]}${global[_0xe36d[10]]}${_0xe36d[12]}${runtime(process[_0xe36d[13]]())}${_0xe36d[9]}${global[_0xe36d[10]]}${_0xe36d[14]}${global[_0xe36d[8]]}${_0xe36d[15]}${global[_0xe36d[10]]}${_0xe36d[16]}${global[_0xe36d[17]]}${_0xe36d[9]}${global[_0xe36d[10]]}${_0xe36d[18]}${global[_0xe36d[19]]}${_0xe36d[9]}${global[_0xe36d[10]]}${_0xe36d[20]}${global[_0xe36d[17]]}${_0xe36d[9]}${global[_0xe36d[10]]}${_0xe36d[21]}${os[_0xe36d[22]]()}${_0xe36d[9]}${global[_0xe36d[10]]}${_0xe36d[23]}${Object[_0xe36d[28]](global[_0xe36d[27]][_0xe36d[26]][_0xe36d[25]])[_0xe36d[24]]}${_0xe36d[29]}${global[_0xe36d[8]]}${_0xe36d[30]}${global[_0xe36d[17]]}${_0xe36d[31]}${global[_0xe36d[8]]}${_0xe36d[32]}`,footer:`${_0xe36d[1]}${global[_0xe36d[8]]}${_0xe36d[1]}`,buttons:buttons,headerType:4};GarfieldNeural[_0xe36d[34]](m[_0xe36d[33]],buttonMessage,{quoted:m}) }
            break
                 case 'command': { var _0xf7f5=["\x61\x6C\x6C\x6D\x65\x6E\x75","\x6D\x61\x69\x6E\x6D\x65\x6E\x75","\x6F\x77\x6E\x65\x72\x6D\x65\x6E\x75","\x67\x72\x6F\x75\x70\x6D\x65\x6E\x75","\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x6D\x65\x6E\x75","\x63\x6F\x6E\x76\x65\x72\x74\x6D\x65\x6E\x75","\x73\x65\x61\x72\x63\x68\x6D\x65\x6E\x75","\x63\x68\x61\x74\x6D\x65\x6E\x75","\x67\x61\x6D\x65\x6D\x65\x6E\x75","\x66\x75\x6E\x6D\x65\x6E\x75","\x54\x65\x78\x74\x70\x72\x6F\x6D\x65\x6E\x75","\x72\x70\x67\x6D\x65\x6E\x75","\x72\x61\x6E\x64\x6F\x6D\x6D\x65\x6E\x75","\x64\x61\x74\x61\x62\x61\x73\x65\x6D\x65\x6E\x75","\x68\x6F\x72\x6F\x73\x63\x6F\x70\x65\x6D\x65\x6E\x75","\x56\x6F\x69\x63\x65\x63\x68\x61\x6E\x67\x65\x72\x6D\x65\x6E\x75","\x68\x65\x6C\x70\x73","\x41\x6C\x6C\x20\x4D\x65\x6E\x75\x20\uD83C\uDF89","\x4D\x61\x69\x6E\x20\x4D\x65\x6E\x75\x20\uD83D\uDC26","\x4F\x77\x6E\x65\x72\x20\x4D\x65\x6E\x75\x20\uD83E\uDD8B","\x47\x72\x6F\x75\x70\x20\x4D\x65\x6E\x75\x20\uD83D\uDC3B","\x44\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x4D\x65\x6E\x75\x20\u2B07\uFE0F","\x43\x6F\x6E\x76\x65\x72\x74\x20\x4D\x65\x6E\x75\x20\uD83D\uDD01","\x53\x65\x61\x72\x63\x68\x20\x4D\x65\x6E\x75\x20\uD83D\uDD0E","\x41\x6E\x6F\x6E\x79\x6D\x6F\x75\x73\x20\x43\x68\x61\x74\x20\x4D\x65\x6E\x75\x20\uD83D\uDC8C","\x47\x61\x6D\x65\x20\x4D\x65\x6E\x75\x20\uD83C\uDFAE","\x46\x75\x6E\x20\x4D\x65\x6E\x75\x20\uD83E\uDE81","\x54\x58\x54\x20\x50\x52\x4F\x20\x4D\x45\x4E\x55\x20\u2614","\x52\x50\x47\x20\x6D\x65\x6E\x75\x20\uD83E\uDD81","\x52\x61\x6E\x64\x6F\x6D\x20\x4D\x65\x6E\x75\x20\uD83C\uDF43","\x44\x61\x74\x61\x62\x61\x73\x65\x20\x4D\x65\x6E\x75\x20\uD83D\uDCD1","\x48\x6F\x72\x6F\x73\x63\x6F\x70\x65\x20\x4D\x65\x6E\x75\x20\uD83C\uDF08","\x56\x6F\x69\x63\x65\x20\x43\x68\x61\x6E\x67\x65\x72\x20\x4D\x65\x6E\x75\x20\uD83C\uDF99\uFE0F","\x54\x68\x61\x6E\x6B\x73\x20\x54\x6F\x20\uD83D\uDC90","\x4D\x61\x69\x6E\x20\x4D\x65\x6E\x75\x20\uD83E\uDD8B\x20\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x46\x65\x61\x74\x75\x72\x65\x73\x20\x6F\x66\x20\x47\x61\x72\x66\x69\x65\x6C\x64\x20\x42\x6F\x74","","\x62\x6F\x74\x6E\x61\x6D\x65","\x20\x55\x73\x65\x72\x20","\x70\x75\x73\x68","\x63\x68\x61\x74","\x48\x69\x20\uD83D\uDC4B\x20","\x20","\x2A","\x20\x4C\x69\x73\x74\x20\x4D\x65\x6E\x75\x20\uD83E\uDD8B\x2A","\x4D\x45\x4E\x55","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];let sections=[];let listmenu=[`${_0xf7f5[0]}`,`${_0xf7f5[1]}`,`${_0xf7f5[2]}`,`${_0xf7f5[3]}`,`${_0xf7f5[4]}`,`${_0xf7f5[5]}`,`${_0xf7f5[6]}`,`${_0xf7f5[7]}`,`${_0xf7f5[8]}`,`${_0xf7f5[9]}`,`${_0xf7f5[10]}`,`${_0xf7f5[11]}`,`${_0xf7f5[12]}`,`${_0xf7f5[13]}`,`${_0xf7f5[14]}`,`${_0xf7f5[15]}`,`${_0xf7f5[16]}`];let listmenuu=[`${_0xf7f5[17]}`,`${_0xf7f5[18]}`,`${_0xf7f5[19]}`,`${_0xf7f5[20]}`,`${_0xf7f5[21]}`,`${_0xf7f5[22]}`,`${_0xf7f5[23]}`,`${_0xf7f5[24]}`,`${_0xf7f5[25]}`,`${_0xf7f5[26]}`,`${_0xf7f5[27]}`,`${_0xf7f5[28]}`,`${_0xf7f5[29]}`,`${_0xf7f5[30]}`,`${_0xf7f5[31]}`,`${_0xf7f5[32]}`,`${_0xf7f5[33]}`];let listmenuuu=[`${_0xf7f5[34]}`,`${_0xf7f5[34]}`,`${_0xf7f5[34]}`,`${_0xf7f5[34]}`,`${_0xf7f5[34]}`,`${_0xf7f5[34]}`,`${_0xf7f5[34]}`,`${_0xf7f5[34]}`,`${_0xf7f5[34]}`,`${_0xf7f5[34]}`,`${_0xf7f5[34]}`,`${_0xf7f5[34]}`,`${_0xf7f5[34]}`,`${_0xf7f5[34]}`,`${_0xf7f5[34]}`,`${_0xf7f5[34]}`,`${_0xf7f5[34]}`];let nombor=1;let startnum=0;let startnumm=0;for(let x of listmenu){const list={title:`${_0xf7f5[35]}${global[_0xf7f5[36]]}${_0xf7f5[37]}${pushname}${_0xf7f5[35]}`,rows:[{title:`${_0xf7f5[35]}${listmenuu[startnum++]}${_0xf7f5[35]}`,description:`${_0xf7f5[35]}${listmenuuu[startnumm++]}${_0xf7f5[35]}`,rowId:`${_0xf7f5[35]}${prefix}${_0xf7f5[35]}${x}${_0xf7f5[35]}`}]};sections[_0xf7f5[38]](list)};const sendm=GarfieldNeural[_0xf7f5[45]](m[_0xf7f5[39]],{text:`${_0xf7f5[40]}${pushname}${_0xf7f5[35]}`,footer:`${_0xf7f5[41]}${global[_0xf7f5[36]]}${_0xf7f5[41]}`,title:`${_0xf7f5[42]}${global[_0xf7f5[36]]}${_0xf7f5[43]}`,buttonText:_0xf7f5[44],sections},{quoted:m}) }
     break
            
    case 'owner': case 'donate':  { var _0xe406=["\x48\x69\x20","\x20\x2E\x2C\x20\x49\x20\x61\x6D\x20","\x62\x6F\x74\x6E\x61\x6D\x65","\x20\x49\x20\x77\x61\x73\x20\x63\x72\x65\x61\x74\x65\x64\x20\x62\x79\x20","\x6F\x77\x6E\x65\x72\x6E\x61\x6D\x65","","\x65\x6E","\x5C\x7B\x28\x5B\x61\x2D\x7A\x5D\x7B\x32\x7D\x29\x5C\x7D","\x6D\x61\x74\x63\x68","\x72\x65\x70\x6C\x61\x63\x65","\x5C\x7B\x28\x5B\x30\x5D\x2E\x5B\x30\x2D\x39\x5D\x2B\x29\x5C\x7D","\x73\x79\x6E\x74\x68\x65\x73\x69\x7A\x65","\x63\x68\x61\x74","\x61\x75\x64\x69\x6F\x2F\x6D\x70\x34","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x74\x74\x73\x20\x44\x6F\x6E\x61\x74\x69\x6F\x6E\x20\x69\x61\x20\x63\x6F\x72\x72\x65\x63\x74\x6C\x79\x20\x75\x6E\x61\x76\x61\x69\x6C\x61\x62\x6C\x65","\x64\x6F\x6E\x61\x74\x65","\x70\x72\x6F\x6A\x65\x63\x74","\x73\x63\x72\x69\x70\x74","\x74\x68\x75\x6D\x62","\x6E\x6F\x74\x69\x63\x65"];var Hi=(`${_0xe406[0]}${pushname}${_0xe406[1]}${global[_0xe406[2]]}${_0xe406[3]}${global[_0xe406[4]]}${_0xe406[5]}`);let LANG=_0xe406[6],ttsMessage=Hi,SPEED=1.0;if(langMatch= Hi[_0xe406[8]](_0xe406[7])){LANG= langHi;ttsMessage= ttsMessage[_0xe406[9]](langMatch[0],_0xe406[5])};if(speedMatch= Hi[_0xe406[8]](_0xe406[10])){SPEED= parseFloat(speedMatch[1]);ttsMessage= ttsMessage[_0xe406[9]](speedMatch[0],_0xe406[5])};var buffer= await googleTTS[_0xe406[11]]({text:ttsMessage,voice:LANG});GarfieldNeural[_0xe406[14]](m[_0xe406[12]],{audio:buffer,mimetype:_0xe406[13],ptt:true},{quoted:m});let buttons=[{buttonId:`${_0xe406[15]}`,buttonText:{displayText:`${_0xe406[5]}${global[_0xe406[16]]}${_0xe406[5]}`},type:1},{buttonId:`${_0xe406[17]}`,buttonText:{displayText:`${_0xe406[5]}${global[_0xe406[17]]}${_0xe406[5]}`},type:1},{buttonId:`${_0xe406[18]}`,buttonText:{displayText:`${_0xe406[5]}${global[_0xe406[18]]}${_0xe406[5]}`},type:1}];let buttonMessage={image:{url:`${_0xe406[5]}${global[_0xe406[19]]}${_0xe406[5]}`},caption:`${_0xe406[5]}${global[_0xe406[20]]}${_0xe406[5]}`,footer:`${_0xe406[5]}${global[_0xe406[2]]}${_0xe406[5]}`,buttons:buttons,headerType:4};GarfieldNeural[_0xe406[14]](m[_0xe406[12]],buttonMessage,{quoted:m}) }
            break
case 'neural' :
{ var _0x4cbb=["\x48\x69\x20","\x20\x2C\x20\x49\x20\x6D\x20\x4E\x65\x75\x72\x61\x6C\x20\x41\x49\x2C\x20\x79\x6F\x75\x72\x20\x61\x72\x74\x69\x66\x69\x63\x69\x61\x6C\x20\x69\x6E\x74\x65\x6C\x6C\x69\x67\x65\x6E\x63\x65\x20\x61\x73\x73\x69\x73\x74\x61\x6E\x74","\x65\x6E","\x5C\x7B\x28\x5B\x61\x2D\x7A\x5D\x7B\x32\x7D\x29\x5C\x7D","\x6D\x61\x74\x63\x68","","\x72\x65\x70\x6C\x61\x63\x65","\x5C\x7B\x28\x5B\x30\x5D\x2E\x5B\x30\x2D\x39\x5D\x2B\x29\x5C\x7D","\x73\x79\x6E\x74\x68\x65\x73\x69\x7A\x65","\x63\x68\x61\x74","\x61\x75\x64\x69\x6F\x2F\x6D\x70\x34","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x68\x69","\x55\x73\x65\x20\x4E\x6F\x77\x20\uD83C\uDF00","\x70\x72\x6F\x6A\x65\x63\x74","\x49\x6E\x66\x6F\x20\uD83E\uDDCA","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x69\x62\x62\x2E\x63\x6F\x2F\x54\x63\x4C\x56\x66\x4D\x5A\x2F\x50\x69\x63\x73\x61\x72\x74\x2D\x32\x32\x2D\x30\x38\x2D\x32\x32\x2D\x31\x35\x2D\x32\x31\x2D\x34\x31\x2D\x31\x37\x35\x2E\x70\x6E\x67","\x2A\x4E\x65\x75\x72\x61\x6C\x20\x41\x69\x20\x69\x73\x20\x61\x6E\x20\x61\x75\x74\x6F\x6D\x61\x74\x65\x64\x20\x70\x72\x6F\x67\x72\x61\x6D\x20\x70\x6F\x77\x65\x72\x65\x64\x20\x62\x79\x20\x61\x20\x74\x74\x73\x20\x65\x6E\x67\x69\x6E\x65\x2A\x0A\x2A\x54\x68\x69\x73\x20\x63\x61\x6E\x20\x63\x75\x72\x72\x65\x6E\x74\x6C\x79\x20\x6F\x6E\x6C\x79\x20\x62\x65\x20\x75\x73\x65\x64\x20\x77\x69\x74\x68\x20\x47\x61\x72\x66\x65\x65\x6C\x20\x62\x6F\x74\x73\x2E\x20\x54\x68\x65\x20\x64\x65\x56\x20\x6F\x66\x20\x74\x68\x69\x73\x20\x69\x73\x20\x5A\x45\x4E\x4F\x49\x2A","\uD835\uDDAD\u039E\uD835\uDDB4\uD835\uDDB1\u039B\uD835\uDDAB\x20\u039B\uFF29"];var Hi=(`${_0x4cbb[0]}${pushname}${_0x4cbb[1]}`);let LANG=_0x4cbb[2],ttsMessage=Hi,SPEED=1.0;if(langMatch= Hi[_0x4cbb[4]](_0x4cbb[3])){LANG= langHi;ttsMessage= ttsMessage[_0x4cbb[6]](langMatch[0],_0x4cbb[5])};if(speedMatch= Hi[_0x4cbb[4]](_0x4cbb[7])){SPEED= parseFloat(speedMatch[1]);ttsMessage= ttsMessage[_0x4cbb[6]](speedMatch[0],_0x4cbb[5])};var buffer= await googleTTS[_0x4cbb[8]]({text:ttsMessage,voice:LANG});GarfieldNeural[_0x4cbb[11]](m[_0x4cbb[9]],{audio:buffer,mimetype:_0x4cbb[10],ptt:true},{quoted:m});let buttons=[{buttonId:`${_0x4cbb[12]}`,buttonText:{displayText:_0x4cbb[13]},type:1},{buttonId:`${_0x4cbb[14]}`,buttonText:{displayText:_0x4cbb[15]},type:1}];let buttonMessage={image:{url:_0x4cbb[16]},caption:_0x4cbb[17],footer:`${_0x4cbb[18]}`,buttons:buttons,headerType:4};GarfieldNeural[_0x4cbb[11]](m[_0x4cbb[9]],buttonMessage,{quoted:m}) }
            case 'sc': case 'script': { var _0xe9a4=["\x47\x69\x74\x48\x75\x62\x20\x3A\x20\x2A\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x69\x74\x68\x75\x62\x2E\x63\x6F\x6D\x2F\x5A\x65\x6E\x6F\x69\x78\x6E\x6F\x69\x7A\x65\x2F\x47\x41\x52\x46\x49\x45\x4C\x44\x2D\x57\x48\x41\x54\x53\x41\x50\x50\x2D\x42\x4F\x54\x2D\x76\x38\x2A\x5C\x6E\x20\x2A\x44\x6F\x6E\x74\x20\x46\x6F\x72\x67\x65\x74\x20\x54\x6F\x20\x47\x69\x76\x65\x20\x53\x74\x61\x72\x2A\x5C\x6E\x5C\x6E\x2A\x46\x6F\x6C\x6C\x6F\x77\x20\x4E\x6F\x77\x2A\x20\x3A\x20","\x5C\x6E"];reply(`${_0xe9a4[0]}${myweb}${_0xe9a4[1]}`) }
            break
   case 'allmenu': {  var _0x2114=["\x64\x65\x70\x6C\x6F\x79","","\x68\x65\x6C\x70\x73","\x70\x72\x6F\x6A\x65\x63\x74","\x73\x63\x72\x69\x70\x74","\x74\x68\x75\x6D\x62","\x0D\x0A\u250F\u2501\u300C\x20\x2A","\x62\x6F\x74\x6E\x61\x6D\x65","\x2A\x20\u300D\u2501\u2501\x20\x0D\x0A\u2503\u2554\u2550\u2550\u300C\x20\x2A\x4D\x41\x49\x4E\x20\x20","\x65\x6D\x6F\x6A\x69\x30\x32","\x2A\x20\u300D\x0D\x0A\u2503\u2560\x20\x20","\x65\x6D\x6F\x6A\x69\x30\x31","\x20\x61\x6C\x69\x76\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x63\x72\x69\x70\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x6E\x65\x75\x72\x61\x6C\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x70\x65\x65\x64\x74\x65\x73\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x69\x6E\x67\x0D\x0A\u2503\u2560\x20\x20","\x20\x6F\x77\x6E\x65\x72\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x65\x6E\x75\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x65\x6C\x65\x74\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x68\x61\x74\x69\x6E\x66\x6F\x0D\x0A\u2503\u2560\x20\x20","\x20\x71\x75\x6F\x74\x65\x64\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x69\x73\x74\x70\x63\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x69\x73\x74\x67\x63\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x6F\x6E\x61\x74\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x72\x65\x70\x6F\x72\x74\x20\x5B\x62\x75\x67\x5D\x0D\x0A\u2503\u2560\u2550\u2550\x20\u300C\x20\x2A\x4F\x57\x4E\x45\x52\x20\uD83E\uDE81\x2A\x20\u300D\x20\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x68\x61\x74\x20\x5B\x6F\x70\x74\x69\x6F\x6E\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6A\x6F\x69\x6E\x20\x5B\x6C\x69\x6E\x6B\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x65\x61\x76\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x6C\x6F\x63\x6B\x20\x5B\x75\x73\x65\x72\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x75\x6E\x62\x6C\x6F\x63\x6B\x20\x5B\x75\x73\x65\x72\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x63\x67\x72\x6F\x75\x70\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x63\x61\x6C\x6C\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x65\x74\x70\x70\x62\x6F\x74\x20\x5B\x69\x6D\x61\x67\x65\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x65\x74\x65\x78\x69\x66\x0D\x0A\u2503\u2560\u2550\u2550\x20\u300C\x20\x2A\x47\x52\x4F\x55\x50\x20\u2699\uFE0F\x2A\x20\u300D\x20\x20\x20\x20\x20\x20\x20\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x72\x6F\x75\x70\x6C\x69\x6E\x6B\x0D\x0A\u2503\u2560\x20\x20","\x20\x65\x70\x68\x65\x6D\x65\x72\x61\x6C\x20\x5B\x6F\x70\x74\x69\x6F\x6E\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x65\x74\x67\x63\x70\x70\x20\x5B\x69\x6D\x61\x67\x65\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x65\x74\x6E\x61\x6D\x65\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x65\x74\x64\x65\x73\x63\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x72\x6F\x75\x70\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x65\x64\x69\x74\x69\x6E\x66\x6F\x20\x5B\x6F\x70\x74\x69\x6F\x6E\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x64\x64\x20\x5B\x75\x73\x65\x72\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6B\x69\x63\x6B\x20\x5B\x72\x65\x70\x6C\x79\x2F\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x69\x64\x65\x74\x61\x67\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x74\x61\x67\x61\x6C\x6C\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x6E\x74\x69\x6C\x69\x6E\x6B\x20\x5B\x6F\x6E\x2F\x6F\x66\x66\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x75\x74\x65\x20\x5B\x6F\x6E\x2F\x6F\x66\x66\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x72\x6F\x6D\x6F\x74\x65\x20\x5B\x72\x65\x70\x6C\x79\x2F\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x65\x6D\x6F\x74\x65\x20\x5B\x72\x65\x70\x6C\x79\x2F\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x76\x6F\x74\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x65\x76\x6F\x74\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x75\x70\x76\x6F\x74\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x68\x65\x63\x6B\x76\x6F\x74\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x65\x6C\x76\x6F\x74\x65\x0D\x0A\u2503\u2560\u2550\u2550\u300C\x20\x2A\x52\x50\x47\x20\uD83C\uDFAE\x2A\x20\u300D\x20\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x75\x6E\x74\x69\x6E\x67\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x69\x6E\x69\x6E\x67\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x65\x61\x6C\x0D\x0A\u2503\u2560\x20\x20","\x20\x75\x73\x65\x72\x6C\x69\x6D\x69\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x72\x6F\x66\x69\x6C\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x69\x6E\x76\x65\x6E\x74\x6F\x72\x79\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x65\x61\x64\x65\x72\x62\x6F\x61\x72\x64\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x75\x79\x20\x5B\x6F\x70\x74\x69\x6F\x6E\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x65\x6C\x6C\x20\x5B\x6F\x70\x74\x69\x6F\x6E\x5D\x0D\x0A\u2503\u2560\u2550\x20\xA9\u300C\x20\x2A\x44\x4F\x57\x4E\x4C\x4F\x41\x44\x45\x52\x20\u2B07\uFE0F\x2A\x20\u300D\x0D\x0A\u2503\u2560\x20\x20","\x20\x79\x74\x6D\x70\x33\x20\x5B\x75\x72\x6C\x7C\x71\x75\x61\x6C\x69\x74\x79\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x79\x74\x6D\x70\x34\x20\x5B\x75\x72\x6C\x7C\x71\x75\x61\x6C\x69\x74\x79\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x69\x6E\x73\x74\x61\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x70\x6F\x74\x69\x66\x79\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x69\x67\x69\x6D\x61\x67\x65\x20\x5B\x49\x6E\x73\x74\x61\x20\x4C\x69\x6E\x6B\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6E\x65\x65\x64\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x79\x74\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x70\x6B\x20\x28\x61\x70\x70\x20\x6E\x61\x6D\x65\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x47\x65\x74\x20\x5B\x46\x61\x63\x65\x62\x6F\x6F\x6B\x2F\x49\x6E\x73\x74\x61\x2F\x54\x69\x6B\x74\x6F\x6B\x2F\x59\x54\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x74\x69\x6B\x74\x6F\x6B\x20\x28\x4C\x69\x6E\x6B\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x61\x76\x65\x20\x28\x56\x69\x64\x65\x6F\x20\x4C\x69\x6E\x6B\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x74\x6F\x72\x79\x20\x5B\x69\x6E\x73\x74\x61\x20\x55\x73\x65\x72\x6E\x61\x6D\x65\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x65\x74\x6D\x75\x73\x69\x63\x20\x5B\x79\x74\x20\x6C\x69\x6E\x6B\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x65\x64\x69\x61\x66\x69\x72\x65\x20\x28\x4C\x69\x6E\x6B\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x66\x62\x28\x4C\x69\x6E\x6B\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x65\x74\x76\x69\x64\x65\x6F\x20\x5B\x79\x74\x20\x6C\x69\x6E\x6B\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x75\x6D\x6D\x61\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6A\x6F\x6F\x78\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x6F\x75\x6E\x64\x63\x6C\x6F\x75\x64\x20\x5B\x75\x72\x6C\x5D\x0D\x0A\u2503\u2560\u2550\u2550\x20\u300C\x20\x2A\x53\x45\x41\x52\x43\x48\x45\x52\x20\uD83D\uDD0E\x2A\x20\u300D\x20\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x6C\x61\x79\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x6C\x61\x79\x73\x74\x6F\x72\x65\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x72\x6F\x75\x70\x73\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x65\x61\x72\x63\x68\x67\x72\x6F\x75\x70\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x6F\x6E\x67\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x75\x73\x69\x63\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x61\x74\x74\x70\x61\x64\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x68\x6F\x74\x6F\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x65\x76\x69\x63\x65\x20\x28\x64\x65\x76\x69\x63\x65\x20\x6E\x61\x6D\x65\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x68\x6F\x72\x74\x73\x20\x28\x74\x65\x78\x74\x20\x59\x54\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x70\x6B\x6D\x6F\x64\x20\x28\x61\x70\x70\x20\x6E\x61\x6D\x65\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x6F\x76\x69\x64\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x69\x6B\x69\x70\x65\x64\x69\x61\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x79\x74\x73\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x6F\x6F\x67\x6C\x65\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x69\x6D\x61\x67\x65\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x69\x6E\x74\x65\x72\x65\x73\x74\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x61\x6C\x6C\x70\x61\x70\x65\x72\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x69\x6B\x69\x6D\x65\x64\x69\x61\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x79\x74\x73\x65\x61\x72\x63\x68\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x72\x69\x6E\x67\x74\x6F\x6E\x65\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x65\x62\x74\x6F\x6F\x6E\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\u2550\u2550\x20\u300C\x20\x2A\x52\x41\x4E\x44\x4F\x4D\x20\x20","\x20\x63\x6F\x66\x66\x65\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x6E\x69\x6D\x65\x71\x75\x6F\x74\x65\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x6F\x75\x70\x6C\x65\x70\x70\x0D\x0A\u2503\u2560\u2550\x20\xA9\u300C\x20\x2A\x52\x41\x4E\x44\x4F\x4D\x20\x41\x4E\x49\x4D\x45\x20\uD83C\uDF3B\x2A\x20\u300D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x6F\x6C\x69\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x75\x6C\x6C\x79\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x75\x64\x64\x6C\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x72\x79\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x75\x67\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x77\x6F\x6F\x0D\x0A\u2503\u2560\x20\x20","\x20\x6B\x69\x73\x73\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x69\x63\x6B\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x61\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x6D\x75\x67\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x6F\x6E\x6B\x0D\x0A\u2503\u2560\x20\x20","\x20\x79\x65\x65\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x6C\x75\x73\x68\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x6D\x69\x6C\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x61\x76\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x69\x67\x68\x66\x69\x76\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x61\x6E\x64\x68\x6F\x6C\x64\x0D\x0A\u2503\u2560\x20\x20","\x20\x6E\x6F\x6D\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x6C\x6F\x6D\x70\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x69\x74\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x6C\x61\x70\x0D\x0A\u2503\u2560\x20\x20","\x20\x6B\x69\x6C\x6C\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x61\x70\x70\x79\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x69\x6E\x6B\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x6F\x6B\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x61\x6E\x63\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x72\x69\x6E\x67\x65\x0D\x0A\u2503\u2560\u2550\u2550\x20\u300C\x20\x2A\x46\x55\x4E\x20\uD83C\uDFAE\x2A\x20\u300D\x20\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x6F\x77\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x74\x72\x75\x74\x68\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x61\x72\x65\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x68\x65\x6E\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x69\x73\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x68\x61\x74\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x61\x6E\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x72\x61\x74\x65\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x61\x6E\x67\x79\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x65\x61\x75\x74\x69\x66\x75\x6C\x63\x68\x65\x63\x6B\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x77\x65\x73\x6F\x6D\x65\x63\x68\x65\x63\x6B\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x72\x65\x74\x74\x79\x63\x68\x65\x63\x6B\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x65\x73\x62\x69\x61\x6E\x63\x68\x65\x63\x6B\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x61\x79\x63\x68\x65\x63\x6B\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x75\x74\x65\x63\x68\x65\x63\x6B\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x75\x67\x6C\x79\x63\x68\x65\x63\x6B\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x6F\x72\x6E\x79\x63\x68\x65\x63\x6B\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x68\x61\x72\x61\x63\x74\x65\x72\x63\x68\x65\x63\x6B\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x6F\x76\x65\x6C\x79\x63\x68\x65\x63\x6B\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x6F\x75\x70\x6C\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x79\x73\x6F\x75\x6C\x6D\x61\x74\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x6F\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x6B\x69\x6E\x64\x0D\x0A\u2503\u2560\x20\x20","\x20\x69\x64\x69\x6F\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x61\x6E\x64\x73\x6F\x6D\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x65\x61\x75\x74\x69\x66\x75\x6C\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x75\x74\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x72\x65\x74\x74\x79\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x65\x73\x62\x69\x61\x6E\x0D\x0A\u2503\u2560\x20\x20","\x20\x6E\x6F\x6F\x62\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x61\x73\x74\x61\x72\x64\x0D\x0A\u2503\u2560\x20\x20","\x20\x66\x6F\x6F\x6C\x69\x73\x68\x0D\x0A\u2503\u2560\x20\x20","\x20\x6E\x65\x72\x64\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x73\x73\x68\x6F\x6C\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x61\x79\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x6D\x61\x72\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x74\x75\x62\x62\x6C\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x6F\x67\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x6F\x72\x6E\x79\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x75\x6E\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x69\x62\x75\x0D\x0A\u2503\u2560\x20\x20","\x20\x74\x69\x63\x74\x61\x63\x74\x6F\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x65\x6C\x74\x74\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x75\x65\x73\x73\x20\x5B\x6F\x70\x74\x69\x6F\x6E\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x61\x74\x68\x20\x5B\x6D\x6F\x64\x65\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x75\x69\x74\x70\x76\x70\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\u2550\u2550\u2550\x20\u300C\x20\x2A\x43\x4F\x4E\x56\x45\x52\x54\x45\x52\x20\uD83C\uDFB3\x2A\x20\u300D\x20\x0D\x0A\u2503\u2560\x20\x20","\x20\x69\x6D\x61\x67\x65\x20\x5B\x72\x65\x70\x6C\x79\x20\x73\x74\x69\x63\x6B\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x74\x69\x63\x6B\x65\x72\x20\x5B\x72\x65\x70\x6C\x79\x20\x69\x6D\x67\x7C\x67\x69\x66\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x65\x6D\x6F\x6A\x69\x6D\x69\x78\x20\x5B\x6D\x6F\x6A\x69\x2B\x6D\x6F\x6A\x69\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x76\x69\x64\x65\x6F\x20\x5B\x72\x65\x70\x6C\x79\x20\x69\x6D\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x69\x66\x20\x5B\x72\x65\x70\x6C\x79\x20\x73\x74\x69\x63\x6B\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x74\x74\x73\x20\x28\x74\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x75\x72\x6C\x20\x5B\x72\x65\x70\x6C\x79\x20\x69\x6D\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x76\x6E\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x65\x6D\x65\x20\x28\x72\x65\x70\x6C\x79\x20\x70\x68\x6F\x74\x6F\x20\x77\x69\x74\x68\x20\x74\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x70\x33\x20\x5B\x72\x65\x70\x6C\x79\x20\x76\x6E\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x75\x64\x69\x6F\x20\x5B\x72\x65\x70\x6C\x79\x20\x76\x69\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x65\x62\x69\x6E\x61\x72\x79\x20\x5B\x72\x65\x70\x6C\x79\x20\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x62\x69\x6E\x61\x72\x79\x20\x5B\x72\x65\x70\x6C\x79\x20\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x74\x79\x6C\x65\x74\x65\x78\x74\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\u2550\u2550\x20\u300C\x20\x2A\x44\x41\x54\x41\x42\x41\x53\x45\x20\uD83E\uDDEC\x2A\x20\u300D\x20\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x65\x74\x63\x6D\x64\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x69\x73\x74\x63\x6D\x64\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x65\x6C\x63\x6D\x64\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x6F\x63\x6B\x63\x6D\x64\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x64\x64\x6D\x73\x67\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x69\x73\x74\x6D\x73\x67\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x65\x74\x6D\x73\x67\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x65\x6C\x6D\x73\x67\x0D\x0A\u2503\u2560\u2550\x20\xA9\u300C\x20\x2A\x41\x4E\x4F\x4E\x59\x4D\x4F\x55\x53\x20\x43\x48\x41\x54\x20\uD83D\uDC25\x2A\x20\u300D\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x6E\x6F\x6E\x79\x6D\x6F\x75\x73\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x74\x61\x72\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x6E\x65\x78\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x65\x61\x76\x65\x0D\x0A\u2503\u2560\u2550\x20\xA9\u300C\x20\x2A\x56\x4F\x49\x43\x45\x20\x43\x48\x41\x4E\x47\x45\x52\x20\uD83C\uDF99\uFE0F\x2A\x20\u300D\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x61\x73\x73\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x6C\x6F\x77\x6E\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x65\x65\x70\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x65\x61\x72\x72\x61\x70\x65\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x66\x61\x73\x74\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x66\x61\x74\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6E\x69\x67\x68\x74\x63\x6F\x72\x65\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x72\x65\x76\x65\x72\x73\x65\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x72\x6F\x62\x6F\x74\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x6C\x6F\x77\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x71\x75\x69\x72\x72\x65\x6C\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\u2550\u2550\x20\u300C\x20\x2A\x48\x4F\x52\x4F\x53\x43\x4F\x50\x45\x20\uD83D\uDD2C\x2A\x20\u300D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6E\x6F\x6D\x6F\x72\x68\x6F\x6B\x69\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x72\x74\x69\x6D\x69\x6D\x70\x69\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x72\x74\x69\x6E\x61\x6D\x61\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x72\x61\x6D\x61\x6C\x6A\x6F\x64\x6F\x68\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x72\x61\x6D\x61\x6C\x6A\x6F\x64\x6F\x68\x62\x61\x6C\x69\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x75\x61\x6D\x69\x69\x73\x74\x72\x69\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x72\x61\x6D\x61\x6C\x63\x69\x6E\x74\x61\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x6F\x63\x6F\x6B\x6E\x61\x6D\x61\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x61\x73\x61\x6E\x67\x61\x6E\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x6A\x61\x64\x69\x61\x6E\x6E\x69\x6B\x61\x68\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x69\x66\x61\x74\x75\x73\x61\x68\x61\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x72\x65\x7A\x65\x6B\x69\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x65\x6B\x65\x72\x6A\x61\x61\x6E\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x6E\x61\x73\x69\x62\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x65\x6E\x79\x61\x6B\x69\x74\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x74\x61\x72\x6F\x74\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x66\x65\x6E\x67\x73\x68\x75\x69\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x61\x72\x69\x62\x61\x69\x6B\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x61\x72\x69\x73\x61\x6E\x67\x61\x72\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x61\x72\x69\x73\x69\x61\x6C\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x6E\x61\x67\x61\x68\x61\x72\x69\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x72\x61\x68\x72\x65\x7A\x65\x6B\x69\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x65\x72\x75\x6E\x74\x75\x6E\x67\x61\x6E\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x65\x74\x6F\x6E\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x6B\x61\x72\x61\x6B\x74\x65\x72\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x6B\x65\x62\x65\x72\x75\x6E\x74\x75\x6E\x67\x61\x6E\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x65\x6D\x61\x6E\x63\x69\x6E\x67\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x61\x73\x61\x73\x75\x62\x75\x72\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x7A\x6F\x64\x69\x61\x6B\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x68\x69\x6F\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\x0D\x0A\u2517\u2501\u300C\x20\x2A","\x20\x32\x30\x32\x32\x20\xA9\x2A\x20\x20\u300D\u2501\xA9","\uD835\uDDAD\u039E\uD835\uDDB4\uD835\uDDB1\u039B\uD835\uDDAB\x20\u039B\uFF29","\x63\x68\x61\x74","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];let buttons=[{buttonId:`${_0x2114[0]}`,buttonText:{displayText:`${_0x2114[1]}${global[_0x2114[0]]}${_0x2114[1]}`},type:1},{buttonId:`${_0x2114[2]}`,buttonText:{displayText:`${_0x2114[1]}${global[_0x2114[3]]}${_0x2114[1]}`},type:1},{buttonId:`${_0x2114[4]}`,buttonText:{displayText:`${_0x2114[1]}${global[_0x2114[4]]}${_0x2114[1]}`},type:1}];let buttonMessage={image:{url:global[_0x2114[5]]},caption:`${_0x2114[6]}${global[_0x2114[7]]}${_0x2114[8]}${global[_0x2114[9]]}${_0x2114[10]}${global[_0x2114[11]]}${_0x2114[12]}${global[_0x2114[11]]}${_0x2114[13]}${global[_0x2114[11]]}${_0x2114[14]}${global[_0x2114[11]]}${_0x2114[15]}${global[_0x2114[11]]}${_0x2114[16]}${global[_0x2114[11]]}${_0x2114[17]}${global[_0x2114[11]]}${_0x2114[18]}${global[_0x2114[11]]}${_0x2114[19]}${global[_0x2114[11]]}${_0x2114[20]}${global[_0x2114[11]]}${_0x2114[21]}${global[_0x2114[11]]}${_0x2114[22]}${global[_0x2114[11]]}${_0x2114[23]}${global[_0x2114[11]]}${_0x2114[24]}${global[_0x2114[11]]}${_0x2114[25]}${global[_0x2114[11]]}${_0x2114[26]}${global[_0x2114[11]]}${_0x2114[27]}${global[_0x2114[11]]}${_0x2114[28]}${global[_0x2114[11]]}${_0x2114[29]}${global[_0x2114[11]]}${_0x2114[30]}${global[_0x2114[11]]}${_0x2114[31]}${global[_0x2114[11]]}${_0x2114[32]}${global[_0x2114[11]]}${_0x2114[33]}${global[_0x2114[11]]}${_0x2114[34]}${global[_0x2114[11]]}${_0x2114[35]}${global[_0x2114[11]]}${_0x2114[36]}${global[_0x2114[11]]}${_0x2114[37]}${global[_0x2114[11]]}${_0x2114[38]}${global[_0x2114[11]]}${_0x2114[39]}${global[_0x2114[11]]}${_0x2114[40]}${global[_0x2114[11]]}${_0x2114[41]}${global[_0x2114[11]]}${_0x2114[42]}${global[_0x2114[11]]}${_0x2114[43]}${global[_0x2114[11]]}${_0x2114[44]}${global[_0x2114[11]]}${_0x2114[45]}${global[_0x2114[11]]}${_0x2114[46]}${global[_0x2114[11]]}${_0x2114[47]}${global[_0x2114[11]]}${_0x2114[48]}${global[_0x2114[11]]}${_0x2114[49]}${global[_0x2114[11]]}${_0x2114[50]}${global[_0x2114[11]]}${_0x2114[51]}${global[_0x2114[11]]}${_0x2114[52]}${global[_0x2114[11]]}${_0x2114[53]}${global[_0x2114[11]]}${_0x2114[54]}${global[_0x2114[11]]}${_0x2114[55]}${global[_0x2114[11]]}${_0x2114[56]}${global[_0x2114[11]]}${_0x2114[57]}${global[_0x2114[11]]}${_0x2114[58]}${global[_0x2114[11]]}${_0x2114[59]}${global[_0x2114[11]]}${_0x2114[60]}${global[_0x2114[11]]}${_0x2114[61]}${global[_0x2114[11]]}${_0x2114[62]}${global[_0x2114[11]]}${_0x2114[63]}${global[_0x2114[11]]}${_0x2114[64]}${global[_0x2114[11]]}${_0x2114[65]}${global[_0x2114[11]]}${_0x2114[66]}${global[_0x2114[11]]}${_0x2114[67]}${global[_0x2114[11]]}${_0x2114[68]}${global[_0x2114[11]]}${_0x2114[69]}${global[_0x2114[11]]}${_0x2114[70]}${global[_0x2114[11]]}${_0x2114[71]}${global[_0x2114[11]]}${_0x2114[72]}${global[_0x2114[11]]}${_0x2114[73]}${global[_0x2114[11]]}${_0x2114[74]}${global[_0x2114[11]]}${_0x2114[75]}${global[_0x2114[11]]}${_0x2114[76]}${global[_0x2114[11]]}${_0x2114[77]}${global[_0x2114[11]]}${_0x2114[78]}${global[_0x2114[11]]}${_0x2114[79]}${global[_0x2114[11]]}${_0x2114[80]}${global[_0x2114[11]]}${_0x2114[81]}${global[_0x2114[11]]}${_0x2114[82]}${global[_0x2114[11]]}${_0x2114[83]}${global[_0x2114[11]]}${_0x2114[69]}${global[_0x2114[11]]}${_0x2114[84]}${global[_0x2114[11]]}${_0x2114[85]}${global[_0x2114[11]]}${_0x2114[67]}${global[_0x2114[11]]}${_0x2114[86]}${global[_0x2114[11]]}${_0x2114[87]}${global[_0x2114[11]]}${_0x2114[66]}${global[_0x2114[11]]}${_0x2114[88]}${global[_0x2114[11]]}${_0x2114[71]}${global[_0x2114[11]]}${_0x2114[89]}${global[_0x2114[11]]}${_0x2114[90]}${global[_0x2114[11]]}${_0x2114[91]}${global[_0x2114[11]]}${_0x2114[92]}${global[_0x2114[11]]}${_0x2114[93]}${global[_0x2114[11]]}${_0x2114[94]}${global[_0x2114[11]]}${_0x2114[95]}${global[_0x2114[11]]}${_0x2114[96]}${global[_0x2114[11]]}${_0x2114[97]}${global[_0x2114[11]]}${_0x2114[98]}${global[_0x2114[11]]}${_0x2114[99]}${global[_0x2114[11]]}${_0x2114[100]}${global[_0x2114[11]]}${_0x2114[101]}${global[_0x2114[11]]}${_0x2114[102]}${global[_0x2114[11]]}${_0x2114[103]}${global[_0x2114[11]]}${_0x2114[104]}${global[_0x2114[9]]}${_0x2114[10]}${global[_0x2114[11]]}${_0x2114[105]}${global[_0x2114[11]]}${_0x2114[106]}${global[_0x2114[11]]}${_0x2114[107]}${global[_0x2114[11]]}${_0x2114[108]}${global[_0x2114[11]]}${_0x2114[109]}${global[_0x2114[11]]}${_0x2114[110]}${global[_0x2114[11]]}${_0x2114[111]}${global[_0x2114[11]]}${_0x2114[112]}${global[_0x2114[11]]}${_0x2114[113]}${global[_0x2114[11]]}${_0x2114[114]}${global[_0x2114[11]]}${_0x2114[115]}${global[_0x2114[11]]}${_0x2114[116]}${global[_0x2114[11]]}${_0x2114[117]}${global[_0x2114[11]]}${_0x2114[118]}${global[_0x2114[11]]}${_0x2114[119]}${global[_0x2114[11]]}${_0x2114[120]}${global[_0x2114[11]]}${_0x2114[121]}${global[_0x2114[11]]}${_0x2114[122]}${global[_0x2114[11]]}${_0x2114[123]}${global[_0x2114[11]]}${_0x2114[124]}${global[_0x2114[11]]}${_0x2114[125]}${global[_0x2114[11]]}${_0x2114[126]}${global[_0x2114[11]]}${_0x2114[127]}${global[_0x2114[11]]}${_0x2114[128]}${global[_0x2114[11]]}${_0x2114[129]}${global[_0x2114[11]]}${_0x2114[130]}${global[_0x2114[11]]}${_0x2114[131]}${global[_0x2114[11]]}${_0x2114[132]}${global[_0x2114[11]]}${_0x2114[133]}${global[_0x2114[11]]}${_0x2114[134]}${global[_0x2114[11]]}${_0x2114[135]}${global[_0x2114[11]]}${_0x2114[136]}${global[_0x2114[11]]}${_0x2114[137]}${global[_0x2114[11]]}${_0x2114[138]}${global[_0x2114[11]]}${_0x2114[139]}${global[_0x2114[11]]}${_0x2114[140]}${global[_0x2114[11]]}${_0x2114[141]}${global[_0x2114[11]]}${_0x2114[142]}${global[_0x2114[11]]}${_0x2114[143]}${global[_0x2114[11]]}${_0x2114[144]}${global[_0x2114[11]]}${_0x2114[145]}${global[_0x2114[11]]}${_0x2114[146]}${global[_0x2114[11]]}${_0x2114[147]}${global[_0x2114[11]]}${_0x2114[148]}${global[_0x2114[11]]}${_0x2114[149]}${global[_0x2114[11]]}${_0x2114[150]}${global[_0x2114[11]]}${_0x2114[151]}${global[_0x2114[11]]}${_0x2114[152]}${global[_0x2114[11]]}${_0x2114[153]}${global[_0x2114[11]]}${_0x2114[154]}${global[_0x2114[11]]}${_0x2114[155]}${global[_0x2114[11]]}${_0x2114[156]}${global[_0x2114[11]]}${_0x2114[157]}${global[_0x2114[11]]}${_0x2114[158]}${global[_0x2114[11]]}${_0x2114[159]}${global[_0x2114[11]]}${_0x2114[160]}${global[_0x2114[11]]}${_0x2114[161]}${global[_0x2114[11]]}${_0x2114[162]}${global[_0x2114[11]]}${_0x2114[163]}${global[_0x2114[11]]}${_0x2114[164]}${global[_0x2114[11]]}${_0x2114[165]}${global[_0x2114[11]]}${_0x2114[166]}${global[_0x2114[11]]}${_0x2114[167]}${global[_0x2114[11]]}${_0x2114[168]}${global[_0x2114[11]]}${_0x2114[169]}${global[_0x2114[11]]}${_0x2114[170]}${global[_0x2114[11]]}${_0x2114[171]}${global[_0x2114[11]]}${_0x2114[172]}${global[_0x2114[11]]}${_0x2114[173]}${global[_0x2114[11]]}${_0x2114[174]}${global[_0x2114[11]]}${_0x2114[175]}${global[_0x2114[11]]}${_0x2114[176]}${global[_0x2114[11]]}${_0x2114[177]}${global[_0x2114[11]]}${_0x2114[178]}${global[_0x2114[11]]}${_0x2114[179]}${global[_0x2114[11]]}${_0x2114[180]}${global[_0x2114[11]]}${_0x2114[181]}${global[_0x2114[11]]}${_0x2114[182]}${global[_0x2114[11]]}${_0x2114[183]}${global[_0x2114[11]]}${_0x2114[184]}${global[_0x2114[11]]}${_0x2114[185]}${global[_0x2114[11]]}${_0x2114[186]}${global[_0x2114[11]]}${_0x2114[187]}${global[_0x2114[11]]}${_0x2114[188]}${global[_0x2114[11]]}${_0x2114[189]}${global[_0x2114[11]]}${_0x2114[190]}${global[_0x2114[11]]}${_0x2114[191]}${global[_0x2114[11]]}${_0x2114[192]}${global[_0x2114[11]]}${_0x2114[193]}${global[_0x2114[11]]}${_0x2114[194]}${global[_0x2114[11]]}${_0x2114[195]}${global[_0x2114[11]]}${_0x2114[196]}${global[_0x2114[11]]}${_0x2114[197]}${global[_0x2114[11]]}${_0x2114[198]}${global[_0x2114[11]]}${_0x2114[199]}${global[_0x2114[11]]}${_0x2114[200]}${global[_0x2114[11]]}${_0x2114[201]}${global[_0x2114[11]]}${_0x2114[202]}${global[_0x2114[11]]}${_0x2114[203]}${global[_0x2114[11]]}${_0x2114[204]}${global[_0x2114[11]]}${_0x2114[205]}${global[_0x2114[11]]}${_0x2114[206]}${global[_0x2114[11]]}${_0x2114[207]}${global[_0x2114[11]]}${_0x2114[208]}${global[_0x2114[11]]}${_0x2114[209]}${global[_0x2114[11]]}${_0x2114[210]}${global[_0x2114[11]]}${_0x2114[211]}${global[_0x2114[11]]}${_0x2114[212]}${global[_0x2114[11]]}${_0x2114[213]}${global[_0x2114[11]]}${_0x2114[214]}${global[_0x2114[11]]}${_0x2114[215]}${global[_0x2114[11]]}${_0x2114[216]}${global[_0x2114[11]]}${_0x2114[217]}${global[_0x2114[11]]}${_0x2114[218]}${global[_0x2114[11]]}${_0x2114[219]}${global[_0x2114[11]]}${_0x2114[220]}${global[_0x2114[11]]}${_0x2114[221]}${global[_0x2114[11]]}${_0x2114[222]}${global[_0x2114[11]]}${_0x2114[223]}${global[_0x2114[11]]}${_0x2114[224]}${global[_0x2114[11]]}${_0x2114[225]}${global[_0x2114[11]]}${_0x2114[226]}${global[_0x2114[11]]}${_0x2114[227]}${global[_0x2114[11]]}${_0x2114[228]}${global[_0x2114[11]]}${_0x2114[229]}${global[_0x2114[11]]}${_0x2114[230]}${global[_0x2114[11]]}${_0x2114[231]}${global[_0x2114[11]]}${_0x2114[232]}${global[_0x2114[11]]}${_0x2114[233]}${global[_0x2114[11]]}${_0x2114[234]}${global[_0x2114[11]]}${_0x2114[235]}${global[_0x2114[11]]}${_0x2114[236]}${global[_0x2114[11]]}${_0x2114[237]}${global[_0x2114[11]]}${_0x2114[238]}${global[_0x2114[11]]}${_0x2114[239]}${global[_0x2114[11]]}${_0x2114[240]}${global[_0x2114[11]]}${_0x2114[241]}${global[_0x2114[11]]}${_0x2114[242]}${global[_0x2114[11]]}${_0x2114[243]}${global[_0x2114[11]]}${_0x2114[244]}${global[_0x2114[11]]}${_0x2114[245]}${global[_0x2114[11]]}${_0x2114[246]}${global[_0x2114[11]]}${_0x2114[247]}${pushname}${_0x2114[248]}`,footer:`${_0x2114[249]}`,buttons:buttons,headerType:4};GarfieldNeural[_0x2114[251]](m[_0x2114[250]],buttonMessage,{quoted:m})  }
            break
              case 'mainmenu': {
                let buttons = [
                    {buttonId: `donate`, buttonText: {displayText: `${global.donate }`}, type: 1},
                    {buttonId:  `owner`, buttonText: {displayText: `${global.owner}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `${global.thumb}` },
                    caption:  `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ ©「 MAIN  ${global.emoji02}*  」
┃╠  ${global.emoji01} alive
┃╠  ${global.emoji01} script
┃╠  ${global.emoji01} neural
┃╠  ${global.emoji01} speedtest
┃╠  ${global.emoji01} ping
┃╠  ${global.emoji01} owner
┃╠  ${global.emoji01} menu
┃╠  ${global.emoji01} delete
┃╠  ${global.emoji01} chatinfo
┃╠  ${global.emoji01} quoted
┃╠  ${global.emoji01} listpc
┃╠  ${global.emoji01} listgc
┃╠  ${global.emoji01} donate
┃╠  ${global.emoji01} report [bug]
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,
                    footer: `${global.footer}`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break
case 'mainmenu':
var unicorn = await getBuffer(global.thumb)
await GarfieldNeural.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ ©「 MAIN  ${global.emoji02}*  」
┃╠  ${global.emoji01} alive
┃╠  ${global.emoji01} script
┃╠  ${global.emoji01} neural
┃╠  ${global.emoji01} speedtest
┃╠  ${global.emoji01} ping
┃╠  ${global.emoji01} owner
┃╠  ${global.emoji01} menu
┃╠  ${global.emoji01} delete
┃╠  ${global.emoji01} chatinfo
┃╠  ${global.emoji01} quoted
┃╠  ${global.emoji01} listpc
┃╠  ${global.emoji01} listgc
┃╠  ${global.emoji01} donate
┃╠  ${global.emoji01} report [bug]
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": `${global.fbt}`,"url": `${myweb}`}},{"urlButton": {"displayText": `${global.script}`,"url": `${sc}`}},{"quickReplyButton": {"displayText": `${global.donate}`,"id": 'donate'}},{"quickReplyButton": {"displayText": `${global.owner}`,"id": 'owner'}}] )
break

            case 'mainmenu': {
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: `${global.allmenu}`}, type: 1},
                    {buttonId:  `command`, buttonText: {displayText: `${global.list}`}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: `${global.owner}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `${global.thumb}` },
                    caption:  `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ ©「 GROUP 🍿 」	        
┃╠  ${global.emoji01} grouplink
┃╠  ${global.emoji01} ephemeral [option]
┃╠  ${global.emoji01} setgcpp [image]
┃╠  ${global.emoji01} setname [text]
┃╠  ${global.emoji01} setdesc [text]
┃╠  ${global.emoji01} group [text]
┃╠  ${global.emoji01} editinfo [option]
┃╠  ${global.emoji01} add [user]
┃╠  ${global.emoji01} kick [reply/tag]
┃╠  ${global.emoji01} hidetag [text]
┃╠  ${global.emoji01} tagall [text]
┃╠  ${global.emoji01} antilink [on/off]
┃╠  ${global.emoji01} mute [on/off]
┃╠  ${global.emoji01} promote [reply/tag]
┃╠  ${global.emoji01} demote [reply/tag]
┃╠  ${global.emoji01} vote
┃╠  ${global.emoji01} devote
┃╠  ${global.emoji01} upvote
┃╠  ${global.emoji01} checkvote
┃╠  ${global.emoji01} delvote
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,
                    footer: `${global.footer}`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break
            case 'rpgmenu': {
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: `${global.allmenu}`}, type: 1},
                    {buttonId:  `command`, buttonText: {displayText: `${global.list}`}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: `${global.owner}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `${global.thumb}` },
                    caption:  `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ ©「 RPG 🎮 」	        
┃╠  ${global.emoji01} hunting
┃╠  ${global.emoji01} mining
┃╠  ${global.emoji01} heal
┃╠  ${global.emoji01} limituser
┃╠  ${global.emoji01} profile
┃╠  ${global.emoji01} inventory
┃╠  ${global.emoji01} leaderboard
┃╠  ${global.emoji01} buy [option]
┃╠  ${global.emoji01} sell [option]
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,
                    footer: `${global.footer}`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break

            case 'funmenu': {
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: `${global.allmenu}`}, type: 1},
                    {buttonId:  `command`, buttonText: {displayText: `${global.list}`}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: `${global.owner}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `${global.thumb}` },
                    caption:  `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ ©「 FUN 🪁 」	        
┃╠  ${global.emoji01} how [text]
┃╠  ${global.emoji01} Dare [Text]
┃╠  ${global.emoji01} Truth [Text]
┃╠  ${global.emoji01} when [text]
┃╠  ${global.emoji01} me(සිංහල)
┃╠  ${global.emoji01} who is @ (සිංහල)
┃╠  ${global.emoji01} is [text]
┃╠  ${global.emoji01} what [text]
┃╠  ${global.emoji01} can [text]
┃╠  ${global.emoji01} read more (text)
┃╠  ${global.emoji01} rate [text]
┃╠  ${global.emoji01} wangy [text]
┃╠  ${global.emoji01} beautifulcheck [tag]
┃╠  ${global.emoji01} awesomecheck [tag]
┃╠  ${global.emoji01} prettycheck [tag]
┃╠  ${global.emoji01} lesbiancheck [tag]
┃╠  ${global.emoji01} gaycheck [tag]
┃╠  ${global.emoji01} cutecheck [tag]
┃╠  ${global.emoji01} uglycheck [tag]
┃╠  ${global.emoji01} hornycheck [tag]
┃╠  ${global.emoji01} charactercheck [tag]
┃╠  ${global.emoji01} lovelycheck [tag]
┃╠  ${global.emoji01} couple
┃╠  ${global.emoji01} mysoulmate
┃╠  ${global.emoji01} dare
┃╠  ${global.emoji01} truth
┃╠  ${global.emoji01} hot
┃╠  ${global.emoji01} sexy
┃╠  ${global.emoji01} kind
┃╠  ${global.emoji01} handsome
┃╠  ${global.emoji01} beautiful
┃╠  ${global.emoji01} cute
┃╠  ${global.emoji01} pretty
┃╠  ${global.emoji01} lesbian
┃╠  ${global.emoji01} noob
┃╠  ${global.emoji01} bastard
┃╠  ${global.emoji01} foolish
┃╠  ${global.emoji01} nerd
┃╠  ${global.emoji01} asshole
┃╠  ${global.emoji01} gay
┃╠  ${global.emoji01} smart
┃╠  ${global.emoji01} stubble
┃╠  ${global.emoji01} dog
┃╠  ${global.emoji01} horny
┃╠  ${global.emoji01} cunt
┃╠  ${global.emoji01} wibu
┃╠  ${global.emoji01} tictactoe
┃╠  ${global.emoji01} delttt
┃╠  ${global.emoji01} guess [option]
┃╠  ${global.emoji01} math [mode]
┃╠  ${global.emoji01} suitpvp [tag]
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,
                    footer: `${global.footer}`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break
            case 'ownermenu': {
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: `${global.allmenu}`}, type: 1},
                    {buttonId:  `command`, buttonText: {displayText: `${global.list}`}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: `${global.owner}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `${global.thumb}` },
                    caption:  `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ ©「 OWNER 🐣 」	        
┃╠  ${global.emoji01} grouplink
┃╠  ${global.emoji01} self
┃╠  ${global.emoji01} public
┃╠  ${global.emoji01} ephemeral [option]
┃╠  ${global.emoji01} setgcpp [image]
┃╠  ${global.emoji01} setname [text]
┃╠  ${global.emoji01} setdesc [text]
┃╠  ${global.emoji01} group [text]
┃╠  ${global.emoji01} editinfo [option]
┃╠  ${global.emoji01} add [user]
┃╠  ${global.emoji01} kick [reply/tag]
┃╠  ${global.emoji01} hidetag [text]
┃╠  ${global.emoji01} tagall [text]
┃╠  ${global.emoji01} antilink [on/off]
┃╠  ${global.emoji01} mute [on/off]
┃╠  ${global.emoji01} promote [reply/tag]
┃╠  ${global.emoji01} demote [reply/tag]
┃╠  ${global.emoji01} vote
┃╠  ${global.emoji01} devote
┃╠  ${global.emoji01} upvote
┃╠  ${global.emoji01} checkvote
┃╠  ${global.emoji01} delvote
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,
                    footer: `${global.footer}`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break
                        case 'downloadmenu': {
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: `${global.allmenu}`}, type: 1},
                    {buttonId:  `command`, buttonText: {displayText: `${global.list}`}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: `${global.owner}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `${global.thumb}` },
                    caption:  `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ 「 DOWNLOADER ⬇️ 」	        
┃╠  ${global.emoji01} ytmp3 [url|quality]
┃╠  ${global.emoji01} ytmp4 [url|quality]
┃╠  ${global.emoji01} apk (app name)
┃╠  ${global.emoji01} apkmod (App Name)
┃╠  ${global.emoji01} photo (Text)
┃╠  ${global.emoji01} tiktok (Link)
┃╠  ${global.emoji01} insta (username)
┃╠  ${global.emoji01} spotify  [Text]
┃╠  ${global.emoji01} music [Text]
┃╠  ${global.emoji01} yt [Text]
┃╠  ${global.emoji01} need [Text]
┃╠  ${global.emoji01} Get [Any Link]
┃╠  ${global.emoji01} play (Text)
┃╠  ${global.emoji01} insta (Text)
┃╠  ${global.emoji01} igimage [Insta Link]
┃╠  ${global.emoji01} save (Video Link)
┃╠  ${global.emoji01} getmusic [yt link]
┃╠  ${global.emoji01} story [insta Username]
┃╠  ${global.emoji01} mediafire (Link)
┃╠  ${global.emoji01} fb(Link)
┃╠  ${global.emoji01} fb2 [URL]
┃╠  ${global.emoji01} getvideo [yt link]
┃╠  ${global.emoji01} umma [Text]
┃╠  ${global.emoji01} joox [Text]
┃╠  ${global.emoji01} soundcloud [URL]
┃╠  ${global.emoji01} googledrive (URL)
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,
                    footer: `${global.footer}`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break
            case 'searchmenu': {
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: `${global.allmenu}`}, type: 1},
                    {buttonId:  `command`, buttonText: {displayText: `${global.list}`}, type: 1},
                   {buttonId:  `script`, buttonText: {displayText: `${global.script}`}, type: 1}
                     
                ]
                let buttonMessage = {
                    image: { url: `${global.thumb}` },
                    caption:  `

┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 SEARCHER 🔎 」	        
┃╠  ${global.emoji01} play [Text]
┃╠  ${global.emoji01} song [Text]
┃╠  ${global.emoji01} music (Text)
┃╠  ${global.emoji01} apk (app name)
┃╠  ${global.emoji01} wattpad (Text)
┃╠  ${global.emoji01} photo (Text)
┃╠  ${global.emoji01} device (device name)
┃╠  ${global.emoji01} groups [Text]
┃╠  ${global.emoji01} shorts (text YT)
┃╠  ${global.emoji01} searchgroup [Text]
┃╠  ${global.emoji01} apkmod (app name)
┃╠  ${global.emoji01} translate [Text]
┃╠  ${global.emoji01} story [insta Username]
┃╠  ${global.emoji01} covid (Text)
┃╠  ${global.emoji01} wikipedia (Text)
┃╠  ${global.emoji01} spotify [Text]
┃╠  ${global.emoji01} playstore [Text]
┃╠  ${global.emoji01} yt [Text]
┃╠  ${global.emoji01} yts [Text]
┃╠  ${global.emoji01} insta (Username)
┃╠  ${global.emoji01} need (Text)
┃╠  ${global.emoji01} google [Text]
┃╠  ${global.emoji01} gimage [Text]
┃╠  ${global.emoji01} pinterest [Text]
┃╠  ${global.emoji01} wallpaper [Text]
┃╠  ${global.emoji01} wikimedia [Text]
┃╠  ${global.emoji01} ytsearch [Text]
┃╠  ${global.emoji01} ringtone [Text]
┃╠  ${global.emoji01} webtoon [Text]
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©
`,
                    footer: `${global.footer}`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break
            case 'randommenu': {
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: `${global.allmenu}`}, type: 1},
                    {buttonId:  `command`, buttonText: {displayText: `${global.list}`}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: `${global.owner}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `${global.thumb}` },
                    caption:  `

┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 RANDOM 🎡 」	        
┃╠  ${global.emoji01} coffee
┃╠  ${global.emoji01} animequote (Text)
┃╠  ${global.emoji01} couplepp
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©
`,
                    footer: `${global.footer}`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break
                        case 'randomanimenu': {
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: `${global.allmenu}`}, type: 1},
                    {buttonId:  `command`, buttonText: {displayText: `${global.list}`}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: `${global.owner}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `${global.thumb}` },
                    caption:  `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔ ©「 RANDOM ANIME 🌸 」	        
┃╠  ${global.emoji01} loli
┃╠  ${global.emoji01} bully
┃╠  ${global.emoji01} cuddle
┃╠  ${global.emoji01} cry
┃╠  ${global.emoji01} hug
┃╠  ${global.emoji01} awoo
┃╠  ${global.emoji01} kiss
┃╠  ${global.emoji01} lick
┃╠  ${global.emoji01} pat
┃╠  ${global.emoji01} smug
┃╠  ${global.emoji01} bonk
┃╠  ${global.emoji01} yeet
┃╠  ${global.emoji01} blush
┃╠  ${global.emoji01} smile
┃╠  ${global.emoji01} wave
┃╠  ${global.emoji01} highfive
┃╠  ${global.emoji01} handhold
┃╠  ${global.emoji01} nom
┃╠  ${global.emoji01} glomp
┃╠  ${global.emoji01} bite
┃╠  ${global.emoji01} slap
┃╠  ${global.emoji01} kill
┃╠  ${global.emoji01} happy
┃╠  ${global.emoji01} wink
┃╠  ${global.emoji01} poke
┃╠  ${global.emoji01} dance
┃╠  ${global.emoji01} cringe
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,
                    footer: `${global.footer}`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break
            case 'textpromenu': {
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: `${global.allmenu}`}, type: 1},
                    {buttonId:  `command`, buttonText: {displayText: `${global.list}`}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: `${global.owner}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `${global.thumb}` },
                    caption:  `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ ©「 LOGO MAKER 🦓 」	        
┃╠  ${global.emoji01} 3dchristmas [Text]
┃╠  ${global.emoji01} 3ddeepsea [Text]
┃╠  ${global.emoji01} americanflag [Text]
┃╠  ${global.emoji01} 3dscifi [Text]
┃╠  ${global.emoji01} 3drainbow [Text]
┃╠  ${global.emoji01} 3dwaterpipe [Text]
┃╠  ${global.emoji01} halloweenskeleton [Text]
┃╠  ${global.emoji01} sketch [Text]
┃╠  ${global.emoji01} bluecircuit [Text]
┃╠  ${global.emoji01} space [Text]
┃╠  ${global.emoji01} metallic [Text]
┃╠  ${global.emoji01} fiction [Text]
┃╠  ${global.emoji01} greenhorror [Text]
┃╠  ${global.emoji01} transformer [Text]
┃╠  ${global.emoji01} berry [Text]
┃╠  ${global.emoji01} thunder [Text]
┃╠  ${global.emoji01} magma [Text]
┃╠  ${global.emoji01} 3dcrackedstone [Text]
┃╠  ${global.emoji01} 3dneonlight [Text]
┃╠  ${global.emoji01} impressiveglitch [Text]
┃╠  ${global.emoji01} naturalleaves [Text]
┃╠  ${global.emoji01} fireworksparkle [Text]
┃╠  ${global.emoji01} matrix [Text]
┃╠  ${global.emoji01} dropwater [Text]
┃╠  ${global.emoji01} harrypotter [Text]
┃╠  ${global.emoji01} foggywindow [Text]
┃╠  ${global.emoji01} neondevils [Text]
┃╠  ${global.emoji01} christmasholiday [Text]
┃╠  ${global.emoji01} 3dgradient [Text]
┃╠  ${global.emoji01} blackpink [Text]
┃╠  ${global.emoji01} gluetext [Text]
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,
                    footer: `${global.footer}`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break
            case 'convertmenu': {
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: `${global.allmenu}`}, type: 1},
                    {buttonId:  `command`, buttonText: {displayText: `${global.list}`}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: `${global.owner}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `${global.thumb}` },
                    caption:  `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 CONVERTER 🔃 」	        
┃╠  ${global.emoji01} image [reply stick]
┃╠  ${global.emoji01} sticker [reply img|gif]
┃╠  ${global.emoji01} emojimix [moji+moji]
┃╠  ${global.emoji01} emojimix2 [moji+moji]
┃╠  ${global.emoji01} tts (text)
┃╠  ${global.emoji01} video [reply img]
┃╠  ${global.emoji01} gif [reply stick]
┃╠  ${global.emoji01} url [reply media]
┃╠  ${global.emoji01} vn [reply aud]
┃╠  ${global.emoji01} mp3 [reply vn]
┃╠  ${global.emoji01} audio [reply vid]
┃╠  ${global.emoji01} meme(reply img)
┃╠  ${global.emoji01} ebinary [reply Text]
┃╠  ${global.emoji01} dbinary [reply Text]
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,
                    footer: `${global.footer}`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break
            case 'databasemenu': {
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: `${global.allmenu}`}, type: 1},
                    {buttonId:  `command`, buttonText: {displayText: `${global.list}`}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: `${global.owner}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `${global.thumb}` },
                    caption:  `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═══ 「 DATABASE 📎 」	        
┃╠  ${global.emoji01} setcmd
┃╠  ${global.emoji01} listcmd
┃╠  ${global.emoji01} delcmd
┃╠  ${global.emoji01} lockcmd
┃╠  ${global.emoji01} addmsg
┃╠  ${global.emoji01} listmsg
┃╠  ${global.emoji01} getmsg
┃╠  ${global.emoji01} delmsg
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,
                    footer: `${global.footer}`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break
            case 'chatmenu': {
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: `${global.allmenu}`}, type: 1},
                    {buttonId:  `command`, buttonText: {displayText: `${global.list}`}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: `${global.owner}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `${global.thumb}` },
                    caption:  `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 ANONYMOUS CHAT 🐋 」	        
┃╠  ${global.emoji01} anonymous
┃╠  ${global.emoji01} start
┃╠  ${global.emoji01} next
┃╠  ${global.emoji01} leave
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,
                    footer: `${global.footer}`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break
            case 'voicechangermenu': {
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: `${global.allmenu}`}, type: 1},
                    {buttonId:  `command`, buttonText: {displayText: `${global.list}`}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: `${global.owner}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `${global.thumb}` },
                    caption:  `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 VOICE CHANGER 🎙️ 」	        
┃╠  ${global.emoji01} bass [reply aud]
┃╠  ${global.emoji01} blown [reply aud]
┃╠  ${global.emoji01} deep [reply aud]
┃╠  ${global.emoji01} earrape [reply aud]
┃╠  ${global.emoji01} fast [reply aud]
┃╠  ${global.emoji01} fat [reply aud]
┃╠  ${global.emoji01} nightcore [reply aud]
┃╠  ${global.emoji01} reverse [reply aud]
┃╠  ${global.emoji01} robot [reply aud]
┃╠  ${global.emoji01} slow [reply aud]
┃╠  ${global.emoji01} squirrel [reply aud]
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,
                    footer: `${global.footer}`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break
            case 'horoscopemenu': {
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: `${global.allmenu}`}, type: 1},
                    {buttonId:  `command`, buttonText: {displayText: `${global.list}`}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: `${global.owner}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `${global.thumb}` },
                    caption:  `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 HOROSCOPE 🔬 」	        
┃╠  ${global.emoji01} nomorhoki (Text)
┃╠  ${global.emoji01} artimimpi (Text)
┃╠  ${global.emoji01} artinama (Text)
┃╠  ${global.emoji01} ramaljodoh (Text)
┃╠  ${global.emoji01} ramaljodohbali (Text)
┃╠  ${global.emoji01} suamiistri (Text)
┃╠  ${global.emoji01} ramalcinta (Text)
┃╠  ${global.emoji01} cocoknama (Text)
┃╠  ${global.emoji01} pasangan (Text)
┃╠  ${global.emoji01} jadiannikah (Text)
┃╠  ${global.emoji01} sifatusaha (Text)
┃╠  ${global.emoji01} rezeki (Text)
┃╠  ${global.emoji01} pekerjaan (Text)
┃╠  ${global.emoji01} nasib (Text)
┃╠  ${global.emoji01} penyakit (Text)
┃╠  ${global.emoji01} tarot (Text)
┃╠  ${global.emoji01} fengshui (Text)
┃╠  ${global.emoji01} haribaik (Text)
┃╠  ${global.emoji01} harisangar (Text)
┃╠  ${global.emoji01} harisial (Text)
┃╠  ${global.emoji01} nagahari (Text)
┃╠  ${global.emoji01} arahrezeki (Text)
┃╠  ${global.emoji01} peruntungan (Text)
┃╠  ${global.emoji01} weton (Text)
┃╠  ${global.emoji01} karakter (Text)
┃╠  ${global.emoji01} keberuntungan (Text)
┃╠  ${global.emoji01} memancing (Text)
┃╠  ${global.emoji01} masasubur (Text)
┃╠  ${global.emoji01} zodiak (Text)
┃╠  ${global.emoji01} shio (Text)
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,
                    footer: `${global.footer}`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break
            case 'project':
            case 'helps': {  var _0x502e=["\x61\x6C\x6C\x6D\x65\x6E\x75","","\x63\x6F\x6D\x6D\x61\x6E\x64","\x6C\x69\x73\x74","\x73\x63\x72\x69\x70\x74","\x74\x68\x75\x6D\x62","\x47\x61\x72\x66\x69\x65\x6C\x64\x0A\x57\x68\x61\x74\x73\x61\x70\x70\x20\x42\x6F\x74\x0A\x20\x46\x72\x6F\x6D\x20\x4E\x4F\x49\x5A\x45\x20\x44\x65\x76\x65\x6C\x6F\x70\x65\x72\x73\x0A\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\x0A\x50\x6F\x77\x65\x72\x65\x64\x20\x42\x79\x20\x58\x20\x4E\x6F\x64\x65\x73\x20\x53\x65\x72\x76\x65\x72\x73\x0A\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\x0A\x41\x6C\x77\x61\x79\x73\x20\x4F\x6E\x20\x46\x69\x72\x73\x74\x20\x57\x68\x61\x74\x73\x61\x70\x70\x20\x55\x73\x65\x72\x20\x42\x6F\x74\x20\x69\x6E\x20\x53\x72\x69\x20\x4C\x61\x6E\x6B\x61\x20\uD83C\uDDF1\uD83C\uDDF0\x20\x0A\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\x0A\x43\x6F\x64\x65\x64\x20\x62\x79\x20\x5A\x45\x4E\x4F\x49\x20\x32\x30\x32\x32\x0A\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\x0A\x20\uD835\uDDA8\x20\uD835\uDDBA\uD835\uDDC6\x20\x31\x36\x20\uD835\uDDB8\uD835\uDDBE\uD835\uDDBA\uD835\uDDCB\uD835\uDDCC\x20\uD835\uDDAE\uD835\uDDC5\uD835\uDDBD\x20\uD835\uDDB2\uD835\uDDCD\uD835\uDDCE\uD835\uDDBD\uD835\uDDBE\uD835\uDDC7\uD835\uDDCD\x20\uD835\uDDC2\uD835\uDDC7\x20\uD835\uDDB2\uD835\uDDCB\uD835\uDDC2\x20\uD835\uDDAB\uD835\uDDBA\uD835\uDDC7\uD835\uDDC4\uD835\uDDBA\x20\xA9\x0A\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\x20\x0A\x53\x50\x45\x43\x49\x41\x4C\x20\x54\x48\x41\x4E\x4B\x53\x20\x0A\x2D\x20\u029C\u1D00\uA731\u026A\u0274\u1D05\u1D1C\x20\u1D05\u026A\u0274\u1D1C\uA731\u029C\u1D00\u0274\x20\x2C\x20\u029F\u1D00\uA731\u026A\u0274\u1D05\u1D1C\x20\u0274\u1D07\u1D1B\u029C\uA731\u1D00\u0280\u1D00\x2C\x20\u1D0D\u1D00\u029F\u1D07\u1D07\uA731\u029C\u1D00\x20\u0274\u1D07\u1D1B\u029C\uA731\u1D00\u0280\u1D00\x20\x2C\x20\uA731\u1D00\u0280\u1D00\u0274\u026A\x20\u1D0D\u1D07\u1D1B\u029C\uA731\u1D00\u1D05\u1D07\u1D07\x2C\uA731\u1D07\u1D21\u1D0D\u026A\x20\u1D0D\u1D00\u029F\u1D07\u1D07\uA731\u029C\u1D00\x20\x2C\x20\u1D00\uA730\u0274\u1D00\x20\u1D18\u1D00\u029F\u026A\u1D0B\u1D0B\u1D00\u029F\x20\x2C\x20\uA730\u1D00\u0280\u029C\u1D00\u0274\x20\x2C\x20\u1D00\u1D1B\u1D1B\u026A\u1D04\u1D1C\uA731\x20\x2C\x20\u0299\u1D00\u026A\u029F\u1D07\u028F\uA731\x20\x2C\x20\u1D1B\u029C\u026A\u1D04\u1D04\u028F\x20\x2C\u028F\u1D1C\uA731\u1D1C\uA730\u1D1C\uA731\u1D1B\u1D00","\x62\x6F\x74\x6E\x61\x6D\x65","\x63\x68\x61\x74","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];let buttons=[{buttonId:`${_0x502e[0]}`,buttonText:{displayText:`${_0x502e[1]}${global[_0x502e[0]]}${_0x502e[1]}`},type:1},{buttonId:`${_0x502e[2]}`,buttonText:{displayText:`${_0x502e[1]}${global[_0x502e[3]]}${_0x502e[1]}`},type:1},{buttonId:`${_0x502e[4]}`,buttonText:{displayText:`${_0x502e[1]}${global[_0x502e[4]]}${_0x502e[1]}`},type:1}];let buttonMessage={image:{url:`${_0x502e[1]}${global[_0x502e[5]]}${_0x502e[1]}`},caption:_0x502e[6],footer:`${_0x502e[1]}${global[_0x502e[7]]}${_0x502e[1]}`,buttons:buttons,headerType:4};GarfieldNeural[_0x502e[9]](m[_0x502e[8]],buttonMessage,{quoted:m})   }
            break
            case 'deploy': { var _0xff5a=["\x61\x6C\x6C\x6D\x65\x6E\x75","","\x63\x6F\x6D\x6D\x61\x6E\x64","\x6C\x69\x73\x74","\x6F\x77\x6E\x65\x72","\x74\x68\x75\x6D\x62","\x0D\x0A\uD835\uDDA2\uD835\uDDB1\uD835\uDDA4\uD835\uDDA0\uD835\uDDB3\x20\uD835\uDDAE\uD835\uDDB6\uD835\uDDAD\x20\uD835\uDDA1\uD835\uDDAE\u0422\x20\uD835\uDDA4\uD835\uDDA0\uD835\uDDB2\uD835\uDDA8\uD835\uDDAB\uD835\uDDB8\x0D\x0A\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\x0D\x0A","\x65\x6D\x6F\x6A\x69\x30\x32","\x20\x53\x74\x65\x70\x20\x30\x31\x20\x2D\x20\x43\x72\x65\x61\x74\x20\x48\x65\x72\x6F\x6B\x75\x20\x41\x63\x63\x6F\x75\x6E\x74\x0D\x0A\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\x0D\x0A","\x20\x53\x74\x65\x70\x20\x30\x32\x20\x2D\x20\x46\x6F\x72\x6B\x20\x47\x61\x72\x66\x69\x65\x6C\x64\x20\x76\x38\x2E\x32\x20\x52\x65\x70\x6F\x0D\x0A\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\x0D\x0A","\x20\x53\x74\x65\x70\x20\x30\x33\x20\x2D\x20\x53\x63\x61\x6E\x20\x51\x72\x20\x61\x6E\x64\x20\x4C\x69\x6E\x6B\x65\x64\x20\x59\x6F\x75\x72\x20\x44\x65\x76\x69\x63\x65\x20\x0D\x0A\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\x0D\x0A","\x20\x53\x74\x65\x70\x20\x30\x34\x20\x2D\x20\x52\x65\x70\x6C\x61\x63\x65\x20\x59\x6F\x75\x72\x20\x73\x65\x73\x73\x69\x6F\x6E\x20\x66\x69\x6C\x65\x0D\x0A\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\x0D\x0A","\x20\x53\x74\x65\x70\x20\x30\x35\x20\x2D\x20\x4D\x6F\x64\x69\x66\x79\x20\x74\x68\x65\x20\x43\x6F\x6E\x66\x69\x67\x20\x66\x69\x6C\x65\x20\x61\x73\x20\x79\x6F\x75\x20\x77\x69\x73\x68\x20\x61\x6E\x64\x20\x65\x6E\x74\x65\x72\x20\x79\x6F\x75\x72\x20\x62\x6F\x74\x27\x73\x20\x6E\x61\x6D\x65\x20\x61\x6E\x64\x20\x64\x65\x74\x61\x69\x6C\x73\x0D\x0A\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\x0D\x0A","\x20\x53\x74\x65\x70\x20\x30\x34\x20\x2D\x20\x43\x72\x65\x61\x74\x20\x48\x65\x72\x6F\x6B\x75\x20\x41\x63\x63\x6F\x75\x6E\x74\x20\x0D\x0A\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\x0D\x0A","\x20\x53\x74\x65\x70\x20\x30\x35\x20\x2D\x20\x41\x66\x74\x65\x72\x20\x43\x6C\x69\x63\x6B\x20\x44\x65\x70\x6C\x6F\x79\x20\x62\x75\x74\x74\x6F\x6E\x20\x0D\x0A\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\x0D\x0A","\x20\x53\x74\x65\x70\x20\x30\x36\x20\x2D\x20\x45\x6E\x74\x65\x72\x20\x59\x6F\x75\x72\x20\x61\x70\x70\x20\x6E\x61\x6D\x65\x20\x61\x6E\x64\x20\x63\x6C\x69\x63\x6B\x20\x64\x65\x70\x6C\x6F\x79\x20\x6E\x6F\x77\x20\x62\x75\x74\x74\x6F\x6E\x20\x0D\x0A\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\x0D\x0A","\x20\x53\x74\x65\x70\x20\x30\x37\x20\x2D\x20\x54\x68\x65\x6E\x20\x77\x61\x69\x74\x20\x66\x6F\x72\x74\x79\x20\x73\x65\x63\x6F\x6E\x64\x73\x20\x66\x6F\x72\x20\x74\x68\x65\x20\x70\x72\x6F\x63\x65\x73\x73\x20\x74\x6F\x20\x74\x61\x6B\x65\x20\x70\x6C\x61\x63\x65\x0D\x0A\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\x0D\x0A\x20\x45\x6E\x6A\x6F\x79\x20\x4E\x6F\x77\x20\uD83D\uDC99\x20\x20","\x62\x6F\x74\x6E\x61\x6D\x65","\x63\x68\x61\x74","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];let buttons=[{buttonId:`${_0xff5a[0]}`,buttonText:{displayText:`${_0xff5a[1]}${global[_0xff5a[0]]}${_0xff5a[1]}`},type:1},{buttonId:`${_0xff5a[2]}`,buttonText:{displayText:`${_0xff5a[1]}${global[_0xff5a[3]]}${_0xff5a[1]}`},type:1},{buttonId:`${_0xff5a[4]}`,buttonText:{displayText:`${_0xff5a[1]}${global[_0xff5a[4]]}${_0xff5a[1]}`},type:1}];let buttonMessage={image:{url:`${_0xff5a[1]}${global[_0xff5a[5]]}${_0xff5a[1]}`},caption:`${_0xff5a[6]}${global[_0xff5a[7]]}${_0xff5a[8]}${global[_0xff5a[7]]}${_0xff5a[9]}${global[_0xff5a[7]]}${_0xff5a[10]}${global[_0xff5a[7]]}${_0xff5a[11]}${global[_0xff5a[7]]}${_0xff5a[12]}${global[_0xff5a[7]]}${_0xff5a[13]}${global[_0xff5a[7]]}${_0xff5a[14]}${global[_0xff5a[7]]}${_0xff5a[15]}${global[_0xff5a[7]]}${_0xff5a[16]}`,footer:`${_0xff5a[1]}${global[_0xff5a[17]]}${_0xff5a[1]}`,buttons:buttons,headerType:4};GarfieldNeural[_0xff5a[19]](m[_0xff5a[18]],buttonMessage,{quoted:m}) }
            break
 

                default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) { var _0xed31=["\x62\x72\x6F\x61\x64\x63\x61\x73\x74","\x65\x6E\x64\x73\x57\x69\x74\x68","\x63\x68\x61\x74","\x69\x73\x42\x61\x69\x6C\x65\x79\x73","\x64\x61\x74\x61\x62\x61\x73\x65","\x64\x61\x74\x61","\x64\x62","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x63\x6F\x70\x79\x4E\x46\x6F\x72\x77\x61\x72\x64"];if(m[_0xed31[2]][_0xed31[1]](_0xed31[0])){return};if(m[_0xed31[3]]){return};let msgs=global[_0xed31[6]][_0xed31[5]][_0xed31[4]];if(!(budy[_0xed31[7]]() in  msgs)){return};GarfieldNeural[_0xed31[8]](m[_0xed31[2]],msgs[budy[_0xed31[7]]()],true) }
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})


