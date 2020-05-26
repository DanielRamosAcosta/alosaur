import { Middleware } from '../../../src/decorator/Middleware.ts';
import { MiddlewareTarget } from '../../../src/models/middleware-target.ts';
import { Context } from '../../../src/models/context.ts';

@Middleware(new RegExp('/'))
export class Log implements MiddlewareTarget {
    date: Date = new Date();

    onPreRequest(context: Context) {
        return new Promise((resolve, reject) => {
            this.date = new Date();
            resolve();
        });
    }

    onPostRequest(context: Context) {
        return new Promise((resolve, reject) => {
            console.log(new Date().getTime() - this.date.getTime());
            resolve();
        });
    }
}
