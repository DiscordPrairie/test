const Discord = require('discord.js'); // cmd에서 "npm install discord.js" 필수로 입력함.
const request = require('request'); // cmd에서 "npm install request" 필수로 입력함.
const cheerio = require('cheerio'); // cmd에서 "npm install cheerio" 필수로 입력함.
const moment = require("moment"); // cmd에서 "npm install moment" 필수로 입력함.
require("moment-duration-format"); // cmd에서 "npm install moment-duration-format" 필수로 입력함.
const fs = require("fs");  // cmd에서 "npm install fs" 필수로 입력함.
const Token = process.env.token // 봇의 토큰을 입력하세요.
const botinfo = `파이리님의 따까리` // 봇의 상태메시지를 입력하세요.
const client = new Discord.Client();
const prefix = '/' //접두사
const guildid = '737560135022542899' //서버 id를 입력해주세요.

client.on('ready', () => {
	(async function () {
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms))
        };
        console.log(client.user.tag)
		console.log(client.user.id)
		console.log('\n봇이 준비 되었습니다.');
    answered1 = true;
    answered2 = true;
    answered3 = true;
    userAnswer1 = "";
    userAnswer2 = "";
    userAnswer3 = "";
        var i = 0;
        while (i < 10) {
            client.user.setPresence({
                activity: {
                    name: '파이리님의 따까리'
                },
                status: 'online'
            })
            await sleep(5000)
            client.user.setPresence({
                activity: {
                    name: `포켓몬스터에서 일`
                },
                status: 'online'
            })
            await sleep(5000)
        }
    })();
});

client.on('message', async message => {
    if (message.author.bot) return;

    if (message.content.startsWith('/시간')) {
        var d = new Date();
        var currentData = d.getFullYear() + "년 " + (d.getMonth() + 1) + "월 " + d.getDate() + "일 ";
        var currentTime = d.getHours() + "시 " + d.getMinutes() + "분 ";
        var time_embed = new (require('discord.js').MessageEmbed)()
        time_embed.setTitle('현재 시간')
        time_embed.setDescription(' **[한국 서울 기준]** ')
        time_embed.addField('현재 시간', `${currentData + currentTime}`)
        time_embed.setFooter("Made by Thanos#1665")
        time_embed.setThumbnail('https://i.imgur.com/VVN8vYV.png')
        time_embed.setColor("#fc6400")
    message.channel.send(time_embed)
}


});

    client.login(Token);