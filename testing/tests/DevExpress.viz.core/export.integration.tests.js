require("viz/tree_map/tree_map");

var $ = require("jquery"),
    vizMocks = require("../../helpers/vizMocks.js"),
    rendererModule = require("viz/core/renderers/renderer"),
    clientExporter = require("exporter"),
    exportModule = require("viz/core/export");

$("#qunit-fixture").append('<div id="test-container" style="width: 200px; height: 150px;"></div>');

QUnit.module("Export", {
    beforeEach: function() {
        this.$container = $("#test-container");
        var renderer = this.renderer = new vizMocks.Renderer();
        rendererModule.Renderer = function() {
            return renderer;
        };

        var exportMenu = this.exportMenu = new vizMocks.ExportMenu();
        exportModule.ExportMenu = sinon.spy(function() { return exportMenu; });

        sinon.stub(clientExporter, "export");

        this.toDataURLStub = sinon.stub(window.HTMLCanvasElement.prototype, "toDataURL");
        this.toDataURLStub.returnsArg(0);
    },

    afterEach: function() {
        clientExporter.export.restore();
        this.toDataURLStub.restore();
    },

    createWidget: function(options) {
        return this.$container.dxTreeMap(options).dxTreeMap("instance");
    }
});

QUnit.test('Export method. Defined options', function(assert) {
    // arrange
    var exportFunc = clientExporter.export,
        exportedStub = sinon.spy(),
        exportingStub = sinon.spy(),
        fileSavingStub = sinon.spy(),
        widget = this.createWidget({
            "export": {
                backgroundColor: "#ff0000",
                proxyUrl: "testProxy",
                margin: 40
            },
            onExporting: exportingStub,
            onExported: exportedStub,
            onFileSaving: fileSavingStub
        });

    widget.$element().css("backgroundСolor", "#ff0000");

    // act
    widget.exportTo("testName", "jpeg");

    var firstExportCall = exportFunc.getCall(0);
    firstExportCall.args[1].exportingAction();
    firstExportCall.args[1].exportedAction();
    firstExportCall.args[1].fileSavingAction();

    // assert
    assert.ok(exportFunc.callCount, 1, "export was called one time");
    assert.equal(firstExportCall.args[0], this.renderer.root.element, "export data");

    assert.equal(firstExportCall.args[1].width, 200, "width");
    assert.equal(firstExportCall.args[1].height, 150, "height");
    assert.equal(firstExportCall.args[1].backgroundColor, "#ff0000", "backgroundColor");
    assert.equal(firstExportCall.args[1].fileName, "testName", "fileName");
    assert.equal(firstExportCall.args[1].format, "JPEG", "format");
    assert.equal(firstExportCall.args[1].proxyUrl, "testProxy", "proxyUrl");
    assert.equal(firstExportCall.args[1].margin, 40, "margin");

    assert.equal(exportingStub.callCount, 1, "exporting event");
    assert.equal(exportedStub.callCount, 1, "exported event");
    assert.equal(fileSavingStub.callCount, 1, "file saving event");
});

QUnit.test('Export method. PNG format', function(assert) {
    // arrange
    var exportFunc = clientExporter.export,
        exportedStub = sinon.spy(),
        exportingStub = sinon.spy(),
        fileSavingStub = sinon.spy(),
        widget = this.createWidget({
            "export": {
                proxyUrl: "testProxy"
            },
            onExporting: exportingStub,
            onExported: exportedStub,
            onFileSaving: fileSavingStub
        });

    widget.$element().css("backgroundСolor", "#ff0000");

    // act
    widget.exportTo("testName", "png");

    // assert
    var firstExportCall = exportFunc.getCall(0);
    assert.ok(exportFunc.callCount, 1, "export was called one time");
    assert.equal(firstExportCall.args[1].format, "PNG", "format");
});

