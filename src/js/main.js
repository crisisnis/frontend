$(document).ready(function() {
    mmooc.routes.addRouteForPath(/\/$/, function() {
        mmooc.courseList.listCourses('content');
    });

    mmooc.routes.addRouteForPath(/\/courses\/\d$/, function() {
        // Kurs side
    });

    mmooc.routes.addRouteForQueryString(/module_item_id=/, function() {
        mmooc.moduleItems.listModuleItems('left-side');
    });

    mmooc.routes.performHandlerForUrl(document.location);
});