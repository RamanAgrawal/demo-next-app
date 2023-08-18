import { createClient } from 'contentful';
import { createAsyncThunk } from '@reduxjs/toolkit'


export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
});


export const fetchData = createAsyncThunk(
    'data/fetch',
    async () => {
      const response = await client.getEntries({ content_type: 'myJourney' });
      return response.items;
    }
  );

