function funSwap(){
    const versiculosOne = [
    "Mateus 6:33 - Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas serão acrescentadas a vocês.",
    "Atos dos Apóstolos 3:19  - Arrependam-se, pois, e voltem-se para Deus, para que os seus pecados sejam cancelados.",
    "Salmos 17:8 -  Protege-me como à menina dos teus olhos; esconde-me à sombra das tuas asas."
    ];
    const versiculosTwo = [
    "Josué 1:9 - Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.",
    "João 16:33 - Eu disse essas coisas para que em mim vocês tenham paz. Neste mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo.",
    "Jeremias 29:11 - Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro."
    ];
    const versiculosThree = [
    "João 3:16 - Porque Deus tanto amou o mundo que deu o seu filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna.",
    "2 Coríntios 5:17 - Portanto, se alguém está em Cristo, nova criatura é. O velho já passou; eis que o novo chegou.",
    "Jeremias 1: 5 - Antes que te formasse no ventre te conheci, e antes que nasceste te consagrei; Eu te designei um profeta para as nações."
    ];
    const versiculosFour = [
    "Mateus 28:19-20 - Portanto, vão e façam discípulos de todas as nações, batizando-os em nome do Pai e do Filho e do Espírito Santo, ensinando-os a obedecer a tudo o que eu lhes ordenei. E eu estarei sempre com vocês, até o fim dos tempos.",
    "Romanos 6: 6 - Nós sabemos que o nosso velho eu foi crucificado com ele para que o corpo do pecado fosse reduzido a nada, para que não seríamos mais escravos do pecado.",
    "1 Pedro 2:9 - Mas vós sois uma raça eleita, um sacerdócio real, uma nação santa, um povo de sua propriedade, para que possais proclamar as excelências daquele que vos chamou das trevas para a sua luz maravilhosa."
    ];
    const versiculosFive = [
    "1 Coríntios 1:30 - E por causa dele estais em Cristo Jesus, que se tornou para nós sabedoria de Deus, justiça, santificação e redenção.",
    "Provérbios 22:6 - Educa a criança no caminho em que deve andar; e até quando envelhecer não se desviará dele.",
    "1 Coríntios 6:17 - Mas aquele que se une ao Senhor torna-se um só espírito com ele."
    ];
    const versiculosSix = [
    "João 14:6 - Respondeu Jesus: Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim.",
    "Salmos 7:17 - Darei graças ao Senhor por sua justiça; ao nome do Senhor Altíssimo cantarei louvores.",
    "Judas 1:25 - Ao único Deus sábio, Salvador nosso, seja glória e majestade, domínio e poder, agora, e para todo o sempre. Amém."
    ];
    const versiculosSeven = [
    "1 Timóteo 1:17 - Ao Rei eterno, o Deus único, imortal e invisível, sejam honra e glória para todo o sempre. Amém.",
    "2 Samuel 22:47 - O Senhor vive! Bendita seja a minha Rocha! Exaltado seja Deus, a Rocha que me salva!",
    "1 João 5:4 - Porque todo o que é nascido de Deus vence o mundo; e esta é a vitória que vence o mundo, a nossa fé."
    ];
    const versiculosEight = [
    "Apocalipse 5:12 - Digno é o Cordeiro que foi morto de receber poder, riqueza, sabedoria, força, honra, glória e louvor!",
    "1 Tessalonicenses 5:16-18 - Regozijai-vos sempre. Orai sem cessar. Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.",
    "Hebreus 13:15 - Por meio de Jesus, portanto, ofereçamos continuamente a Deus um sacrifício de louvor, que é fruto de lábios que confessam o seu nome."
    ];
    const versiculosNine = [
    "Salmo 119:105 - Lâmpada para os meus pés é a tua palavra e, luz para o meu caminho.",
    "1 Crônicas 16:34-36 - Rendam graças ao Senhor, por Ele é bom; o seu amor dura para sempre. Bendito seja o Senhor, o Deus de Israel, de eternidade a eternidade.",
    "1 Pedro 3:15 - Mas em vossos corações honrem a Cristo Senhor como santo, estando sempre preparados para fazer uma defesa a qualquer que vos perguntar o motivo da esperança que há em vós; no entanto, faça-o com gentileza e respeito."
    ];
    const versiculosTeen = [
    "1 Timóteo 4:4-5 - Pois tudo o que Deus criou é bom, e nada deve ser rejeitado, se for recebido com ação de graças, pois é santificado pela palavra de Deus e pela oração.",
    "Salmos 100:3 - Saiba que o Senhor, ele é Deus! Foi ele quem nos fez, e nós somos seus; nós somos o seu povo e as ovelhas do seu pasto.",
    "Isaías 6:3 - Santo, santo, santo é o Senhor dos Exércitos, a terra inteira está cheia da sua glória."
    ];
    const versiculosEleven = [
    "1 Crônicas 16:29 - Deem ao Senhor a glória devida ao seu nome. Tragam ofertas e venham à sua presença. Adorem o Senhor no esplendor da sua santidade",
    "Salmos 7:17 - Darei graças ao Senhor por sua justiça; ao nome do Senhor Altíssimo cantarei louvores.",        
    "1 Timóteo 1:17 - Ao Rei eterno, o Deus único, imortal e invisível, sejam honra e glória para todo o sempre. Amém."
    ];
    const versiculosTwelve = [
    "2 Samuel 22:47 - O Senhor vive! Bendita seja a minha Rocha! Exaltado seja Deus, a Rocha que me salva!",
    "Salmos 35:18 - Renderei graças na grande congregação, te louvarei no meio da poderosa multidão.",
    "Hebreus 13:15 - Por meio de Jesus, portanto, ofereçamos continuamente a Deus um sacrifício de louvor, que é fruto de lábios que confessam o seu nome."
    ];
    const randomNumber = Math.floor(Math.random() * 3);
    document.getElementById("divone").innerHTML = versiculosOne[randomNumber];
    document.getElementById("divtwo").innerHTML = versiculosTwo[randomNumber];
    document.getElementById("divthree").innerHTML = versiculosThree[randomNumber];
    document.getElementById("divfour").innerHTML = versiculosFour[randomNumber];
    document.getElementById("divfive").innerHTML = versiculosFive[randomNumber];
    document.getElementById("divsix").innerHTML = versiculosSix[randomNumber];
    document.getElementById("divseven").innerHTML = versiculosSeven[randomNumber];
    document.getElementById("diveight").innerHTML = versiculosEight[randomNumber];
    document.getElementById("divnine").innerHTML = versiculosNine[randomNumber];
    document.getElementById("divteen").innerHTML = versiculosTeen[randomNumber];  
    document.getElementById("diveleven").innerHTML = versiculosEleven[randomNumber];  
    document.getElementById("divtwelve").innerHTML = versiculosTwelve[randomNumber];  
}
funSwap()
function menuShow(){
    document.getElementById("nav").style.width = "100%";
}
function menuClose() {
    document.getElementById("nav").style.width = "0";
}