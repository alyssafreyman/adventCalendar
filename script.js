//script.js

document.addEventListener("DOMContentLoaded", () => {
    const today = new Date();
    //get current day of the month
    const currentDay = today.getDate();
    // const currentDay = 25;

    //custom content for each day
    const customContent = {
        1: {
            content: [
            {
                type: 'image',
                content: "images/playlist.jpg",
                width: '60%',
                height: 'auto'
            },
            {
                type: 'text',
                content: 'Enjoy this playlist I made for you!',
                // width: '60%',
            },
            {
                type: 'link',
                content: "https://music.amazon.com/user-playlists/da8121a3e8454c4086c1ac5946f4d213sune?ref=dm_sh_MWqcGxqrhKiyYEjQSfFnDb7cB",
                // description: 'Enjoy this playlist I made for you!',
            }
         ],
         background: "images/wallpaper1.jpg"
        },

        2: {
            content: [
            {
            type: 'image',
            content: "images/humanBean.jpg",
            width: 'auto',
            height: '50%',
            // description: 'Coffee is on me! :)',
        },
        {
            type: 'text',
            content: 'Coffee is on me today :)',
            },
            ],
        background: "images/wallpaper2.jpg"
    },

    3: {
            content: [
            {
            type: 'image',
            content: "images/snoopy.jpg",
            width: '70%',
            height: 'auto',
            
        },
        {
            type: 'text',
            content: 'Reflection Prompt:',
            },
            
            {
            type: 'text',
            content: 'Take about 2 minutes to think of a favorite holiday memory and share with the family later.',
            },

            ],
        background: "images/wallpaper3.jpg"
    },

4: {
            content: [
            {
                type: 'image',
                content: "images/STfireplace.jpg",
                width: '100%',
                height: 'auto'
            },
            {
                type: 'text',
                content: 'Some Stranger Things holiday ambience while you work...',
                // width: '60%',
            },
            {
                type: 'link',
                content: "https://www.netflix.com/title/82134925",
            }
         ],
         background: "images/wallpaper6.jpg"
        },

5: {
            content: [
            {
            type: 'image',
            content: "images/christmasCarol.jpg",
            width: 'auto',
            height: '90%',
            
        },
        {
            type: 'text',
            content: 'Christmas Carol Day! See you tonight!',
            },
            ],
        background: "images/wallpaper5.jpg"
    },
6: {
            content: [
            {
            type: 'image',
            content: "images/elfMovie.jpg",
            width: 'auto',
            height: '90%',
            
        },
        {
            type: 'text',
            content: 'Movie Night!',
            },
            {
            type: 'text',
            content: 'Draw a number 1-4 to decide who picks the movie tonight.',
            },
            ],
        background: "images/wallpaper4.jpg"
    },
7: {
            content: [
            {
            type: 'image',
            content: "images/christmasMovie.jpg",
            width: 'auto',
            height: '80%',
            
        },
        {
            type: 'text',
            content: 'Test your Christmas movie knowledge with this crossword:',
            },
            {
            type: 'link',
            content: "https://docs.google.com/document/d/1bpjvjPzWrFi2BqJa5EpYsD2TCaB3i-bW0hA5MJBOsrA/edit?usp=sharing",
            },
            ],
        background: "images/wallpaper1.jpg"
    },
8: {
            content: [
            {
            type: 'image',
            content: "images/christmasGratitude.jpg",
            width: 'auto',
            height: '90%',
            
        },
        {
            type: 'text',
            content: 'Reflection Prompt:',
            },
            {
            type: 'text',
            content: 'Write down five things that you are grateful for this season and share with the family later.',
            },
            ],
        background: "images/wallpaper3.jpg"
    },
9: {
            content: [
            {
            type: 'image',
            content: "images/firstAdventCalendar.jpg",
            width: '60%',
            height: 'auto%',
            
        },
        // {
        //     type: 'text',
        //     content: 'Fun Fact',
        //     },
            {
            type: 'text',
            content: 'Did you know that advent calendars started with German Protestants making chalk marks or lighting candles to count down to Christmas? It evolved into printed versions in the early 1900s, and chocolate ones appeared in the 1950s after President Eisenhower popularized them in the U.S.',
            },
            ],
        background: "images/wallpaper2.jpg"
    },
10: {
            content: [
            {
            type: 'image',
            content: "images/spa.jpg",
            width: 'auto',
            height: '90%',
            
        },
        {
            type: 'text',
            content: 'IOU:',
            },
            {
            type: 'text',
            content: 'An at-home spa day! Expect face and hand masks soon.',
            },
            ],
        background: "images/wallpaper4.jpg"
    },
11: {
            content: [
            {
            type: 'image',
            content: "images/boardGame.jpg",
            width: 'auto',
            height: '90%',
            
        },
        {
            type: 'text',
            content: 'Game Night!',
            },
            {
            type: 'text',
            content: '(can you guess that Christmas movie?)',
            },
            ],
        background: "images/wallpaper5.jpg"
    },
    12: {
            content: [
            {
            type: 'image',
            content: "images/hotCocoaFlight.jpg",
            width: 'auto',
            height: '90%',
            
        },
        {
            type: 'text',
            content: 'Hot Cocoa tonight!',
            },
            {
            type: 'text',
            content: 'We will be making some hot chocolate bombs with a toppings bar!',
            },
            ],
        background: "images/wallpaper6.jpg"
    },
13: {
            content: [
            {
            type: 'image',
            content: "images/homeAlone.jpg",
            width: 'auto',
            height: '90%',
            
        },
        {
            type: 'text',
            content: 'Movie Night!',
            },
            {
            type: 'text',
            content: 'Draw a number 1-3 to decide who picks the movie tonight.',
            },
            ],
        background: "images/wallpaper1.jpg"
    },
    14: {
            content: [
            {
            type: 'image',
            content: "images/puzzles.jpg",
            width: '50%',
            height: 'auto',
            
        },
        {
            type: 'text',
            content: 'Start a puzzle and put on some Christmas music!',
            },
            // {
            // type: 'text',
            // content: 'Draw a number 1-3 to decide who picks the movie tonight.',
            // },
            ],
        background: "images/wallpaper1.jpg"
    },

 15: {
            content: [
            {
            type: 'image',
            content: "images/goals.jpg",
            width: '90%',
            height: 'auto',
            
        },
        {
            type: 'text',
            content: 'Reflection Prompt:',
            },
            {
            type: 'text',
            content: 'What is one thing that you are proud of accomplishing this year, and what is a goal you have for next year?',
            },
            ],
        background: "images/wallpaper2.jpg"
    },
16: {
            content: [ 
            {
            type: 'image',
            content: "images/stockings.jpg",
            width: '50%',
            height: 'auto',
            
        },
        {
            type: 'text',
            content: 'Christmas stockings originated from the legend of St. Nicholas. He would secretly drop gold coins down the chimney, where they landed in stockings drying by the fire. This led to the tradition of hanging them for Santa to fill with goodies like fruit, nuts, and small toys. Oranges often symbolize the original gold.',
            },
            // {
            // type: 'text',
            // content: 'Draw a number 1-3 to decide who picks the movie tonight.',
            // },
            ],
        background: "images/wallpaper3.jpg"
    },

17: {
            content: [ 
            {
            type: 'image',
            content: "images/bremenMarket.jpg",
            width: '100%',
            height: 'auto',
            
        },
    
        {
            type: 'text',
            content: 'Enjoy this 360 degree walkthrough of the Christmas markets in Bremen, Germany.',
            },
            {
                type: 'link',
                content: "https://youtu.be/mJSxxRROW4g?si=YxTPC-XtgEcrmfN4",
                // description: 'Enjoy this playlist I made for you!',
            }

            ],
        background: "images/wallpaper4.jpg"
    },
    18: {
            content: [ 
            {
            type: 'image',
            content: "images/grinchCookies.jpg",
            width: '55%',
            height: 'auto',
            
        },
        {
            type: 'text',
            content: 'Found a Grinch cookie recipe for us to try!',
            },

            {
                type: 'link',
                content: "https://rosebakes.com/easy-grinch-cookies-recipe-no-cake-mix/",
                // description: 'Enjoy this playlist I made for you!',
            },
            {
            type: 'text',
            content: 'What is your favorite Christmas cookie or dessert?',
            },

            ],
        background: "images/wallpaper5.jpg"
    },
    19: {
            content: [ 
            {
            type: 'image',
            content: "images/cooking.jpg",
            width: '100%',
            height: 'auto',
            
        },
        {
            type: 'text',
            content: 'Happy Friday!',
            },
            {
            type: 'text',
            content: 'I will be making dinner tonight, so you both can just relax and have your wine time.',
            },
            ],
        background: "images/wallpaper6.jpg"
    },
    20: {
            content: [ 
            {
            type: 'image',
            content: "images/rudolph.jpg",
            width: '90%',
            height: 'auto',
            
        },
        {
            type: 'text',
            content: 'Movie Night - Double Feature this weekend!',
            },
            {
            type: 'text',
            content: 'Draw a number between 1-3 to decide who picks the movie tonight.',
            },
            ],
        background: "images/wallpaper1.jpg"
    },

21: {
        content: [ 
            {
            type: 'image',
            content: "images/nativity.jpg",
            width: '90%',
            height: 'auto',
            
        },
        {
            type: 'text',
            content: 'Enjoy this short poem by Marian Swinger:',
            },
            {
           type: 'link',
                content: "https://www.canva.com/design/DAG7vLOcphQ/tLPyIPusU9K5Xgr1VlqiQg/view?utm_content=DAG7vLOcphQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7cf28eeddb",
                // description: 'Enjoy this playlist I made for you!',
            }
            ],
        background: "images/wallpaper1.jpg"
    },




};

    //Loop through each day (1 to 25)
    for (let i = 1; i <= 25; i++) {
        const dayElement = document.getElementById(`day${i}`);

        //disable buttons that are past the current day
        if (i > currentDay && !localStorage.getItem('openedDay${i}')) {
            dayElement.classList.add('disabled');
            dayElement.onclick = () => alert("You can't open this yet!");
        } else {
            dayElement.classList.remove('disabled');
            dayElement.onclick = () => openDoor(i);
        }
        //check if the user has already opened a day and set it to 'open'
        if (localStorage.getItem(`openedDay${i}`)){
            dayElement.classList.add(`open`);
        }
    }

function openDoor(day) {
    // Save progress in localStorage
    console.log(`Opening Day ${day}`);
    localStorage.setItem(`openedDay${day}`, true);

    // Get the day element of the clicked day
    const dayElement = document.getElementById(`day${day}`);
    dayElement.classList.add('open');

    // Get custom content for the day
    const content = customContent[day];

    // Update modal date
    const modalDate = document.getElementById("modal-date");
    modalDate.textContent = `December ${day}`;

    // Update modal message
    const modalMessage = document.getElementById("modal-message");
    modalMessage.textContent = content.description || "";

    // Clear previous inner content
    const modalContentInner = document.getElementById("modal-content-inner");
    modalContentInner.innerHTML = '';

    // Modal elements
    const modalBackgroundImg = document.getElementById("modal-background-img");
    const modalOverlayImg = document.getElementById("modal-overlay-img");

    // Reset
    modalOverlayImg.style.display = 'none';
    modalBackgroundImg.style.display = 'none';

    // Handle different content types
    content.content.forEach(item => {
    if (item.type === 'link') {
        const link = document.createElement('a');
        link.href = item.content;
        link.textContent = 'Click here to view';
        link.target = '_blank';
        modalContentInner.appendChild(link);
    } else if (item.type === 'image') {
        const image = document.createElement('img');
        image.src = item.content;
        image.alt = 'Content image';

        // Apply specific width and height if available
        if (item.width) {
            image.style.width = item.width; // Apply width if defined
        }
        if (item.height) {
            image.style.height = item.height; // Apply height if defined
        }

        image.style.maxWidth = '100%'; // Ensure the image fits inside the modal
        image.style.display = 'block'; // Ensure it's a block element
        image.style.margin = '0 auto'; // This centers the image

        modalContentInner.appendChild(image);
    } else if (item.type === 'text') {
        const text = document.createElement('p');
        text.textContent = item.content;
        modalContentInner.appendChild(text);
    }
});

    // Set modal background image if available
    if (content.background) {
        modalBackgroundImg.src = content.background;
        modalBackgroundImg.style.display = 'block';

        // Optionally, hide overlay until image loads for smooth display
        modalBackgroundImg.onload = () => {
            // Adjust modal-body size if needed
            const modalBody = document.getElementById("modal-body");
            // modalBody.style.width = modalBackgroundImg.naturalWidth + "px";
            // modalBody.style.height = modalBackgroundImg.naturalHeight + "px";
        }
    }

    // Show the modal
    const modal = document.getElementById("modal");
    modal.style.display = "block";
}

    //close modal when the "x" is clicked
    const closeBtn = document.getElementById("modal-close");
        //hide the modal
    const modal = document.getElementById("modal");
    
    closeBtn.onclick =() => modal.style.display = "none";
    //     modal.style.display = "none";
    // };

    //close modal if the user clicks outside of it
    window.onclick = (event) => {
        // const modal = document.getElementById("modal");
        if (event.target === modal) modal.style.display = `none`;
            // modal.style.display = "none";
            // }
        };
});