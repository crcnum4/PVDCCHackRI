$(document).ready(function() {
    $('.readMore').click(function() {
        var $this = $(this);
        var $collapse = $this.closest('.collapse-group').find('.collapse');
        $collapse.collapse('toggle');
        $this.toggleClass('hidden');
        var $readLess = $this.closest('.collapse-group').find('.readLess');
        $readLess.toggleClass('hidden');
    })
    
    $('.readLess').click(function() {
        var $this = $(this);
        var $collapse = $this.closest('.collapse-group').find('.collapse');
        var $readMore = $this.closest('.collapse-group').find('.readMore');
        $collapse.collapse('toggle');
        $this.toggleClass('hidden');
        $readMore.toggleClass('hidden');
    })
})