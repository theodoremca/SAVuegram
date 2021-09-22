<template>
    <section id="price" class="shadow-blue white-bg padding">
        <h3 class="section-title">Pricing table</h3>
        <spacer :size="97"></spacer>


        <div class="row">
            <div class="col-md-4 pr-md-0 mt-3">
                <!-- price item -->
                <div class="price-item text-center">
                    <i class="price-icon icon-energy"></i>
                    <span class="plan">Basic</span>
                    <h3 class="price"><em>$</em>14<span>/mo</span></h3>
                    <div class="price-content">
                        <ul>
                            <li>Frontend Builder</li>
                            <li>Regular Support</li>
                            <li>1 Years of Updates</li>
                        </ul>
                    </div>
                    <a href="#" class="btn btn-default">Get Started</a>
                </div>
            </div>

            <div class="col-md-4 px-md-0 my-5 my-md-0">
                <!-- price item -->
                <div class="price-item text-center recommended">
                    <i class="price-icon icon-fire"></i>
                    <span class="plan">Professional</span>
                    <h3 class="price"><em>$</em>41<span>/mo</span></h3>
                    <div class="price-content">
                        <ul>
                            <li>Frontend Builder</li>
                            <li>Regular Support</li>
                            <li>2 Years of Updates</li>
                            <li>White Labeling</li>
                        </ul>
                    </div>
                    <a href="#" class="btn btn-default">Get Started</a>
                </div>
            </div>

            <div class="col-md-4 pl-md-0 mt-0 mt-md-3">
                <!-- price item -->
                <div class="price-item text-center">
                    <i class="price-icon icon-rocket"></i>
                    <span class="plan">Premium</span>
                    <h3 class="price"><em>$</em>99<span>/mo</span></h3>
                    <div class="price-content">
                        <ul>
                            <li>Frontend Builder</li>
                            <li>Regular Support</li>
                            <li>3 Years of Updates</li>
                        </ul>
                    </div>
                    <a href="#" class="btn btn-default">Get Started</a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import Spacer from '@/components/Spacer.vue'

    export default {
        name: 'price-table',
        components: {Spacer}
    }
</script>