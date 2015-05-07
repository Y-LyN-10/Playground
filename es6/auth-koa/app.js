'use strict';

import koa from 'koa'
import templates from 'lib/template-helper'
import fileService from 'koa-static'
import mount from 'koa-mount'
// TODO: import some session store
import Grant from 'grant-koa'

// https://github.com/simov/grant
let grant = new Grant({/*some configuration*/});

const app = koa();

export default app

app.keys = ['keys'];
//app.use - session

app.use(mount(grant));

// logging
app.use(function*(next) {
    try {
        yield next
    } finally {
        console.log('%s %s %s %s',
            new Date().toISOString(),
            this.request.method,
            this.request.url,
            this.response.status
        )
    }
});

// add status (hackish)
app.use(function*(next) {
    try {
        yield next
    } catch (ex) {
        this.response.status = ex.status || 500;
        throw ex
    }
});

// serve out of static dir
app.use(fileService(__dirname + '/client', {}));

// send page
app.use(function*() {
    this.body = templates('/index.html', {})
});