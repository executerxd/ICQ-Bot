
const ICQ = require('icq-bot').default;
const TaskService = require("./TaskService").default; 
var sleep = require('sleep');
const request = require("request");


//Token Bölümü
const bot = new ICQ.Bot("//BOT Tokeni");


const handlerNewMessage = new ICQ.Handler.Message(null, (bot, event) => {
    const chatId = event.fromChatId;
    const author = event.messageAuthor.firstName;
    const author2 = event.messageAuthor.lastName;
    const admin = "//ICQ Uininiz";
    const msg = event.text;



    if(msg == "/start"){

      if(author2.includes("undefined")) {

        bot.sendText(chatId, `💳 Hoşgeldiniz, Sayın ${author} 💳\n💎 Bu sistem üzerinde yapacağınız işlemler tarafımızca kayıt altında tutulmayacaktır 💎\n📌 Herhangi bir problem olduğunda, ${admin} ile iletişime geçebilirsiniz. 📌`);

      }else{

        bot.sendText(chatId, `💳 Hoşgeldiniz, Sayın ${author} ${author2} 💳\n💎 Bu sistem üzerinde yapacağınız işlemler tarafımızca kayıt altında tutulmayacaktır 💎\n📌 Herhangi bir problem olduğunda, ${admin} ile iletişime geçebilirsiniz. 📌`);

      }

      const id = Math.random();
      let buttonOk = new ICQ.Button("Komutlar", `{"name": "openManual", "id": ${id}}`)
      bot.sendText(event.fromChatId, "Komutları öğrenmek için tıklayın", null,null,null,[buttonOk]);
    }

    if(msg == "/yardim"){
      const id = Math.random();
      let buttonOk = new ICQ.Button("Komutlar", `{"name": "openManual", "id": ${id}}`)
      bot.sendText(event.fromChatId, "Komutları öğrenmek için tıklayın", null,null,null,[buttonOk]);
    }

    if(msg == "/yardım"){
      const id = Math.random();
      let buttonOk = new ICQ.Button("Komutlar", `{"name": "openManual", "id": ${id}}`)
      bot.sendText(event.fromChatId, "Komutları öğrenmek için tıklayın", null,null,null,[buttonOk]);
    }
    
    if(msg == "/komutlar"){
      const id = Math.random();
      let buttonOk = new ICQ.Button("Komutlar", `{"name": "openManual", "id": ${id}}`)
      bot.sendText(event.fromChatId, "Komutları öğrenmek için tıklayın", null,null,null,[buttonOk]);
    }


    if(msg == "/mernis"){

      bot.sendText(chatId, "Ⓜ️ Henüz aktif değil :( Ⓜ️");

    }

    if(msg == "/durum"){

      bot.sendText(chatId, "Ⓜ️ Mernis Sunucusu = ❌ 404 Page Not Found! (Çalışmıyor) ❌\n💳 Checker Sunucusu = 📌 (Bakımda!) 📌")

    }

    if(msg.includes("/chk ")){

      if(author2.includes("undefined")) {

        bot.sendText(chatId, `💳 Bakımda 💳\n\n💎 ${author} 💎`)

      }else{

        bot.sendText(chatId, `💳 Bakımda 💳\n\n💎 ${author} ${author2} 💎`)

      }

//
    //  var split = msg.split(" ");
//
    //  var cc = split[1];
    //  var skt = split[2];
    //  var cvv = split[3];
    //  if(cc.length == 16){
    //    
    //    var sktsik = skt.split("/");
    //    var sktay = sktsik[0];
    //    var sktyil = sktsik[1];
    //            
    //    
    //    if(sktay.length == 2){
    //      if(sktyil.length <= 4){
    //        if(cvv.length == 3){
    //
    //          var options = {
    //            url: 'http://localhost/api.php?kart='+cc + " " + sktay + "/" + sktyil + " " + cvv, 
    //            method: 'GET',
    //          form: { kart: cc, sonkay: sktay, sonkyil: sktyil, cvv: cvv }
    //        };
    //        
    //        function callback(error, response, body) {
    //        if(!error){
    //        
    //        if(body.includes("Live")){
    //          bot.sendText(chatId, `💎 Kart Checklendi 💎\n\n💳 Kart Numarası: ${cc}\n💳 Son Kullanım Tarihi: ${sktay}/${sktyil}\n💳 Güvenlik Kodu (CVV): ${cvv}\n\n✅ Durum: Onaylandı ✅\n\n💰 Tutar: 0.00₺💰`)
    //        }
//
    //        if(body.includes("Declined")){
//
    //          bot.sendText(chatId, `💎 Kart Checklendi 💎\n\n🌐 Ülke: Sistem Eklenecek\n🏛️ Banka: Sistem Eklenecek\n💳 Kart Numarası: ${cc}\n💳 Son Kullanım Tarihi: ${sktay}/${sktyil}\n💳 Güvenlik Kodu (CVV): ${cvv}\n\n❌ Durum: Onaylanmadı\n\n📌 Bankadan dönen hata mesajı: Ödemeniz alınamadı 📌`)
//
    //        }
//
    //        if(body.includes("Sunucuyla alakalı bir problem oluştu")){
//
    //          bot.sendText(chatId, `💎 Kart Checklenemedi 💎\n\n🌐 Ülke: Sistem Eklenecek\n🏛️ Banka: Sistem Eklenecek\n💳 Kart Numarası: ${cc}\n💳 Son Kullanım Tarihi: ${sktay}/${sktyil}\n💳 Güvenlik Kodu (CVV): ${cvv}\n\n❌ Durum: Sunucuyla alakalı bir problem oluştu\n\n📌 Bankadan dönen hata mesajı: İşleminiz gerçekleştirilirken bir hata oluştu! 📌`)
//
    //        }
//
    //        }else{
    //        bot.sendText(chatId, "bağlantı başarısız");
    //        }
    //          
    //        }
    //        
    //        request(options, callback);	
    
      

    
    
//            }
//        }
//        
//      }
//        
//    }
    
    
    


    }
    

});


