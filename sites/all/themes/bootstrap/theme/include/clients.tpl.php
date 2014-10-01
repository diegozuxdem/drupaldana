<h3 class="our-clients">Nuestros Proveedores</h3>
<div id="slider1_container" style="position: relative; top: 0px; left: 0px; width: 980px; height: 100px; overflow: hidden;margin-left: auto;
margin-right: auto;">
        <div u="loading" style="position: absolute; top: 0px; left: 0px;">
            <div style="filter: alpha(opacity=70); opacity:0.7; position: absolute; display: block;
                background-color: #000; top: 0px; left: 0px;width: 100%;height:100%;">
            </div>
            <div style="position: absolute; display: block; background: url(../img/loading.gif) no-repeat center center;
                top: 0px; left: 0px;width: 100%;height:100%;">
            </div>
        </div>
        <div u="slides" style="cursor: move; position: absolute; left: 0px; top: 0px; width: 980px; height: 100px; overflow: hidden;">
            <div><img u="image" alt="DA" src="sites/all/themes/bootstrap/theme/content/logo_da.jpg" /></div>
            <div><img u="image" alt="DA" src="sites/all/themes/bootstrap/theme/content/logo40years.jpg" /></div>
            <div><img u="image" alt="El Rey" src="sites/all/themes/bootstrap/theme/content/elrey.png" width="98" height="100" /></div>
            <div><img u="image" alt="Familia" src="sites/all/themes/bootstrap/theme/content/familia.jpg" /></div>
            <div><img u="image" alt="colgate-palmolive" src="sites/all/themes/bootstrap/theme/content/colgate-palmolive.jpg" /></div>
            <div><img u="image" alt="Kellogs" src="sites/all/themes/bootstrap/theme/content/kellogs.jpg" /></div>
            <div><img u="image" alt="Parmalat" src="sites/all/themes/bootstrap/theme/content/parmalat.jpg" /></div>
            <div><img u="image" alt="Proleche" src="sites/all/themes/bootstrap/theme/content/proleche.jpg" /></div>
            <div><img u="image" alt="Eveready" src="sites/all/themes/bootstrap/theme/content/eveready.jpg" /></div>
            <div><img u="image" alt="facebook" src="sites/all/themes/bootstrap/theme/content/gruposurti.jpg" /></div>
            <div><img u="image" alt="3M" src="sites/all/themes/bootstrap/theme/content/3m.jpg" /></div>
            <div><img u="image" alt="Colombina" src="sites/all/themes/bootstrap/theme/content/colombina.png" /></div>
            <div><img u="image" alt="ios" src="sites/all/themes/bootstrap/theme/content/bayer.jpg" /></div>
            <div><img u="image" alt="joomla" src="sites/all/themes/bootstrap/theme/content/joomla.jpg" /></div>
            <div><img u="image" alt="linkedin" src="sites/all/themes/bootstrap/theme/content/linkedin.jpg" /></div>
            <div><img u="image" alt="mac" src="sites/all/themes/bootstrap/theme/content/mac.jpg" /></div>
            <div><img u="image" alt="magento" src="sites/all/themes/bootstrap/theme/content/magento.jpg" /></div>
            <div><img u="image" alt="pinterest" src="sites/all/themes/bootstrap/theme/content/pinterest.jpg" /></div>
            <div><img u="image" alt="samsung" src="sites/all/themes/bootstrap/theme/content/samsung.jpg" /></div>
            <div><img u="image" alt="twitter" src="sites/all/themes/bootstrap/theme/content/twitter.jpg" /></div>
            <div><img u="image" alt="windows" src="sites/all/themes/bootstrap/theme/content/windows.jpg" /></div>
            <div><img u="image" alt="wordpress" src="sites/all/themes/bootstrap/theme/content/wordpress.jpg" /></div>
            <div><img u="image" alt="youtube" src="sites/all/themes/bootstrap/theme/content/youtube.jpg" /></div>
        </div>
    </div>

<script type="text/javascript">
	jQuery(document).ready(function ($) {
    var options = {
        $AutoPlay: true,                            
        $AutoPlaySteps: 1,
        $AutoPlayInterval: 0,                           
        $PauseOnHover: 3,                     
        $ArrowKeyNavigation: true,            
        $SlideEasing: $JssorEasing$.$EaseLinear,      
        $SlideDuration: 3000,                           
        $MinDragOffsetToSlide: 20,                        
        $SlideWidth: 140,                                                  
        $SlideSpacing: 0,                         
        $DisplayPieces: 7,                               
        $ParkingPosition: 0,                           
        $UISearchMode: 1,                                
        $PlayOrientation: 1,                              
        $DragOrientation: 1                         
    };

    var jssor_slider1 = new $JssorSlider$("slider1_container", options);
    function ScaleSlider() {
        var bodyWidth = document.body.clientWidth;
        if (bodyWidth)
            jssor_slider1.$SetScaleWidth(Math.min(bodyWidth, 980));
        else
            window.setTimeout(ScaleSlider, 30);
    }
    ScaleSlider();
    if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
        $(window).bind('resize', ScaleSlider);
    }
});
</script>    