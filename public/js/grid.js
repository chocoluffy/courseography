requirejs([
    'grid/generate_grid',
    'grid/timetable_util',
    'common/utilities/trap_scroll'],
    function(
        generate_grid,
        timetable_util,
        trap_scroll
    ) {

    $(document).ready(function () {
        'use strict';

        $('#dialog').fadeOut()
                    .css('visibility', 'visible');

        generate_grid.generateGrid();
        var tdObjects = $('td');
        tdObjects.each(function () {
            $(this).data('conflicts', []);
        });

        timetable_util.restoreFromCookies();
        timetable_util.renderClearAllButton();
        timetable_util.enableSearch();
        timetable_util.getVeryLargeCourseArray();
        trap_scroll.trap_scroll();
        setTdHover();
    });
});