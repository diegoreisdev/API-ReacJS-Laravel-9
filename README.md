# ReactJS_API_Laravel_9

1-Quais as partes principais de uma requisição HTTP?<br/>
  R: Cabeçalho da mensagem. O cabeçalho da mensagem (header) é utilizado para transmitir informações adicionais entre o cliente e o servidor.
     Corpo da mensagem. Uma mensagem HTTP pode conter um corpo de dados que são enviados abaixo das linhas de cabeçalho. Requisição.
     
2-Qual a diferença entre colocar um script dentro do "head" e no fim do "body"?<br/>
  R: Resumidamente, colocar no final do body te garante que toda o conteudo foi carregado antes de chamar qualquer script. Colocando no header  pode gerar complicações        caso queira pegar algum elemento da pagina que ainda nao foi carregado.
  
3-Qual a diferença entre display: block e display: inline-block ?<br/>
  R: Um elemento definido como inline-block é muito semelhante ao inline no sentido de que será definido de acordo com o fluxo natural do texto, ou seja; ao contrário      de display: block, display: inline-block não adiciona uma quebra de linha após o elemento. Portanto, o elemento pode ficar próximo a outros elementos.
  
4-É possível criar um site responsivo SEM media queries? Por que?<br/>
  R: Sim. Podemos utilizar CSS GRID para manipular os ajustes das resoluções.
  
5-No Javascript, é obrigatório usar VAR para criar uma variável?<br/>
  R: Não, mas utilizaar palavra reservada var no momento da criação de nossas variáveis é uma boa prática para garantir que a variável tenha o escopo que queremo.
  
6-Criar funções com "function() {}" e com "() => {}" tem alguma diferença além da sintaxe?<br/>
  R:  Arrow functions herdam o contexto local de onde foi declarado, enquanto o modelo normal possui o contexto associado ao objeto que ele está vinculado no momento
      da chamada (se ele não estiver associado a ninguém na chamada, ele assumirá this automaticamente como o contexto global, que no caso dos navegadores é window)
      
7-Explique a lógica pra fazer uma paginação.<br/>
  R:  select *
      from ( select /*+ FIRST_ROWS(n) */ a.*, ROWNUM rwnum
         from ( user query, with order by )a
         where ROWNUM <= :MAX_ROW_TO_FETCH )
      where rwnum>= :MIN_ROW_TO_FETCH;
      Exemplo de código para exibição de consulta Oracle para buscar dados para paginação

8-Qual a melhor forma de armazenar uma imagem no banco de dados?<br/>
  R: Armazenando o path, para a localização do arquivo salvo no disco.
  
9-No React, quantos useEffect eu posso usar?<br/>
  R: Você pode executar quantos useEffects() quiser, o que nos dá mais controle sobre o que e quando algo deve ser executado.
  
10-Quais métodos de requisição preciso para criar um CRUD via API?<br/>
  R: GET - POST - PUT - DELETE
