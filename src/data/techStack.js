export const TECH_STACK = [
  { name: 'HTML5', cat: 'Frontend', icon: '/src/assets/tech-icons/html5.svg' },
  { name: 'CSS3', cat: 'Frontend', icon: '/src/assets/tech-icons/css3.svg' },
  { name: 'JavaScript', cat: 'Frontend', icon: '/src/assets/tech-icons/javascript.svg' },
  { name: 'React', cat: 'Frontend', icon: '/src/assets/tech-icons/react.svg' },
  { name: 'Next.js', cat: 'Frontend', icon: '/src/assets/tech-icons/nextjs.svg', iconDark: '/src/assets/tech-icons/nextjs-dark.svg' },
  { name: 'Angular', cat: 'Frontend', icon: '/src/assets/tech-icons/angular.svg', iconDark: '/src/assets/tech-icons/angular-dark.svg' },
  { name: 'Node.js', cat: 'Backend', icon: '/src/assets/tech-icons/nodejs.svg' },
  { name: 'PHP', cat: 'Backend', icon: '/src/assets/tech-icons/php.svg' },
  { name: 'MySQL', cat: 'Backend', icon: '/src/assets/tech-icons/mysql.svg' },
  { name: 'Firebase', cat: 'Backend', icon: '/src/assets/tech-icons/firebase.svg' },
  { name: 'Java', cat: 'Backend', icon: '/src/assets/tech-icons/java.svg' },
  { name: 'AWS', cat: 'Cloud & Tools', icon: '/src/assets/tech-icons/aws.svg', iconDark: '/src/assets/tech-icons/aws-dark.svg' },
  { name: 'Azure', cat: 'Cloud & Tools', icon: '/src/assets/tech-icons/azure.svg', iconDark: '/src/assets/tech-icons/azure-dark.svg' },
  { name: 'Git', cat: 'Cloud & Tools', icon: '/src/assets/tech-icons/git.svg' },
  { name: 'Figma', cat: 'Cloud & Tools', icon: '/src/assets/tech-icons/figma.svg' },
  { name: 'Power BI', cat: 'Cloud & Tools', icon: '/src/assets/tech-icons/powerbi.svg', iconDark: '/src/assets/tech-icons/powerbi-dark.svg' },
  { name: 'Flutter', cat: 'Mobile', icon: '/src/assets/tech-icons/flutter.svg' },
  { name: 'Unity', cat: 'Mobile', icon: '/src/assets/tech-icons/unity-light.svg', iconDark: '/src/assets/tech-icons/unity.svg' },
]

const HOME_NAMES = new Set([
  'HTML5', 'JavaScript', 'React', 'Node.js', 'Firebase', 'AWS', 'Figma', 'Flutter',
])

export const HOME_TECH = TECH_STACK.filter((t) => HOME_NAMES.has(t.name))
