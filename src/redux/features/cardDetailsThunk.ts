import { createClient } from 'contentful';
import { createAsyncThunk } from '@reduxjs/toolkit'

// Create a Contentful client using environment variables
export const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
});

// Create an async thunk for fetching data from Contentful
export const fetchData = createAsyncThunk(
    'data/fetch',
    async () => {

        // Use the Contentful client to fetch entries of type 'myJourney'
        const response = await client.getEntries({ content_type: 'myJourney' });

        // Return the fetched items
        return response.items;
    }
);

