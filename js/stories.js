function mudaTexto() {
  var storie = document.getElementById("storie");
  var img = document.getElementById("img1");
  img.src = "../img/mulher.avif";
  storie.innerHTML =
    "Maria era uma jovem determinada, cresceu em uma realidade marcada pela escassez de alimentos em sua comunidade rural. Diariamente, ela e sua família enfrentavam a difícil tarefa de garantir comida suficiente para todos. A fome era uma sombra constante, mas Maria não deixou que isso a derrotasse.<br><br>Com um espírito resiliente e uma chama ardente dentro de si, Maria decidiu que era hora de fazer a diferença. Ela percebeu que a solução para superar a fome não seria fácil, mas estava disposta a encarar todos os desafios que surgissem em seu caminho.<br><br> Foi então que Maria teve uma ideia brilhante: dedicar-se à agricultura e transformar um pequeno pedaço de terra em um jardim produtivo. Mesmo com pouco conhecimento inicial, sua determinação era imensa. Ela colocou as mãos na terra e começou a plantar uma variedade de vegetais e ervas. <br><br> Ao longo do tempo, o jardim de Maria começou a florescer. Os vegetais e ervas cresceram em abundância, trazendo esperança e nutrição para sua comunidade. As pessoas começaram a se inspirar na história de Maria e em seu trabalho incansável para vencer a fome.<br><br>A história de Maria é um exemplo poderoso de como uma pessoa determinada pode fazer a diferença em sua comunidade. Sua jornada nos mostra que, mesmo diante das maiores dificuldades, a força de vontade e ação podem transformar vidas e mudar realidades.<br><br>Agora,  que tal conhecer a história inspiradora de Pedro? Descubra como ele enfrentou desafios semelhantes e também deixou sua marca na luta contra a fome. Leia a história de Pedro e seja inspirado por sua coragem e dedicação!";
}

function mudaTexto2() {
  var storie = document.getElementById("storie");
  var img = document.getElementById("img1");
  img.src = "../img/pedro.jpg";
  storie.innerHTML =
    "Pedro, um jovem cheio de ambição e talento, cresceu em uma grande cidade enfrentando a realidade da escassez de alimentos. Vindo de uma família de baixa renda, ele conhecia de perto os desafios e as dificuldades que a fome trazia. No entanto, Pedro não se deixou abater. Sua determinação era maior do que qualquer obstáculo.<br><br>Com o tempo, Pedro começou a desenvolver suas habilidades e a buscar maneiras de criar um futuro melhor para si mesmo e para os outros. Ele descobriu que sua paixão pela tecnologia poderia ser uma ferramenta poderosa para encontrar soluções inovadoras para problemas urgentes, como a fome.<br><br>Foi assim que surgiu a brilhante ideia de Pedro: criar um aplicativo que conectasse doadores de alimentos a pessoas necessitadas. Ele percebeu que poderia usar a tecnologia para criar uma ponte entre aqueles que tinham alimentos em excesso e aqueles que estavam lutando para conseguir uma refeição adequada.<br><br>Movido por sua paixão e determinação, Pedro trabalhou incansavelmente para transformar sua ideia em realidade. Ele reuniu uma equipe talentosa e começou a desenvolver o aplicativo, colocando todo o seu conhecimento e energia nesse projeto inovador.<br><br>O aplicativo de Pedro logo se tornou um sucesso. Milhares de doadores e pessoas necessitadas se conectaram por meio dessa plataforma, proporcionando alimentos e esperança para aqueles que mais precisavam. Pedro estava fazendo a diferença e provando que a tecnologia pode ser uma poderosa aliada na luta contra a fome.<br><br> Conheça agora a história de outro jovem que revolucionou o seu redor, ajudando a combater a realidade da fome!";
}

