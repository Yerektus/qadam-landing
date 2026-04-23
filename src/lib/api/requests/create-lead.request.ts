import { request } from "../api";
import { mapLeadResponseToEntity } from "../mapper/lead.mapper";
import type { LeadResponse } from "../response/lead.response";


export type CreateLeadBody = {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  city: string;
  organization_type: string;
  source: string;
};

export async function createLead(body: CreateLeadBody) {
    const { data } = await request.post<LeadResponse>("/api/leads", body);

    return mapLeadResponseToEntity(data)
}