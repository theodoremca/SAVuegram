<template>
    <section
            id="facts"
            class="shadow-dark color-white background parallax padding-50"
            data-image-src="images/background-1.html"
    >
        <div class="row relative z-1">
            <div class="col-md-3 col-sm-6">
                <!-- fact item -->
                <div class="fact-item text-center">
                    <i class="icon-like icon-circle"></i>
                    <h2 class="count">157</h2>
                    <span>Projects completed</span>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <!-- fact item -->
                <div class="fact-item text-center">
                    <i class="icon-cup icon-circle"></i>
                    <h2 class="count">2765</h2>
                    <span>Cup of coffee</span>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <!-- fact item -->
                <div class="fact-item text-center">
                    <i class="icon-emotsmile icon-circle"></i>
                    <h2 class="count">350</h2>
                    <span>Happy customers</span>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <!-- fact item -->
                <div class="fact-item text-center">
                    <i class="icon-trophy icon-circle"></i>
                    <h2 class="count">29</h2>
                    <span>Awards won</span>
                </div>
            </div>
        </div>

        <div class="overlay"></div>
    </section>
</template>
<script>
    export default {
        name: 'project-completed'
    }
</script>