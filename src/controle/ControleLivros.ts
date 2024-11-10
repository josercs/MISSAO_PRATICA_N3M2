import { Livro } from '../modelo/Livro';

let livros: Array<Livro> = [
<<<<<<< HEAD
  { codigo: 1, codEditora: 1, titulo: 'Hábitos Atômicos', resumo: 'James Clear mostra como pequenos hábitos podem transformar sua vida.', autores: ['James Clear'] },
  { codigo: 2, codEditora: 2, titulo: 'O Poder do Hábito', resumo: 'Charles Duhigg revela como os hábitos moldam quem somos e ensina a mudá-los para melhor. Com histórias reais e ciência, ele mostra como reprogramar seus comportamentos para alcançar seus objetivos.', autores: ['Charles Duhigg'] },
  { codigo: 3, codEditora: 3, titulo: 'Mindset: A Nova Psicologia do Sucesso', resumo: 'Carol Dweck explica como nossas crenças sobre nossas habilidades afetam nosso sucesso,podemos aprender, evoluir e encarar desafios de forma positiva.', autores: ['Carol S. Dweck'] },
=======
  { codigo: 1, codEditora: 1, titulo: 'Livro 1', resumo: 'Resumo 1', autores: ['Autor 1'] },
  { codigo: 2, codEditora: 2, titulo: 'Livro 2', resumo: 'Resumo 2', autores: ['Autor 2'] },
  { codigo: 3, codEditora: 3, titulo: 'Livro 3', resumo: 'Resumo 3', autores: ['Autor 3'] },
>>>>>>> e38382cf4e1597cd73a166e19e9db66782abae6d
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
