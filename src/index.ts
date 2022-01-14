import Canvars from 'canvas';
import { MDGClient } from './struct/Client'
import { Intents, MessageAttachment, MessageEmbed } from 'discord.js';
import { token, guildId } from '../config.json';

Canvars.registerFont('src/assets/fonts/NanumGothicBold.ttf', { family: 'NanumGothic', style: 'Bold' });

export const client = new MDGClient({
	intents: [Intents.FLAGS.GUILD_MESSAGES]
});

client.once('ready', async () => {

});

const applyText = (canvas: Canvars.Canvas, text: string) => {
	const context = canvas.getContext('2d');

	let fontSize = 350;

	do {
		context.font = `${fontSize -= 5}px NanumGothic`;
	} while (context.measureText(text).width > canvas.width - 350);

	return context.font;
};

client.on('interactionCreate', async interaction => {

	if (!interaction.isCommand()) return;

	switch(interaction.commandName) {
		case '말대꾸하기': {
			const subject: string | null = interaction.options.getString('이름');
			var obj: string = interaction.options.getString('무엇을') || "말대꾸?!";
	
			if (subject === null || subject.length > 10) {

				const Embed = new MessageEmbed()
					.setTitle("이런!")
					.setDescription("이름은 10자를 초과할 수 없습니다.")
					.setColor('#ffcc00');

				return await interaction.reply({ embeds: [Embed], ephemeral: true });
			};

			await interaction.deferReply();

			const baseImage = await Canvars.loadImage('src/assets/images/base.png');
			const canvas = Canvars.createCanvas(baseImage.width, baseImage.height);
			const context = canvas.getContext('2d');

			context.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
			context.strokeStyle = '#0099ff';
			context.strokeRect(0, 0, canvas.width, canvas.height);
			context.font = applyText(canvas, subject);
			context.fillStyle = '#000000';

			const commonWidth = canvas.width / 3.25;
			const commonHeight = 840;

			context.fillText(subject, commonWidth, commonHeight / 4.5);

			context.font = applyText(canvas, obj);
			context.fillText(obj, commonWidth, commonHeight);
			
			const attachment = new MessageAttachment(canvas.toBuffer(), 'maledaeggu.png');

			await interaction.editReply({ files: [attachment] })
			
			break;
		}
	}

});

client.run(token, guildId || undefined);
