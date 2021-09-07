# 📋 Sobre a atividade

Nessa atividade você irá ter contato com o ciclo de vida do componente e irá treinar o uso do método de montagem utilizando o useEffect para fazer uma requisição na API assim que a página é renderizada.

**Em caso de dúvidas em relação ao enunciado, procure o time de ensino!**

# ℹ️ Informações úteis

Nesta atividade, vamos listar os personagens do Rick and Morty assim que a página for montada, onde os personagens que estão vivos (Alive) serão renderizados em cards de uma cor e os demais em outra.

## Resultado

![https://i.imgur.com/cY1pfNZ.png](https://i.imgur.com/cY1pfNZ.png)

## 🖐️🍝 Mão na massa!

*   Crie um projeto React;
*   Em src, crie uma pasta components, contendo dois componentes: CharCard e Characters;
*   Cada componente deve ter um arquivo index.jsx e styles.css (porém a forma como irá ser feito a estilização é livre);
*   No App, faça os imports necessários (componentes e hooks que serão utilizados);
    *   Crie um state characterList que iniciará com um array vazio;

    *   Utilize o useEffect com a sintaxe de montagem, faça uma requisição utilizando o fetch no endpoint da api do Rick and Morty: [](https://rickandmortyapi.com/api/character/)[https://rickandmortyapi.com/api/character/](https://rickandmortyapi.com/api/character/) . Esse endpoint retornara o seguinte objeto:

        ![https://i.imgur.com/uXPbyXu.png](https://i.imgur.com/uXPbyXu.png)

    *   Terminando o fetch, atribua o valor do atributo results (uma lista de objetos contendo informações dos personagens) no state characterList;

    *   Retornar o componente Chacarcters - que também irá enviar a lista de personagens por props.

*   Então, no componente Characters você receberá a props desconstruída contendo o state da lista de personagens.
    *   Esse componente retornara um título "Meus personagens" e listará (método de array [map](https://pt-br.reactjs.org/docs/lists-and-keys.html)) os personagens por props de CharCard. Obs.: Não esquecer das keys - como o objeto possui o atributo id, utilizar o mesmo como key.
*   No componente CharCard já desestruture a props recebida;
    *   O componente retornará uma div encapsulando um título com o nome do personagem e a imagem do mesmo.
        *   Importante: fazer a condicional, conforme o status "Alive" para renderizar os cards verdes para os vivos e outra cor para os demais.

## 💪 Agora é com você

*   Estilize a página de maneira harmônica e entregando os requisitos propostos;
*   Delimitar o nome do personagem para 15 caracteres com as reticências;
*   Renderizar mais algum dado sobre os personagens;
*   Deixar a aplicação responsiva (mobile first);

# 💡Conhecimentos aplicados:

*   Fundamentos do React;
*   Deploy no Vercel;
*   Componentização;
*   Renderização condicional;
*   Ciclo de vida - Montagem;
*   Requisição API - fetch.
