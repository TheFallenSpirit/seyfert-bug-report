import { createEvent } from 'seyfert';

export default createEvent({
    data: { name: 'botReady' },
    run: async (user, client) => {
        client.logger.info(`Connected to Discord as ${user.tag}`);
        await client.uploadCommands({ cachePath: `${import.meta.dirname}/../../commands.json` });
    }
});
