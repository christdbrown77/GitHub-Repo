<!DOCTYPE html>
<html>

<head>

    <?php
        echo "<title>Digital Marketing Studio</title>";
        require 'include/metaData.php';
        require 'include/GoogleAnalytics.php';
        require 'include/addCSS.php';
    ?>
</head>



<body>
    <!-- Banner -->
    <div class="banner">
        <!-- Header -->
        <div class="header">
            <div class="container">

                <!-- Navigation -->
                <?php
                    require 'include/NavBar.php';              
                ?>
                    <!-- End Navigation -->

            </div>
        </div>
        <!-- //Header -->

        <!--Container-->
        <div class="container">
            <div class="banner-info">
                <section class="slider">
                    <div class="flexslider">
                        <ul class="slides">
                            <li>
                                <div class="banner-info1">
                                    <h1>Responsive web design</h1>
                                    <p>Publishing packages and Web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many</p>

                                </div>
                                <li>
                                    <div class="banner-info1">
                                        <h1>Business Starter Packs</h1>
                                        <p>Publishing packages and Web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many</p>

                                    </div>
                                </li>
                                <li>
                                    <div class="banner-info1">
                                        <h1>Chris Brown</h1>
                                        <p>Publishing packages and Web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many</p>

                                    </div>
                                </li>
                        </ul>
                    </div>
                </section>

                <!-- FlexSlider -->
                <script defer="" src="js/jquery.flexslider.js"></script>
                <script type="text/javascript">
                    $(function() {

                    });
                    $(window).load(function() {
                        $('.flexslider').flexslider({
                            animation: "slide",
                            start: function(slider) {
                                $('body').removeClass('loading');
                            }
                        });
                    });

                </script>
                <!-- FlexSlider -->
            </div>
        </div>
        <!--//Container-->
    </div>
    <!-- //Banner -->

    <!-- About Us -->
    <div class="about_us">
        <div class="container">
            <h3>About Us</h3>
            <div class="about-top">
                <div class="col-md-5 ab-text wow fadeInLeft animated" data-wow-delay=".5s">
                    <img src="images/10.jpg" alt="Corporate image" class="img-responsive">
                </div>
                <div class="col-md-7 info wow fadeInRight animated" data-wow-delay=".5s">
                    <div class="accordion">
                        <div class="accordion-section">
                            <h5><a class="accordion-section-title" href="#accordion-1">
								 Chris Brown
							<i class="glyphicon glyphicon-chevron-down"></i>
							</a></h5>
                            <div id="accordion-1" class="accordion-section-content" style="display: none;">
                                <p>Daddy helps us all the time when we are doing hard stuff or if mummy needs soem help doing stuff. And he helps us when things are up high.</p>
                            </div>
                        </div>

                        <div class="accordion-section">
                            <h5><a class="accordion-section-title" href="#accordion-2">
								Claire Brown
							<i class="glyphicon glyphicon-chevron-down"></i>
							</a></h5>
                            <div id="accordion-2" class="accordion-section-content" style="display: none;">
                                <p>My mummy is the best mummy in the whole wide world said Erin and Cara</p>
                            </div>
                        </div>

                        <div class="accordion-section">
                            <h5><a class="accordion-section-title" href="#accordion-3">
								Erin Brown
							<i class="glyphicon glyphicon-chevron-down"> </i> 
							</a></h5>
                            <div id="accordion-3" class="accordion-section-content" style="display: none;">
                                <p>Erin Brown is the best girl in the whole world. Santa came to tell me at work.</p>
                            </div>
                        </div>
                        <div class="accordion-section">
                            <h5><a class="accordion-section-title" href="#accordion-4">
								 Cara Brown
							<i class="glyphicon glyphicon-chevron-down"> </i> 
							</a></h5>
                            <div id="accordion-4" class="accordion-section-content" style="display: none;">
                                <p>Cara is the best sister Erin has ever had in the whole wide world. Daddy said that in the house.</p>
                            </div>
                        </div>
                        <div class="accordion-section">
                            <h5><a class="accordion-section-title" href="#accordion-5">
								 Incididunt ut labore
							<i class="glyphicon glyphicon-chevron-down"> </i> 
							</a></h5>
                            <div id="accordion-5" class="accordion-section-content" style="display: none;">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="accordion-section">
                            <h5><a class="accordion-section-title" href="#accordion-6">
								 Adipiscing elit
							<i class="glyphicon glyphicon-chevron-down"> </i> 
							</a></h5>
                            <div id="accordion-6" class="accordion-section-content" style="display: none;">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <script>
                        jQuery(document).ready(function() {
                            function close_accordion_section() {
                                jQuery('.accordion .accordion-section-title').removeClass('active');
                                jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
                            }

                            jQuery('.accordion-section-title').click(function(e) {
                                // Grab current anchor value
                                var currentAttrValue = jQuery(this).attr('href');

                                if (jQuery(e.target).is('.active')) {
                                    close_accordion_section();
                                } else {
                                    close_accordion_section();

                                    // Add active class to section title
                                    jQuery(this).addClass('active');
                                    // Open up the hidden content panel
                                    jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
                                }

                                e.preventDefault();
                            });
                        });

                    </script>

                </div>
                <div class="clearfix"></div>
            </div>

        </div>
    </div>
    <!-- //About Us -->

    <!-- Consultant -->
    <div class="consultant">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 text-center w3ls">
                    <h3>Web Consultancy</h3>
                    <p class="p1 animated wow fadeInUp animated animated" data-wow-duration="1200ms" data-wow-delay="500ms">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Simply dummy text of the printing and the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
    <!-- //Consultant -->

    <!-- Projects -->
    <div class="projects">
        <div class="container">
            <h3>Projects</h3>

            <div class="col-md-4 agileits-left wow fadeInLeft animated" data-wow-delay=".5s">
                <div class="history-grid-image">
                    <img src="images/6.jpg" class="img-responsive zoom-img" alt="">
                </div>
                <h4>CB Section 2</h4>
                <p>Perspiciatis unde omnis iste natus error sit voluptatem consectetur adipiscing elit, sed do eiusmod tempor </p>
            </div>

            <div class="col-md-4 agileits-left animated wow fadeInUp animated animated" data-wow-duration="1200ms" data-wow-delay="500ms">
                <div class="history-grid-image">
                    <img src="images/7.jpg" class="img-responsive zoom-img" alt="">
                </div>
                <h4>Adipiscing elit</h4>
                <p>Perspiciatis unde omnis iste natus error sit voluptatem consectetur adipiscing elit, sed do eiusmod tempor </p>
            </div>

            <div class="col-md-4 agileits-left wow fadeInRight animated" data-wow-delay=".5s">
                <div class="history-grid-image">
                    <img src="images/2.jpg" class="img-responsive zoom-img" alt="">
                </div>
                <h4>Eiusmod tempor</h4>
                <p>Perspiciatis unde omnis iste natus error sit voluptatem consectetur adipiscing elit, sed do eiusmod tempor </p>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
    <!-- //Projects -->


    <!-- Our Services -->
    <div class="our_services">
        <div class="container">
            <h3>Our Services</h3>
            <div class="services-grids">
                <div class="col-md-6 services-grid-left wow fadeInLeft animated" data-wow-delay=".5s">
                    <div class="col-xs-4 services-grid-left1">
                        <i class="hovicon effect-2 sub-a"><span class="glyphicon glyphicon-phone" aria-hidden="true"></span></i>
                    </div>
                    <div class="col-xs-8 services-grid-left2">
                        <h4>Responsive</h4>
                        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                    </div>
                    <div class="clearfix"> </div>
                </div>

                <div class="col-md-6 services-grid-right wow fadeInRight animated" data-wow-delay=".5s">
                    <div class="col-xs-4 services-grid-left1">
                        <i class="hovicon effect-2 sub-a"><span class="glyphicon glyphicon-cog pp" aria-hidden="true"></span></i>
                    </div>
                    <div class="col-xs-8 services-grid-left2">
                        <h4>Web Development</h4>
                        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="clearfix"> </div>
            </div>

            <div class="services-grids">
                <div class="col-md-6 services-grid-left wow fadeInLeft animated" data-wow-delay=".5s">
                    <div class="col-xs-4 services-grid-left1">
                        <i class="hovicon effect-2 sub-a"><span class="glyphicon glyphicon-signal" aria-hidden="true"></span></i>
                    </div>
                    <div class="col-xs-8 services-grid-left2">
                        <h4>Web Marketing</h4>
                        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                    </div>
                    <div class="clearfix"> </div>
                </div>

                <div class="col-md-6 services-grid-right wow fadeInRight animated" data-wow-delay=".5s">
                    <div class="col-xs-4 services-grid-left1">
                        <i class="hovicon effect-2 sub-a"><span class="glyphicon glyphicon-lock" aria-hidden="true"></span></i>
                    </div>
                    <div class="col-xs-8 services-grid-left2">
                        <h4>Web Security </h4>
                        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
    </div>
    <!-- //Our Services -->

    <!--Footer-->
    <?php
        require 'include/footer.php';
    ?>
        <!--End Footer-->

</body>

</html>
