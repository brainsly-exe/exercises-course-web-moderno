const gulp = require('gulp')
const { series, parallel } = require('gulp')

const { appHTML, appJS, appCSS, appIMG } = require('./gulpTasks/app')
const { depsCSS, depsFonts } = require('./gulpTasks/deps')
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor')

exports.default = series(
    parallel(
        series(appHTML, appJS, appCSS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor, monitorarArquivos
)