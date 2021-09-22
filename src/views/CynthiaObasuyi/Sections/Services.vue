<template>
    <section id="services" class="shadow-blue white-bg padding">
        <h3 class="section-title">Services</h3>
        <spacer :size="80"></spacer>


        <div class="row">
            <div class="col-md-4 col-sm-6">
                <!-- service item -->
                <div class="service-item text-center">
                    <i class="icon-globe icon-simple"></i>
                    <h4 class="my-3">Development</h4>
                    <p class="mb-0">
                        Lorem ipsum dolor sit amet consectetuer elit.
                    </p>
                </div>
                <spacer :size="20"></spacer>

            </div>

            <div class="col-md-4 col-sm-6">
                <!-- service item -->
                <div class="service-item text-center">
                    <i class="icon-chemistry icon-simple"></i>
                    <h4 class="my-3">Design</h4>
                    <p class="mb-0">
                        Lorem ipsum dolor sit amet consectetuer elit.
                    </p>
                </div>
                <spacer :size="20"></spacer>
            </div>

            <div class="col-md-4 col-sm-6">
                <!-- service item -->
                <div class="service-item text-center">
                    <i class="icon-directions icon-simple"></i>
                    <h4 class="my-3">Advertising</h4>
                    <p class="mb-0">
                        Lorem ipsum dolor sit amet consectetuer elit.
                    </p>
                </div>
                <spacer :size="20"></spacer>

            </div>

            <div class="col-md-4 col-sm-6">
                <!-- service item -->
                <div class="service-item text-center">
                    <i class="icon-rocket icon-simple"></i>
                    <h4 class="my-3">SEO</h4>
                    <p class="mb-0">
                        Lorem ipsum dolor sit amet consectetuer elit.
                    </p>
                </div>
                <spacer :classess="'d-md-none d-lg-none'" :size="20"></spacer>

            </div>

            <div class="col-md-4 col-sm-6">
                <!-- service item -->
                <div class="service-item text-center">
                    <i class="icon-note icon-simple"></i>
                    <h4 class="my-3">Copy Write</h4>
                    <p class="mb-0">
                        Lorem ipsum dolor sit amet consectetuer elit.
                    </p>
                </div>
                <spacer :classes="'d-md-none d-lg-none'" :size="20"></spacer>

            </div>

            <div class="col-md-4 col-sm-6">
                <!-- service item -->
                <div class="service-item text-center">
                    <i class="icon-bubbles icon-simple"></i>
                    <h4 class="my-3">Support</h4>
                    <p class="mb-0">
                        Lorem ipsum dolor sit amet consectetuer elit.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import Spacer from '@/components/Spacer.vue'

    export default {
        name: 'services',
        components: {Spacer}
    }
</script>