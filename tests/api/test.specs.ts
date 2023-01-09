import { expect ,test } from "@playwright/test"


test("get the incident details", async ({ request,baseURL}) => {
    const _reponse =request.get('${baseURL}'),{
        params: {
            task_effective_number: _number,
            sysparm_fields: 'short_description, category'
        }
    }
    
});
