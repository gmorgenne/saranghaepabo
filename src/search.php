<?php

?>
<!DOCTYPE html>
<html>
<head>
    <?php include './views/_meta.php'; ?>
    <link rel="stylesheet" href="css/main.css" type="text/css">
    <link rel="stylesheet" href="css/search.css" type="text/css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Search -- Saranghae! (pabo)</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<body>
    <header>
        <?php include './views/_header.php'; ?>
        <div class="page-title">
			<h1>Search Results</h1>
        </div><!-- end of Page Title -->
        <?php include './views/_primary-navigation.php'; ?>
    </header>
    <main>
        <div class="search">
            <div class="container">
                <?php 
                    include './views/search/_summary.php';
                    include './views/search/_searchbar.php';
                ?>
            </div><!-- end of container -->

            <div class="container">
                <div class="search-aside">
                    <?php 
                        include './views/search/_breadcrumbs.php';
                        include './views/search/_facets.php';
                    ?>
                </div><!-- end of search aside -->
                <div class="search-main">
                    <?php include './views/search/_results-list.php' ?>
                </div>
            </div><!-- end of container -->
            <?php include './views/search/_pager.php' ?>
        </div><!-- end of search -->
    </main>
    <?php include './views/_footer.php'; ?>
    <script src="js/menu.js" type="text/javascript"></script>
	<script src="js/search.js" type="text/javascript"></script>
</body>
</html>