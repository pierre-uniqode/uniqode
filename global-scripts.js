
// Texts animations
let addHeadingAnimation = () => {
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

let addParagraphsAnimation = () => {
    $(".fade-up").each(function (index) {
        const text = new SplitType($(this), {
            types: "lines, words",
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

// Smooth scroll
let configureSmoothScroll = () => {
    ScrollSmoother.create({
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
    });
}

// Buttons animation
let addPrimaryCTAsAnimation = () => {
    const primaryCTAs = document.querySelectorAll(".primary-cta");

    for(let i = 0 ; i < primaryCTAs.length ; i++) {
        primaryCTAs[i].addEventListener("mouseover", () => {
            primaryCTAs[i].style.backgroundColor = "#6F58FF";
            primaryCTAs[i].querySelector("div").style.transform = "skewY(-10)";
        });

        primaryCTAs[i].addEventListener("mouseout", () => {
            primaryCTAs[i].style.backgroundColor = "transparent";
            primaryCTAs[i].querySelector("div").style.transform = "skewY(0)";
        });
    }
}

window.addEventListener("resize", () => {
    addHeadingAnimation();
    addParagraphsAnimation();
});
window.addEventListener("DOMContentLoaded", () => {
    addHeadingAnimation();
    addParagraphsAnimation();
    configureSmoothScroll();
    addPrimaryCTAsAnimation();
});