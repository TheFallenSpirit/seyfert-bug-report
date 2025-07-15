import { AutoLoad, Command, Declare, Groups } from 'seyfert';

@Declare({
    name: 'test',
    description: 'This is a test command for a Seyfert bug report.'
})

@AutoLoad()

@Groups({
    questions: { defaultDescription: 'For updating questions.' }
})

export default class extends Command {};
