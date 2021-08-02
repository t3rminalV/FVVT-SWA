import {DieSta} from './die.js';

Hooks.once("init", async function () {
    CONFIG.Dice.terms["sta"] = DieSta;
});

Hooks.on('diceSoNiceRollComplete', (chatMessageID) => {
    let message = game.messages.get(chatMessageID);
    if(message.isAuthor){
        let staRoll = false;
        let hits = 0;
        let effect = false;
        message.roll.dice.forEach(dice => {
            if(dice instanceof DieSta){
                staRoll = true;
                dice.results.forEach(res => {
                    switch(res.result){
                        case 1:                            
                            break;
                        case 2:
                            effect = true;
                            break;
                        case 3:
                            effect = true;
                            break;
                        case 4:
                            hits = 2;
                            break;
                        case 5:
                            hits = 1;
                            break;
                        case 6:
                            break;
                    }
                });
            }
        });
        
        if(staRoll){
            if(effect){
                ChatMessage.create({
                    content: `<b>Effect!</b>`,
                    whisper: message.data.whisper,
                    blind: message.data.blind
                });
            }
            if(hits == 1){
                ChatMessage.create({
                    content: `<b>Hit!</b>`,
                    whisper: message.data.whisper,
                    blind: message.data.blind
                });
            } 
            if(hits == 2){
                ChatMessage.create({
                    content: `<b>Double Hit!</b>`,
                    whisper: message.data.whisper,
                    blind: message.data.blind
                });
            } 
        }
    }
});

Hooks.once('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id:"sta",name:"STA"},true);
    dice3d.addDicePreset({
      type:"dsta",
      colorset:"black",
      labels:[
        '', 
        'modules/sta-dice-roller/img/badge.jpeg', 
        'modules/sta-dice-roller/img/badge.jpeg',
		'modules/sta-dice-roller/img/doublehit.jpeg', 
        'modules/sta-dice-roller/img/hit.jpeg', 		
        ''
      ],
      system:"sta"
    });
});