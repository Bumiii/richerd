module.exports = {
    name: 'shutdown',
    description: "turns off bot",
    async execute(client, message, args, Discord) {
        if (message.author.id === "560940983567646742") {
            message.reply('The bot will now shut down.\n'
                + 'Confirm with `yea` or deny with `nah`.');

            // First argument is a filter function - which is made of conditions
            // m is a 'Message' object
            message.channel.awaitMessages(m => m.author.id == message.author.id,
                { max: 1, time: 30000 }).then(collected => {
                    // only accept messages by the user who sent the command
                    // accept only 1 message, and return the promise after 30000ms = 30s

                    // first (and, in this case, only) message of the collection
                    if (collected.first().content.toLowerCase() == 'yea') {
                        message.reply('shutting down now ig...');
                        client.destroy();
                    }

                    else
                        message.reply('shutdown canceled i think');
                }).catch(() => {
                    message.reply('ayo you didnt day something after 30 seconds so the command is over');
                });

        } else {
            message.reply("you arent Bumi lol");
        }
    }
}