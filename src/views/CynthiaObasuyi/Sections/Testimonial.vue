<template>
    <section id="testimonials" class="shadow-blue white-bg padding">
        <h3 class="section-title">Testimonials</h3>
        <spacer :size="97"></spacer>


        <div class="row testimonials-wrapper">
            <div class="col-md-6">
                <!-- testimonial item -->
                <div class="testimonial-item">
                    <span class="symbol"><i class="fas fa-quote-left"></i></span>
                    <p>
                        I enjoy working with the theme and learn so much. You guys
                        make the process fun and interesting. Good luck!
                    </p>
                    <div class="testimonial-details">
                        <div class="thumb">
                            <img src="images/customer-1.png" alt="customer-name"/>
                        </div>
                        <div class="info">
                            <h4>Helen Doe</h4>
                            <span>Themeforest customer</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <!-- testimonial item -->
                <div class="testimonial-item">
                    <span class="symbol"><i class="fas fa-quote-left"></i></span>
                    <p>
                        I enjoy working with the theme and learn so much. You guys
                        make the process fun and interesting. Good luck!
                    </p>
                    <div class="testimonial-details">
                        <div class="thumb">
                            <img src="images/customer-2.png" alt="customer-name"/>
                        </div>
                        <div class="info">
                            <h4>Jane Doe</h4>
                            <span>Themeforest customer</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <!-- testimonial item -->
                <div class="testimonial-item">
                    <span class="symbol"><i class="fas fa-quote-left"></i></span>
                    <p>
                        I enjoy working with the theme and learn so much. You guys
                        make the process fun and interesting. Good luck!
                    </p>
                    <div class="testimonial-details">
                        <div class="thumb">
                            <img src="images/customer-1.png" alt="customer-name"/>
                        </div>
                        <div class="info">
                            <h4>Helen Doe</h4>
                            <span>Themeforest customer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import Spacer from '@/components/Spacer.vue'

    export default {
        name: 'testionial',
        components: {Spacer}
    }
</script>