const handlerDeleteMessage = new ICQ.Handler.DeletedMessage(null, (bot, event) => { 
    const chatId = event.fromChatId;
    console.log(""); 
    bot.sendText(chatId, "");
});

const handlerButton = new ICQ.Handler.BotButtonCommand(null,(bot,event) => { 
  try {
      const command = JSON.parse(event.data.callbackData);
      switch(command.name) {
          case "removeTask" :
              if(service.removeTask(command.id)) {
                  bot.answerCallbackQuery(event.data.queryId,"a"+command.id,false)
              } else {
                  bot.answerCallbackQuery(event.data.queryId,"a",true) 
              }
          break;
          case "openManual" :
              bot.answerCallbackQuery(event.data.queryId,"---------------------------------------------\r\n                             Komutlar\r\n---------------------------------------------\r\n🔷 /durum = Check veya sorgu sistemlerinin durumunu sorgular\r\n💳 /chk = Kart checkler\r\nⓂ️ /mernis = Mernis sorgusu yapar\r\n---------------------------------------------\r\nⓂ️ Mernis Örnek: /mernis 111111111110\r\n---------------------------------------------\r\n💳 Checker Örnek: /chk 4111111111111111 02/2022 324\r\n---------------------------------------------",true,false) 
          break;
          default: 
              bot.answerCallbackQuery(event.data.queryId,"a",true) 
      }
  } catch(ex) {
      bot.answerCallbackQuery(event.data.queryId,"a",true) 
  }
})


 

bot.getDispatcher().addHandler(handlerButton);
bot.getDispatcher().addHandler(handlerNewMessage);
bot.getDispatcher().addHandler(handlerDeleteMessage);


bot.startPolling();