const http = require ('node:http');
const PORTA = 3000;
const server = http.createServer((req, res) => {
  console.log(`Requisição recebida! ${req.method} ${req.url}`);
  
  res.statusCode = 201;
  res.setHeader ('Content-Type', 'application/json; charset=utf-8');

 (JSON.stringify({ status: "ok" }));
});
 server.listen(PORTA, () => {
  console.log(new Date().toISOString());
  console.log(`Servidor funcionando na porta ${PORTA}`);
 });

 // O código não exibiria a mensagem sem o res.end 