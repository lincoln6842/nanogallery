var imageprocess = function () {
  return {};
};

imageprocess.JS = (function () {
  return {
    init: function () {
      var jdata;
      var imgItems = [];
      var input = document.getElementById("searchBar");
      var baseURL = "https://imgbank.shopper360.com.my/synergyplus";
      var processfile = $.ajax("process.php")
        .done(function(data){
          jdata = JSON.parse(data);
          $.each(JSON.parse(data), function(i,item){
            console.log("RAN");
            imgItems[i] = {
              src: item["Photo"],
              srct: item["Photo"],
              title: item["Project_Outlet_Code"],
              tags: item["Filter_Category"],
              description: "Taken in: " + item["Trx_Date"] +" by: "+item["Full_Name"],
              exifLocation:  item["Project_Outlet_Name"]
            }
          });

          input.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("searchBtn").click();
            }
          });
          
            $('#imagediv').nanogallery2( {
                data : jdata,
                items : imgItems,
                itemsBaseURL: baseURL,
                thumbnailWidth:  250,
                thumbnailHeight: 250,

                displayBreadcrumb: true,
                galleryFilterTags: true,
                galleryFilterTagsMode: 'multiple',
                galleryDisplayMode: 'pagination',

                thumbnailLabel:     { display: true, position:'overImageOnTop', hideIcons: true, titleFontSize: '1.5em', align: 'left'},
                thumbnailToolbarImage :  { topLeft: 'select', bottomRight : 'featured,display,info,cart' },
                thumbnailHoverEffect2: 'imageBlurOff|toolsSlideUp',
                fnPopupMediaInfo: my_popup_info,
                
                galleryTheme : { 
                  thumbnail: { borderRadius: '10px', background: '#fff', titleShadow : 'none', titleColor: '#000', labelBackground: '#ff0' },
                  thumbnailIcon: { color: '#ffffff', shadow: 'none' },
                  navigationBreadcrumb: { background : '#3C4B5B' },
                  navigationFilter: { background : '#003C3F', backgroundSelected: '#2E7C7F', color: '#fff' }
                },
            });

            function my_popup_info(item, title, content){
              var my_title = title + ' <b>nanoGallery2</b>';
              var my_content = content + '<br><br>[The content of this popup can be customized with some javascript.]';
              return {title: my_title, content: my_content};
            }

            $('#searchBtn').on('click', function(){
              if(!$('#imagediv').nanogallery2('search', document.getElementById("searchBar").value)){
                alert(document.getElementById("searchBar").value + " Not Found");
                location.reload();
              }
            });
        })
        .fail(function(){
            alert("Error found");
        })
        .always(function(){
            console.log("IS THIS RUN");
        });
    }
  };
})();

(function () {
  jQuery(document).ready(function () {
    imageprocess.JS.init();
  });
})();
