'use strict';

var fishConfig = {

    animations: [
        {
            'name': 'Moving Head',
            'description': 'You KNOW fish',
            'file': 'moving-head.gif',
        },
        {
            'name': 'Moving Tail',
            'description': 'Alive but do not feel',
            'file': 'moving-tail.gif',
        },
        {
            'name': 'Moving Head and Tail',
            'description': 'Delicious!',
            'file': 'moving-head-and-tail.gif',
        },
        {
            'name': 'Curling Sides',
            'description': 'Feels pleasure but not pain',
            'file': 'curling-sides.gif',
        },
        {
            'name': 'Turns Over',
            'description': 'Undecided',
            'file': 'turns-over.gif',
        },
        {
            'name': 'Motionless',
            'description': 'You feel nothing, they feel nothing',
            'file': 'motionless.gif',
        },
        {
            'name': 'Curls up entirely',
            'description': 'Fully sentient beings',
            'file': 'curls-up.gif',
        },
    ],
    imagePath: 'images/fish',
    tiltAngleThreshold: 15,
};

class Fish {
    constructor(availableReadingsList, readingResult, fishConfig) {
        this.availableReadingsList = availableReadingsList;
        this.readingResult = readingResult;
        this.fishConfig = fishConfig;
    }

    init() {
        let elem = document.getElementById(this.availableReadingsList);
        elem.innerHTML = '';

        this.choice = Math.floor(Math.random() * this.fishConfig.animations.length);
        var template = document.querySelector('#item-template');

        let x = 0;

        for (var animation of this.fishConfig.animations) {
            if (animation.name=="Motionless") { 
                // add default-fish image
                var img = document.createElement('img');
                img.classList.add('img-fluid');
                img.classList.add('default-fish');
                img.src = this.fishConfig.imagePath + '/' + animation.file;
                img.alt = "Image of motionless fish";
                document.getElementById(this.readingResult).appendChild(img);
            }
        }

        for (var animation of this.fishConfig.animations) {

            var listItem = template.content.cloneNode(true);
            listItem.querySelectorAll('td')[0].innerHTML = animation.name;
            listItem.querySelectorAll('td')[2].innerHTML = animation.description;

            if (this.choice == x) {

                listItem.querySelectorAll('td')[1].innerHTML = '<svg aria-hidden="true" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-double-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">                <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>                <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>              </svg>';

                listItem.querySelector('tr').classList.add('table-active');
                if (listItem.childNodes.length > 0) { 
                    elem.insertBefore(listItem, elem.childNodes[0]);
                } else { 
                    elem.appendChild(listItem);
                }

                // add fish image
                var img = document.createElement('img');
                img.classList.add('img-fluid');
                img.src = this.fishConfig.imagePath + '/' + animation.file;
                img.alt = "Image of fish movement - " + animation.name;
                document.getElementById(this.readingResult).appendChild(img);

            } else { 
                
                listItem.querySelector('tr').classList.add('table-inactive');
                elem.appendChild(listItem);
            }
            x++;
        }
    }


    startReading() {
        $('#message').html('<h2>To discover your true feelings, the AnNex Fish must swim freely through your mind</h2>');
        var _self = this;
        setTimeout(function() { _self.doProcess() }, 5000);
    }
    
    doProcess() {
        $('#message').addClass('hide');
        setTimeout(function() {$('#process').addClass('go'); }, 1000);
        var _self = this;
        setTimeout(function() { _self.doReveal() }, 21000);
    }

    doReveal(){ 
        $('.flat img.default-fish').remove();
        $('.flat img').css('display', 'block');
        $('.flat img').css('opacity', 1);
        
        setTimeout(function() {
            $('.available-readings').addClass('go');
            $('.available-readings table').css('opacity', 0.01);
         }, 1000);

         setTimeout(function() {
            $('.available-readings table').css('opacity', 1);
         }, 2000);
         
        $('#continue').show();
    }


}