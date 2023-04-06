
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
            skewX: "-10",
            duration: 2,
            stagger: 0.2,
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

let configureSmoothScroll = () => {
    ScrollSmoother.create({
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
    });
}

window.addEventListener("resize", () => {
    addHeadingAnimation();
    addParagraphsAnimation();
});
window.addEventListener("DOMContentLoaded", () => {
    addHeadingAnimation();
    addParagraphsAnimation();
    configureSmoothScroll();
});