let pron = ['el', 'nuestro', 'los']
let nom = ['perro', 'gato', 'humano']
let adj = ['gigante', 'pequeño', 'rojo']

for (let i = 0; i < pron.length; i++) {
  for (let n = 0; n < nom.length; n++) {
    for (let a = 0; a < adj.length; a++){
      console.log(pron[i] + nom[n] + adj[a] + ".com" );
    }
  }
}

