var Elixir 		= require('laravel-elixir');
var config 		= Elixir.config;
var browserify 	= require('browserify');
var gulp 		= require('gulp');
var source     	= require('vinyl-source-stream');
var path 		= require('path');

/*
 * This task run the given coffee files through browserify 
 * using the coffeeify transformation
 */
Elixir.extend('coffeeify', function(src, output, options){

	new Elixir.Task('coffeeify', function(){source
		var paths = prepGulpPaths(src, output);

		var files = paths.src.path;

		// To handle array of files
		if(files.constructor !== Array) {
			files = [files];
		}

		function make(file){
				var outputFile = path.basename(file).replace('.coffee','.js');
				return browserify(file, {
					extensions : ['.coffee']
				})
				.transform('coffeeify')
				.bundle()
				.on('error', function(e) {
					new Elixir.Notification().error(e, 'CoffeeScript Compilation Failed!');
					this.emit('end');
				})
				.pipe(source(outputFile))
				.pipe(gulp.dest(config.get('public.js.outputFolder')))
				.pipe(new Elixir.Notification('CoffeeScript Compiled!'))
		}

		return files.map(make);
	})

	// Watch out!
	.watch(config.get('assets.js.folder') + '/**/*.coffee');

});


/**
 * Prep the Gulp src and output paths.
 *
 * @param  {string|array} src
 * @param  {string|null}  output
 * @return {object}
 */
var prepGulpPaths = function(src, output) {
	return new Elixir.GulpPaths()
		.src(src, config.get('assets.js.folder'))
		.output(output || config.get('public.js.outputFolder'), 'app.js');
};