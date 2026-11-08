

console.log("Landing transition JS loaded!");


const enterLink = document.querySelector(
    ".landing-page .enter-link"
);

if (enterLink) {
    enterLink.addEventListener("click", function(event) {
        if (
            event.ctrlKey ||
            event.metaKey ||
            event.shiftKey ||
            event.altKey ||
            event.button !== 0
        ) return;

        if (window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches) return;

        event.preventDefault();

        const destination = enterLink.href;

        document.body.classList.add("is-leaving");

        setTimeout(() => {
            window.location.href = destination;
        }, 700);
    });
}


function openCertificate() {
  document.getElementById("certificateModal").classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeCertificate(event) {
  if (event) event.stopPropagation();

  document.getElementById("certificateModal").classList.remove("is-open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeCertificate();
  }
});



function openTranscript() {
  document.getElementById("transcriptModal").classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeTranscript(event) {
  if (event) event.stopPropagation();

  document.getElementById("transcriptModal").classList.remove("is-open");
  document.body.style.overflow = "";
}


/* Smooth transition when opening project detail pages */

document.addEventListener("DOMContentLoaded", function () {
  const isProjectDetail = window.location.pathname.includes("details-");

  if (isProjectDetail) {
    document.body.classList.add("project-page-enter");
  }
});

