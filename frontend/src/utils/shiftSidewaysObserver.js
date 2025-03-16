export const shiftSidewaysObserver = () => {
    const elements = document.querySelectorAll(".shiftSideways");

    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (!elementStates.has(entry.target)) {
                    elementStates.set(entry.target, { targetX: 0, currentX: 0 });
                }
            }
        });
    }, { threshold: 0.01 });

    elements.forEach((el) => observer.observe(el));

    const elementStates = new Map(); // Store animation states

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const updatePositions = () => {
        let viewportHeight = window.innerHeight;

        elements.forEach((element) => {
            let rect = element.getBoundingClientRect();
            let state = elementStates.get(element);
            if (!state) return;

            // Progress is based on how far the element is within the viewport (0 at bottom, 1 at top)
            let progress = Math.max(0, Math.min(1, 1 - rect.top / viewportHeight));
            let maxMove = 80;
            state.targetX = (progress - 0.5) * maxMove * 2;

            // Apply easing using lerp with a slightly higher factor for smoother feel
            state.currentX = lerp(state.currentX, state.targetX, 0.05); // Faster catch-up

            element.style.transform = `translateX(calc(-50% + ${state.currentX}px))`;
        });

        requestAnimationFrame(updatePositions);
    };

    requestAnimationFrame(updatePositions);
};
