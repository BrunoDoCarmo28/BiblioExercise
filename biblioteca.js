const booksByCategory = [
  
    {
      category: "Riqueza",
      books: [ 
         {
          title: "os segredos da mente milionaria",
          author: "harv keller",        
        },
        {
        title: "o homem mais rico da babilonia",
        author: "george classon", 
        },
        {
        title: "pai rico, pai pobre",
        author: "Robert e Sharon",
        },
            ],
    },
      
    {
      category:"inteligência emocional",
      books: [
        {
          title:"você é insubstituível",
          author: "augusto cury",
        },
        {
          title:"ansiedade - como enfrentar o mal do século",
          author: "augusto cury"
        },
        {
          title:"os 7 hábitos das pessoas altamente eficazes",
          author:"augusto cury",
        },
              
            ],
    },
  ]
      
   const total = booksByCategory.length
   console.log('Total de categorias: ', total)
  
   for(let cate of booksByCategory) { //ta pegando uma categoria dentro da categoria de livros, alem de transformar o OBJETO em uma variável
     console.log('Total de livros da categoria', cate.category)
     console.log(cate.books.length)
      }
  
  function contAuthors(){
    let auth = [];//array criado para cada autor que encontrar, cair dentro deste array
    
    for(let cate of booksByCategory){ //esse aqui ta pegando só a categoria, mas é preciso dos LIVROS que estão dentro, por isso o loop dentro do loop para poder acessar tudo dentro
      
      for(let book of cate.books){ // variavel recebendo os livros que estão dentro da variavel cate
        
        if(auth.indexOf(book.author) == -1) {
          auth.push(book.author) // o push joga o author pro array
          
        }  //meu raciocinio diz que este -1 seja a posição, onde se não for achado o nome do autor, jogaria para dentro do array la em cima, o auth
      }
    }
    console.log('Total de autores ', auth.length)
  }
    contAuthors();
  
  function booksOfAuthor(author){
    let books = [];
    
    for(let cate of booksByCategory){ 
      for(let book of cate.books){ 
        if(book.author === author) { //acessando o autor dentro dos books, PRESTAR ATENÇÃO NA SEMÂNTICA PARA VER COMO ENTRAR
          books.push(book.title)
          
        }  
      }
    }
    console.log(`Livros do autor ${author}: ${books}`)
  }
  booksOfAuthor('augusto cury');
  