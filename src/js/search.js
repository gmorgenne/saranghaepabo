$(function () {
	var $body = $('body');
	$('.search-bar__form').on('submit', function(e) {
		e.preventDefault();
		var query = $('.search').find('.search-bar input').val();
		queryForResults(query);
	});
	
	$body.on('click', '.search-tab', function() {
		var $self = $(this);
		var $tabs = $('.search-tabs').find('.search-tab');
		resetActiveTabs($self, $tabs);
	});
	
	$body.on('click', '.search-result-item__description-more', function() {
		console.log("show more");
	});
	
	$body.on('click', '.search-bar__breadcrumb', function() {
		var $self = $(this);
		var facet = $self.data('facet');
		var value = $self.data('value');
		removeBreadcrumb($self);
		removeSelectedFacet(facet, value);
	});
	
	$body.on('click', '.search-facet-value', function() {
		var $self = $(this);
		var facet = $self.data('facet');
		var value = $self.data('facet-value');		
		if ($self.hasClass('active')) {
			$self.removeClass('active');
			findBreadcrumb(facet, value);
			addAdditionalResults($self);
		}
		else {
			$self.addClass('active');
			addSelectedFacet(facet, value);
			removeAdditionalResults($self);
		}
	});

	$body.on('click', '.pager-btn', function(e) {
		e.preventDefault();
		var $self = $(this);
		var page = $self.data('page');
		console.log("change page to " + page);
	});
});

function queryForResults(query) {
	console.log("search for: " + query);
}

function updateResults() {
	console.log("updating results...");
	
}

function updateResultSummary(query, totalResults) {
	console.log("update results summary");
	var $summary = $('.search-results-summary__title');
	$summary.empty().append(totalResults + ' RESULTS FOR "' + query + '"');
	return false;
}

function addSelectedFacet(facet, value) {
	console.log("adding facet..." + facet + " value: " + value);
	addBreadcrumb(facet, value);
	updateResults();
}

function removeSelectedFacet(facet, value) {
	console.log("removing selected facet: " + facet + " value= " + value);
	var $facets = $('.search-facet');
	
	$facets.each(function () {
		var currentFacet = $(this).data('facet');
		if (facet === currentFacet) {
			console.log('go through facet: ' + currentFacet + ' for value: ' + value);
			var $values = $('.search-facet-value');
			$values.each(function () {
				var $value = $(this)
				var currentValue = $value.data('facet-value');
				if (value === currentValue) {
					console.log(currentValue + " == " + value);
					$value.removeClass('active');
					addAdditionalResults($(this));
					return false;
				}
			});
		}
	});
}

function addBreadcrumb (facet, value) {
	console.log("adding breadcrumb...");
	var $breadcrumbs = $('.search-bar__breadcrumbs');
	var $lastBreadcrumb = $breadcrumbs.find('.search-bar__breadcrumb').last();
	if ($lastBreadcrumb.is(':visible')) {
		var $newBreadcrumb = $lastBreadcrumb.clone().appendTo($breadcrumbs);
		$newBreadcrumb.attr('data-facet', facet);
		$newBreadcrumb.attr('data-value', value);
		$newBreadcrumb.empty().append(facet + ": " + value + '<span class="btn btn-close">X</span>').show();
	} else {
		$lastBreadcrumb.attr('data-facet', facet);
		$lastBreadcrumb.attr('data-value', value);
		$lastBreadcrumb.empty().append(facet + ": " + value + '<span class="btn btn-close">X</span>').show();
	}
}

function removeBreadcrumb ($breadcrumb) {
	var $breadcrumbs = $('.search-bar__breadcrumb');
	console.log("removing breadcrumbs... Current # breadcrumbs: " + $breadcrumbs.length);
	if ($breadcrumbs.length > 1) {
		$breadcrumb.remove();
	} else {
		$breadcrumb.hide();
	}
}

function findBreadcrumb (facet, value) {
	console.log("removing breadcrumbs for facet: (" + facet + ", " + value + ")");
	var $breadcrumbs = $('.search-bar__breadcrumb');
	$breadcrumbs.each(function () {
		var $breadcrumb = $(this);
		var breadcrumbFacetValue = $breadcrumb.data('facet');
		var breadcrumbValue = $breadcrumb.data('value');
		console.log("compare facet: (" + facet + ", " + value + ") to breadcrumb facet: (" + breadcrumbFacetValue + ", " + breadcrumbValue + ")");
		if (facet === breadcrumbFacetValue && value === breadcrumbValue) {
			removeBreadcrumb($breadcrumb);
			return false;
		}
	});
}

function resetActiveTabs ($active, $tabs) {
	$tabs.each(function () {
		var $this = $(this);
		if ($this.hasClass('active')) {
			$this.removeClass('active');
		}
	});
	$active.addClass('active');
	updateResults();
}

function addAdditionalResults ($facet) {
	console.log('add additional results');
	updateAdditionalResults();
}

function removeAdditionalResults ($facet) {
	var $additionalResults = $facet.find('.facet-additional-results');
	if ($additionalResults.is(':visible')) {
		$additionalResults.empty();
		updateAdditionalResults();
	}
}

function updateAdditionalResults () {
	console.log('reset all additional result numbers');
	var $facets = $('.search-facet-value');
	$facets.each(function () {
		var $this = $(this);
		if (!$this.hasClass('active')) {
			var facet = $this.data('facet');
			var value = $this.data('facet-value');
			var newResults = findNumberResults(facet, value);
			var additionalResults = $this.find('.facet-additional-results');
			additionalResults.empty().append(newResults);
		}
	});
}

function findNumberResults (facet, value) {
	console.log("find number of results for: " + facet + " = " + value);
	return "(+22)";
}