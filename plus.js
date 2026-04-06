table.column(1).nodes().to$().css({cursor: 'pointer'});
var format = function(d) {
	return '<div style=\"padding: .5em;\">' + d[1] + 
           '</div>';
};
table.on('click', 'td.details-control', function() {
	var td = $(this), row = table.row(td.closest('tr'));
    if (row.child.isShown()) {
		row.child.hide();
		td.html('&oplus;');
    } else {
		row.child(format(row.data())).show();
		td.html('&CircleMinus;');
    }
});
