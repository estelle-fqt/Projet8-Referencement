//le script attend que le document HTML soit entièrement chargé avant d'exécuter le code à l'intérieur
//selection de ts éléments .gallery et application du plugin mauGallery
//mauGallery = plugin jQuery --> affiche la galerie d'img responsive avc filtrage et une lightbox (agrandissement des images)
$(document).ready(function () {
  $(".gallery").mauGallery({
    columns: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 3,
      xl: 3,
    },
    lightBox: true,
    lightboxId: "myAwesomeLightbox",
    showTags: true,
    tagsPosition: "top",
  });
});
