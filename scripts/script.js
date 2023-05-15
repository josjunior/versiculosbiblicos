function funSwap(){
    const versiculosOne = [
    "Atos dos Apóstolos 3:19  - Arrependam-se, pois, e voltem-se para Deus, para que os seus pecados sejam cancelados.",
    "Salmos 17:8 -  Protege-me como à menina dos teus olhos; esconde-me à sombra das tuas asas.",
    "Filipenses 4:6 - Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, e com ação de graças, apresentem seus pedidos a Deus.",
    "1 Pedro 5:7 - Lancem sobre ele toda a sua ansiedade, porque ele tem cuidado de vocês.",
    "Salmos 119:105 - A tua palavra é lâmpada que ilumina os meus passos e luz que clareia o meu caminho.",
    "Salmos 91:7 - Mil poderão cair ao seu lado; dez mil, à sua direita, mas nada o atingirá.",
    "Jeremias 33:3 - Cla­me a mim e eu responderei e direi a você coisas grandiosas e insondáveis que você não conhece.",
    "1 Coríntios 16:14 - Todas as vossas coisas sejam feitas com amor."
    ];
    const versiculosTwo = [
    "João 16:33 - Eu disse essas coisas para que em mim vocês tenham paz. Neste mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo.",
    "Jeremias 29:11 - Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro.",
    "Provérbios 16:3 - Confia ao Senhor as tuas obras, e teus pensamentos serão estabelecidos.",
    "Jeremias 29:11 - Porque eu bem sei os pensamentos que penso de vós, diz o Senhor; pensamentos de paz e não de mal, para vos dar o fim que esperais.",
    "2 Coríntios 5:7 - Porque andamos por fé e não por vista.",
    "Efésios 4:2 - Com toda a humildade e mansidão, com longanimidade, suportando-vos uns aos outros em amor.",
    "Atos 16:31 - E eles disseram: Crê no Senhor Jesus Cristo e serás salvo, tu e a tua casa.",
    "1 Coríntios 13:13 - Agora, pois, permanecem a fé, a esperança e o amor, estes três; mas o maior destes é o amor."
    ];
    const versiculosThree = [
    "Jeremias 1: 5 - Antes que te formasse no ventre te conheci, e antes que nasceste te consagrei; Eu te designei um profeta para as nações.",
    "Salmo 20:4 - Conceda-te conforme o teu coração e cumpra todo o teu desígnio.",
    "Salmo 133:1 - Oh! Quão bom e quão suave é que os irmãos vivam em união!",
    "Atos 16:25 - Perto da meia-noite, Paulo e Silas oravam e cantavam hinos a Deus, e os outros presos os escutavam.",
    "Gálatas 3:26-27 - Porque todos sois filhos de Deus pela fé em Cristo Jesus; porque todos quantos fostes batizados em Cristo já vos revestistes de Cristo.",
    "Tiago 1:22 - E sede cumpridores da palavra e não somente ouvintes, enganando-vos com falsos discursos.",
    "Jeremias 33:3 - Clama a mim, e responder-te-ei e anunciar-te-ei coisas grandes e firmes, que não sabes.",
    "Provérbios 3:5 - Confia no Senhor de todo o teu coração e não te apoies em teu próprio entendimento."
    ];
    const versiculosFour = [
    "Mateus 28:19-20 - Portanto, vão e façam discípulos de todas as nações, batizando-os em nome do Pai e do Filho e do Espírito Santo, ensinando-os a obedecer a tudo o que eu lhes ordenei. E eu estarei sempre com vocês, até o fim dos tempos.",
    "Romanos 6: 6 - Nós sabemos que o nosso velho eu foi crucificado com ele para que o corpo do pecado fosse reduzido a nada, para que não seríamos mais escravos do pecado.",
    "1 Pedro 2:9 - Mas vós sois uma raça eleita, um sacerdócio real, uma nação santa, um povo de sua propriedade, para que possais proclamar as excelências daquele que vos chamou das trevas para a sua luz maravilhosa.",
    "Provérbios 4:23 - Tenha cuidado com o que você pensa, pois a sua vida é dirigida pelos seus pensamentos.",
    "Salmos 56:3 - Quando estou com medo, eu confio em ti, ó Deus Todo-Poderoso.",
    "João 14:6 -  Disse-lhe Jesus: Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, senão por mim.",
    "1 João 1:9 -  Se confessarmos os nossos pecados, ele é fiel e justo, para nos perdoar os pecados, e nos purificar de toda a injustiça.",
    "Efésios 2:8, 9 -  Porque pela graça sois salvos, por meio da fé; e isto não vem de vós; é dom de Deus. Não vem das obras, para que ninguém se glorie.",
    ];
    const versiculosFive = [
    "Provérbios 22:6 - Educa a criança no caminho em que deve andar; e até quando envelhecer não se desviará dele.",
    "1 Coríntios 6:17 - Mas aquele que se une ao Senhor torna-se um só espírito com ele.",
    "Salmos 16:2 - A minha alma disse ao Senhor: Tu és o meu Senhor, a minha bondade não chega à tua presença,",
    "Salmos 2:11 - Servi ao Senhor com temor, e alegrai-vos com tremor.",
    "Salmos 9:2 - Em ti me alegrarei e saltarei de prazer; cantarei louvores ao teu nome, ó Altíssimo.",
    "João 4:24 - Deus é Espírito, e importa que os que o adoram o adorem em espírito e em verdade.",
    "Romanos 11:36 - Porque dele e por ele, e para ele, são todas as coisas; glória, pois, a ele eternamente. Amém.",
    "Salmos 105:1 - Louvai ao SENHOR, e invocai o seu nome; fazei conhecidas as suas obras entre os povos."
    ];
    const versiculosSix = [
    "Judas 1:25 - Ao único Deus sábio, Salvador nosso, seja glória e majestade, domínio e poder, agora, e para todo o sempre. Amém.",
    "Salmos 95:6 - Ó, vinde, adoremos e prostremo-nos; ajoelhemos diante do Senhor que nos criou.",
    "Salmos 100:4 - Entrai pelas portas dele com gratidão, e em seus átrios com louvor; louvai-o, e bendizei o seu nome.",
    "Salmos 29:2 - Dai ao Senhor a glória devida ao seu nome, adorai o Senhor na beleza da santidade.",
    "1 Samuel 2:2 - Não há santo como o Senhor; porque não há outro fora de ti; e rocha nenhuma há como o nosso Deus.",
    "Salmos 71:8 - Encha-se a minha boca do teu louvor e da tua glória todo o dia.",
    "Êxodo 34:14 - Porque não te inclinarás diante de outro deus; pois o nome do Senhor é Zeloso; é um Deus zeloso.",
    "Salmos 99:5 - Exaltai ao Senhor nosso Deus, e prostrai-vos diante do escabelo de seus pés, pois é santo."
    ];
    const versiculosSeven = [
    "1 João 5:4 - Porque todo o que é nascido de Deus vence o mundo; e esta é a vitória que vence o mundo, a nossa fé.",
    "Tiago 4:8 - Chegai-vos a Deus, e ele se chegará a vós. Alimpai as mãos, pecadores; e, vós de duplo ânimo, purificai os corações.",
    "Salmos 33:18 - Eis que os olhos do Senhor estão sobre os que o temem, sobre os que esperam na sua misericórdia.",
    "Provérbios 9:10 - O temor do Senhor é o princípio da sabedoria, e o conhecimento do Santo a prudência.",
    "Provérbios 31:30 - Enganosa é a beleza e vã a formosura, mas a mulher que teme ao Senhor, essa sim será louvada",
    "Provérbios 22:4 - O galardão da humildade e o temor do Senhor são riquezas, honra e vida.",
    "Provérbios 15:33 - O temor do Senhor é a instrução da sabedoria, e precedendo a honra vai a humildade.",
    "Jó 6:14 - Ao que está aflito devia o amigo mostrar compaixão, ainda ao que deixasse o temor do Todo-Poderoso."
    ];
    const versiculosEight = [
    "Apocalipse 5:12 - Digno é o Cordeiro que foi morto de receber poder, riqueza, sabedoria, força, honra, glória e louvor!",
    "1 Tessalonicenses 5:16-18 - Regozijai-vos sempre. Orai sem cessar. Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.",
    "Hebreus 13:15 - Por meio de Jesus, portanto, ofereçamos continuamente a Deus um sacrifício de louvor, que é fruto de lábios que confessam o seu nome.",
    "Jonas 2:9 - Mas eu te oferecerei sacrifício com a voz do agradecimento; o que votei pagarei. Do Senhor vem a salvação.",
    "Efésios 1:16 - Não cesso de dar graças a Deus por vós, lembrando-me de vós nas minhas orações:",
    "Salmos 51:12 - Torna a dar-me a alegria da tua salvação, e sustém-me com um espírito voluntário.",
    "Marcos 11:24 - Por isso, vos digo que tudo o que pedirdes, orando, crede que o recebereis e tê-lo-eis.",
    "Jó 6:14 - Ao que está aflito devia o amigo mostrar compaixão, ainda ao que deixasse o temor do Todo-Poderoso."
    ];
    const versiculosNine = [
    "Salmo 119:105 - Lâmpada para os meus pés é a tua palavra e, luz para o meu caminho.",
    "1 Crônicas 16:34-36 - Rendam graças ao Senhor, por Ele é bom; o seu amor dura para sempre. Bendito seja o Senhor, o Deus de Israel, de eternidade a eternidade.",
    "1 Pedro 3:15 - Mas em vossos corações honrem a Cristo Senhor como santo, estando sempre preparados para fazer uma defesa a qualquer que vos perguntar o motivo da esperança que há em vós; no entanto, faça-o com gentileza e respeito.",
    "Provérbios 15:23 - O homem se alegra em responder bem, e quão boa é a palavra dita a seu tempo!",
    "Romanos 12:12 - Alegrai-vos na esperança, sede pacientes na tribulação, perseverai na oração.",
    "Romanos 14:17 - Porque o reino de Deus não é comida nem bebida, mas justiça, e paz, e alegria no Espírito Santo.",
    "Salmos 47:1 - Batei palmas, todos os povos; aclamai a Deus com voz de triunfo.",
    "Romanos 15:32 - A fim de que, pela vontade de Deus, chegue a vós com alegria, e possa recrear-me convosco."
    ];
    const versiculosTeen = [
    "1 Timóteo 4:4-5 - Pois tudo o que Deus criou é bom, e nada deve ser rejeitado, se for recebido com ação de graças, pois é santificado pela palavra de Deus e pela oração.",
    "Salmos 100:3 - Saiba que o Senhor, ele é Deus! Foi ele quem nos fez, e nós somos seus; nós somos o seu povo e as ovelhas do seu pasto.",
    "Isaías 6:3 - Santo, santo, santo é o Senhor dos Exércitos, a terra inteira está cheia da sua glória.",
    "Salmos 66:17 - A ele clamei com a minha boca, e ele foi exaltado pela minha língua.",
    "João 14:6 - Respondeu Jesus: Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim.",
    "Salmos 7:17 - Darei graças ao Senhor por sua justiça; ao nome do Senhor Altíssimo cantarei louvores.",
    "Salmos 119:111 - Os teus testemunhos tenho eu tomado por herança para sempre, pois são o gozo do meu coração.",
    "Salmos 94:19 - Na multidão dos meus pensamentos dentro de mim, as tuas consolações recrearam a minha alma."
    ];
    const versiculosEleven = [
    "1 Crônicas 16:29 - Deem ao Senhor a glória devida ao seu nome. Tragam ofertas e venham à sua presença. Adorem o Senhor no esplendor da sua santidade",
    "Salmos 7:17 - Darei graças ao Senhor por sua justiça; ao nome do Senhor Altíssimo cantarei louvores.",        
    "1 Timóteo 1:17 - Ao Rei eterno, o Deus único, imortal e invisível, sejam honra e glória para todo o sempre. Amém.",
    "João 3:16 - Porque Deus tanto amou o mundo que deu o seu filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna.",
    "2 Coríntios 5:17 - Portanto, se alguém está em Cristo, nova criatura é. O velho já passou; eis que o novo chegou.",
    "João 10:28 -  E dou-lhes a vida eterna, e nunca hão-de perecer, e ninguém as arrebatará da minha mão.",
    "Apocalipse 3:20 - Eis que estou à porta, e bato; se alguém ouvir a minha voz, e abrir a porta, entrarei em sua casa, e com ele cearei, e ele comigo.",
    "1 Coríntios 1:30 - E por causa dele estais em Cristo Jesus, que se tornou para nós sabedoria de Deus, justiça, santificação e redenção.",
    ];
    const versiculosTwelve = [
    "2 Samuel 22:47 - O Senhor vive! Bendita seja a minha Rocha! Exaltado seja Deus, a Rocha que me salva!",
    "Salmos 35:18 - Renderei graças na grande congregação, te louvarei no meio da poderosa multidão.",
    "Hebreus 13:15 - Por meio de Jesus, portanto, ofereçamos continuamente a Deus um sacrifício de louvor, que é fruto de lábios que confessam o seu nome.",
    "1 Timóteo 1:17 - Ao Rei eterno, o Deus único, imortal e invisível, sejam honra e glória para todo o sempre. Amém.",
    "2 Samuel 22:47 - O Senhor vive! Bendita seja a minha Rocha! Exaltado seja Deus, a Rocha que me salva!",
    "Mateus 6:33 - Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas serão acrescentadas a vocês.",
    "Josué 1:9 - Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.",
    "Hebreus 11:1 - Ora, a fé é o firme fundamento das coisas que se esperam e a prova das coisas que se não veem."
    ];
    const randomNumber = Math.floor(Math.random() * 8);
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
    document.getElementById("tagalert").style.display = "none";
}
funSwap()
function menuShow(){
    document.getElementById("nav").style.width = "100%";
}
function menuClose() {
    document.getElementById("nav").style.width = "0";
}
function funTagOne(){
    const randomNumber = Math.floor(Math.random() * 3);
    document.getElementById("tagalert").style.display = "block";
    document.getElementById("tagname").innerHTML = "Gratidão";
    document.getElementById("tagsbtnallone").style.display = "none";
    document.getElementById("tagsbtnalltwo").style.display = "block";
    document.getElementById("tagsbtnallthree").style.display = "none";
    document.getElementById("tagsbtnallfour").style.display = "none";
    document.getElementById("tagsbtnallfive").style.display = "none";
    document.getElementById("tagsbtnallsix").style.display = "none";
    document.getElementById("tagsbtnallseven").style.display = "none";
    document.getElementById("tagsbtnalleight").style.display = "none";
    document.getElementById("tagsbtnallnine").style.display = "none";
    document.getElementById("tagsbtnallteen").style.display = "none";
    document.getElementById("tagsbtnalleleven").style.display = "none";
    const versiculosOne = [
    "Salmos 92:1-2 - Como é bom render graças ao Senhor e cantar louvores ao teu nome, ó Altíssimo; anunciar de manhã o teu amor leal e de noite a tua fidelidade.", 
    "Salmos 103:2 - Bendiga o Senhor a minha alma! Não esqueça nenhuma de suas bênçãos!", 
    "1 Tessalonicenses 5:18 - Deem graças em todas as circunstâncias, pois esta é a vontade de Deus para vocês em Cristo Jesus."
    ];
    const versiculosTwo = [
    "Salmos 118:24 - Este é o dia em que o Senhor agiu; alegremo-nos e exultemos neste dia.",
    "Salmos 136:1 - Deem graças ao Senhor, porque ele é bom. O seu amor dura para sempre!",
    "Efésios 5:20 - Dando graças constantemente a Deus Pai por todas as coisas, em nome de nosso Senhor Jesus Cristo."
    ];
    const versiculosThree = [
    "Isaías 12:5 - Cantem louvores ao Senhor, pois ele tem feito coisas gloriosas, sejam elas conhecidas em todo o mundo.",
    "1 Crônicas 16:34-36 - Rendam graças ao Senhor, pois Ele é bom; o seu amor dura para sempre. Bendito seja o Senhor, o Deus de Israel, de eternidade a eternidade.",
    "Salmo 147:1-3 - Aleluia! Como é bom cantar louvores ao nosso Deus! Como é agradável e próprio louvá-lo! Só Ele cura os de coração quebrantado e cuida das suas feridas."
    ];
    const versiculosFour = [
    "Efésios 1:16 - Não deixo de dar graças por vocês, mencionando-os em minhas orações.",
    "Salmo 118:24 - Este é o dia que fez o Senhor; regozijemo-nos, e alegremo-nos nele.",
    "Efésios 1:16 - Não cesso de dar graças a Deus por vós, lembrando-me de vós nas minhas orações."
    ];
    const versiculosFive = [
    "Salmo 50:23 - Quem me oferece sua gratidão como sacrifício, honra-me, e eu mostrarei a salvação de Deus ao que anda nos meus caminhos.",
    "Hebreus 13:15 - Portanto, ofereçamos sempre por ele a Deus sacrifício de louvor, isto é, o fruto dos lábios que confessam o seu nome.",
    "Salmo 75:1 - Damos-te graças, ó Deus, damos graças, pois perto está o teu nome; todos falam dos teus feitos maravilhosos."
    ];
    const versiculosSix = [
    "Hebreus 13:15 - Por meio de Jesus, portanto, ofereçamos continuamente a Deus um sacrifício de louvor, que é fruto de lábios que confessam o seu nome.",
    "Salmo 50:14 - Ofereça a Deus em sacrifício a sua gratidão, cumpra os seus votos para com o Altíssimo.",
    "1 Timóteo 2:1 - Antes de tudo, recomendo que se façam súplicas, orações, intercessões e ação de graças por todos os homens."
    ];
    const versiculosSeven = [
    "Colossenses 3:17 - Tudo o que fizerem, seja em palavra seja em ação, façam-no em nome do Senhor Jesus, dando por meio dele graças a Deus Pai.",
    "1 Timóteo 1:17 - Ao Rei eterno, o Deus único, imortal e invisível, sejam honra e glória para todo o sempre. Amém.",
    "1 Coríntios 1:30 - E por causa dele estais em Cristo Jesus, que se tornou para nós sabedoria de Deus, justiça, santificação e redenção."
    ];
    const versiculosEight = [
    "Efésios 5:20 - Dando graças constantemente a Deus Pai por todas as coisas, em nome de nosso Senhor Jesus Cristo.",
    "Salmos 47:1 - Batei palmas, todos os povos; aclamai a Deus com voz de triunfo.",
    "Judas 1:25 - Ao único Deus sábio, Salvador nosso, seja glória e majestade, domínio e poder, agora, e para todo o sempre. Amém."
    ];
    const versiculosNine = [
    "Salmos 7:17 - Darei graças ao Senhor por sua justiça; ao nome do Senhor Altíssimo cantarei louvores.",
    "Salmos 66:17 - A ele clamei com a minha boca, e ele foi exaltado pela minha língua.",
    "Salmos 99:5 - Exaltai ao Senhor nosso Deus, e prostrai-vos diante do escabelo de seus pés, pois é santo."
    ];
    const versiculosTeen = [
    "2 Samuel 22:47 - O Senhor vive! Bendita seja a minha Rocha! Exaltado seja Deus, a Rocha que me salva!",
    "Efésios 2:8, 9 -  Porque pela graça sois salvos, por meio da fé; e isto não vem de vós; é dom de Deus. Não vem das obras, para que ninguém se glorie.",
    "Romanos 11:36 - Porque dele e por ele, e para ele, são todas as coisas; glória, pois, a ele eternamente. Amém."
    ];
    const versiculosEleven = [
    "Apocalipse 5:12 - Digno é o Cordeiro que foi morto de receber poder, riqueza, sabedoria, força, honra, glória e louvor!",
    "João 14:6 -  Disse-lhe Jesus: Eu sou o caminho, e a verdade e a vida. Ninguém vem ao Pai, senão por mim.",
    "1 João 1:9 -  Se confessarmos os nossos pecados, ele é fiel e justo, para nos perdoar os pecados, e nos purificar de toda a injustiça."
    ];
    const versiculosTwelve = [
    "Isaías 6:3 - Santo, santo, santo é o Senhor dos Exércitos, a terra inteira está cheia da sua glória.",
    "Salmos 119:105 - A tua palavra é lâmpada que ilumina os meus passos e luz que clareia o meu caminho.",
    "Salmos 56:3 - Quando estou com medo, eu confio em ti, ó Deus Todo-Poderoso."
    ]
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
    document.getElementById("nav").style.width = "0";
}
function funTagTwo(){
    const randomNumber = Math.floor(Math.random() * 2);
    document.getElementById("tagalert").style.display = "block";
    document.getElementById("tagname").innerHTML = "Motivação";
    document.getElementById("tagsbtnallone").style.display = "none";
    document.getElementById("tagsbtnalltwo").style.display = "none";
    document.getElementById("tagsbtnallthree").style.display = "block";
    document.getElementById("tagsbtnallfour").style.display = "none";
    document.getElementById("tagsbtnallfive").style.display = "none";
    document.getElementById("tagsbtnallsix").style.display = "none";
    document.getElementById("tagsbtnallseven").style.display = "none";
    document.getElementById("tagsbtnalleight").style.display = "none";
    document.getElementById("tagsbtnallnine").style.display = "none";
    document.getElementById("tagsbtnallteen").style.display = "none";
    document.getElementById("tagsbtnalleleven").style.display = "none";
    const versiculosOne = [
    "Filipenses 4:13 - Tudo posso naquele que me fortalece.",
    "Colossenses 3:23 - Tudo o que fizerem, façam de todo o coração, como para o Senhor, e não para os homens."
    ]
    const versiculosTwo = [
    "Josué 1:9 - Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.",
    "Salmos 91:7 - Mil poderão cair ao seu lado; dez mil, à sua direita, mas nada o atingirá."
    ]
    const versiculosThree = [
    "João 3:16 - Porque Deus tanto amou o mundo que deu o seu filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna.",
    "Salmos 126:3 - Sim, coisas grandiosas fez o Senhor por nós, por isso estamos alegres."
    ]
    const versiculosFour = [
    "Mateus 28:19-20 - Portanto, vão e façam discípulos de todas as nações, batizando-os em nome do Pai e do Filho e do Espírito Santo, ensinando-os a obedecer a tudo o que eu lhes ordenei. E eu estarei sempre com vocês, até o fim dos tempos.",
    "1 Crônicas 16:11 - Olhem para o Senhor e para a sua força; busquem sempre a sua face."
    ]
    const versiculosFive = [
    "1 Coríntios 1:30 - E por causa dele estais em Cristo Jesus, que se tornou para nós sabedoria de Deus, justiça, santificação e redenção.",
    "Salmos 19:11 - O Senhor dá força ao seu povo; o Senhor dá a seu povo a bênção da paz."
    ]
    const versiculosSix = [
    "João 14:6 - Respondeu Jesus: Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim.",
    "Romanos 8:31 - Que diremos, então, à vista destas coisas? Se Deus é por nós, quem será contra nós?"
    ]
    const versiculosSeven = [
    "1 Timóteo 1:17 - Ao Rei eterno, o Deus único, imortal e invisível, sejam honra e glória para todo o sempre. Amém.",
    "Filipenses 2:13 - Pois é Deus quem efetua em vocês tanto o querer quanto o realizar, de acordo com a boa vontade dele."
    ]
    const versiculosEight = [
    "Apocalipse 5:12 - Digno é o Cordeiro que foi morto de receber poder, riqueza, sabedoria, força, honra, glória e louvor!",
    "João 15:9 - Como o Pai me amou, assim eu os amei; permaneçam no meu amor."
    ]
    const versiculosNine = [
    "Salmo 119:105 - Lâmpada para os meus pés é a tua palavra e, luz para o meu caminho.",
    "2 Coríntios 5:17 - Portanto, se alguém está em Cristo, nova criatura é. O velho já passou; eis que o novo chegou."
    ]
    const versiculosTeen = [
    "1 Timóteo 4:4-5 - Pois tudo o que Deus criou é bom, e nada deve ser rejeitado, se for recebido com ação de graças, pois é santificado pela palavra de Deus e pela oração.",
    "1 Coríntios 1:30 - E por causa dele estais em Cristo Jesus, que se tornou para nós sabedoria de Deus, justiça, santificação e redenção."
    ]
    const versiculosEleven = [
    "Marcos 11:24 - Por isso, vos digo que tudo o que pedirdes, orando, crede que o recebereis e tê-lo-eis.",
    "Jó 6:14 - Ao que está aflito devia o amigo mostrar compaixão, ainda ao que deixasse o temor do Todo-Poderoso."
    ]
    const versiculosTwelve = [
    "2 Samuel 22:47 - O Senhor vive! Bendita seja a minha Rocha! Exaltado seja Deus, a Rocha que me salva!",
    "Jeremias 1: 5 - Antes que te formasse no ventre te conheci, e antes que nasceste te consagrei; Eu te designei um profeta para as nações."
    ]
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
    document.getElementById("nav").style.width = "0";
}
function funTagThree(){
    const randomNumber = Math.floor(Math.random() * 2);
    document.getElementById("tagalert").style.display = "block";
    document.getElementById("tagname").innerHTML = "Fé";
    document.getElementById("tagsbtnallone").style.display = "none";
    document.getElementById("tagsbtnalltwo").style.display = "none";
    document.getElementById("tagsbtnallthree").style.display = "none";
    document.getElementById("tagsbtnallfour").style.display = "block";
    document.getElementById("tagsbtnallfive").style.display = "none";
    document.getElementById("tagsbtnallsix").style.display = "none";
    document.getElementById("tagsbtnallseven").style.display = "none";
    document.getElementById("tagsbtnalleight").style.display = "none";
    document.getElementById("tagsbtnallnine").style.display = "none";
    document.getElementById("tagsbtnallteen").style.display = "none";
    document.getElementById("tagsbtnalleleven").style.display = "none";
    const versiculosOne = [
    "Salmos 100:3 - Saiba que o Senhor, ele é Deus! Foi ele quem nos fez, e nós somos seus; nós somos o seu povo e as ovelhas do seu pasto.",
    "Isaías 6:3 - Santo, santo, santo é o Senhor dos Exércitos, a terra inteira está cheia da sua glória."
    ]
    const versiculosTwo = [
    "Josué 1:9 - Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.",
    "Mateus 6:33 - Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas serão acrescentadas a vocês."
    ]
    const versiculosThree = [
    "João 3:16 - Porque Deus tanto amou o mundo que deu o seu filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna.",
    "Hebreus 11:1 - Ora, a fé é o firme fundamento das coisas que se esperam e a prova das coisas que se não veem."
    ]
    const versiculosFour = [
    "Filipenses 4:6 - Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, e com ação de graças, apresentem seus pedidos a Deus.",
    "1 Pedro 5:7 - Lancem sobre ele toda a sua ansiedade, porque ele tem cuidado de vocês."        
    ]
    const versiculosFive = [
    "1 Coríntios 1:30 - E por causa dele estais em Cristo Jesus, que se tornou para nós sabedoria de Deus, justiça, santificação e redenção.",
    "Salmos 91:7 - Mil poderão cair ao seu lado; dez mil, à sua direita, mas nada o atingirá."
    ]
    const versiculosSix = [
    "João 14:6 - Respondeu Jesus: Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim.",
    "Jeremias 33:3 - Cla­me a mim e eu responderei e direi a você coisas grandiosas e insondáveis que você não conhece."
    ]
    const versiculosSeven = [
    "1 Timóteo 1:17 - Ao Rei eterno, o Deus único, imortal e invisível, sejam honra e glória para todo o sempre. Amém.",
    "2 Coríntios 5:7 - Porque andamos por fé e não por vista."
    ]
    const versiculosEight = [
    "Apocalipse 5:12 - Digno é o Cordeiro que foi morto de receber poder, riqueza, sabedoria, força, honra, glória e louvor!",
    "Marcos 11:24 - Por isso, vos digo que tudo o que pedirdes, orando, crede que o recebereis e tê-lo-eis."
    ]
    const versiculosNine = [
    "Salmo 119:105 - Lâmpada para os meus pés é a tua palavra e, luz para o meu caminho.",
    "1 Samuel 2:2 - Não há santo como o Senhor; porque não há outro fora de ti; e rocha nenhuma há como o nosso Deus."
    ]
    const versiculosTeen = [
    "1 Timóteo 4:4-5 - Pois tudo o que Deus criou é bom, e nada deve ser rejeitado, se for recebido com ação de graças, pois é santificado pela palavra de Deus e pela oração.",
    "Salmos 99:5 - Exaltai ao Senhor nosso Deus, e prostrai-vos diante do escabelo de seus pés, pois é santo."
    ]
    const versiculosEleven = [
    "1 Crônicas 16:29 - Deem ao Senhor a glória devida ao seu nome. Tragam ofertas e venham à sua presença. Adorem o Senhor no esplendor da sua santidade",
    "2 Samuel 22:47 - O Senhor vive! Bendita seja a minha Rocha! Exaltado seja Deus, a Rocha que me salva!"
    ]
    const versiculosTwelve = [
    "2 Samuel 22:47 - O Senhor vive! Bendita seja a minha Rocha! Exaltado seja Deus, a Rocha que me salva!",
    "1 Coríntios 6:17 - Mas aquele que se une ao Senhor torna-se um só espírito com ele."
    ]
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
    document.getElementById("nav").style.width = "0";
}
function funTagFour(){
    const randomNumber = Math.floor(Math.random() * 2);
    document.getElementById("tagalert").style.display = "block";
    document.getElementById("tagname").innerHTML = "Esperança";
    document.getElementById("tagsbtnallone").style.display = "none";
    document.getElementById("tagsbtnalltwo").style.display = "none";
    document.getElementById("tagsbtnallthree").style.display = "none";
    document.getElementById("tagsbtnallfour").style.display = "none";
    document.getElementById("tagsbtnallfive").style.display = "block";
    document.getElementById("tagsbtnallsix").style.display = "none";
    document.getElementById("tagsbtnallseven").style.display = "none";
    document.getElementById("tagsbtnalleight").style.display = "none";
    document.getElementById("tagsbtnallnine").style.display = "none";
    document.getElementById("tagsbtnallteen").style.display = "none";
    document.getElementById("tagsbtnalleleven").style.display = "none";
    const versiculosOne = [
    "Provérbios 16:3 - Confia ao Senhor as tuas obras, e teus pensamentos serão estabelecidos.",
    "Jeremias 29:11 - Porque eu bem sei os pensamentos que penso de vós, diz o Senhor; pensamentos de paz e não de mal, para vos dar o fim que esperais."
    ]
    const versiculosTwo = [
    "2 Samuel 22:47 - O Senhor vive! Bendita seja a minha Rocha! Exaltado seja Deus, a Rocha que me salva!",
    "1 Coríntios 6:17 - Mas aquele que se une ao Senhor torna-se um só espírito com ele."
    ]
    const versiculosThree = [
    "João 3:16 - Porque Deus tanto amou o mundo que deu o seu filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna.",
    "Provérbios 15:23 - O homem se alegra em responder bem, e quão boa é a palavra dita a seu tempo!"
    ]
    const versiculosFour = [
    "Salmos 119:105 - A tua palavra é lâmpada que ilumina os meus passos e luz que clareia o meu caminho.",
    "Salmos 91:7 - Mil poderão cair ao seu lado; dez mil, à sua direita, mas nada o atingirá."
    ]
    const versiculosFive = [
    "1 Coríntios 1:30 - E por causa dele estais em Cristo Jesus, que se tornou para nós sabedoria de Deus, justiça, santificação e redenção.",
    "1 Pedro 5:7 - Lancem sobre ele toda a sua ansiedade, porque ele tem cuidado de vocês."
    ]
    const versiculosSix = [
    "João 14:6 - Respondeu Jesus: Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim.",
    "Jeremias 29:11 - Porque eu bem sei os pensamentos que penso de vós, diz o Senhor; pensamentos de paz e não de mal, para vos dar o fim que esperais."
    ]
    const versiculosSeven = [
    "1 Timóteo 1:17 - Ao Rei eterno, o Deus único, imortal e invisível, sejam honra e glória para todo o sempre. Amém.",
    "Marcos 11:24 - Por isso, vos digo que tudo o que pedirdes, orando, crede que o recebereis e tê-lo-eis."
    ]
    const versiculosEight = [
    "Apocalipse 5:12 - Digno é o Cordeiro que foi morto de receber poder, riqueza, sabedoria, força, honra, glória e louvor!",
    "Jeremias 29:11 - Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro."
    ]
    const versiculosNine = [
    "Salmo 119:105 - Lâmpada para os meus pés é a tua palavra e, luz para o meu caminho.",
    "Jonas 2:9 - Mas eu te oferecerei sacrifício com a voz do agradecimento; o que votei pagarei. Do Senhor vem a salvação."
    ]
    const versiculosTeen = [
    "1 Timóteo 4:4-5 - Pois tudo o que Deus criou é bom, e nada deve ser rejeitado, se for recebido com ação de graças, pois é santificado pela palavra de Deus e pela oração.",
    "Atos 16:25 - Perto da meia-noite, Paulo e Silas oravam e cantavam hinos a Deus, e os outros presos os escutavam."
    ]
    const versiculosEleven = [
    "1 Crônicas 16:29 - Deem ao Senhor a glória devida ao seu nome. Tragam ofertas e venham à sua presença. Adorem o Senhor no esplendor da sua santidade",
    "Salmos 66:17 - A ele clamei com a minha boca, e ele foi exaltado pela minha língua."
    ]
    const versiculosTwelve = [
    "Efésios 4:2 - Com toda a humildade e mansidão, com longanimidade, suportando-vos uns aos outros em amor.",
    "Atos 16:31 - E eles disseram: Crê no Senhor Jesus Cristo e serás salvo, tu e a tua casa."    
    ]
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
    document.getElementById("nav").style.width = "0";
}
function funTagFive(){
    const randomNumber = Math.floor(Math.random() * 2);
    document.getElementById("tagalert").style.display = "block";
    document.getElementById("tagname").innerHTML = "Perdão";
    document.getElementById("tagsbtnallone").style.display = "none";
    document.getElementById("tagsbtnalltwo").style.display = "none";
    document.getElementById("tagsbtnallthree").style.display = "none";
    document.getElementById("tagsbtnallfour").style.display = "none";
    document.getElementById("tagsbtnallfive").style.display = "none";
    document.getElementById("tagsbtnallsix").style.display = "block";
    document.getElementById("tagsbtnallseven").style.display = "none";
    document.getElementById("tagsbtnalleight").style.display = "none";
    document.getElementById("tagsbtnallnine").style.display = "none";
    document.getElementById("tagsbtnallteen").style.display = "none";
    document.getElementById("tagsbtnalleleven").style.display = "none";
    const versiculosOne = [
    "Colossenses 3:13 - Suportem-se uns aos outros e perdoem as queixas que tiverem uns contra os outros. Perdoem como o Senhor lhes perdoou.",
    "1 João 1:9 - Se confessarmos os nossos pecados, ele é fiel e justo para perdoar os nossos pecados e nos purificar de toda injustiça."
    ]
    const versiculosTwo = [
    "Efésios 4:32 - Sejam bondosos e compassivos uns para com os outros, perdoando-se mutuamente, assim como Deus os perdoou em Cristo.",
    "Lucas 6:37 - Não julguem e vocês não serão julgados. Não condenem e não serão condenados. Perdoem e serão perdoados."
    ]
    const versiculosThree = [
    "João 3:16 - Porque Deus tanto amou o mundo que deu o seu filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna.",
    "Efésios 1:7 - Nele temos a redenção por meio de seu sangue, o perdão dos pecados, de acordo com as riquezas da graça de Deus."
    ]
    const versiculosFour = [
    "Colossenses 1:13-14 - Pois ele nos resgatou do domínio das trevas e nos transportou para o Reino do seu Filho amado, em quem temos a redenção, a saber, o perdão dos pecados.",    
    "Mateus 6:14 - Porque, se perdoardes aos homens as suas ofensas, também vosso Pai celestial vos perdoará a vós."
    ]   
    const versiculosFive = [
    "1 Coríntios 1:30 - E por causa dele estais em Cristo Jesus, que se tornou para nós sabedoria de Deus, justiça, santificação e redenção.",
    "Salmo 86:5 - Pois tu, Senhor, és bom, e pronto a perdoar, e abundante em benignidade para com todos os que te invocam."
    ]
    const versiculosSix = [
    "João 14:6 - Respondeu Jesus: Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim.",
    "Marcos 11:25 - E, quando estiverdes orando, perdoai, se tendes alguma coisa contra alguém, para que vosso Pai, que está nos céus, vos perdoe as vossas ofensas."
    ]
    const versiculosSeven = [
    "2 Crônicas 30:9b - Porque o Senhor, vosso Deus, é piedoso e misericordioso e não desviará de vós o rosto, se vos converterdes a ele.",
    "Efésios 1:7 - Em quem temos a redenção pelo seu sangue, a remissão das ofensas, segundo as riquezas da sua graça."
    ]
    const versiculosEight = [
    "Apocalipse 5:12 - Digno é o Cordeiro que foi morto de receber poder, riqueza, sabedoria, força, honra, glória e louvor!",
    "Mateus 6:12 - Perdoa-nos as nossas dívidas, assim como nós perdoamos aos nossos devedores."
    ]
    const versiculosNine = [
    "Salmo 119:105 - Lâmpada para os meus pés é a tua palavra e, luz para o meu caminho.",
    "Atos 17:30 - Mas Deus, não tendo em conta os tempos da ignorância, anuncia agora a todos os homens, em todo lugar, que se arrependam."
    ]
    const versiculosTeen = [
    "1 Timóteo 4:4-5 - Pois tudo o que Deus criou é bom, e nada deve ser rejeitado, se for recebido com ação de graças, pois é santificado pela palavra de Deus e pela oração.",
    "Neemias 9:31 - Mas, pela tua grande misericórdia, não os destruíste nem desamparaste; porque és um Deus clemente e misericordioso."
    ]
    const versiculosEleven = [
    "1 Crônicas 16:29 - Deem ao Senhor a glória devida ao seu nome. Tragam ofertas e venham à sua presença. Adorem o Senhor no esplendor da sua santidade",
    "Salmo 86:5 - Tu, Senhor, és misericordioso e bom, cheio de amor para com todos os que te chamam."
    ]
    const versiculosTwelve = [
    "2 Samuel 22:47 - O Senhor vive! Bendita seja a minha Rocha! Exaltado seja Deus, a Rocha que me salva!",
    "Hebreus 8:12 - Porque serei misericordioso para com as suas iniquidades, e não me lembrarei mais dos seus pecados."
    ]
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
    document.getElementById("nav").style.width = "0";
}
function funTagSix(){
    const randomNumber = Math.floor(Math.random() * 2);
    document.getElementById("tagalert").style.display = "block";
    document.getElementById("tagname").innerHTML = "Milagre";
    document.getElementById("tagsbtnallone").style.display = "none";
    document.getElementById("tagsbtnalltwo").style.display = "none";
    document.getElementById("tagsbtnallthree").style.display = "none";
    document.getElementById("tagsbtnallfour").style.display = "none";
    document.getElementById("tagsbtnallfive").style.display = "none";
    document.getElementById("tagsbtnallsix").style.display = "none";
    document.getElementById("tagsbtnallseven").style.display = "block";
    document.getElementById("tagsbtnalleight").style.display = "none";
    document.getElementById("tagsbtnallnine").style.display = "none";
    document.getElementById("tagsbtnallteen").style.display = "none";
    document.getElementById("tagsbtnalleleven").style.display = "none";
    const versiculosOne = [
    "Salmos 77:14 - Tu és o Deus que realiza milagres; mostras o teu poder entre os povos.",
    "Mateus 19:26 - Jesus olhou para eles e respondeu: Para o homem é impossível, mas para Deus todas as coisas são possíveis." 
    ]
    const versiculosTwo = [
    "Josué 1:9 - Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.",
    "João 2:11 - Este sinal milagroso, em Caná da Galileia, foi o primeiro que Jesus realizou. Revelou assim a sua glória, e os seus discípulos creram nele."
    ]
    const versiculosThree = [
    "João 3:16 - Porque Deus tanto amou o mundo que deu o seu filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna.",
    "João 6:14 - Depois de ver o sinal milagroso que Jesus tinha realizado, o povo começou a dizer: Sem dúvida este é o Profeta que devia vir ao mundo."
    ]
    const versiculosFour = [
    "Mateus 28:19-20 - Portanto, vão e façam discípulos de todas as nações, batizando-os em nome do Pai e do Filho e do Espírito Santo, ensinando-os a obedecer a tudo o que eu lhes ordenei. E eu estarei sempre com vocês, até o fim dos tempos.",
    "2 Coríntios 12:12 - As marcas de um apóstolo - sinais, maravilhas e milagres - foram demonstradas entre vocês, com grande perseverança."
    ]
    const versiculosFive = [
    "1 Coríntios 1:30 - E por causa dele estais em Cristo Jesus, que se tornou para nós sabedoria de Deus, justiça, santificação e redenção.",
    "Marcos 9:23 - E Jesus disse-lhe: Se tu podes crer; tudo é possível ao que crê."
    ]
    const versiculosSix = [
    "João 14:6 - Respondeu Jesus: Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim.",
    "Jeremias 32:27 - Eis que eu sou o Senhor, o Deus de toda a carne. Acaso, seria qualquer coisa maravilhosa demais para mim?"
    ]
    const versiculosSeven = [
    "1 Timóteo 1:17 - Ao Rei eterno, o Deus único, imortal e invisível, sejam honra e glória para todo o sempre. Amém.",
    "Lucas 8:50 - Jesus, porém, ouvindo-o, respondeu-lhe, dizendo: Não temas; crê somente, e será salva."
    ]
    const versiculosEight = [
    "Apocalipse 5:12 - Digno é o Cordeiro que foi morto de receber poder, riqueza, sabedoria, força, honra, glória e louvor!",
    "Salmo 9:1 - Eu te louvarei, Senhor, de todo o meu coração; contarei todas as tuas maravilhas."
    ]
    const versiculosNine = [
    "Salmo 119:105 - Lâmpada para os meus pés é a tua palavra e, luz para o meu caminho.",
    "Atos 1:9 - E, quando dizia isto, vendo-o eles, foi elevado às alturas, e uma nuvem o recebeu, ocultando-o a seus olhos."
    ]
    const versiculosTeen = [
    "1 Timóteo 4:4-5 - Pois tudo o que Deus criou é bom, e nada deve ser rejeitado, se for recebido com ação de graças, pois é santificado pela palavra de Deus e pela oração.",
    "Salmos 30:2 - Senhor meu Deus, a ti clamei por socorro, e tu me curaste"
    ]
    const versiculosEleven = [
    "1 Crônicas 16:29 - Deem ao Senhor a glória devida ao seu nome. Tragam ofertas e venham à sua presença. Adorem o Senhor no esplendor da sua santidade",
    "Salmos 147:3 - Só ele cura os de coração quebrantado e cuida das suas feridas."
    ]
    const versiculosTwelve = [
    "2 Samuel 22:47 - O Senhor vive! Bendita seja a minha Rocha! Exaltado seja Deus, a Rocha que me salva!",
    "Isaías 40:29 - Ele fortalece o cansado e dá grande vigor ao que está sem forças."
    ]
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
    document.getElementById("nav").style.width = "0";
}
function funTagSeven(){
    const randomNumber = Math.floor(Math.random() * 2);
    document.getElementById("tagalert").style.display = "block";
    document.getElementById("tagname").innerHTML = "Promessa";
    document.getElementById("tagsbtnallone").style.display = "none";
    document.getElementById("tagsbtnalltwo").style.display = "none";
    document.getElementById("tagsbtnallthree").style.display = "none";
    document.getElementById("tagsbtnallfour").style.display = "none";
    document.getElementById("tagsbtnallfive").style.display = "none";
    document.getElementById("tagsbtnallsix").style.display = "none";
    document.getElementById("tagsbtnallseven").style.display = "none";
    document.getElementById("tagsbtnalleight").style.display = "block";
    document.getElementById("tagsbtnallnine").style.display = "none";
    document.getElementById("tagsbtnallteen").style.display = "none";
    document.getElementById("tagsbtnalleleven").style.display = "none";
    const versiculosOne = [
    "Josué 21:45 - De todas as boas promessas do ­Senhor à nação de Israel, nenhuma delas falhou; todas se cumpriram.",
    "Hebreus 10:23 - Apeguemo-nos com firmeza à esperança que professamos, pois aquele que prometeu é fiel."
    ]
    const versiculosTwo = [
    "Josué 1:9 - Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.",
    "1 João 2:25 - E esta é a promessa que ele nos fez: a vida eterna."
    ]
    const versiculosThree = [
    "João 3:16 - Porque Deus tanto amou o mundo que deu o seu filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna.",
    "Filipenses 4:19 - O meu Deus suprirá todas as necessidades de vocês, de acordo com as suas gloriosas riquezas em Cristo Jesus."
    ]
    const versiculosFour = [
    "Deuteronômio 28:9 - O Senhor fará de vocês o seu povo santo, conforme prometeu sob juramento se obedecerem aos mandamentos do Senhor, o seu Deus, e andarem nos caminhos dele.",
    "Tiago 1:12 - Feliz é o homem que persevera na provação, porque depois de aprovado receberá a coroa da vida, que Deus prometeu aos que o amam."
    ]
    const versiculosFive = [
    "1 Coríntios 1:30 - E por causa dele estais em Cristo Jesus, que se tornou para nós sabedoria de Deus, justiça, santificação e redenção.",
    "Salmos 138:4 - Todos os reis da terra te renderão graças, Senhor, pois saberão das tuas promessas."
    ]
    const versiculosSix = [
    "João 14:6 - Respondeu Jesus: Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim.",
    "2 Coríntios 7:1 - Amados, visto que temos essas promessas, purifiquemo-nos de tudo o que contamina o corpo e o espírito, aperfeiçoando a santidade no temor de Deus."
    ]
    const versiculosSeven = [
    "Salmos 119:50 - Este é o meu consolo no meu sofrimento: A tua promessa dá-me vida.",
    "Salmos 119:140 - A tua promessa foi plenamente comprovada, e, por isso, o teu servo a ama."
    ]
    const versiculosEight = [
    "João 16:33 - Eu disse essas coisas para que em mim vocês tenham paz. Neste mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo.",
    "Jeremias 29:11 - Porque eu bem sei os pensamentos que penso de vós, diz o Senhor; pensamentos de paz e não de mal, para vos dar o fim que esperais."
    ]
    const versiculosNine = [
    "Salmo 119:105 - Lâmpada para os meus pés é a tua palavra e, luz para o meu caminho.",
    "Hebreus 10:23 - Retenhamos firmes a confissão da nossa esperança, porque fiel é o que prometeu."
    ]
    const versiculosTeen = [
    "1 Timóteo 4:4-5 - Pois tudo o que Deus criou é bom, e nada deve ser rejeitado, se for recebido com ação de graças, pois é santificado pela palavra de Deus e pela oração.",
    "1 Tessalonicenses 5:24 - Fiel é o que vos chama, o qual também o fará."
    ]
    const versiculosEleven = [
    "2 Coríntios 7:1 - Ora, amados, pois que temos tais promessas, purifiquemo-nos de toda imundícia da carne e do espírito, aperfeiçoando a santificação no temor de Deus.",
    "Apocalipse 3:20 - Eis que estou à porta e bato; se alguém ouvir a minha voz e abrir a porta, entrarei em sua casa e com ele cearei, e ele, comigo."
    ]
    const versiculosTwelve = [
    "Gênesis 9:13 - O meu arco tenho posto na nuvem; este será por sinal do concerto entre mim e a terra.",
    "Gálatas 3:22 - Mas a Escritura encerrou tudo debaixo do pecado, para que a promessa pela fé em Jesus Cristo fosse dada aos crentes."
    ]
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
    document.getElementById("nav").style.width = "0";
}
function funTagEight(){
    const randomNumber = Math.floor(Math.random() * 2);
    document.getElementById("tagalert").style.display = "block";
    document.getElementById("tagname").innerHTML = "Amor de Deus";
    document.getElementById("tagsbtnallone").style.display = "none";
    document.getElementById("tagsbtnalltwo").style.display = "none";
    document.getElementById("tagsbtnallthree").style.display = "none";
    document.getElementById("tagsbtnallfour").style.display = "none";
    document.getElementById("tagsbtnallfive").style.display = "none";
    document.getElementById("tagsbtnallsix").style.display = "none";
    document.getElementById("tagsbtnallseven").style.display = "nine";
    document.getElementById("tagsbtnalleight").style.display = "none";
    document.getElementById("tagsbtnallnine").style.display = "block";
    document.getElementById("tagsbtnallteen").style.display = "none";
    document.getElementById("tagsbtnalleleven").style.display = "none";
    const versiculosOne = [
    "Salmos 136:1 - Deem graças ao Senhor, porque ele é bom. O seu amor dura para sempre!",
    "1 João 5:3 - Porque nisto consiste o amor a Deus: em obedecer aos seus mandamentos. E os seus mandamentos não são pesados."
    ]
    const versiculosTwo = [
    "Josué 1:9 - Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.",
    "Romanos 5:8 - Mas Deus demonstra seu amor por nós: Cristo morreu em nosso favor quando ainda éramos pecadores."
    ]
    const versiculosThree = [
    "João 3:16 - Porque Deus tanto amou o mundo que deu o seu filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna.",
    "Salmos 86:15 - Mas tu, Senhor, és Deus compassivo e misericordioso, muito paciente, rico em amor e em fidelidade."
    ]
    const versiculosFour = [
    "1 João 3:1 - Vejam como é grande o amor que o Pai nos concedeu: sermos chamados filhos de Deus, o que de fato somos! Por isso o mundo não nos conhece, porque não o conheceu.",
    "Provérbios 8:17 - Amo os que me amam, e quem me procura me encontra."
    ]
    const versiculosFive = [
    "1 Coríntios 1:30 - E por causa dele estais em Cristo Jesus, que se tornou para nós sabedoria de Deus, justiça, santificação e redenção.",
    "Salmos 103:8 - O Senhor é compassivo e misericordioso, muito paciente e cheio de amor."
    ]
    const versiculosSix = [
    "João 14:6 - Respondeu Jesus: Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim.",
    "Salmos 63:3 - O teu amor é melhor do que a vida! Por isso os meus lábios te exaltarão."
    ]
    const versiculosSeven = [
    "1 Timóteo 1:17 - Ao Rei eterno, o Deus único, imortal e invisível, sejam honra e glória para todo o sempre. Amém.",
    "Salmos 36:10 - Estende o teu amor aos que te conhecem; a tua justiça, aos que são retos de coração."
    ]
    const versiculosEight = [
    "Apocalipse 5:12 - Digno é o Cordeiro que foi morto de receber poder, riqueza, sabedoria, força, honra, glória e louvor!",
    "1 Coríntios 13:4 - O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha."
    ]
    const versiculosNine = [
    "Salmo 119:105 - Lâmpada para os meus pés é a tua palavra e, luz para o meu caminho.",
    "1 João 4:16 - Assim conhecemos o amor que Deus tem por nós e confiamos nesse amor. Deus é amor. Todo aquele que permanece no amor permanece em Deus, e Deus nele."
    ]
    const versiculosTeen = [
    "1 Timóteo 4:4-5 - Pois tudo o que Deus criou é bom, e nada deve ser rejeitado, se for recebido com ação de graças, pois é santificado pela palavra de Deus e pela oração.",
    "Salmos 48:9 - No teu templo, ó Deus, meditamos em teu amor leal."
    ]
    const versiculosEleven = [
    "1 Crônicas 16:29 - Deem ao Senhor a glória devida ao seu nome. Tragam ofertas e venham à sua presença. Adorem o Senhor no esplendor da sua santidade",
    "2 Tessalonicenses 3:5 - O Senhor conduza o coração de vocês ao amor de Deus e à perseverança de Cristo."
    ]
    const versiculosTwelve = [
    "2 Samuel 22:47 - O Senhor vive! Bendita seja a minha Rocha! Exaltado seja Deus, a Rocha que me salva!",
    "2 Coríntios 13:14 - A graça do Senhor Jesus Cristo, o amor de Deus e a comunhão do Espírito Santo sejam com todos vocês."
    ]
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
    document.getElementById("nav").style.width = "0";
}
function funTagNine(){
    const randomNumber = Math.floor(Math.random() * 2);
    document.getElementById("tagalert").style.display = "block";
    document.getElementById("tagname").innerHTML = "Casamento";
    document.getElementById("tagsbtnallone").style.display = "none";
    document.getElementById("tagsbtnalltwo").style.display = "none";
    document.getElementById("tagsbtnallthree").style.display = "none";
    document.getElementById("tagsbtnallfour").style.display = "none";
    document.getElementById("tagsbtnallfive").style.display = "none";
    document.getElementById("tagsbtnallsix").style.display = "none";
    document.getElementById("tagsbtnallseven").style.display = "none";
    document.getElementById("tagsbtnalleight").style.display = "none";
    document.getElementById("tagsbtnallnine").style.display = "none";
    document.getElementById("tagsbtnallteen").style.display = "block";
    document.getElementById("tagsbtnalleleven").style.display = "none";
    const versiculosOne = [
    "Mateus 19:6 - Assim, eles já não são dois, mas sim uma só carne. Portanto, o que Deus uniu, ninguém separe.",
    "Gênesis 2:24-25 - Por essa razão, o homem deixará pai e mãe e se unirá à sua mulher, e eles se tornarão uma só carne. O homem e sua mulher viviam nus, e não sentiam vergonha."
    ]
    const versiculosTwo = [
    "Hebreus 13:4 - O casamento deve ser honrado por todos; o leito conjugal, conservado puro; pois Deus julgará os imorais e os adúlteros.",
    "Efésios 5:33 - Portanto, cada um de vocês também ame a sua mulher como a você mesmo, e a mulher trate o marido com todo o respeito."
    ]
    const versiculosThree = [
    "Provérbios 18:22 - O que acha uma mulher acha uma coisa boa e alcançou a benevolência do Senhor.",
    "Colossenses 3:18-19 - Vós, mulheres, estai sujeitas a vosso próprio marido, como convém no Senhor. Vós, maridos, amai a vossa mulher e não vos irriteis contra ela."
    ]
    const versiculosFour = [
    "Hebreus 13:4 - Venerado seja entre todos o matrimônio e o leito sem mácula; porém aos que se dão à prostituição e aos adúlteros Deus os julgará.",
    "Provérbios 31:10 - Mulher virtuosa, quem a achará? O seu valor muito excede o de rubins."
    ]
    const versiculosFive = [
    "Efésios 5:25-26 - Vós, maridos, amai vossa mulher, como também Cristo amou a igreja e a si mesmo se entregou por ela, para a santificar, purificando-a com a lavagem da água, pela palavra.",
    "Provérbios 16:9 - O coração do homem considera o seu caminho, mas o Senhor lhe dirige os passos."
    ]
    const versiculosSix = [
    "Efésios 5:22-23 - Vós, mulheres, sujeitai-vos a vosso marido, como ao Senhor; porque o marido é a cabeça da mulher, como também Cristo é a cabeça da igreja, sendo ele próprio o salvador do corpo.",
    "Efésios 5:31 - Por isso, deixará o homem seu pai e sua mãe e se unirá à sua mulher; e serão dois numa carne."
    ]
    const versiculosSeven = [
    "Efésios 5:28 - Assim devem os maridos amar a sua própria mulher como a seu próprio corpo. Quem ama a sua mulher ama-se a si mesmo.",
    "Efésios 5:33 - Assim também vós, cada um em particular ame a sua própria mulher como a si mesmo, e a mulher reverencie o marido."
    ]
    const versiculosEight = [
    "Eclesiastes 4:9 10 e 12 - Melhor é serem dois do que um. Porque, se um cair, o outro levanta o seu companheiro; e o cordão de três dobras não se quebra facilmente.",
    "Marcos 10:9 - Portanto, o que Deus uniu, ninguém o separe."
    ]
    const versiculosNine = [
    "Coríntios 13:13 - Assim, permanecem agora estes três: a fé, a esperança e o amor. O maior deles, porém, é o amor.",
    "Colonenses 3:14 - Acima de tudo, porém, revistam-se do amor, que é o elo perfeito."
    ]
    const versiculosTeen = [
    "Provérbios 14:1 - A mulher sábia edifica a sua casa, mas com as próprias mãos a insensata derruba a sua.",
    "Romanos 12:9 - O amor deve ser sincero. Odeiem o que é mau; apeguem-se ao que é bom."
    ]
    const versiculosEleven = [
    "Colonenses 3:13 - Suportem-se uns aos outros e perdoem as queixas que tiverem uns contra os outros. Perdoem como o Senhor lhes perdoou.",
    "1 Pedro 4:8 - Sobretudo, amem-se sinceramente uns aos outros, porque o amor perdoa muitíssimos pecados."
    ]
    const versiculosTwelve = [
    "Provérbios 19:14 - Casas e riquezas herdam-se dos pais, mas a esposa prudente vem do Senhor.",
    "1 Coríntios 16:14 - Façam tudo com amor."
    ]
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
    document.getElementById("nav").style.width = "0";
}
function funTagTeen(){
    const randomNumber = Math.floor(Math.random() * 2);
    document.getElementById("tagalert").style.display = "block";
    document.getElementById("tagname").innerHTML = "Jovens";
    document.getElementById("tagsbtnallone").style.display = "none";
    document.getElementById("tagsbtnalltwo").style.display = "none";
    document.getElementById("tagsbtnallthree").style.display = "none";
    document.getElementById("tagsbtnallfour").style.display = "none";
    document.getElementById("tagsbtnallfive").style.display = "none";
    document.getElementById("tagsbtnallsix").style.display = "none";
    document.getElementById("tagsbtnallseven").style.display = "none";
    document.getElementById("tagsbtnalleight").style.display = "none";
    document.getElementById("tagsbtnallnine").style.display = "none";
    document.getElementById("tagsbtnallteen").style.display = "none";
    document.getElementById("tagsbtnalleleven").style.display = "block";
    const versiculosOne = [
    "Salmos 119:9 - Como pode o jovem manter pura a sua conduta? Vivendo de acordo com a tua palavra.",
    "Lamentações 3:27 - É bom que o homem suporte o jugo enquanto é jovem."
    ]
    const versiculosTwo = [
    "Efésios 6:1-2 - Filhos, obedeçam a seus pais no Senhor, pois isso é justo. Honra teu pai e tua mãe - este é o primeiro mandamento com promessa.",
    "Salmos 119:11 - Guardei no coração a tua palavra para não pecar contra ti."
    ]
    const versiculosThree = [
    "João 3:16 - Porque Deus tanto amou o mundo que deu o seu filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna.",
    "Provérbios 20:11 - Até a criança mostra o que é por suas ações; o seu procedimento revelará se ela é pura e justa."
    ]
    const versiculosFour = [
    "Mateus 28:19-20 - Portanto, vão e façam discípulos de todas as nações, batizando-os em nome do Pai e do Filho e do Espírito Santo, ensinando-os a obedecer a tudo o que eu lhes ordenei. E eu estarei sempre com vocês, até o fim dos tempos.",
    "1 Timóteo 4:12 - Ninguém o despreze pelo fato de você ser jovem, mas seja um exemplo para os fiéis na palavra, no procedimento, no amor, na fé e na pureza."
    ]
    const versiculosFive = [
    "Salmos 71:5 - Pois tu és a minha esperança, ó Soberano Senhor, em ti está a minha confiança desde a juventude.",
    "Jeremias 1:5 - Antes de formá-lo no ventre eu o escolhi; antes de você nascer, eu o separei e o designei profeta às nações."
    ]
    const versiculosSix = [
    "João 14:6 - Respondeu Jesus: Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim.",
    "Eclesiastes 4:13 - Melhor é um jovem pobre e sábio, do que um rei idoso e tolo, que não mais aceita repreensão."
    ]
    const versiculosSeven = [
    "1 Timóteo 5:1 - Não repreenda asperamente ao homem idoso, mas exorte-o como se ele fosse seu pai.",
    "Provérbios 20:29 - A beleza dos jovens está na sua força"
    ]
    const versiculosEight = [
    "Salmos 37:25 - Já fui jovem e agora sou velho, mas nunca vi o justo desamparado, nem seus filhos mendigando o pão.",
    "1 João 2:14 - Jovens, eu lhes escrevi, porque vocês são fortes, e em vocês a Palavra de Deus permanece e vocês venceram o Maligno"
    ]
    const versiculosNine = [
    "Salmos 119:105 - Lâmpada para os meus pés é a tua palavra e, luz para o meu caminho.",
    "Timóteo 2:22 - Fuja dos desejos malignos da juventude e siga a justiça, a fé, o amor e a paz, com aqueles que, de coração puro, invocam o Senhor"
    ]
    const versiculosTeen = [
    "1 Timóteo 4:4-5 - Pois tudo o que Deus criou é bom, e nada deve ser rejeitado, se for recebido com ação de graças, pois é santificado pela palavra de Deus e pela oração.",
    "Salmos 71:17 - Desde a minha juventude, ó Deus, tens me ensinado, e até hoje eu anuncio as tuas maravilhas."
    ]
    const versiculosEleven = [
    "1 Crônicas 16:29 - Deem ao Senhor a glória devida ao seu nome. Tragam ofertas e venham à sua presença. Adorem o Senhor no esplendor da sua santidade",
    "Eclesiastes 11:10 - Afaste do coração a ansiedade e acabe com o sofrimento do seu corpo, pois a juventude e o vigor são passageiros."
    ]
    const versiculosTwelve = [
    "Salmos 62:5 - Descanse somente em Deus, ó minha alma; dele vem a minha esperança.",
    "Salmos 27:13-14 - Apesar disso, esta certeza eu tenho: viverei até ver a bondade do Senhor na terra. Espere no Senhor. Seja forte! Coragem! Espere no Senhor."
    ]
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
    document.getElementById("nav").style.width = "0";
}