document.addEventListener("DOMContentLoaded", function () {
    // Simulate loading process
    let progress = 0;
    const loadingText = document.getElementById('loading-text');
    const loadingProgress = document.getElementById('loading-progress');

    const updateProgress = () => {
        loadingProgress.textContent = `${progress}%`;
    };

    const loadingInterval = setInterval(() => {
        progress += 10;
        if (progress <= 100) {
            updateProgress();
        } else {
            clearInterval(loadingInterval);
            // Transition to another page (replace 'targetPage.html' with your actual page)
            window.location.href = 'MyPage.html';
        }
    }, 1000);
});

