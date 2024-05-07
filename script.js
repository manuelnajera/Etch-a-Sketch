let titleLabel = document.querySelector('#title');
let subtitleLabel = document.querySelector('#subtitle');


getLanguage();

function getLanguage() {
    (localStorage.getItem('language') == null) ? setLanguage('en') : false;
    $.ajax({ 
    url:  'language/' +  localStorage.getItem('language') + '.json', 
    dataType: 'json',
    success: function (lang) { 
        language = lang 
        applyLanguage();
    },
    error: function(xhr,status,error){
        console.error("Error fetching language file", error, status, xhr);
    } 

});
};


function setLanguage(lang) {
    localStorage.setItem('language', lang);
    $(document).ready(function(){
        getLanguage();
    });
    };
    
    function applyLanguage(){
        $(document).attr("title" , language.title);
        $('#langBtn').text(language[localStorage.getItem('language') ])
        $('#esLang').text(language.es)
        $('#enLang').text(language.en)
        $('#title').text(language.title);
        $('#subtitle').text(language.subtitle);
        $('#restartButton').text(language.restart);
        $('#createGridButton').text(language.createGrid);
       // $('#choose-move').text(language['choose-move']);
    };



    document.addEventListener('click', (event) => {
        let target = event.target;
    
        switch(true){  
            case target.id === 'enLang':
                setLanguage('en');
                break;
            case target.id === 'esLang':
                setLanguage('es');
                break;
            case target.id === 'restartButton':
                
                break;
            case target.id === 'createGridButton':
                
                break;
        }
    });