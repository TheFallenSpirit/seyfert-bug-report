import { CommandContext, Declare, Group, SubCommand } from 'seyfert';

@Declare({
    name: 'update',
    description: 'Update a question in a form.'
})

@Group('questions')
export default class extends SubCommand {
    run = async (context: CommandContext) => {
        await context.editOrReply({ content: 'Hello from the questions update command.' });
    };
};
