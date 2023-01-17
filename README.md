# Cronometro

## <b>HTML</b>

<br>

Possui um codigo html simples, apenas para inserir o display dos números, colocar os botões e centralizar tudo.

<br><br>

<img src="./readme/HTMLCode.png">

<br>    

## <b>JavaScript</b>

<br>

Seu JavaScript possui duas partes, a primeira consiste em criar todo o código referente ao funcionamento do cronometro.

<br>

## <i>Primeira parte</i>

<br>

### | Função cria segundos

<br>
Esta função possui o papel de criar o timer refente aos segundos recebidos, utilizando o Objeto <span style="color: #9CDCFE;">Date()</span>.

<br>

<img src="./readme/relogio.png">

<br>

Esta função recebe como parametro <span style="color: #55B5DB;">seg</span>, que se refere aos segundos desejados, como parametro do <span style="color: #9CDCFE;">Date()</span>, este <span style="color: #55B5DB;">seg</span> é multiplicado por 1000 para adquirir os milissegundos, assim retornando, por exemplo, 00:00:01.

<br>

### | Função Relogio

<br>

Esta função possui o papel de criar o intervalo de tempo, após 1 segundo ela muda o HTML do timer para a string retornada pela função <i style="color: #A074C4;">criaSegundos()</i> que é passado como parametro os segundos da variável <span style="color: #55B5DB;">seg</span>, após isso esta mesma variável é somada 1.

<br>

<img src="./readme/relogio2.png">

<br>

## <i>Segunda Parte</i>

<br>

### | Chamando o HTML

<br>

Para começar a segunda parte, chamei os botões do <b>HTML</b> usando o método <i style="color: #A074C4;">querySelector()</i>, pasando a ID respectiva.

<br>

<img src="./readme/chamaHTML.png">

<br>

### | Criando a interação

<br>

Para criar a interação utilizei o método <i style="color: #A074C4;">addEventListener()</i> para que ao clicar em cima do botão ele inicie, pause, ou pare o cronometro.

<br>

<img src="./readme/interacao.png">

<br>

Para resolução de <b>bugs</b> tive que criar uma variavel chama <span style="color: #55B5DB;">start</span>, cujo recebe um valor booleano, assim, quando clicar em iniciar mais de uma vez, não irá chamar a função <i style="color: #A074C4;">Relogio()</i>.

<br>

# <span style="text-align: center; display: block;">Resultado</span>

<br>

<div style="display: flex; justify-content: center">
    <img src="./readme/gif.gif">
</div>

Link para o <a href="https://cronometro-ace.netlify.app">site</a> 
