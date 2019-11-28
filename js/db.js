// habilitar dados offline

db.enablePersistence()
    .catch(function(err) {
        if (err.code == 'failed-precondition') {
            // provavelmente multiplas abas abertas ao mesmo tempo
            console.log('Persistencia de dados falhou');
        } else if (err.code == 'unimplemented') {
             // browser nao suporta
            console.log('Persistencia nao disponivel');
        }
    });
// real-time listener que verifica as mudanças que ocorrem
db.collection('Friendly Cat').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
             desenhaCard(change.doc.data(), change.doc.id);
        }
        if (change.type === 'removed') {
                        removeCard(change.doc.id);
        }
    });
});

// adicionar novo produto
const form = document.querySelector('form');
form.addEventListener('submit', evt => {
    evt.preventDefault();

    const produto = {
        nome: form.produtoNome.value,
        descricao: form.produtoDescricao.value,
        link: form.produtoLink.value,
        arquivo: form.produtoArquivo.value
    };

    db.collection('produto').add(produto)
        .catch(err => console.log(err));

    //reseta o formulario
    form.produtoNome.value = '';
    form.produtoDescricao.value = '';
    form.produtoLink.value = '';
    form.produtoArquivo.value = '';

});

// remove a recipe
const produtos1 = document.querySelector('.produtos');
produtos1.addEventListener('click', evt => {
  if(evt.target.tagName === 'I'){
    const id = evt.target.getAttribute('data-id');
    //console.log(id);
    db.collection('produto').doc(id).delete();
  }
})
