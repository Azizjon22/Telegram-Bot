const {Telegraf} = require('telegraf')


const bot = new Telegraf('6936431866:AAHbxRU58m_yA65RnuKMt9cAucT2n5wmfm4')

const Aziz = 'https://t.me/AzizYakubjonov'


bot.start((ctx) =>{
    ctx.reply('Asalomu alekum biznig botimzga xush kelibsiz Bizning Admin ' + Aziz)
})

bot.launch(bot)



