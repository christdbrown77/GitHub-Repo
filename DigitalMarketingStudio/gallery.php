<!--
	Author: W3layouts
	Author URL: http://w3layouts.com
	License: Creative Commons Attribution 3.0 Unported
	License URL: http://creativecommons.org/licenses/by/3.0/
-->
<!DOCTYPE html>
<html>

<head>

    <?php
        echo "<title>Digital Marketing Studio</title>";
        require 'include/metaData.php';
        require 'include/addCSS.php';
    ?>
</head>

<body>
    <!-- Banner -->
    
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
    <!-- //Banner -->
    <!-- gallery -->
    <div class="gallery wthree-3">
        <div class="container">
            <h1>Gallery</h1>

            <script src="js/jquery.swipebox.min.js"></script>
            <script type="text/javascript">
                jQuery(function($) {
                    $(".swipebox").swipebox();
                });

            </script>
            <div class="view view-seventh">
                <a href="images/1.jpg" class="b-link-stripe b-animate-go  swipebox" title="Image Title"><img src="images/1.jpg" alt="" class="img-responsive">
                    <div class="mask">
                        <h2>Vulputate Velit</h2>
                        <p>Were dolor in hendrerit in vulputate velit esse molestie con sequat,Nulla consectetur maximus sem vel aliquet. </p>

                    </div>
                </a>
            </div>
            <div class="view view-seventh">
                <a href="images/2.jpg" class="b-link-stripe b-animate-go  swipebox" title="Image Title"><img src="images/2.jpg" alt="" class="img-responsive">
                    <div class="mask">
                        <h3>Vulputate Velit</h3>
                        <p>Were dolor in hendrerit in vulputate velit esse molestie con sequat,Nulla consectetur maximus sem vel aliquet. </p>

                    </div>
                </a>
            </div>
            <div class="view view-seventh">
                <a href="images/3.jpg" class="b-link-stripe b-animate-go  swipebox" title="Image Title"><img src="images/3.jpg" alt="" class="img-responsive">
                    <div class="mask">
                        <h3>Vulputate Velit</h3>
                        <p>Were dolor in hendrerit in vulputate velit esse molestie con sequat,Nulla consectetur maximus sem vel aliquet. </p>

                    </div>
                </a>
            </div>
            <div class="view view-seventh">
                <a href="images/4.jpg" class="b-link-stripe b-animate-go  swipebox" title="Image Title"><img src="images/4.jpg" alt="" class="img-responsive">
                    <div class="mask">
                        <h3>Vulputate Velit</h3>
                        <p>Were dolor in hendrerit in vulputate velit esse molestie con sequat,Nulla consectetur maximus sem vel aliquet. </p>

                    </div>
                </a>
            </div>
            <div class="view view-seventh">
                <a href="images/5.jpg" class="b-link-stripe b-animate-go  swipebox" title="Image Title"><img src="images/5.jpg" alt="" class="img-responsive">
                    <div class="mask">
                        <h3>Vulputate Velit</h3>
                        <p>Were dolor in hendrerit in vulputate velit esse molestie con sequat,Nulla consectetur maximus sem vel aliquet. </p>

                    </div>
                </a>
            </div>
            <div class="view view-seventh">
                <a href="images/6.jpg" class="b-link-stripe b-animate-go  swipebox" title="Image Title"><img src="images/6.jpg" alt="" class="img-responsive">
                    <div class="mask">
                        <h3>Vulputate Velit</h3>
                        <p>Were dolor in hendrerit in vulputate velit esse molestie con sequat,Nulla consectetur maximus sem vel aliquet. </p>

                    </div>
                </a>
            </div>
            <div class="view view-seventh">
                <a href="images/7.jpg" class="b-link-stripe b-animate-go  swipebox" title="Image Title"><img src="images/7.jpg" alt="" class="img-responsive">
                    <div class="mask">
                        <h3>Vulputate Velit</h3>
                        <p>Were dolor in hendrerit in vulputate velit esse molestie con sequat,Nulla consectetur maximus sem vel aliquet.</p>

                    </div>
                </a>
            </div>
            <div class="view view-seventh">
                <a href="images/8.jpg" class="b-link-stripe b-animate-go  swipebox" title="Image Title"><img src="images/8.jpg" alt="" class="img-responsive">
                    <div class="mask">
                        <h3>Vulputate Velit</h3>
                        <p>Were dolor in hendrerit in vulputate velit esse molestie con sequat,Nulla consectetur maximus sem vel aliquet.</p>

                    </div>
                </a>
            </div>
            <div class="view view-seventh">
                <a href="images/9.jpg" class="b-link-stripe b-animate-go  swipebox" title="Image Title"><img src="images/9.jpg" alt="" class="img-responsive">
                    <div class="mask">
                        <h3>Vulputate Velit</h3>
                        <p>Were dolor in hendrerit in vulputate velit esse molestie con sequat,Nulla consectetur maximus sem vel aliquet. </p>

                    </div>
                </a>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
    <!-- //gallery -->
    
    <!--Footer-->
    <?php
        require 'include/footer.php';
    ?>
    <!--End Footer-->
    
</body>

</html>
