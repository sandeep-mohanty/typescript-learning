// Bring in the required dependencies

var fs = require("fs"); // File system module
var gulp = require("gulp"); // Gulp module
var tsc = require("gulp-typescript"); // Gulp plug-in for Typescript transpiler
var del = require("del"); // Delete module
var merge = require("merge2"); // Merge module (note: 'merge2' module which supports multiple streams)
var sourcemaps = require("gulp-sourcemaps"); // Gulp plug-in to generate source maps
var exec = require("child_process").exec; // Need a child process executor to run a command
var clear = require("clear"); // Console clear module

// Cleaning task
gulp.task("clean",function(){
	del(["./dest/*"], function(){
		console.log("Clean task complete !");
	});
});

// Compiling Typescript files task using 'typescript'
gulp.task("tscompile", function(){

	var options = JSON.parse(fs.readFileSync("./tsconfig.json"));
	//console.log(options);
	var compileResults = gulp.src("src/*.ts").pipe(tsc(options));
	console.log("\nCompilation task complete !");
	return merge(
		compileResults.dts.pipe(gulp.dest("dest/definitions")),
		compileResults.js.pipe(sourcemaps.init())
			.pipe(sourcemaps.write("../sourcemaps"))
			.pipe(gulp.dest("dest/js"))
		);
});

// Compiling Typescript files task using 'ntypescript'
gulp.task("ntscompile", function(){

	exec("ntsc", function(err){
		console.log("NTSC command executed");
		if (err) {
			console.log("Error: " + err);
		} else {
			console.log("No errors. Everything OK!")
		}
	});

});

// Running compiled code
gulp.task("run", function(){
	
	// Run only if the compiled output is available
	fs.exists("dest/greeter.js", function(exists) {

		if (exists) {

			exec("node dest/greeter.js", function(err,output){

				clear();
				if (err) {
					console.log(err);
				} else {
					console.log("Program ran successfully!");
					console.log("Here's the output: \n");
					console.log(output);
				}
			});			
		}

	});

});

// Watch source folders for change in source code
gulp.task("watch", function(){
	gulp.watch(["src/*.ts"], ["clean","ntscompile"]);
	gulp.watch(["dest/*.js"], ["run"]);
	console.log("\nI'm watching the source folder now for code changes !");
});

// Default task to start off Gulp execution
gulp.task("default", ["clean","ntscompile","watch"], function(){
	console.log("\nDefault task execution complete !");
});