QUnit.test('Export method. JPEG format', function(assert) {
    // arrange
    var exportFunc = clientExporter.export,
        exportedStub = sinon.spy(),
        exportingStub = sinon.spy(),
        fileSavingStub = sinon.spy(),
        widget = this.createWidget({
            "export": {
                proxyUrl: "testProxy"
            },
            onExporting: exportingStub,
            onExported: exportedStub,
            onFileSaving: fileSavingStub
        });

    widget.$element().css("backgroundСolor", "#ff0000");

    // act
    widget.exportTo("testName", "jpeg");

    // assert
    var firstExportCall = exportFunc.getCall(0);
    assert.ok(exportFunc.callCount, 1, "export was called one time");
    assert.equal(firstExportCall.args[1].format, "JPEG", "format");
});

QUnit.test('Export method. GIF format', function(assert) {
    // arrange
    var exportFunc = clientExporter.export,
        exportedStub = sinon.spy(),
        exportingStub = sinon.spy(),
        fileSavingStub = sinon.spy(),
        widget = this.createWidget({
            "export": {
                proxyUrl: "testProxy"
            },
            onExporting: exportingStub,
            onExported: exportedStub,
            onFileSaving: fileSavingStub
        });

    widget.$element().css("backgroundСolor", "#ff0000");

    // act
    widget.exportTo("testName", "gif");

    // assert
    var firstExportCall = exportFunc.getCall(0);
    assert.ok(exportFunc.callCount, 1, "export was called one time");
    assert.equal(firstExportCall.args[1].format, "GIF", "format");
});

QUnit.test('Export method. SVG format', function(assert) {
    // arrange
    var exportFunc = clientExporter.export,
        exportedStub = sinon.spy(),
        exportingStub = sinon.spy(),
        fileSavingStub = sinon.spy(),
        widget = this.createWidget({
            "export": {
                proxyUrl: "testProxy"
            },
            onExporting: exportingStub,
            onExported: exportedStub,
            onFileSaving: fileSavingStub
        });

    widget.$element().css("backgroundСolor", "#ff0000");

    // act
    widget.exportTo("testName", "svg");

    // assert
    var firstExportCall = exportFunc.getCall(0);
    assert.ok(exportFunc.callCount, 1, "export was called one time");
    assert.equal(firstExportCall.args[1].format, "SVG", "format");
});

QUnit.test('Export method. PDF format', function(assert) {
    // arrange
    var exportFunc = clientExporter.export,
        exportedStub = sinon.spy(),
        exportingStub = sinon.spy(),
        fileSavingStub = sinon.spy(),
        widget = this.createWidget({
            "export": {
                proxyUrl: "testProxy"
            },
            onExporting: exportingStub,
            onExported: exportedStub,
            onFileSaving: fileSavingStub
        });

    widget.$element().css("backgroundСolor", "#ff0000");

    // act
    widget.exportTo("testName", "pdf");

    // assert
    var firstExportCall = exportFunc.getCall(0);
    assert.ok(exportFunc.callCount, 1, "export was called one time");
    assert.equal(firstExportCall.args[1].format, "PDF", "format");
});

QUnit.test('Export method. invalid format', function(assert) {
    // arrange
    var incidentOccurred = sinon.spy(),
        exportFunc = clientExporter.export,
        exportedStub = sinon.spy(),
        exportingStub = sinon.spy(),
        fileSavingStub = sinon.spy(),
        widget = this.createWidget({
            "export": {
                proxyUrl: "testProxy"
            },
            onExporting: exportingStub,
            onExported: exportedStub,
            onFileSaving: fileSavingStub,
            onIncidentOccurred: incidentOccurred
        });

    widget.$element().css("backgroundСolor", "#ff0000");

    // act
    widget.exportTo("testName", "abc");

    // assert
    var firstExportCall = exportFunc.getCall(0);
    assert.ok(exportFunc.callCount, 1, "export was called one time");
    assert.equal(firstExportCall.args[1].format, "PNG", "format");
    assert.equal(incidentOccurred.callCount, 0);
});

