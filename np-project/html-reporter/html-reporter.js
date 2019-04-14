var HtmlReporter = require('nightwatch-html-reporter');

var reporter = new HtmlReporter({
    /* True or False.  If true the generated html will be opened in your browser after the test run. */
    openBrowser: true,

    /* The directory you've set nightwatch to store your reports.*/
    reportsDirectory: './reports',

    /* The filename that the html report will be saved as. */
    reportFilename: 'generatedReport.html',

    /* Boolean.  If true we ensure the generated report filename is unique by appending a timestamp to the end. */
    uniqueFilename: true,

    /* Boolean.  If true we append the last suite name to the report filename. */
    separateReportPerSuite: false,

    /* The theme that will be used to generate the html report. This should match a directory under the lib/themes directory. */
    themeName: 'default',

    /* Relative path to custom theme. When this is given, `themeName` will be ignored. */
    /* customTheme: 'relative/path/to/theme.pug', */

    /* If true then only errors will be shown in the report. */
    hideSuccess: false,

    /* If true we convert screenshot paths from absolute paths to relative to output file. */
    relativeScreenshots: false
});

module.exports = {
    write: function (results, options, done) {
        reporter.fn(results, done);
    }
};