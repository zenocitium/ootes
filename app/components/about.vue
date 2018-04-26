<template>

    <div>

        <main id="about">

            <div class="intro one-third">
                <particles></particles>
                <div class="overlay">
                    <div class="container">
                        <div class="flex flex-center">
                            <span class="intro-text">
                                <h3 class=""><span class="icon icon-id-card-2"></span></h3>
                                <h3>Over</h3>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="container">
                    <div class="flex flex-space-between content">
                        <div class="col-4 picture">
                            <img src="img/pixel-me-nobg.png" class="img-fluid bg-primary-light" alt="Tom Ootes">
                        </div>
                        <div class="col-8">

                            <h3>Sociale techneut</h3>
                            <p>Ik (Tom Ootes) heb Ootes Web opgericht om me als vrije lansier te kunnen focussen op projecten die waarde voor mij hebben en daarbij een diverse rol op me te kunnen nemen. Ootes web richt zich op het bouwen van websites web-apps. Onze liefde licht bij het ontwikkelen van producten met een goede uitstraling en uitstekende gebruiksvriendelijkheid.</p>
                            <p>Voor nieuwe projecten ben ik altijd te bereiken op de gegevens hieronder.</p>
                            <h3>Gegevens</h3>
							<div class="company-info">
								<p><a href="email:tomootes@gmail.com" target="_blank" class="link">tomootes@gmail.com</a></p>
								<p><a href="tel:+31623447230" class="link">06234472309</a></p>
	                            <p>BTW: NL209059643B01</p>
	                            <p>KVK: 59479817</p>
	                            <p>Rek: NL06ASNB0708907997</p>
							</div>

                        </div>
                    </div>
                </div>
                </div>

                <div class="section bg-gray-lightest">
                    <div class="container">
                        <h1 class="flex-center">Kontakt me</h1>
                        <br/>
                        <h1 class="flex-center"><span class="icon icon-arrow-down-1"></span></h1>
                    </div>
            </div>

        </main>

</div>
</template>

    <script>
let particles = require("particles.js");

export default {
  name: "about",
  data() {
    return {
      projects: {}
    };
  }
};
</script>
