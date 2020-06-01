/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder, File, app */

$.__bodymovin.bm_reportsManager = (function () {
    
    var ob;
    var animationReportFactory = $.__bodymovin.bm_animationReport;
    var bm_eventDispatcher = $.__bodymovin.bm_eventDispatcher;

    function createReport(animation) {
    	var animationReport = animationReportFactory(animation);
    	return animationReport;
    }

    ob = {
        createReport: createReport,
    };
    
    return ob;
}());