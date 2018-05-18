bot.on('inline_query', query => {
    const results = []
    for (let i = 0; i < 3; i++) {
        results.push({
            id: i.toString(),
            type: 'article',
            title: `Title #${i}`,
            inputMessageContent: {
                message_text: `Article #${i} should be here`
            }
        })
    }
    bot.answerInlineQuery(query.id, results, {
        cache_time: 0
    })
})