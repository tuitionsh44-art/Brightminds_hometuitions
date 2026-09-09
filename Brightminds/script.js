
const TUTOR_GOOGLE_FORM_URL = ""; // Paste your real Google Form URL here when you create it.
function openTutorApplication(){
  if(TUTOR_GOOGLE_FORM_URL.trim()) window.open(TUTOR_GOOGLE_FORM_URL,'_blank','noopener');
  else window.location.href='tutor-application.html';
}
function toggleMenu(){document.querySelector('.navlinks')?.classList.toggle('open')}
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.navlinks')?.classList.remove('open')));
});
