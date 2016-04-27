var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var spritesmith = require('gulp.spritesmith');


gulp.task('sass', function () {
    return gulp.src('scss/**/*.scss')
               .pipe(sass().on('error', sass.logError))
               .pipe(autoprefixer({
                  browsers: ['last 7 versions'],
                  cascade: false
                }))
               .pipe(gulp.dest('css'));
});

gulp.task('minify-css', function(){
    return gulp.src('css/**/*.css')
               .pipe(concat('styles-min.css'))
               .pipe(cleanCSS())
               .pipe(gulp.dest('built'));
});

gulp.task('minify-js', function(){
    return gulp.src('js/*.js')
               .pipe(concat('scripts-min.js'))
               .pipe(uglify())
               .pipe(gulp.dest('built'));
});

gulp.task('minify-img', function(){
    return gulp.src('raw-images/*')
      .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
      }))
      .pipe(gulp.dest('img'));
});
 
gulp.task('sprite', function () {
    var spriteData = gulp.src('raw-sprite/*.png').pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: '../sprite.css'
    }));
    return spriteData.pipe(gulp.dest('raw-images'));
});

gulp.task('default', function(){
    gulp.run('minify-css', 'minify-js');
});

gulp.task('watch', function(){
    gulp.watch('scss/*', ['sass']);
    gulp.watch('raw-images/*', ['minify-img']);
    gulp.watch('raw-sprite/*', ['sprite']);
});