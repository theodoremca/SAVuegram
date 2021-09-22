<template>
    <section id="works" class="shadow-blue white-bg padding">
        <h3 class="section-title">Portfolio</h3>
        <spacer :size="80"></spacer>


        <!-- portfolio filter (desktop) -->
        <ul class="portfolio-filter list-inline">
            <li class="current list-inline-item" data-filter="*">
                All Projects
            </li>
            <li class="list-inline-item" data-filter=".branding">Branding</li>
            <li class="list-inline-item" data-filter=".creative">Creative</li>
            <li class="list-inline-item" data-filter=".design">Design</li>
            <li class="list-inline-item" data-filter=".video">Video</li>
        </ul>

        <!-- portfolio filter (mobile) -->
        <div class="pf-filter-wrapper mb-4">
            <select class="portfolio-filter-mobile">
                <option value="*">Everything</option>
                <option value=".creative">Creative</option>
                <option value=".video">Video</option>
                <option value=".design">Design</option>
                <option value=".branding">Branding</option>
            </select>
        </div>

        <!-- portolio wrapper -->
        <div class="row portfolio-wrapper">
            <!-- portfolio item -->
            <div class="col-md-4 col-sm-6 grid-item video">
                <a href="work-single.html">
                    <div class="portfolio-item">
                        <div class="details">
                            <h4 class="title">Creative Art</h4>
                            <span class="term">Art, Creative</span>
                        </div>
                        <span class="plus-icon">+</span>
                        <div class="thumb">
                            <img src="images/portfolio/1.jpg" alt="Portfolio-title"/>
                            <div class="mask"></div>
                        </div>
                    </div>
                </a>
            </div>

            <!-- portfolio item -->
            <div class="col-md-4 col-sm-6 grid-item creative design">
                <a href="work-single.html">
                    <div class="portfolio-item">
                        <div class="details">
                            <h4 class="title">Apple USB</h4>
                            <span class="term">Creative, Design</span>
                        </div>
                        <span class="plus-icon">+</span>
                        <div class="thumb">
                            <img src="images/portfolio/2.jpg" alt="Portfolio-title"/>
                            <div class="mask"></div>
                        </div>
                    </div>
                </a>
            </div>

            <!-- portfolio item -->
            <div class="col-md-4 col-sm-6 grid-item branding">
                <a href="work-single.html">
                    <div class="portfolio-item">
                        <div class="details">
                            <h4 class="title">Work Space</h4>
                            <span class="term">Branding</span>
                        </div>
                        <span class="plus-icon">+</span>
                        <div class="thumb">
                            <img src="images/portfolio/3.jpg" alt="Portfolio-title"/>
                            <div class="mask"></div>
                        </div>
                    </div>
                </a>
            </div>

            <!-- portfolio item -->
            <div class="col-md-4 col-sm-6 grid-item creative">
                <a href="work-single.html">
                    <div class="portfolio-item">
                        <div class="details">
                            <h4 class="title">Creative Bulb</h4>
                            <span class="term">Creative</span>
                        </div>
                        <span class="plus-icon">+</span>
                        <div class="thumb">
                            <img src="images/portfolio/4.jpg" alt="Portfolio-title"/>
                            <div class="mask"></div>
                        </div>
                    </div>
                </a>
            </div>

            <!-- portfolio item -->
            <div class="col-md-4 col-sm-6 grid-item video branding">
                <a href="work-single.html">
                    <div class="portfolio-item">
                        <div class="details">
                            <h4 class="title">iPhone 8</h4>
                            <span class="term">Art, Branding</span>
                        </div>
                        <span class="plus-icon">+</span>
                        <div class="thumb">
                            <img src="images/portfolio/5.jpg" alt="Portfolio-title"/>
                            <div class="mask"></div>
                        </div>
                    </div>
                </a>
            </div>

            <!-- portfolio item -->
            <div class="col-md-4 col-sm-6 grid-item creative design">
                <a href="work-single.html">
                    <div class="portfolio-item">
                        <div class="details">
                            <h4 class="title">Minimal Art</h4>
                            <span class="term">Design, Creative</span>
                        </div>
                        <span class="plus-icon">+</span>
                        <div class="thumb">
                            <img src="images/portfolio/6.jpg" alt="Portfolio-title"/>
                            <div class="mask"></div>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <!-- more button -->
        <div class="load-more text-center mt-4">
            <a href="javascript:" class="btn btn-default"
            ><i class="fas fa-circle-notch"></i> Load more</a
            >
            <!-- numbered pagination (hidden for infinite scroll) -->
            <ul class="portfolio-pagination list-inline d-none">
                <li class="list-inline-item">1</li>
                <li class="list-inline-item"><a href="works-2.html">2</a></li>
            </ul>
        </div>
    </section>
</template>
<script>
    import Spacer from '@/components/Spacer.vue'

    export default {
        name: 'portfolio',
        components: {Spacer}
    }
</script>