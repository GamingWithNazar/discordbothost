module.exports = client => {

    const channelId = '753463674349420694'

    client.on('guildMemberAdd', member => {
        console.log(member)

        const messsage = `Hello <@${member.id}> please read #rules to know the rules of the server!`

        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
    })
}