QUnit.test('Export method. unsopported image format', function(assert) {
    // arrange
    this.toDataURLStub.withArgs("image/jpeg").returns("image/png");

    var incidentOccurred = sinon.spy(),
        exportFunc = clientExporter.export,
        exportedStub = sinon.spy(),
        exportingStub = sinon.spy(),
        fileSavingStub = sinon.spy(),
        widget = this.createWidget({
            "export": {
                proxyUrl: "testProxy"
            },
            onExporting: exportingStub,
            onExported: exportedStub,
            onFileSaving: fileSavingStub,
            onIncidentOccurred: incidentOccurred
        });

    widget.$element().css("backgroundСolor", "#ff0000");

    // act
    widget.exportTo("testName", "jpeg");

    // assert
    var firstExportCall = exportFunc.getCall(0);
    assert.ok(exportFunc.callCount, 1, "export was called one time");
    assert.equal(firstExportCall.args[1].format, "PNG", "format");
    assert.equal(incidentOccurred.callCount, 1);
    assert.deepEqual(incidentOccurred.getCall(0).args[0].target.id, "W2108");
    assert.deepEqual(incidentOccurred.getCall(0).args[0].target.args, ["JPEG"]);
});

QUnit.test('Export method. Undefined options', function(assert) {
    // arrange
    var exportFunc = clientExporter.export,
        widget = this.createWidget();

    widget.$element().css("backgroundСolor", "rgba(0, 0, 0, 0)");

    // act
    widget.exportTo();

    // assert
    var firstExportCall = exportFunc.getCall(0);
    assert.equal(firstExportCall.args[1].backgroundColor, "#ffffff", "backgroundColor");
    assert.equal(firstExportCall.args[1].fileName, "file", "fileName");
    assert.equal(firstExportCall.args[1].format, "PNG", "format");
    assert.equal(firstExportCall.args[1].proxyUrl, undefined, "proxyUrl");
});

QUnit.test('Export menu creation', function(assert) {
    // arrange, act
    var incidentOccurred = sinon.spy();
    var widget = this.createWidget({
        onIncidentOccurred: incidentOccurred,
        rtlEnabled: "rtl option"
    });
    widget.exportTo = sinon.spy();
    widget.print = sinon.spy();


    // assert
    assert.equal(exportModule.ExportMenu.lastCall.args[0].renderer, this.renderer);
    assert.ok(typeof exportModule.ExportMenu.lastCall.args[0].incidentOccurred === "function");
    assert.strictEqual(this.exportMenu.setOptions.getCall(0).args[0].rtl, "rtl option");
    assert.ok(typeof exportModule.ExportMenu.lastCall.args[0].exportTo === "function");
    assert.ok(typeof exportModule.ExportMenu.lastCall.args[0].print === "function");

    exportModule.ExportMenu.lastCall.args[0].exportTo("FORMAT");
    assert.deepEqual(widget.exportTo.getCall(0).args, [undefined, "FORMAT"]);

    exportModule.ExportMenu.lastCall.args[0].print();
    assert.equal(widget.print.callCount, 1);
});

QUnit.test("Export menu disposing", function(assert) {
    // arrange
    this.createWidget();

    // act
    this.$container.remove();

    // assert
    assert.equal(this.exportMenu.dispose.callCount, 1, "disposing of export menu is called");
});

QUnit.test("Depends on theme", function(assert) {
    var widget = this.createWidget();
    this.exportMenu.setOptions.reset();

    widget.option("theme", "test-theme");

    assert.strictEqual(this.exportMenu.setOptions.callCount, 1);
});

