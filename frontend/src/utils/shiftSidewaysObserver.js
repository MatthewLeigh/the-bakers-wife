export const shiftSidewaysObserver = () => {
    let elements = document.querySelectorAll(".shiftSideways");

    if (elements.length === 0) return;

    const elementStates = new Map();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (!elementStates.has(entry.target)) {
                    elementStates.set(entry.target, { targetX: 0, currentX: 0 });
                }
            }
        });
    }, { threshold: 0.01 });

    const observeElements = () => {
        elements = document.querySelectorAll(".shiftSideways");
        elements.forEach((el) => observer.observe(el));
    };

    observeElements(); // Initial observation

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const updatePositions = () => {
        let viewportHeight = window.innerHeight;

        elements.forEach((element) => {
            let rect = element.getBoundingClientRect();
            let state = elementStates.get(element);
            if (!state) return;

            let progress = Math.max(0, Math.min(1, 1 - rect.top / viewportHeight));
            let maxMove = 40; // Smaller movements for subtle effect
            state.targetX = (progress - 0.5) * maxMove * 2;

            state.currentX = lerp(state.currentX, state.targetX, 0.1); // Smooth easing

            element.style.transform = `translateX(calc(-50% + ${state.currentX}px))`;
        });

        requestAnimationFrame(updatePositions);
    };

    requestAnimationFrame(updatePositions);

    // 🔄 Reinitialize observers when navigating in React
    if (typeof window !== "undefined") {
        window.addEventListener("load", observeElements);
        window.addEventListener("popstate", observeElements); // Detect back/forward navigation
        window.addEventListener("hashchange", observeElements); // For hash-based routing
    }
};
