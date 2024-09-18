const { MongoClient } = require('mongodb');
const uri = 'mongodb://user_lectura:AllanFlorian_005@localhost:27017/tienda';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function connect() {
 try {
   await client.connect();
   console.log('Conectado a MongoDB con permisos de solo lectura');
   const db = client.db('tienda');
   const collection = db.collection('producto');
   const docs = await collection.find({}).toArray();
   console.log(docs);
 } catch (error) {
   console.error('Error al conectarse a MongoDB:', error);
 } finally {
   await client.close();
 }
}
connect();