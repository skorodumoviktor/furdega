import axios from "../axios"
import {
  CompanyBenefitsSectionCreateRequest,
  CompanyBenefitsSectionResponse,
  CompanyBenefitsSectionUpdateRequest,
} from "../../types/home/benefits"

const BASE_URL = "/api/sections/company-benefits"

const companyBenefitsApi = {
  get: async (): Promise<CompanyBenefitsSectionResponse> => {
    const response = await axios.get<CompanyBenefitsSectionResponse>(BASE_URL)
    return response.data
  },

  create: async (
    request: CompanyBenefitsSectionCreateRequest
  ): Promise<void> => {
    await axios.post(BASE_URL, request)
  },

  update: async (
    request: CompanyBenefitsSectionUpdateRequest
  ): Promise<void> => {
    await axios.put(BASE_URL, request)
  },
}

export { companyBenefitsApi }
