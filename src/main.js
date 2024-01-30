document.getElementById('introTab').addEventListener('click', function() {
    hideAllSections();
    document.getElementById('introSection').classList.remove('shows__story-episode--hidden');
});

document.getElementById('episodeTab').addEventListener('click', function() {
    hideAllSections();
    document.getElementById('episodeSection').classList.remove('shows__story-episode--hidden');
});

document.getElementById('nhkTab').addEventListener('click', function() {
    hideAllSections();
    document.getElementById('nhkSection').classList.remove('shows__story-nhk--hidden');
});

function hideAllSections() {
    document.getElementById('introSection').classList.add('shows__story-episode--hidden');
    document.getElementById('episodeSection').classList.add('shows__story-episode--hidden');
    document.getElementById('nhkSection').classList.add('shows__story-nhk--hidden');
}


document.addEventListener('DOMContentLoaded', function() {
    var introTab = document.getElementById('introTab');
    var episodeTab = document.getElementById('episodeTab');
    var nhkTab = document.getElementById('nhkTab');

    introTab.addEventListener('click', function() {
        removeActiveClass();
        this.classList.add('shows__tabmenu__list--is-active');
    });

    episodeTab.addEventListener('click', function() {
        removeActiveClass();
        this.classList.add('shows__tabmenu__list--is-active');
    });

    nhkTab.addEventListener('click', function() {
        removeActiveClass();
        this.classList.add('shows__tabmenu__list--is-active');
    });

    function removeActiveClass() {
        var tabs = document.querySelectorAll('.shows__tabmenu__list--is-active');
        tabs.forEach(function(tab) {
            tab.classList.remove('shows__tabmenu__list--is-active');
        });
    }
});