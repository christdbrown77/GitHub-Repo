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
    <!-- contact -->
    <div class="contact wthree-2">
        <div class="container">
            <h1>Contact</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2298.854416559632!2d-7.484394184105559!3d54.81767398031365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485fc4a098436f99%3A0xbf53dbb7f545bb31!2s94+Castlegrange+Park%2C+Strabane+BT82+9WD!5e0!3m2!1sen!2suk!4v1487516794076" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
            <div class="contact-form">
                <div class="col-md-4 contact-form-left agile-3">
                    <h2>Address :</h2>
                    <p>Eiusmod Tempor inc</p>
                    <p>9560 St Dolore Place,</p>
                    <p>Telephone : +1 800 603 6035</p>
                    <p>FAX : +1 800 889 9898</p>
                    <a href="mailto:example@email.com">mail@example.com</a>
                </div>
                <div class="col-md-8 contact-form-right  agileits-3">
                    <h3>Contact Form</h3>
                    <form action="#" method="post">
                        <input type="text" name="name" placeholder="Name">
                        <input type="email" name="email" placeholder="Email">
                        <input type="text" name="phone" placeholder="Phone">

                        <textarea placeholder="Message" name="message" required=""></textarea>
                        <input type="submit" value="Submit">
                    </form>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
    <!-- //contact -->

    <!--Footer-->
    <?php
        require 'include/footer.php';
    ?>
        <!--End Footer-->

</body>

</html>
