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
                            <p><b>Ootes</b> Web is het bedrijf van Tom Ootes en is voortgekomen uit de wens om zelfstandig platformen te bouwen voor mooie initiatieven. Door op een effectieve manier samen te werken kan een idee tot leven komen en kan er snel waarde ontstaan.</p>
                            <p><a class="link" href="http://ootes.io">Ootes.io</a><br>
                                <a href="#" target="_blank">tomootes@gmail.com</a><br/>
                                0623447230<br/>
                                <br/>
                                Terschelling 112 K7<br/>
                                3524AZ Utrecht<br/><br/>
                                <b>BTW</b> NL209059643B01<br/>
                                <b>KVK</b> 59479817<br/>
                                <br>
                                <b>Betalingen</b><br>
                                NL06 ASNB 0708 9079 97<br/>
                                Tnv T. Ootes </br>Onder vermelding van factuurnummer </p>
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
