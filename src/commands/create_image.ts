import { SlashCommandBuilder} from '@discordjs/builders';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('말대꾸하기')
        .setDescription('○○가 말대꾸?')
        .addStringOption(option => 
            option.setName('이름')
                .setDescription('무엇이 말대꾸?')
                .setRequired(true)
        )
};
