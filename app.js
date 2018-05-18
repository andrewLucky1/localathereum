'use strict';
const Telegraf = require('telegraf')
const TelegrafI18n = require('telegraf-i18n')
const path = require('path')
const { Markup } = Telegraf
const session = require('telegraf/session')
const bot = new Telegraf('491669284:AAHVXhWsgYkF4KfSrx6VtnKNX__dho9WlXE')
const i18n = new TelegrafI18n({
    sessionName: 'session',
    useSession: true,
    directory: path.resolve(__dirname, 'locales')
})
bot.use(i18n.middleware())
bot.use(session())

var inlineCountries = Telegraf.Extra
    .markdown()
    .markup(m => m.inlineKeyboard([
        m.callbackButton('🇷🇺 Русский', 'russian'),
        m.callbackButton('🇺🇸 English', 'english')
    ]))
var aboutMenu = Telegraf.Extra
    .markdown()
    .markup((m) => m.keyboard([
        m.callbackButton('⬅️ Back')
    ]).resize())

bot.command('russian', ctx => {
    cts.reply('russian language chosen')
})

bot.hears('test', ctx => {
    var greetingMessage = ctx.i18n.t('greeting', {
        username: `${ctx.message.from.first_name} ${ctx.message.from.last_name}`,
        monthDay: 18,
        month: 'December'
    })
    ctx.reply(greetingMessage, inlineCountries).then(() => {
        // ctx.reply('about', aboutMenu)
    })
})

bot.command('start', ctx => {
    return ctx.reply('foo')
})

// new member added
bot.on('new_chat_members', ctx => {
    ctx.reply(`We're glad to see you, new membeer`);
    // ctx.reply(ctx.message.new_chat_members);
});

bot.startPolling()