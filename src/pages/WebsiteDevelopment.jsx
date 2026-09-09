import ServiceLanding from '../components/ServiceLanding.jsx'
import { SERVICE_PAGES } from '../data/servicePages.js'

export default function WebsiteDevelopment() {
  return <ServiceLanding service={SERVICE_PAGES.website} />
}