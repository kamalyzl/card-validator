const gulp = require('gulp');
const babel = require('gulp-babel');
// task define una tarea
// gulp.task() src define un directorio en el que gulpva a trabajar
// gulp.dest() define un directorio donde gulp deja los archivos procesados
// gulp.watch() observa cambio
gulp.task('es6', ()=>{
  gulp.src('src/*.js')
    .pipe(babel()) // pasa datos
    .pipe(gulp.dest('public/js/'));
});

gulp.task('deafult', ()=>{
  gulp.watch('src/*.js', ['es6']);
});


