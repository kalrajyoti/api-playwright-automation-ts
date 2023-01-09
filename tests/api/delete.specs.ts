import { test, expect } from '@playwright/test'
let _sys_id: string;
test("Delete an Incident", async ({ request, baseURL }) => {
    const _response = await request.delete(`${baseURL}/${_sys_id}`);
    // console.log(await _response.json());
    expect(_response.status()).toBe(204);
    expect(_response.ok()).toBeTruthy();
})