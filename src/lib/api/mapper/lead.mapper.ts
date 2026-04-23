import type { LeadEntity } from "@/lib/entity/lead.entity"
import type { LeadResponse } from "../response/lead.response"

export const mapLeadResponseToEntity = (lead: LeadResponse): LeadEntity => {
    return {
        firstname: lead.first_name,
        lastname: lead.last_name,
        email: lead.email,
        company: lead.company,
        city: lead.city,
        organizationType: lead.organization_type,
        source: lead.source
    }
}