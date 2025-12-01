//script.js

document.addEventListener("DOMContentLoaded", () => {
    const today = new Date();
    //get current day of the month
    const currentDay = today.getData();
    //const currentDay = 10;

    //custom content for each day
    const customContent = {
        1: {
            type: 'link',
            content: "https://music.amazon.com/user-playlists/da8121a3e8454c4086c1ac5946f4d213sune?ref=dm_sh_MWqcGxqrhKiyYEjQSfFnDb7cB",
            description: 'Enjoy this playlist I made for you!'
        },
        2: {
            type: 'image',
            content: "images/humanBean.jpg",
            description: 'Coffee is on me! :)'
        }


    };

    //Loop through each day (1 to 25)
    for (let i = 1; i <= 25; i++) {
        const dayElement = document.getElementById(`day${i}`);

        //disable buttons that are past the current day
        if (i > currentDay) {
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

//when a door is opened, store the progress
function openDoor(day) {
    //save progress in localStorage
    localStorage.setItem(`openedDay${day}`, true);
    
    //get the day element of the clicked day
    const dayElement = document.getElementById(`day${day}`);

    dayElement.classList.add('open');

    //get custom content for the day
    const content = customContent[day];

    //update the modal message with the correct day number
    const modalMessage = document.getElementById("modal-message");
    modalMessage.innerHTML = content.description;

    const modalContent = document.getElementById("modal-content");
    
    //clear previous content
    modalContent.innerHTML = '';
    
    //add the correct content to the modal based on the type
    if (content.type == 'link') {
        //Display a link (e.g. to a playlist)
        const link = document.createElement('a');
        link.href = content.content;
        link.textContent = 'Click here to view the playlist!';
        link.target = '_blank'; //opens a new tab
        modalContent.appendChild(link);
    } else if (content.type == 'image') {
       //create the image element
        const img = document.createElement('img');
        //display an image
        img.src = content.content;
        img.alt = content.description;
        img.style.width = '100%'; //adjust the image size here
        modalContent.appendChild(img);
    } else if (content.type === 'text'){
        //display a text message
        const text = document.createElement('p');
        text.textContent = content.content;
        modalContent.appendChild(text);
    }
    
    //show the modal
    const modal = document.getElementById("modal");
    //make it visible
    modal.style.display = "block";
    
    //Mark the door as opened visually
    //const dayElement = document.getElementById(`day${day}`);
    //dayElement.classList.add(`open`);
    

    //close modal when the "x" is clicked
    const closeBtn = document.getElementById("modal-close");
    closeBtn.onclick = function(){
        //hide the modal
        const modal = document.getElementById("modal");
        modal.style.display = "none";
    };

    //close modal if the user clicks outside of it
    window.onclick = function(event) {
        const modal = document.getElementById("modal");
        if (event.target === modal) {
            modal.style.display = "none";
            }
        };
    }
});