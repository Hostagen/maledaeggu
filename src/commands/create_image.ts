import { SlashCommandBuilder} from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('말대꾸하기')
        .setDescription('○○가 말대꾸?')
        .addStringOption(option => 
            option.setName('○○')
                .setDescription('무엇이 말대꾸?')
                .setRequired(true)
        ),
    async execute(interaction: CommandInteraction) {
        return interaction.reply('Pong!');
    },
};
