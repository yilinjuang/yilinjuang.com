document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const theme = urlParams.get('t');
    const themeLink = document.getElementById('theme-style');

    if (theme) {
        themeLink.href = theme + '.css';
        document.getElementById('theme-selector').value = theme + '.css';
    }

    document.getElementById('theme-selector').addEventListener('change', function () {
        const selectedTheme = this.value.replace('.css', '');
        window.location.search = `?t=${selectedTheme}`;
    });
});
