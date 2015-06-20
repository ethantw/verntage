require! {
  \./package.json : pkg
  \vinyl-transform
  \vinyl-source-stream : source
  browserify
  babelify
  gulp
  \gulp-babel : babel
  \gulp-uglify
  \gulp-watch
  \gulp-live-server
  \gulp-concat-util : concat
  \gulp-stylus
  \gulp-cssmin
  \gulp-gh-pages
}

const demo = \./demo/
const charset = '@charset "UTF-8";\n'
const han-version = pkg.dependencies.['han-css'].replace( /^[\^\~]/, '' )

src = gulp.src
dest = gulp.dest

gulp.task \deploy <[ min ]> ->
  src "#{demo}**/*"
    .pipe gulp-gh-pages!

gulp.task \server !->
  server = gulp-live-server.static demo, 3000
  server.start!