function mudaTexto3() {
  var storie = document.getElementById("storie");
  var img = document.getElementById("img1");
  img.src = "../img/guilherme.avif";
  storie.innerHTML =
    "Em uma cidade cercada por paisagens naturais deslumbrantes, viveu Guilherme, um jovem aventureiro movido por sua paixão pela natureza e seu desejo de combater a fome. Testemunhando os efeitos devastadores da fome nas comunidades rurais próximas, ele decidiu agir. Determinado a fazer a diferença, Guilherme se dedicou à agricultura sustentável, acreditando que a solução envolvia não apenas fornecer alimentos, mas também promover práticas agrícolas amigáveis ao meio ambiente e garantir a segurança alimentar a longo prazo.<br><br>Com coragem e determinação, Guilherme mergulhou nessa missão, estudando técnicas agrícolas e se envolvendo em movimentos como permacultura e agroecologia. Inspirando outros jovens, ele formou uma equipe que trabalhava para transformar as terras ao redor de sua cidade natal. Juntos, eles restauraram a fertilidade do solo, protegeram os recursos hídricos e cultivaram alimentos saudáveis. Seu sucesso atraiu a atenção de outras comunidades, desencadeando um movimento nacional de agricultura sustentável.<br><br>A história de Guilherme é um exemplo poderoso de como a paixão, o conhecimento e a ação podem transformar vidas e comunidades. Sua jornada inspiradora iluminou um caminho para um futuro mais sustentável, onde a fome se torna uma memória distante e a harmonia entre seres humanos e meio ambiente é priorizada. Guilherme continua sua missão, guiando outros a seguirem seus passos, construindo um mundo onde a fome seja superada e a natureza seja preservada.";
}

var indice = 0;

function trocarImagem() {
  var imagens = [
    "../img/fomescard.png",
    "../img/fomescard2.png",
    "../img/fomescard3.png",
    "../img/fomescard4.png",
    "../img/fomescard5.png",
    "../img/fomescard6.png",
  ];

  var imagem = document.getElementById("imgDados");
  indice = (indice + 1) % imagens.length;
  imagem.src = imagens[indice];
}

var indice2 = 0;

function trocarTexto() {
  var imagens = [
    "1. Planeje suas refeições: Faça uma lista de compras e compre apenas o necessário. Evite comprar em excesso e acabar jogando comida fora.",
    "2. Armazene corretamente: Aprenda a armazenar alimentos adequadamente para prolongar sua vida útil. Use recipientes herméticos e etiquete-os com as datas de validade.",
    "3. Aproveite ao máximo: Seja criativo na cozinha e aproveite todos os ingredientes. Sobras de refeições podem se transformar em deliciosas refeições ou lanches.",
    "4. Doe o excedente: Se você tiver alimentos que não irá consumir, considere doá-los para bancos de alimentos locais ou instituições de caridade.",
    "5. Conscientize-se: Compartilhe informações sobre a importância de evitar o desperdício de alimentos com sua família, amigos e comunidade.",
  ];

  var texto = document.getElementById("txt__dica");
  indice2 = (indice2 + 1) % imagens.length;
  texto.innerHTML = imagens[indice2];
}

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  var nome = document.querySelector(".contato__nome").value;
  var telefone = document.querySelector(".contato__telefone").value;
  var email = document.querySelector(".contato__email").value;
  var mensagem = document.querySelector(".contato__mensagem").value;

  if (nome.trim() === "") {
    alert("Por favor, insira o seu nome.");
    return;
  }

  if (telefone.trim() === "") {
    alert("Por favor, insira o seu telefone.");
    return;
  }

  if (email.trim() === "" || !validarEmail(email)) {
    alert("Por favor, insira um email válido.");
    return;
  }

  if (mensagem.trim() === "") {
    alert("Por favor, insira uma mensagem.");
    return;
  }

  console.log("Nome:", nome);
  console.log("Telefone:", telefone);
  console.log("Email:", email);
  console.log("Mensagem:", mensagem);

  document.querySelector(".contato__nome").value = "";
  document.querySelector(".contato__telefone").value = "";
  document.querySelector(".contato__email").value = "";
  document.querySelector(".contato__mensagem").value = "";

  alert("Mensagem enviada com sucesso!");
});

function validarEmail(email) {
  var regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}
