import { gql } from "@apollo/client";

export const COMPANY_INFO_QUERY = gql`
    query {
        company {
            ceo
            coo
            cto
            cto_propulsion
            employees
            founded
            founder
            headquarters {
            address
            city
            state
            }
            launch_sites
            summary
            test_sites
            valuation
            vehicles
        }
    }
`