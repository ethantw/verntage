
require! {
  fs
  \./package.json : pkg
  \vinyl-transform
  \vinyl-source-stream : source
  browserify
  babelify
  cheerio
  gulp
  \gulp-babel : babel
  \gulp-uglify
  \gulp-watch
  \gulp-live-server
  \gulp-concat-util : concat
  \gulp-jade
  \gulp-stylus
  \gulp-cssmin
  \gulp-remarkable
  \gulp-gh-pages
}

const demo = \./demo/
const charset = '@charset "UTF-8";\n'
const han-version = pkg.dependencies.['han-css'].replace( /^[\^\~]/, '' )

try
  template = fs.readFileSync \./md/template.html, encoding: \utf-8 .split '{{content}}'
catch e
  template = new Array( 2 )

src = gulp.src
dest = gulp.dest

gulp.task \deploy <[ min ]> ->
  src "#{demo}**/*"
    .pipe gulp-gh-pages!

gulp.task \server !->
  server = gulp-live-server.static demo, 3000
  server.start!

gulp.task \dev <[ watch server ]>
gulp.task \www <[ jade md build ]>
gulp.task \build <[ styl ]>

gulp.task \styl ->
  src \./src/styl/index.styl
    .pipe gulp-stylus!
    .pipe concat \verntage.css
    .pipe dest demo

gulp.task \jade ->
  src \./md/**/*.jade
    .pipe gulp-jade!
    .pipe dest \./md

gulp.task \md ->
  fs.readdirSync( \./md/ )
  .filter ( fn ) -> /\.md$/i.test fn
  .forEach ( fn ) ->
    html = fn.replace( /\.md$/i, \.html )
    src "./md/**/#{fn}"
      .pipe gulp-remarkable preset: \commonmark
      .pipe concat.header template.0
      .pipe concat.footer template.1
      .pipe concat html, {
        process: ( src ) ->
          $ = cheerio.load src
          title = $( 'h1:first-of-type' ).text()
          src.replace /\{\{title\}\}/gi, title
      }
      .pipe dest demo

gulp.task \watch <[ www ]> ->
  gulp.watch \./src/styl/**/*.styl <[ styl ]>
  gulp.watch \./md/**/*.jade <[ jade ]>
  gulp.watch \./md/**/*.md <[ md ]>

