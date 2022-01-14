import { SlashCommandBuilder} from '@discordjs/builders';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('말대꾸하기')
        .setDescription('○○가 XXX?')
        .addStringOption(option => 
            option.setName('이름')
                .setDescription('무엇이?')
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('무엇을')
                .setDescription('XXX?!')
                .setRequired(false)
        )
};
