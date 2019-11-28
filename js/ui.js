// essa funcao seleciona o row (que esta no index)
// para depois desenhar todos os cards la
const produto = document.querySelector('.produtos');

document.addEventListener('DOMContentLoaded', function() {
    // menus laterais 
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {edge:'left'});

    // formulario para adicionar produto
    const forms = document.querySelectorAll('.side-form');
    var instances2 = M.Sidenav.init(forms, {edge:'right'});
});

//funcao para desenhar o card da receita na tela
//id, nome, descricao, link, arquivo
const desenhaCard = (data, id) => {

	const html = `
  <div class="col s12 m6 l3 produto" data-id="${id}">
        <div class="card" style="background-color: #A59C94FF;">
            <div class="card-image produto-imagem">
                <img src="images/${data.arquivo}">
                <span class="card-title nome-produto"${data.nome}"</span>
            </div>
            <div class="card-content produto-descricao">
                <p>"${data.descricao}"</p>
            </div>
            <div class="card-action">
                <a style="color: #AE0E36FF;" class="produto-link" href="${data.link}">Saiba mais</a>
            </div>
            <div class="produto-deletar">
                <i class="material-icons" data-id="${id}">delete_outline</i>
            </div>
        </div>
   </div>`;
    produto.innerHTML += html;

};

// remove recipe
const removeCard = (id) => {
  const produto = document.querySelector(`.produto[data-id=${id}]`);
  produto.remove();
};

