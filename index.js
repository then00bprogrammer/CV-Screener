const data = [
    {
        name: 'Nikhil',
        age: 19,
        city: 'Kolkata',
        language: 'Python',
        Framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Nishant',
        age: 22,
        city: 'Kolkata',
        language: 'Python',
        Framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/men/76.jpg'
    },
    {
        name: 'Ritesh',
        age: 19,
        city: 'Bombay',
        language: 'Javascript',
        Framework: 'React',
        image: 'https://randomuser.me/api/portraits/men/77.jpg'
    },
    {
        name: 'Hrithik',
        age: 48,
        city: 'Mumbai',
        language: 'Java',
        Framework: 'None',
        image: 'https://randomuser.me/api/portraits/men/78.jpg'
    }
]


//CV Iterator
function cviterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true }
        }
    }
}
const candidates = cviterator(data);
nextCV();

const next= document.getElementById('next');
next.addEventListener('click',nextCV);
function nextCV(){
    const currentCandidate = candidates.next().value;
    let image=document.getElementById('image');
    let profile=document.getElementById('profile');
    if(currentCandidate!=undefined)
    {
    image.innerHTML=`<img src="${currentCandidate.image}">`;
    profile.innerHTML=`<ul class="list-group">
    <li class="list-group-item">${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">${currentCandidate.Framework}</li>
  </ul>`
    }
    else
    {
        alert('End of Candidate Applications');
        window.location.reload();
    }
}