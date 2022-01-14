import glob from 'glob';
import { promisify } from 'util';
import { CommandType } from '../types/Command'
import { RegisterCommandsOptions } from "../types/client";
import { ApplicationCommandDataResolvable, Client, Collection } from 'discord.js';

const globPromise = promisify(glob);

export class MDGClient extends Client {
    commands: Collection<string, CommandType> = new Collection();

    run(token: string, guildId: string | undefined) {
        this.registerModules(guildId);
        this.login(token);
    }

    async importFile(filePath: string) {
        return (await import(filePath))?.default;
    }

    async registerCommands({ commands, guildId }: RegisterCommandsOptions) {

        if (guildId) {
            this.guilds.cache.get(guildId)?.commands.set(commands)
                .catch(console.error);

            console.log(`길드 ${guildId}에 명령어 등록`);
        } else {
            this.application?.commands.set(commands)
                .catch(console.error);
            console.log(`글로벌 명령어 등록`);
        };

    }

    async registerModules(guildId: string | undefined) {
        const slashCommands: ApplicationCommandDataResolvable[] = [];
        const commandFiles = await globPromise(`${__dirname}/../commands/*{.ts,.js}`);

        commandFiles.forEach(async (filePath) => {
            const commandData: CommandType = await this.importFile(filePath);
            const command = commandData.data;

            if (!command.name) return;

            this.commands.set(command.name, commandData);
            slashCommands.push(command.toJSON());
        });

        this.once('ready', () => {
            console.log("* ---------------------- *");
            console.log("말대꾸 시작");

            this.registerCommands({
                commands: slashCommands,
                guildId: guildId
            });

            console.log("* --- 명령어 등록 완료 --- *");
        });

    }
}
