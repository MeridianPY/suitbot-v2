const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, GuildMember, Permissions } = require('discord.js')
const { simpleEmbed } = require('../../utilities')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Bans a user.')
    .addMentionableOption(option =>
      option.setName('user')
        .setDescription('The user to ban.')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('reason')
        .setDescription('The reason for the ban.')
    ),
  async execute (interaction) {
    const user = interaction.options.getMentionable('user')
    const reason = interaction.options.getString('reason')

    if (!user.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
      return await interaction.reply(simpleEmbed('You do not have permission to execute this command!', true))
    }
    if (!(interaction.user instanceof GuildMember)) {
      return await interaction.reply(simpleEmbed('You can only specify a valid user!', true))
    }

    await user.ban({ reason: reason }).catch(() => interaction.reply(simpleEmbed('There was an error when banning this user.\nThe bot is possibly missing permissions.', true)))

    const embed = new MessageEmbed()
      .setAuthor('Banned User', interaction.member.user.displayAvatarURL())
      .setTitle(user.displayName)
      .setThumbnail(`https://cdn.discordapp.com/avatars/${user.user.id}/${user.user.avatar}`)
      .setDescription(`Reason: \`\`\`${reason}\`\`\``)
      .setFooter('SuitBot', interaction.client.user.displayAvatarURL())

    await interaction.reply({ embeds: [embed] })
  }
}
