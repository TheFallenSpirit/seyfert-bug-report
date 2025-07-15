import { config } from 'seyfert';

export default config.bot({
    intents: [
        'Guilds',
        'GuildMembers',
        'GuildMessages',
        'MessageContent',
        'GuildModeration',
        'GuildExpressions'
    ],
    token: process.env.TOKEN,
    locations: {
        base: 'build',
        events: 'events',
        components: 'interactions',
        commands: 'interactions/commands'
    }
});
