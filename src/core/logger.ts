/// <reference path="../../typings/index.d.ts" />

import * as Winston from 'winston';

class Logger {
    private static logger: Winston.LoggerInstance = new Winston.Logger({
        transports: [
            new Winston.transports.Console(),
            new Winston.transports.File({
                filename: "server.log"
            })
        ]
    });

    public static info(messgae: string): void {
        this.logger.info(messgae);
    }

    public static error(error: Error): void {
        this.logger.error(error.message, error);
    }
}

export {
    Logger
}