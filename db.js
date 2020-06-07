//importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// utilizar o objeto de banco de dados para as nossas operações 
// db.serialize(() => {
//     //Com comandos SQL eu vou:
//     //1criar uma tabela
//     // 
//     db.run(`    
//      CREATE TABLE IF NOT EXISTS places (
//          id INTEGER PRIMARY KEY AUTOINCREMENT,
//          image TEXT,
//          name TEXT,
//          address TEXT,
//          address2 TEXT,
//          state TEXT,
//          city TEXT,
//          items TEXT
//            );       `) // Com crases eu consigo dar a quebra de linha sem bugar meu código

// //     //2 inserir dados na tabela
//         const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `
//     const values = [
//         "https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//         "Papersider",
//         "Guilherme Gemballa, Jardim América",
//         "Nº 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Resíduos Eletrônicos, Lâmpadas"
//     ]
    
//     function afterInsertData(err){ 
//         if(err){ 
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso")
//         console.log(this)

//     }
//     //  db.run(query, values, afterInsertData) // se eu criar uma função > 'nome'() se tiver parenteses significa que ela irá ser executada assim que eu botar pra rodar

//     //3 consultar os dados da tabela
    // db.all(`SELECT name FROM places`, function(err, rows){ 
    //     if(err){ 
    //         return console.log(err)
    //     }
    //     console.log("Aqui estão seus registros:")
    //     console.log(rows)  
    //   })
    
    
    // 4 Deletar um dado na tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [7], function(err){ 
    //     if(err){ 
    //         return console.log(err)
    //     }
    //     console.log("Registro deletado com sucesso!")

    // }) 
    
    
// })