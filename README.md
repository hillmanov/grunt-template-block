# grunt-template-block

> AngularJS templates - develop them as if they will be brought in through AJAX, but have them copy-pasted into script tags automatic

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-template-block --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-template-block');
```

## The "template_block" task

### Overview
In your project's Gruntfile, add a section named `template_block` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  template_block: {
    your_target: {
      src: 'index.tmp.html',
      dest: 'index.html',
      templatesDir: 'templates'
    }
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
