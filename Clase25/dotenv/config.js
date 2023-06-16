import dotenv from 'dotenv';
import { Command } from 'commander';

const program = new Command();

program.option('--mode <modo>', 'variable de ambiente');
program.parse();

dotenv.config({
    path: program.opts().mode === 'DEVELOPMENT' ?
        './.env.development' : './.env.production'
});

export default {
    port: process.env.PORT,
    mongoUrl: process.env.MONGO_URL
}