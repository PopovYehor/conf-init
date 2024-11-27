//url for get data
/* const urlPage = 'http://localhost:3000/' */// for local use
const urlPage = 'https://conf-init.vercel.app/' // for regular use
/* const urlPage = 'https://svp.org.ua/' */ // for future use
/* const url = 'http://localhost:5000/'  */// for local use
const url = 'https://konf-backend.onrender.com/' // for regular use

// url const for get data from backend in pages
//main
const main = "main"
const  worth = "worth"
const  events = "events"
const  image = "image"
const  contact = "contact"
const  partner = "partner"
const  help = "help"
//_________
//about-us
const sectionAbout = 'sectionabout';
const aboutUs = "about-us";
const member = "member";
//______________
//our projects
const ourProjects = 'ourproject'
const project = 'project'
//_____________
//Support Us
const requisits = 'requisit'
const requisitsCurrency = 'currencyrequisit'
const report = 'report'
//______________
//Volunteers
const VolunteersSection = 'sectionvolontir'
const VolunteersSlider = "gallery";
//______________

//language parameter for get the data in the desired language
export const languageParameter = "?language="

export const apiUrls = { // urls for get data in different pages
  urlPage: urlPage,
  url: url,
  //main
  mainUrl: url + main,
  worthUrl: url + worth,
  eventsUrl: url + events,
  imageUrl: url + image,
  contactUrl: url + contact,
  partnerUrl: url + partner,
  helpUrl: url + help,
  //_______________
  //about
  aboutUs: url + aboutUs,
  sectionAbout: url + sectionAbout,
  member: url + member,
  //__________
  //our projects
  ourProjects: url+ourProjects,
  projects: url+project,
  //__________
  //Support Us
  requisits: url + requisits,
  requisitsCurrency: url + requisitsCurrency,
  report: url + report,
//______________
//Volunteers
  volunteersSection: url + VolunteersSection,
  VolunteersSlider: url +  VolunteersSlider
//______________
};
export const googleForm = 'https://docs.google.com/forms/d/e/1FAIpQLSd1xaeCYoSMucIhInHujyJtK95an2ZMGh5sPRQuJaPf1JHqng/viewform' // const link for google form for join volunters

export const supportUrl = 'https://www.liqpay.ua/' // const for liqpay donate
export const paypalUrl = 'https://www.paypal.com/' // const for paypal donate
export const monobankUrl = 'https://monobank.ua/' // const for monobank donate

export const facebookUrl = 'https://www.facebook.com/profile.php?id=61559370821121' //const for facebook page
export const instagramUrl = 'https://www.instagram.com/conf.bmv/' //const for instagram page
export const publicOfferUrl = 'https://drive.google.com/file/d/1V0Z2kltb6IRcOAZONEQphSvhnsYfvtHv/view'; //const for publick offer document link
export const privacyPolicyUrl = 'https://drive.google.com/file/d/1u5EJLKih1SGQ_py_6P6iIQ7UwviwxXTE/view'; //const for privacy politic document link