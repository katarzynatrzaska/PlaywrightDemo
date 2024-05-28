import { test, expect } from '@playwright/test';
import {userAPIRequestBody} from '../utils/apiTestData.json'
import { pageURL } from '../utils/pageURL.js';

const postCreateAccountURL = pageURL.postCreateAccountURL;
const getUserURL = pageURL.getUserURL;
const deleteUserURL = pageURL.deleteUserURL;

test('Create user using POST request', async ({ request }) => {
    const response = await request.post(postCreateAccountURL, {
        data: userAPIRequestBody
    });
    expect(response.status()).toBe(200);
});

test('Search for a user using GET request', async ({ request }) => {
    const response = await request.get(getUserURL)
    expect(response.status()).toBe(200);

});

test('Delete user using DELETE request', async ({ request }) => {
    const response = await request.delete(deleteUserURL)
    expect(response.status()).toBe(200);
});