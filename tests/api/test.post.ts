import { expect, test } from "@playwright/test";
let _number: number;
let _sys_id: string;
const short_description = "required ms office 365"
test("Create an Incident", async ({ request, baseURL }) => {
    const _response = await request.post(`${baseURL}`, {
        data: {
            "short_description": short_description,
            "category": "hardware"
        }, headers: {
            "Accept": "application/json"
        }
    });
    expect(_response.status()).toBe(201);
    expect(_response.ok()).toBeTruthy();
    console.log(await _response.json());
    const res = await _response.json();
    _number = res.result.task_effective_number;
    _sys_id = res.result.sys_id;

})