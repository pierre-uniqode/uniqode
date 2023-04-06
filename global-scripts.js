
let addHeadingAnimation = function () {
    $(".skew-up").each(function (index) {
        const text = new SplitType($(this), {
            types: "lines, words",
            lineClass: "word-line"
        });

        let textInstance = $(this);
        let line = textInstance.find(".word-line");
        let word = line.find(".word");

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: textInstance,
                start: "top 85%",
                end: "top 85%",
                onComplete: function () {
                    $(textInstance).removeClass("skew-up");
                }
            }
        });

        tl.set(textInstance, { opacity: 1 }).from(word, {
            y: "100%",
            skewX: "-6",
            duration: 2,
            stagger: 0.1,
            ease: "expo.out"
        });
    });
};

let addParagraphsAnimation = function () {
    $(".fade-up").each(function (index) {
        const text = new SplitType($(this), {
            types: "lines, words, chars",
            lineClass: "line"
        });

        let textInstance = $(this);
        let line = textInstance.find(".line");
        let word = line.find(".word");

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: textInstance,
                start: "top 85%",
                end: "top 85%",
                onComplete: function () {
                    $(textInstance).removeClass("fade-up");
                }
            }
        });

        tl.set(textInstance, { opacity: 1 }).from(word, {
            y: "100%",
            opacity: 0,
            duration: 2,
            ease: "expo.out"
        });
    });
};

window.addEventListener("resize", () => {
    addHeadingAnimation();
    addParagraphsAnimation();
});
window.addEventListener("DOMContentLoaded", () => {
    addHeadingAnimation();
    addParagraphsAnimation();
});




window.addEventListener("DOMContentLoaded", (event) => {
    // Split text into spans
    let typeSplit = new SplitType("[text-split]", {
        types: "words, chars",
        tagName: "span"
    });

    // Link timelines to scroll position
    function createScrollTrigger(triggerElement, timeline) {
        // Reset tl when scroll out of view past bottom of screen
        ScrollTrigger.create({
            trigger: triggerElement,
            start: "top bottom",
            onLeaveBack: () => {
                timeline.progress(0);
                timeline.pause();
            }
        });

        // Play tl when scrolled into view (60% from top of screen)
        ScrollTrigger.create({
            trigger: triggerElement,
            start: "top 60%",
            onEnter: () => timeline.play()
        });
    }

    $("[words-slide-up]").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this).find(".word"), { opacity: 0, yPercent: 100, duration: 0.5, ease: "back.out(2)", stagger: { amount: 0.5 } });
        createScrollTrigger($(this), tl);
    });

    $("[words-rotate-in]").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.set($(this).find(".word"), { transformPerspective: 1000 });
        tl.from($(this).find(".word"), { rotationX: -90, duration: 0.6, ease: "power2.out", stagger: { amount: 0.6 } });
        createScrollTrigger($(this), tl);
    });

    $("[words-slide-from-right]").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this).find(".word"), { opacity: 0, x: "1em", duration: 0.6, ease: "power2.out", stagger: { amount: 0.2 } });
        createScrollTrigger($(this), tl);
    });

    $("[letters-slide-up]").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this).find(".char"), { yPercent: 100, duration: 0.2, ease: "power1.out", stagger: { amount: 0.6 } });
        createScrollTrigger($(this), tl);
    });

    $("[letters-slide-down]").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this).find(".char"), { yPercent: -120, duration: 0.3, ease: "power1.out", stagger: { amount: 0.7 } });
        createScrollTrigger($(this), tl);
    });

    $("[letters-fade-in]").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this).find(".char"), { opacity: 0, duration: 0.2, ease: "power1.out", stagger: { amount: 0.8 } });
        createScrollTrigger($(this), tl);
    });

    $("[letters-fade-in-random]").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this).find(".char"), { opacity: 0, duration: 0.05, ease: "power1.out", stagger: { amount: 0.4, from: "random" } });
        createScrollTrigger($(this), tl);
    });

    // Avoid flash of unstyled content
    gsap.set("[text-split]", { opacity: 1 });
});