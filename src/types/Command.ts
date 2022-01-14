import {
    CommandInteraction,
    GuildMember,
} from "discord.js";
import { SlashCommandBuilder } from '@discordjs/builders';

export interface MDGInteraction extends CommandInteraction {
    member: GuildMember;
}

export type CommandType = {
    data: SlashCommandBuilder;
};
