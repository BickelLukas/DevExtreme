var gridCore = require("./ui.data_grid.core"),
    columnsResizingReorderingModule = require("../grid_core/ui.grid_core.columns_resizing_reordering");

exports.DraggingHeaderView = columnsResizingReorderingModule.views.draggingHeaderView;
exports.DraggingHeaderViewController = columnsResizingReorderingModule.controllers.draggingHeader;
exports.ColumnsSeparatorView = columnsResizingReorderingModule.views.columnsSeparatorView;
exports.TablePositionViewController = columnsResizingReorderingModule.controllers.tablePosition;
exports.ColumnsResizerViewController = columnsResizingReorderingModule.controllers.columnsResizer;
exports.TrackerView = columnsResizingReorderingModule.views.trackerView;

gridCore.registerModule("columnsResizingReordering", columnsResizingReorderingModule);
