import './fonts.scss';
import './index.scss';
import 'normalize.css';


document.addEventListener('DOMContentLoaded', function() {
    const checkboxManipulation = {
        checkboxGenerator: function(checkboxgen, checkboxArray){
            const arr = this.checkboxSort(checkboxArray);
            let innerData = '';
            arr.forEach((element, i) => {
                innerData += 
                    '<div class="companyform_checkboxwrapper">' +
                        '<span class="companyform_checkbox"></span>' +
                        '<label class="companyform_checkbox-label" for="companyform_checkbox'+i+'">' 
                        + element + 
                        '</label>' +
                        '<input type="checkbox" id="companyform_checkbox'+i+'">' +
                    '</div>';
            });
            document.getElementById(checkboxgen).innerHTML = innerData;
        },
        checkboxSort: function(checkboxArray){
            return checkboxArray.sort();
        }
    };

    const checkboxArray = ['БЭМ/OOCSS', 'Pug (Jade)', 'Stylus/LESS/SASS', 'Работаю с SVG', 'Верстаю семантично', 'Accessibility (A11Y)', 'ES2015/ES2016', 'Gulp/GRUNT', 'Webpack', 'Дружу с WebGL',
    'jQuery', 'Знаю/изучаю Angular', 'Знаю/изучаю React', 'Знаю/изучаю Node.js'];

    checkboxManipulation.checkboxGenerator('checkboxgen', checkboxArray);

 }, false);

