<!-- BADGES -->
[![MIT License](https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
)](https://github.com/daianezardo/parma-creperia/blob/main/LICENSE)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555)](https://www.linkedin.com/in/daiane-zardo/)


<br />
<div align="center">
  <a href="https://awesome-payne-31e2d1.netlify.app/">
    <img src=https://user-images.githubusercontent.com/99056875/162573894-5f35144f-e9d5-4469-a21b-bb802a91d279.png
 alt="Logo Parma Creperia" width="200" height="142">
  </a>
  
  <h3 align="center">Parma Creperia</h3>
  
  <p align="center">
    Catálogo virtual de produtos para creperias e outros segmentos que trabalham com delivery.
    <br />
    <a href="https://awesome-payne-31e2d1.netlify.app/"><strong>Acessar demonstração »</strong></a>
  </p>
</div>


<details>
  <summary>Sumário</summary>
  <ol>
    <li><a href="#sobre-o-projeto">Sobre o projeto</a></li>
    <li><a href="#processo-de-trabalho">Processo de trabalho</a></li>
    <li>
      <a href="#como-executar-o-projeto">Como executar o projeto</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#executando-o-site">Executando o site</a></li>
      </ul>
    </li>
    <li><a href="#tecnologias-utilizadas">Tecnologias utilizadas</a></li>
    <li><a href="#integrações">Integrações</a></li>
    <li><a href="#autor">Autor</a></li>
    <li><a href="#agradecimentos">Agradecimentos</a></li>
    <li><a href="#licença">Licença</a></li>
  </ol>
</details>


# Sobre o projeto

Pizzarias gastam energia e recursos respondendo um cliente por vez através de WhatsApp e, por outro lado, clientes ficam aguardando para ver os produtos e finalizar o pedido.

Com o catálogo virtual o cliente visualiza os produtos com facilidade, seleciona quais deseja e já envia todos os dados que a pizzaria precisa para finalizar o pedido via WhatsApp, acelerando este processo.

A demonstração do site funcionando está disponível no link https://awesome-payne-31e2d1.netlify.app/

<div align="center">
  <a href="https://sad-cori-ec4c3e.netlify.app/">
    <img src="https://user-images.githubusercontent.com/99056875/162579082-b3d6e077-d268-4563-a00b-f7f3051ccf40.gif" alt="Demonstração Nostra Pizza" width="250" height="556" />
  </a>
</div>


Os recursos implementados foram:

- Layout responsivo que se adequa a diferentes tamanhos de tela;
- Listagem dinâmica de produtos agrupados por grupos de produtos;
- Adicionar produtos à sacola de compras;
- Remover produtos da sacola de compras;
- Alterar quantidade dos produtos na sacola;
- Finalizar o pedido enviando os dados para o WhatsApp;
- Tela de saiba mais com informações da empresa.


# Processo de trabalho

O primeiro passo foi escolher um problema: pessoas e empresas perdem tempo com o atendimento ineficiente dos deliverys via WhatsApp.

A gestão do projeto foi feita com base no ciclo PDCA (Planejar, Executar, Checar, Agir) e as tarefas foram quebradas em cards do Trello com base no quadro Kanban. O Trello está disponível pelo link: https://trello.com/b/UiTJnrqC/parma-creperia

# Como executar o projeto

## Pré-requisitos

Antes de seguir o passo a passo para executar o projeto é preciso ter instalado no computador o [Git](https://git-scm.com/) e um servidor HTTP local (recomendo a utilização da extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) do [Visual Studio Code](https://code.visualstudio.com/)).

## Executando o site

- Faça o download do código fonte no computador:
```sh
git clone https://github.com/daianezardo/parma-creperia
```

- Abra o projeto no VS Code e execute a extensão Live Server ou coloque os arquivos no servidor HTTP desejado.


# Tecnologias utilizadas
- HTML 5
- CSS
- Javascript Vanilla
- [Bootstrap](https://getbootstrap.com)


# Integrações
- WhatsApp: Quando o pedido é finalizado, é enviado para o WhatsApp do estabelecimento uma mensagem com os produtos selecionados pelo cliente e os dados que ele preencheu no formulário de finalizar pedido.

