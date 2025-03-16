export const hiddenObserver = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const observeElements = () => {
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
    };

    // Observe elements on initial load
    observeElements();

    // Watch for new elements being added to the DOM
    const mutationObserver = new MutationObserver(() => {
        observeElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });
};
