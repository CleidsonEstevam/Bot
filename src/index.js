
const puppeteer = require('puppeteer');
const { Telegraf } = require('telegraf')


async function bot(){
  pretoList = [];
  vermelhoList = [];
  brancoList = [];

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://blaze.com/pt/games/double');

  //await page.waitFor();

  while(browser)
  { 
<<<<<<< HEAD
    syncDelay(4000);
=======
>>>>>>> 9290587 (v3)
    const result = await page.evaluate(() => {
      return document.querySelector('[class="time-left"]').innerHTML
    });
    var time = result;
    if(time.substring(0, 11) == 'Blaze Girou')
    { 
      const result2 = await page.evaluate(() => {
        return document.querySelector('[class="entry"]').innerHTML
      });
<<<<<<< HEAD
=======
      syncDelay(7000);
>>>>>>> 9290587 (v3)
      var cor = result2.substring(45, 51);
      console.log(cor);

      if(cor.trim() == 'black')
      {
        pretoList.push(cor);
<<<<<<< HEAD
         if(pretoList.length > 1)
         {
          sinalBot( 'DIIIIIZ🤙 ⚠ Alerta de padrão ⚠ ⬛ PRETO' + ' ' + 'QUANTIDADE:' + ' ' + pretoList.length)
          continue;
=======
         if(pretoList.length >= 7)
         {
          sinalBot( 'DIIIIIZ BOT 🤖🤙' + '\n'
           + ' ⚠ Alerta de padrão ⚠ ' + '\n'
           + ' COR: ⬛ PRETO ⬛' + '\n'
           + ' ' + 'QUANTIDADE:' + ' ' + pretoList.length)
>>>>>>> 9290587 (v3)
         }

      }else {
        pretoList = [];
      }
      
      if(cor.trim() == 'red">')
      {
        vermelhoList.push(cor);
<<<<<<< HEAD
         if(vermelhoList.length > 1)
         {
          sinalBot( 'DIIIIIZ🤙 ⚠ Alerta de padrão ⚠ 🟥 VERMELHO' + ' ' + 'QUANTIDADE:' + ' ' + vermelhoList.length)
          continue;
=======
         if(vermelhoList.length >= 7)
         {
          sinalBot( 'DIIIIIZ BOT 🤖🤙' + '\n'
           + ' ⚠ Alerta de padrão ⚠ ' + '\n'
           + ' COR: 🟥 VERMEHO 🟥' + '\n'
           + ' ' + 'QUANTIDADE:' + ' ' + vermelhoList.length)
>>>>>>> 9290587 (v3)
         }
      }else {
        vermelhoList = [];
      }
      
      if(cor.trim() == 'white')
      {
        brancoList.push(cor);
<<<<<<< HEAD
         if(brancoList.length > 1)
         {
          sinalBot( 'DIIIIIZ🤙 ⚠ Alerta de padrão ⚠ ⬜ BRANCO' + ' ' + 'QUANTIDADE:' + ' ' + brancoList.length)
          continue;
=======
         if(brancoList.length > 3)
         {
          sinalBot( 'DIIIIIZ BOT 🤖🤙' + '\n'
           + ' ⚠ Alerta de padrão ⚠ ' + '\n'
           + ' COR: ⬜ BRANCO ⬜' + '\n'
           + ' ' + 'QUANTIDADE:' + ' ' + brancoList.length)
>>>>>>> 9290587 (v3)
         }
      }else {
        brancoList = [];
      }
    }

  };
}

function syncDelay(milliseconds){
  var start = new Date().getTime();
  var end=0;
  while( (end-start) < milliseconds){
      end = new Date().getTime();
  }
 }

function sinalBot(menssagem)
{
    const bot = new Telegraf('5532508233:AAFq901iAXJNUQugfqapnmntCME7E06iurs')

    bot.telegram.sendMessage(5519254612, menssagem )

}

bot();
    
  
