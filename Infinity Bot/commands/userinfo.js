const { getUserFromMention } = require('../util/getUser')

module.exports = {
	name: 'userinfo',
	description: 'Coletando informções sobre o usuário.',
	execute(message, client) {
		const split = message.content.split(/ +/);
		const args = split.slice(1);

		const user = getUserFromMention(args[0], client);
		message.channel.send(`Name: ${user.username}, ID: ${user.id}, Avatar: ${user.displayAvatarURL({ dynamic: true })}`);
	}
};