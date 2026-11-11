// Shared by every slideNN.html.
// Embedded Google Drive players cannot be printed, so each one gets a static stand-in
// (thumbnail + play badge) that slide-common.css shows only in print / PDF output.
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('iframe[src*="drive.google.com"]').forEach(function (frame) {
        var parent = frame.parentElement;
        if (!parent) return;

        // Replace the older per-slide fallbacks so every video prints the same way.
        parent.querySelectorAll('.video-fallback').forEach(function (el) { el.remove(); });
        frame.removeAttribute('onload');
        frame.removeAttribute('onerror');

        if (getComputedStyle(parent).position === 'static') parent.style.position = 'relative';

        var thumb = document.createElement('div');
        thumb.className = 'print-thumb';

        var match = frame.src.match(/\/file\/d\/([\w-]+)/);
        if (match) {
            var img = document.createElement('img');
            img.alt = '';
            img.referrerPolicy = 'no-referrer';
            img.onerror = function () { img.remove(); };
            img.src = 'https://drive.google.com/thumbnail?id=' + match[1] + '&sz=w1000';
            thumb.appendChild(img);
        }

        var play = document.createElement('div');
        play.className = 'play';
        thumb.appendChild(play);

        var label = document.createElement('div');
        label.className = 'label';
        label.textContent = 'Demo Video';
        thumb.appendChild(label);

        parent.appendChild(thumb);
    });
});
