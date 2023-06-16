import { Command } from 'commander';

const program = new Command();

program.option('-d', 'variable para debug', false)
    .option('-p <port>', 'puerto del servidor', 8080)
    .option('--mode <mode>', 'modo de trabajo', 'production')
    .requiredOption('-u <user>', 'usuario del sistema')

program.parse();

console.log('Options: ', program.opts());
console.log('Arguments: ', program.args);

app.listen(program.opts().p)