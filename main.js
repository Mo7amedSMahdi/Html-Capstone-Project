const btnClose = document.getElementById('btnClose');
const btnMenu = document.getElementById('btnMenu');
const mobileNav = document.getElementById('mobileNav');
const speakersContainer = document.getElementById('speakers');

const speakers = [
  {
    id: 1,
    name: 'Yasser Al Mimar',
    image: 'images/speakers/Yasser-mimar.jpeg',
    work_background:
      'President of Iraqi Canadian Chamber of Commerce & Industry Coming from Canada.',
    desc: 'Yasser holds High Diploma in Technology and Digital Transformation from SAIT/Alberta, as well as an MBA in Leadership and Digital Organization from University of Cumbria (UK).',
  },
  {
    id: 2,
    name: 'Saman Bojan',
    image: 'images/speakers/Saman-Bojan.jpeg',
    work_background: 'Asiacell Telecom representative.',
    desc: 'Saman Bojan has engineering certificate of University of Technology in Baghdad. He has more than fourteen years of experience in the field of telecom companies, apart from having took part for many times in regional and international conferences in developing mobile communication networks and their legal and regulatory aspects.',
  },
  {
    id: 3,
    name: 'Safa Salwan',
    image: 'images/speakers/Safa-Salwan.jpeg',
    work_background: 'Careem Iraq’s Business Development Manager.',
    desc: 'She earned her mini-MBA from Harvard Business School, as well as Bachelor’s degree in Communications Engineering from University of Diyala. Safa is the Lead Organizer for Google Developers Groups, Women Techmakers and the Vice President of Arab Women In Computing committee.',
  },
  {
    id: 4,
    name: '',
    image: '',
    work_background: '',
    desc: '',
  },
  {
    id: 5,
    name: 'Chadi Hamouche',
    image: 'images/speakers/Chadi-Hamouche.jpeg',
    work_background: 'Oracle Iraq Territory Manager.',
    desc: 'Chadi Hamouche has more than11 Years of IT industry experience .Chadi is a holder of Computer and communications Engineering Degree from the Lebanese American University in Beirut.',
  },
  {
    id: 6,
    name: 'Yousif Khalaf',
    image: 'images/speakers/Yousif-Khalaf.jpeg',
    work_background:
      'Yousif Al-Dunainawi holds a PhD degree in AI from Brunel University London.',
    desc: 'He is a former Head of Postgraduate Department in the Ministry of Higher Education and Scientific Research in Iraq. The founder of Iraqi Academic Scientific Journals IASJ.net. Now, he is the Head of the Pioneer Projects Department in the same Ministry. He runs Iraq Virtual Science Library IVSL.org, through IVSL all Iraqi Researchers in the Iraq universities get access the leading global publishers.',
  },
];

btnMenu.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
  btnClose.classList.toggle('hidden');
  document.body.style.overflow = 'hidden';
});

btnClose.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
  btnClose.classList.toggle('hidden');
  document.body.style.overflow = 'auto';
});

function LoadSpeakers() {
  speakers.forEach((speaker) => {
    speakersContainer.innerHTML += `<div class="speaker flex">
                    <div class="left"><img src="${speaker.image}" alt="${speaker.name}"></div>
                    <div class="right flex column">
                        <h3>${speaker.name}</h3>
                        <p class="speaker__background">${speaker.work_background}</p>
                        <p class="speaker__body">${speaker.desc}</p>
                    </div>
                </div>`;
  });
}

document.addEventListener('DOMContentLoaded', LoadSpeakers, false);