QUnit.test('Print method', function(assert) {
    // arrange
    var docSpy = {
            open: sinon.spy(),
            write: sinon.spy(),
            close: sinon.spy()
        },
        printSpy = sinon.stub(),
        closeSpy = sinon.stub();

    sinon.stub(window, "open", function() {
        return {
            document: docSpy,
            print: printSpy,
            close: closeSpy
        };
    });

    var done = assert.async();
    var exportFunc = clientExporter.export,
        exportedStub = sinon.spy(),
        exportingStub = sinon.spy(),
        fileSavingStub = sinon.spy(),
        widget = this.createWidget({
            "export": {
                backgroundColor: "#ff0000",
                proxyUrl: "testProxy",
                format: "JPEG",
                forceProxy: false,
                margin: 40
            },
            onExporting: exportingStub,
            onExported: exportedStub,
            onFileSaving: fileSavingStub
        });

    // act
    widget.print().done(checkPrinting);

    var that = this;
    var firstExportCall = exportFunc.getCall(0);
    var fileSavingEventArgs = { data: "imageData" };
    firstExportCall.args[1].fileSavingAction(fileSavingEventArgs);

    function checkPrinting() {
        assert.ok(fileSavingEventArgs.cancel, "file should not be saved");

        assert.ok(exportFunc.callCount, 1, "export was called one time");
        assert.equal(firstExportCall.args[0], that.renderer.root.element, "export data");

        assert.equal(firstExportCall.args[1].width, 200, "width");
        assert.equal(firstExportCall.args[1].height, 150, "height");
        assert.equal(firstExportCall.args[1].backgroundColor, "#ff0000", "backgroundColor");
        assert.equal(firstExportCall.args[1].fileName, "file", "fileName");
        assert.equal(firstExportCall.args[1].format, "PNG", "format");
        assert.equal(firstExportCall.args[1].proxyUrl, "testProxy", "proxyUrl");
        assert.equal(firstExportCall.args[1].margin, 0, "margin");
        assert.equal(firstExportCall.args[1].forceProxy, true, "image data should be base64");
        assert.ok(firstExportCall.args[1].fileSavingAction);
        assert.equal(firstExportCall.args[1].exportingAction, null);
        assert.equal(firstExportCall.args[1].exportedAction, null);

        assert.equal(exportingStub.callCount, 0, "exporting event");
        assert.equal(exportedStub.callCount, 0, "exported event");
        assert.equal(fileSavingStub.callCount, 0, "file saving event");

        assert.equal(docSpy.open.callCount, 1, "open doc");
        assert.equal(docSpy.write.callCount, 1, "write doc");
        assert.equal(docSpy.write.getCall(0).args[0], '<img src="data:image/png;base64,imageData"></img>', "write doc args");
        assert.equal(printSpy.callCount, 1, "print doc");
        assert.equal(closeSpy.callCount, 1, "close doc");

        window.open.restore();
        done();
    }
});

QUnit.test("Export with right size after resize", function(assert) {
    var exportFunc = clientExporter.export;
    var widget = this.createWidget();

    widget.option({
        size: {
            width: 100,
            height: 200
        }
    });
    widget.exportTo("testName", "jpeg");

    // assert
    assert.equal(exportFunc.getCall(0).args[1].width, 100, "width");
    assert.equal(exportFunc.getCall(0).args[1].height, 200, "height");
});

QUnit.test("Hide export menu before exporting and show after", function(assert) {
    var exportFunc = clientExporter.export;
    var widget = this.createWidget();

    widget.option({
        size: {
            width: 100,
            height: 200
        }
    });
    widget.exportTo("testName", "jpeg");

    // assert
    assert.equal(this.exportMenu.hide.callCount, 1);
    assert.equal(this.exportMenu.show.callCount, 1);

    assert.ok(this.exportMenu.hide.getCall(0).calledBefore(exportFunc.getCall(0)));
    assert.ok(this.exportMenu.show.getCall(0).calledAfter(exportFunc.getCall(0)));
});
QUnit.test("Hide export menu before printing and show after", function(assert) {
    var exportFunc = clientExporter.export;
    var widget = this.createWidget();

    widget.option({
        size: {
            width: 100,
            height: 200
        }
    });
    widget.print();

    // assert
    assert.equal(this.exportMenu.hide.callCount, 1);
    assert.equal(this.exportMenu.show.callCount, 1);

    assert.ok(this.exportMenu.hide.getCall(0).calledBefore(exportFunc.getCall(0)));
    assert.ok(this.exportMenu.show.getCall(0).calledAfter(exportFunc.getCall(0)));
});
