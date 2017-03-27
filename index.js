/**
 * @file 缩放图标
 */

var fs = require('fs'),
    path = require('path'),
    filepath = path.resolve(__dirname, 'test.svg'),
    tofilepath = path.resolve(__dirname, 'test-o.svg'),
    SVGTranslator = require('svg-scaler/lib/SVGTranslator');

var svgTranslator = new SVGTranslator({
    width: 100,
    svgo: {
        plugins: [{
            transformsWithOnepath: true
        }]
    }
});

fs.readFile(filepath, 'utf8', function(err, filedata) {

    if (err) {
        throw err;
    }

    svgTranslator.parser(filedata)
        .then(function(result) {
            console.log('reslut', result);
            fs.writeFileSync(tofilepath, result);
        });

});
