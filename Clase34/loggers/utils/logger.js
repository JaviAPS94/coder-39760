import winston from 'winston';
import * as dotenv from 'dotenv';

dotenv.config();

const ENVIRONMENT = process.env.NODE_ENV;

let logger;

if (ENVIRONMENT === 'production') {
    logger = winston.createLogger({
        transports: [
            new winston.transports.Console({
                level: 'http'
            }),
            new winston.transports.File({
                filename: 'logs/prod.log',
                level: 'warn'
            })
        ]
    });
} else {
    logger = winston.createLogger({
        transports: [
            new winston.transports.Console({
                level: 'verbose'
            })
        ]
    });
}

// const customLevelOptions = {
//     levels: {
//         // fatal: 0,
//         error: 0,
//         warning: 1,
//         info: 2,
//         debug: 3
//     },
//     colors: {
//         fatal: 'red',
//         error: 'red',
//         warning: 'yellow',
//         info: 'green',
//         debug: 'blue'
//     }
// }

// const logger = winston.createLogger({
//     transports: [
//         new winston.transports.Console({
//             level: 'info'
//         }),
//         new winston.transports.File({
//             filename: 'logs/dev.log',
//             level: 'warn'
//         })
//     ]
// });

// const logger = winston.createLogger({
//     levels: customLevelOptions.levels,
//     transports: [
//         new winston.transports.Console({
//             level: 'debug',
//             format: winston.format.combine(
//                 winston.format.colorize({
//                     all: true,
//                     colors: customLevelOptions.colors
//                 }),
//                 winston.format.simple()
//             )
//         }),
//         new winston.transports.File({
//             filename: 'logs/dev_custom.log',
//             level: 'error'
//         })
//     ]
// })

// export const addLogger = (req, res, next) => {
//     req.logger = logger;
//     //console.log
//     req.logger.info(`${req.method} en ${req.url} - ${new Date().toISOString()}`);
//     next();
// }
