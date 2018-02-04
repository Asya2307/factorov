import './fonts.scss';
import './index.scss';
import 'normalize.css';
import './responce.scss';
const autosize = require('autosize');
const slider = require('./slider.js');

document.addEventListener('DOMContentLoaded', function() {
    const checkboxManipulation = {
        checkboxGenerator: function(checkboxgen, checkboxArray){
            const arr = this.checkboxSort(checkboxArray);
            let innerData = '';
            arr.forEach((element, i) => {
                innerData += 
                    '<div class="companyform_checkboxwrapper">' +
                        '<input type="checkbox" id="companyform_checkbox'+i+'">' +
                        '<span class="companyform_checkbox"></span>' +
                        '<label class="companyform_checkbox-label" for="companyform_checkbox'+i+'">' 
                        + element + 
                        '</label>' +
                    '</div>';
            });
            document.getElementById(checkboxgen).innerHTML = innerData;
        },
        checkboxSort: function(checkboxArray){
            let map = checkboxArray.map(function(e, i) {
                return { index: i, value: e.toLowerCase() };
            });
            map.sort(function(a, b) {
                return +(a.value > b.value) || +(a.value === b.value) - 1;
            });
            let result = map.map(function(e) {
                return checkboxArray[e.index];
            });
            return result;
        }
    };

    const checkboxArray = ['БЭМ/OOCSS', 'Pug (Jade)', 'Stylus/LESS/SASS', 'Работаю с SVG', 'Верстаю семантично', 'Accessibility (A11Y)', 'ES2015/ES2016', 'Gulp/GRUNT', 'Webpack', 'Дружу с WebGL',
    'jQuery', 'Знаю/изучаю Angular', 'Знаю/изучаю React', 'Знаю/изучаю Node.js'];

    checkboxManipulation.checkboxGenerator('checkboxgen', checkboxArray);
    const mysl1 = new slider('slidergen', 0, 100, 5);
    autosize(document.querySelector('textarea'));

 }, false);

