/* Header nav color, including logo and nav links color change from black to white when header is on top of a dark section during page scroll */
/* Header need to be fixed with a transparent background */

/* Fixed header after the scroll of first section */
<script>
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const firstSection = document.querySelector("#page > article > section:first-child");

    if (header && firstSection) {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    header.classList.add("fixed-header"); 
                } else {
                    header.classList.remove("fixed-header"); 
                }
            },
            {
                root: null, 
                threshold: 0, 
            }
        );

        observer.observe(firstSection);
    }
});
</script>
  

/* Header Color Change */
<script>
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("#header");
    const sections = document.querySelectorAll(
        "#page > #sections .page-section.dark, " +
        "#page > #sections .page-section.dark-bold, " +
        "#page > #sections .page-section.black, " +
        "#page > #sections .page-section.black-bold"
    );
    const headerLogo = document.querySelector("#header .header-title-logo a img");

    if (header && sections.length > 0 && headerLogo) {
        const checkHeaderOnDark = () => {
            const headerRect = header.getBoundingClientRect();

            let isOnDarkSection = false;

            sections.forEach((section) => {
                const sectionRect = section.getBoundingClientRect();

                if (
                    headerRect.bottom > sectionRect.top && 
                    headerRect.top < sectionRect.bottom 
                ) {
                    isOnDarkSection = true;
                }
            });

            if (isOnDarkSection) {
                header.classList.add("header-on-dark");
            } else {
                header.classList.remove("header-on-dark");
            }
        };

        window.addEventListener("scroll", checkHeaderOnDark);
        checkHeaderOnDark();
    }
});
</script>
