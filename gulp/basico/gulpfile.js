const gulp = require('gulp')
const {series, parallel} = require('gulp')


function antes1(cb) {
    console.log('Antes 1 em andamento')

    return cb()
}


function antes2(cb) {
    console.log('Antes 2 em andamento')

    return cb()
}

function copiar(cb) {
    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'))

    return cb()
}


function fim(cb) {
    console.log('Fim em andamento')

    return cb()
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim,
)