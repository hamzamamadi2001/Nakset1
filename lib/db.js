import mysql from 'mysql';    

export async function query(query,values=[] ){
 

           var connection = mysql.createConnection({
            host     : 'database-1.c4a5rsvwmxfo.eu-central-1.rds.amazonaws.com',
            user     : 'admin',
            password : '0792966687',
            database : 'test'
          });
          connection.connect();

          
          return new Promise((resolve, reject) => {
            connection.query(
             query,
              values,
              (err, result) => {
                connection.end()
                return err ? reject(err) : resolve(result);
              }
            );
          });
          
        
            
 
}