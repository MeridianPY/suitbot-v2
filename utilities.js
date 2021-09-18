const { MessageEmbed } = require('discord.js')
const fs = require('fs')
const path = require('path')

module.exports = {
  simpleEmbed: function (content, ephemeral = false) {
    return {embeds: [new MessageEmbed().setDescription(content)], ephemeral: ephemeral}
  },
  msToHMS: function msToHMS(ms) {
    let totalSeconds = (ms / 1000)
    const hours = Math.floor(totalSeconds / 3600)
    totalSeconds %= 3600
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = Math.floor(totalSeconds % 60)
    return (`${hours}:${minutes}:${seconds}`)
  },
  getFilesRecursively: function getFilesRecursively(directory, files) {
    const contents = fs.readdirSync(directory)
    files = files || []
    for (const file of contents) {
      const absolute = path.join(directory, file)
      if (fs.statSync(absolute).isDirectory()) {
        getFilesRecursively(absolute, files)
      } else {
        files.push(absolute)
      }
    }
    return files
  }
}

// const { simpleEmbed } = require('../../utilities');
