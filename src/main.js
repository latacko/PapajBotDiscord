const Discord = require('discord.js');

const client = new Discord.Client({ partials: ['MESSAGE', "CHANNEL", "REACTION"]});

const prefix = '#';

const kremowki = [
    "https://i.imgur.com/WqkijIC.jpg",
    "https://i.imgur.com/MBV7VCD.jpg",
    "https://i.imgur.com/SOe27dc.jpg",
    "https://i.imgur.com/kscenrv.jpg",
    "https://i.imgur.com/sgq3rTi.jpg",
    "https://i.imgur.com/BTpK0Eq.jpg"
];

const odpowiedzi = [
    "Tak",
    "Nie",
    "Może",
    "Eh, dzban",
    "Możliwe",
    "Te pytanie jest takiej wagi jak dostaniem kotletem w twarz, faza",
    "Oby Ci wąż chu** ukąsił",
    "No Ba!",
    "Mejbi tak",
    "Wygląda na to, że tak",
    "Baranek w ścianę polecany dzbanie",
    "Warto spróbować",
    "Masakra, weź baranka w ścianę zrób, bo dzbanisz totalnie",
    "Nope",
    "Walnij głową w ściane",
    "Mam to w dupie",
    "Możesz być w końcu cicho!",
    "Nie odpowiem, bo mogę",
    "Walki mrówek są bardziej interesujące od ciebie"
];

const odpowiedzi2 = [
    "Tak",
    "Nie"
];

let statuses = ['Kremówkomat!', 'Gdzie są moje kremówki!', 'Dlaczego mnie wzywasz!', 'Jesteś dzbanem!', 'Chcesz kremówke?',];


client.once('ready', () => {
    console.log('Papaj jest gotowy!')

    setInterval(function(){
        let status = statuses[Math.floor(Math.random()*statuses.length)]

        client.user.setPresence({ game: {name: status}, status: 'online'})

        client.user.setPresence({ activity: {name: status}, status: 'online'})

    }, 4000)
})

client.on('message', message => {
    if(!message.content.startsWith('#')) return;

    const args = message.content.slice(1).split(' ');
    const command = args.shift().toLowerCase();

    if(command === 'kremowka'){
        const random = Math.floor(Math.random() * kremowki.length);
        message.channel.send('Prosze o to twoja kremowka!', {files: [kremowki[random]]});
    } else if(command === 'proc'){
        const random = Math.floor((Math.random() * 100) + 1);
        message.channel.send('Podoba mi się to w ' + random + '%');
    } else if(command === 'try'){
        const random = Math.floor(Math.random() * odpowiedzi.length);
        message.channel.send([odpowiedzi[random]]);
    } else if(command === 'q'){
        const random = Math.floor(Math.random() * odpowiedzi2.length);
        message.channel.send([odpowiedzi2[random]]);
    } else if(command === 'help') {
        message.channel.send('Dostępne komendy to: #kremowkomat, #proc, #try, #q');
    }
})


client.login('nie ma');