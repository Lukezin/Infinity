const Discord = require('discord.js'); 
exports.run = (client, message, args) => { 


    let embed = new Discord.RichEmbed()
 
    .setTitle(`:gear: | Central de Ajuda`)
    .setColor("#636363")
    .setDescription('`Clique no emoji para abrir a categoria` \n\n\n👮 ** Comandos de moderação** \n🔧 **Comandos de utilidade** \n🎊 **Comandos de diversão**\n 💲 **Comandos de economia**')
    message.channel.send(embed).then(msg => { 
      msg.react('👮').then(r => { 
            msg.react('🔧') 
            msg.react('🎊') 
            msg.react('💲')
            msg.react('🎵')

        
        const UtilidadesFilter = (reaction, user, ) => reaction.emoji.name === '🔧' && user.id === message.author.id;
        const ModeraçãoFilter = (reaction, user, ) => reaction.emoji.name === '👮' && user.id === message.author.id;
        const DiversãoFilter = (reaction, user, ) => reaction.emoji.name === '🎊' && user.id === message.author.id
        const EconomiaFilter = (reaction, user, ) => reaction.emoji.name === '💲' && user.id === message.author.id


        const Utilidades = msg.createReactionCollector(UtilidadesFilter);
        const Moderação = msg.createReactionCollector(ModeraçãoFilter);
        const Diversão = msg.createReactionCollector(DiversãoFilter);
        const Economia = msg.createReactionCollector(EconomiaFilter);

Economia.on('collect', r2 => { 
r2.remove(message.author.id)

const embed = new Discord.RichEmbed()
      .addField(`m!bal`, `Mostra o valor que você tem`)
      .addField(`m!bet`, `Aposta a quantia solicitada`)
      .addField(`m!daily`, `Recebe a recompensa diária`)
      .addField(`m!rob`, `Rouba dinheiro de algum lugar`)
      .addField(`m!work`, `Trabalha e ganha uma quantia`)
msg.edit(embed)
})


        Utilidades.on('collect', r2 => { 
     r2.remove(message.author.id)

embed = new Discord.RichEmbed() 
                .setTitle("🔧 | Utilidades")
                .addField(`\`m!add\``, `Adiciona o bot em algum servidor`)
                .addField(`\`m!anuncio\``, `Envia um anúncio em algum canal`)
                .addField(`\`m!avatar\``, `Envia a foto de algum membro`)
                .addField(`\`m!botinfo\``, `Dá informações sobre o bot`)
                .addField(`\`m!clima\``, `Verifica o clima de uma cidade`)
                .addField(`\`m!convite\``, `Cria um link de convite para o servidor`)
                .addField(`\`m!covid\``, `Mostra informações sobre a COVID-19`)
                .addField(`\`m!creditos\``, `Mostra os créditos`)
                .addField(`\`m!enquete\``, `Faz uma enquete em algum canal`)
                .addField(`\`m!emoji\``, `Cria um emoji em tamanho maior`)
                .addField(`\`m!hex\``, `Dá informações sobre o hexadecimal da cor solicitada`)
                .addField(`\`m!lembrete\``, `Pede ao bot pra lembrar você sobre algo`)
                .addField(`\`m!prefixo\``, `Muda o prefixo do bot`)
                .addField(`\`m!sugestao\``, `Em breve`)
                .addField(`\`m!uptime\``, `Tempo em que o bot se está online`)
                .addField(`\`m!userinfo\``, `Dá informações sobre o membro mencionado`)
                .addField(`\`m!servericon\``, `Envia a foto do servidor`)
                .addField(`\`m!serverinfo\``, `Dá informações sobre o servidor`)
                .addField(`\`m!serverlist\``, `Mostra todos os servidores em que o bot está`)
                .addField(`\`m!status\``, `Mostra o estado atual do bot`)
                .addField(`\`m!vote\``, `Vota no bot`)

            msg.edit(embed);
        })
 
        Moderação.on('collect', r2 => {
  r2.remove(message.author.id)

              embed = new Discord.RichEmbed()
              .setTitle("👮 | Moderação")
              .addField(`\`m!ban\``, `Aplica um banimento em algum membro`)
              .addField(`\`m!clean\``, `Limpa mensagens em algum canal`)
              .addField(`\`m!expulsar\``, `Aplica uma expulsão em algum membro`)
              .addField(`\`m!mute\``, `Dá um mute em algum membro`)
              .addField(`\`m!lock\``, `Tranca o canal atual`)
              .addField(`\`m!unban\``, `Remove o banimento de algum membro`)
              .addField(`\`m!unlock\``, `Destranca o canal atual`)
              .addField(`\`m!unmute\``, `Remove o mute de algum membro`)
              .addField(`\`m!warn\``, `Aplica um aviso em algum membro`)
              .setColor("#4169E1")
            msg.edit(embed);
        })

        Diversão.on('collect', r2 => {
  
r2.remove(message.author.id)
              embed = new Discord.RichEmbed()
              .setTitle("🎊 | Diversão")
              .addField(`\`m!1vs1\``, `Faz uma batalha entre duas pessoas`)
              .addField(`\`m!8ball\``, `Faz uma pergunta para o bot`)
              .addField(`\`m!ascii\``, `Envia uma frase em letras`) 
              .addField(`\`m!abraçar\``, `Dá um abraço em alguém`)
              .addField(`\`m!beijar\``, `Dá um beijo em alguém`)
              .addField(`\`m!bigtext\``, `Cria um texto com emojis`)
              .addField(`\`m!bolsonaro\``, `Envia o membro do Bolsonaro de acordo com a mensagem solicitada`)
              .addField(`\`m!cafe\``, `Toma um cafezinho delicioso UwU`)
              .addField(`\`m!cancelamento\``, `Faz um meme do cancelamento`)
              .addField(`\`m!carinho\``, `Dá carinho em alguém`)
              .addField(`\`m!chutar\``, `Dá um chute em alguém`)
              .addField(`\`m!caixa\``, `Abre uma caixa que pode vir sorte ou azar`)
              .addField(`\`m!contador\``, `Faz uma contagem de "1, 2, 3" no chat`)
              .addField(`\`m!cachorro\``, `Envia uma foto aleatória de um cachorro`)
              .addField(`\`m!coinflip\``, `Mostra o lado em que a moeda cai`)
              .addField(`\`m!cookie\``, `Envia um cookie para alguém`)
              .addField(`\`m!chorar\``, `Faz você chorar`)
              .addField(`\`m!comer\``, `Faz você comer`)
              .addField(`\`m!casar\``, `Faz você casar com alguém`)
              .addField(`\`m!cozinhar\``, `Faz você cozinhar`)
              .addField(`\`m!dado\``, `Veja em qual número o dado vai cair`)
              .addField(`\`m!dormir\``, `Faz você dormir`)
              .addField(`\`Próxima página\``, `Clique em 👉`)
              .setColor("#FFFF00")  

            msg.edit(embed).then(msg => {
              msg.react("👉")

              const CocoFilter = (reaction, user, ) => reaction.emoji.name === '👉' && user.id === message.author.id;
             
              
                      const Coco = msg.createReactionCollector(CocoFilter);
                
                      Coco.on('collect', r2 => {
r2.remove(message.author.id)
                        let embed = new Discord.RichEmbed()
                        .setTitle("🎊 | Diversão II")
                        .addField(`\`m!explosion\``, `Faz uma explosão da Megumin`)
                        .addField(`\`m!firstword\``, `Faz um meme de um bebê falando pela primeira vez`)
                        .addField(`\`m!guess\``, `Você tenta adivinhar o número secreto`)
                        .addField(`\`m!jokempo\``, `Brinca de pedra papel e tesoura com o bot`)
                        .addField(`\`m!jutsu\``, `Faz um jutsu`)
                        .addField(`\`m!laranjo\``, `Cria um meme do laranjo`)
                        .addField(`\`m!lenny\``, `Envia rostos engraçados`)
                        .addField(`\`m!lutar\``, `Faz uma luta entre você e a pessoa mencionada`)
                        .addField(`\`m!matar\``, `Mata a pessoa mencionada`)
                        .addField(`\`m!meme\``, `Faz o bot enviar um meme`)
                        .addField(`\`m!palmas\``, `Faz você bater palmas`)
                        .addField(`\`m!penis\``, `Mostra quantos centímetros tem seu piupiu`)
                        .addField(`\`m!piada\``, `O bot envia piadas pra você`)
                        .addField(`\`m!qi\``, `Mostra o seu QI`)
                        .addField(`\`m!reverse\``, `Reverte a mensagem solicitada`)
                        .addField(`\`m!rir\``, `Faz você rir`)
                        .addField(`\`m!roleta\``, `Roda a roleta e fala se você sobreviveu ou morreu`)
                        .addField(`\`m!ship\``, `Shippa os dois usuários mencionados`)
                        .addField(`\`m!ssj\``, `Faz você virar um Super Saiyajin`)
                        .addField(`\`m!socar\``, `Faz você socar a pessoa mencionada`)
                        .addField(`\`m!tapa\``, `Faz você tapear a pessoa mencionada`)
                        .addField(`\`m!tocaaqui\``, `Faz você fazer um "high five" com a pessoa mencionada`)
                        .addField(`\`m!doujutsu\``, `Faz um doujutsu`)
                        .addField(`\`m!estudar\``, `Faz você estudar`)
                        .addField(`\`m!fumar\``, `Faz você fumar`)
      

                     msg.edit(embed)
                     
 
              const Coco2Filter = (reaction, user, ) => reaction.emoji.name === '🎵' && user.id === message.author.id;
              const Coco2 = msg.createReactionCollector(CocoFilter);
Coco2.on('collect', x => {
    
    x.remove(message.author.id)
    
                            let embed = new Discord.RichEmbed()
                        .setTitle("🎵 | Musica")
                        .addField(`\`mm!play\``, `Inicia uma musica`)
                        .addField(`\`mm!resume\``, `Retoma a musica pausada`)
                        .addField(`\`mm!pause\``, `Pausa a musica atual`)
                        .addField(`\`mm!volume\``, `Modifica o volume da musica`)
                        .addField(`\`mm!loop\``, `Inicia ou termina o loop na lista de musica`)
                        .addField(`\`mm!skip\``, `Pula a musica atual na lista de musicas`)
                        .addField(`\`mm!stop\``, `Termina a lista de musicas`)
   msg.edit(embed)
                        
                        
                        
                        
                        
                        
                        
})
                    })
                  })
                })
              })
            })
  }

exports.help = { 
    name: "ajuda"
}