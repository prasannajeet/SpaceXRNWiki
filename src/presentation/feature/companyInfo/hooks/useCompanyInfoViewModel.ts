import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react"
import { COMPANY_INFO_QUERY } from "../../../../data/graphql/gql-queries/CompanyInfo";


export const useCompanyInfoViewModel = () => {
    // State Object
    const { loading, error, data } = useQuery(COMPANY_INFO_QUERY);
    return {loading, error, data};
}
