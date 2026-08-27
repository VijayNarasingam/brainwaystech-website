import html5Icon from '../assets/tech-icons/html5.svg'
import css3Icon from '../assets/tech-icons/css3.svg'
import javascriptIcon from '../assets/tech-icons/javascript.svg'
import reactIcon from '../assets/tech-icons/react.svg'
import nextjsIcon from '../assets/tech-icons/nextjs.svg'
import nextjsDarkIcon from '../assets/tech-icons/nextjs-dark.svg'
import angularIcon from '../assets/tech-icons/angular.svg'
import angularDarkIcon from '../assets/tech-icons/angular-dark.svg'
import nodejsIcon from '../assets/tech-icons/nodejs.svg'
import phpIcon from '../assets/tech-icons/php.svg'
import mysqlIcon from '../assets/tech-icons/mysql.svg'
import firebaseIcon from '../assets/tech-icons/firebase.svg'
import javaIcon from '../assets/tech-icons/java.svg'
import awsIcon from '../assets/tech-icons/aws.svg'
import awsDarkIcon from '../assets/tech-icons/aws-dark.svg'
import azureIcon from '../assets/tech-icons/azure.svg'
import azureDarkIcon from '../assets/tech-icons/azure-dark.svg'
import gitIcon from '../assets/tech-icons/git.svg'
import figmaIcon from '../assets/tech-icons/figma.svg'
import powerbiIcon from '../assets/tech-icons/powerbi.svg'
import powerbiDarkIcon from '../assets/tech-icons/powerbi-dark.svg'
import flutterIcon from '../assets/tech-icons/flutter.svg'
import unityLightIcon from '../assets/tech-icons/unity-light.svg'
import unityIcon from '../assets/tech-icons/unity.svg'

export const TECH_STACK = [
  { name: 'HTML5', cat: 'Frontend', icon: html5Icon },
  { name: 'CSS3', cat: 'Frontend', icon: css3Icon },
  { name: 'JavaScript', cat: 'Frontend', icon: javascriptIcon },
  { name: 'React', cat: 'Frontend', icon: reactIcon },
  { name: 'Next.js', cat: 'Frontend', icon: nextjsIcon, iconDark: nextjsDarkIcon },
  { name: 'Angular', cat: 'Frontend', icon: angularIcon, iconDark: angularDarkIcon },
  { name: 'Node.js', cat: 'Backend', icon: nodejsIcon },
  { name: 'PHP', cat: 'Backend', icon: phpIcon },
  { name: 'MySQL', cat: 'Backend', icon: mysqlIcon },
  { name: 'Firebase', cat: 'Backend', icon: firebaseIcon },
  { name: 'Java', cat: 'Backend', icon: javaIcon },
  { name: 'AWS', cat: 'Cloud & Tools', icon: awsIcon, iconDark: awsDarkIcon },
  { name: 'Azure', cat: 'Cloud & Tools', icon: azureIcon, iconDark: azureDarkIcon },
  { name: 'Git', cat: 'Cloud & Tools', icon: gitIcon },
  { name: 'Figma', cat: 'Cloud & Tools', icon: figmaIcon },
  { name: 'Power BI', cat: 'Cloud & Tools', icon: powerbiIcon, iconDark: powerbiDarkIcon },
  { name: 'Flutter', cat: 'Mobile', icon: flutterIcon },
  { name: 'Unity', cat: 'Mobile', icon: unityLightIcon, iconDark: unityIcon },
]

const HOME_NAMES = new Set([
  'HTML5', 'JavaScript', 'React', 'Node.js', 'Firebase', 'AWS', 'Figma', 'Flutter',
])

export const HOME_TECH = TECH_STACK.filter((t) => HOME_NAMES.has(t.name))
