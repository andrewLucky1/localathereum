'use strict';
const Telegraf = require('telegraf');
// const Telegram = Telegraf.Telegram;
const { Markup } = Telegraf;
const app = new Telegraf('574152149:AAH1V91LA0ex4eXY0I9F9D9FLz610fLJnuo');

// start command
const fixedMainMenuItems = ['Balance', 'Deposit', 'Widthdraw', 'My Team', 'Feedback', 'Invite Friends', 'help'];
app.command('start', ({ replyWithMarkdown }) => {
    replyWithMarkdown(
        "do you want my blood? do you want my tears What doo you waaaant? __what do you wan tfrom me__"
        , Markup.keyboard(fixedMainMenuItems).resize().extra()
    )
});

function addFeedback(text) { /* TODO: */ }
app.hears(/feedback/i, ({ reply }) => {
    reply('tell us what we can get better at:')
    app.hears(/.*/, (ctx) => {
        addFeedback(ctx.message.text);
        app.hears(/.*/, (ctx) => {}) 
    })
})

const chatId = 'unique_ptr';
function generateInviteLink() {
    const unique_id = (Math.random()*10).toString().replace('.', '')
    return 'https://t.me/' + chatId + '?start=' + unique_id;
}


app.on('new_chat_members', (ctx) => ctx.reply(ctx.message.new_chat_members));


app.hears(/Invite friends/i, (ctx) => {
    ctx.reply(generateInviteLink());
    // console.log(ctx.chat.id);
    // var link = ctx.exportChatInviteLink(ctx.chat.id).then(link => {
    //     ctx.reply(link);
    // });
})

app.hears(/help/i, ctx => {
    ctx.reply(
        'User ' + ctx.from.first_name
    );
})

app.startPolling();