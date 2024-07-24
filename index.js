const TelegramBot = require('node-telegram-bot-api');
const token = '7351075967:AAGN8pT8_5MNCWi-biwvxjJ1--RjQ-Srhq0';

const {inlinekeyboard, amalar} = require('./options')

const bot = new TelegramBot(token, { polling: true });


let raqam2 = Math.floor(Math.random() * 50)
let raqam1 = Math.floor(Math.random() * 100)
let qosh = raqam1 + raqam2
let ball = 0
let setamal = "+"


function botstart() {

    bot.setMyCommands([
        {
            command: "/start",
            description: "botni ishga tushurish"
        },
        {
            command: "/oyin",
            description: "O'yini qayta boshlash"
        }
    ])

    bot.on('message', async (msg) => {
        const text = msg.text
        const chatId = msg.chat.id;
        const user_first_name = msg.chat.first_name


        if (text === "/start") {
            return bot.sendMessage(chatId,
                `Assalomu alaykum ${user_first_name}\n@uzquiz_robot Xush kelibsiz`,inlinekeyboard
            );
        }
        if (text === "/oyin") {
            await bot.sendMessage(chatId, `
            O'yinimiz boshlandi\nraqamlarni hisoblang: ${raqam1} + ${raqam2}=? \n\nSizning balingiz ${ball}
            `)
            raqam2 = Math.floor(Math.random() * 50)
            raqam1 = Math.floor(Math.random() * 100)
            qosh = raqam1 + raqam2

        } 
        else {
            const foydalanuvchi_javobi = parseInt(text)
            if (foydalanuvchi_javobi === qosh) {
                ball++;
                await bot.sendMessage(chatId, `Siz to'g'ri topdingiz!\nSizning balingiz: ${ball}`);
                raqam2 = Math.floor(Math.random() * 50);
                raqam1 = Math.floor(Math.random() * 100);
                qosh = raqam1 + raqam2;
                await bot.sendMessage(chatId, `${raqam1} + ${raqam2}=?`);

            }
            else {
                bot.sendMessage(chatId, `Siz notogri topdingiz, qayta urinib ko'ring \n ${raqam1} + ${raqam2}=? \nbalingiz${ball}`)
            }
        }


    });

    bot.on("callback_query", msg => {
        const data = msg.data
        const chatId = msg.message.chat.id

        if (data === "boshlash") {
            return bot.sendMessage(chatId, `
           O'yinimiz boshlandi\nraqamlarni hisoblang: ${raqam1} + ${raqam2}=? \n\nSizning balingiz ${ball}
           `)
        }
    })
}
botstart();