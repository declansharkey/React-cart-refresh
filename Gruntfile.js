module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
        options: { sourcemap: 'none' },
				files: {
					'src/style.css' : 'src/cart.scss'
				}
			}
		},
		postcss: {
			options: {
					map: true, // inline sourcemaps

					processors: [
						require('autoprefixer')({ browsers: 'last 2 versions', grid: 'true' }), // add vendor prefixes
					]
			},
			dist: {
					files: [
						{
							src: 'Content/css/cart.css'
						}
					]
			}
	},
		watch: {
			css: {
				files: 'src/*.scss',
				tasks: ['sass']
      }
		}
	});
  grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.registerTask('default',['watch', "postcss"]);
}