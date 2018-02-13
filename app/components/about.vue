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
                            <img src="img/pixel-me-nobg.png" class="img-fluid bg-primary-light" alt="Vue.js">
                        </div>
                        <div class="col-8">
                            <p><b>Ootes</b> Web is het bedrijf van mij, Tom Ootes en is voortgekomen uit de wens om zelfstandig oplossingen te bouwen voor toffe initiatieven.</p>
							<p>Naast mijn studie Informatica aan de HvA heb ik altijd baantjes gehad binnen de ICT. Na mij studie heb ik anderhalf jaar bij Geodan gewerkt als ontwikkelaar. Daar heb ik de nodige ervaring op gedaan met Geo en Innovatie. Ik was altijd al bezig met kleinere klussen als freelancer en in 2017 besloot ik de stap te wagen en voor mezelf te beginnen.</p>
							<p>Onderwerpen waar ik extra enthousiast van word zijn: </p>

							<ul class="list">
								<li>Duurzaamheid</li>
								<li>Blockchain</li>
								<li>Geo</li>
								<li>Sociale initiatieven</li>
							</ul>

							<div class="company-info">
								<p><a href="email:tomootes@gmail.com" target="_blank" class="link">tomootes@gmail.com</a></p>
								<p><a href="tel:+31623447230" class="link">06234472309</a></p>
	                            <p>BTW: NL209059643B01</p>
	                            <p>KVK: 59479817</p>
	                            <p>Rek: NL06 ASNB 0708 9079 97</p>
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

    let particles = require('particles.js')

    export default {
        name: 'about',
        data () {
            return {
                projects: {}
            }
        }
    }

    </script>
