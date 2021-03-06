const express = require("express") //utilizando do express em forma de variável e tornando ele uma variável
const server = express() // criando outra variavel, agora para executar o express.
//Pegar o banco de dados
const db = require("./database/db")

//Configurar pastar public
server.use(express.static("public"))

//habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({extended:true}))


//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//Com essa configuração o servidor está conseguindo ligar
// O que eu preciso fazer agora: Configurar caminhos da minha aplicação.
// Página inicial 
// req: requisição
// res: resposta
server.get("/", (req, res) =>{
    return res.render("index.html", {title:"Um título"})
})
server.get("/create-point", (req, res) =>{
    // req.query: Query Strings da nossa url
    //  console.log(req.query)
    return res.render("create-point.html")
   })
server.post("/savepoint", (req, res)=>{ 
    //req.body: o corpo do nosso formulario 
    // console.log(req.body)
    // como agora o req.body está funcionando e está escondendo mais as informações no brownser, podemos inserir dados agora.
// //     //inserindo dados na tabela
        const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [
       req.body.image,
       req.body.name,
       req.body.address,
       req.body.address2,
       req.body.state,
       req.body.city,
       req.body.items

    ]
    
    function afterInsertData(err){ 
        if(err){ 
           console.log(err)
           return res.send("Erro no cadastro!")
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
            
       return res.render("create-point.html", { saved:true})
    }
     db.run(query, values, afterInsertData)




})   






server.get("/search", (req, res) =>{
    const search = req.query.search
    if(search == ""){ 
        //Pesquisa vazia
        return res.render("search-results.html", {total: 0})
    }



  //pegar os dados do banco de dados
  
  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){ 
        if(err){ 
            return console.log(err)
        }
        const total = rows.length
       //Mostrar a página html com os dados do banco de dados
        return res.render("search-results.html", { places: rows, total: total})
   })
      })
     
       

    


//Ligar o servidor
server.listen(3000)