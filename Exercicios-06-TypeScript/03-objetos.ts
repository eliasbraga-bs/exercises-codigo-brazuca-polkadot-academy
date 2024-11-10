// Definindo a interface Produto com uma propriedade opcional
interface Produto {
    nome: string;
    preco: number;
    disponivel: boolean;
    categoria?: string; 
}

// Função para filtrar produtos disponíveis
function filtrarDisponiveis(produtos: Produto[]): Produto[] {
    return produtos.filter(produto => produto.disponivel);
}

// Função para filtrar produtos por categoria
function filtrarPorCategoria(produtos: Produto[], categoria: string): Produto[] {
    return produtos.filter(produto => produto.categoria === categoria);
}

// Array de produtos
const produtos: Produto[] = [
    { nome: "Kimono", preco: 100, disponivel: true, categoria: "Kimonos" },
    { nome: "Faixa", preco: 50, disponivel: false, categoria: "Faixas" },
    { nome: "Bermudas MMA", preco: 300, disponivel: true, categoria: "Bermudas" },
    { nome: "Rash-Guard", preco: 150, disponivel: true, categoria: "Acessórios" },
    { nome: "Protetor-Bocal", preco: 80, disponivel: false, categoria: "Acessórios" }
];

// Testando as funções
console.log("Produtos Disponíveis:");
console.log(filtrarDisponiveis(produtos));

console.log("\nProdutos da Categoria 'Kimonos':");
console.log(filtrarPorCategoria(produtos, "Kimonos"));
