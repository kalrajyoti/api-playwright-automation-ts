import { test, expect } from '@playwright/test'
let _sys_id: string;
test("Put(Modify) an Incident", async ({ request, baseURL }) => {
    const _response = await request.put(`${baseURL}/${_sys_id}`, {
        data: {
            "short_description": "Very boring tutorial",
            "category": "Software"
        }
    });
    console.log(await _response.json());
    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();
})