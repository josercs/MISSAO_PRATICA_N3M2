import { Livro } from '../modelo/Livro';

let livros: Array<Livro> = [
  { codigo: 1, codEditora: 1, titulo: 'Livro 1', resumo: 'Resumo 1', autores: ['Autor 1'] },
  { codigo: 2, codEditora: 2, titulo: 'Livro 2', resumo: 'Resumo 2', autores: ['Autor 2'] },
  { codigo: 3, codEditora: 3, titulo: 'Livro 3', resumo: 'Resumo 3', autores: ['Autor 3'] },
];

export class ControleLivro {
  obterLivros() {
    return livros;
  }

  incluir(livro: Livro) {
    const novoCodigo = Math.max(...livros.map((l) => l.codigo)) + 1;
    livro.codigo = novoCodigo;
    livros.push(livro);
  }

  excluir(codigo: number) {
    const index = livros.findIndex((l) => l.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}
