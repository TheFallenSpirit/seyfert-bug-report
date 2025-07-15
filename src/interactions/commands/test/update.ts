import { CommandContext, Declare, SubCommand } from 'seyfert';

@Declare({
    name: 'update',
    description: 'Update a form.'
})

export default class extends SubCommand {
    run = async (context: CommandContext) => {
        await context.editOrReply({ content: 'Hello from the update command.' })
    };
};
