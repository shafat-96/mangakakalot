const axios = require('axios');

// Test the API endpoints
async function testAPI() {
  const baseUrl = 'http://localhost:3000/api/manga';
  
  try {
    console.log('Testing search endpoint...');
    const searchResponse = await axios.get(`${baseUrl}/search/naruto`);
    console.log(`Search results: ${searchResponse.data.mangas.length} mangas found`);
    console.log(`Current page: ${searchResponse.data.currentPage}`);
    console.log(`Has next page: ${searchResponse.data.hasNextPage}`);
    if (searchResponse.data.totalPages) {
      console.log(`Total pages: ${searchResponse.data.totalPages}`);
    }
    
    if (searchResponse.data.mangas.length > 0) {
      const firstManga = searchResponse.data.mangas[0];
      console.log(`First manga: ${firstManga.title}`);
      console.log(`Genres: ${firstManga.genres ? firstManga.genres.join(', ') : 'None'}`);
      
      console.log('\nTesting details endpoint...');
      const detailsResponse = await axios.get(`${baseUrl}/details/${firstManga.id}`);
      console.log(`Manga details: ${detailsResponse.data.title}`);
      console.log(`Genres: ${detailsResponse.data.genres.join(', ')}`);
      console.log(`Chapters: ${detailsResponse.data.chapters.length}`);
      
      if (detailsResponse.data.chapters.length > 0) {
        const firstChapter = detailsResponse.data.chapters[0];
        console.log(`\nTesting read endpoint...`);
        const readResponse = await axios.get(`${baseUrl}/read/${firstManga.id}/${firstChapter.id}`);
        console.log(`Chapter images: ${readResponse.data.images.length}`);
      }
    }
    
    console.log('\nTesting latest endpoint...');
    const latestResponse = await axios.get(`${baseUrl}/latest/1`);
    console.log(`Latest mangas: ${latestResponse.data.mangas.length}`);
    console.log(`Current page: ${latestResponse.data.currentPage}`);
    console.log(`Has next page: ${latestResponse.data.hasNextPage}`);
    if (latestResponse.data.totalPages) {
      console.log(`Total pages: ${latestResponse.data.totalPages}`);
    }
    if (latestResponse.data.totalMangas) {
      console.log(`Total mangas: ${latestResponse.data.totalMangas}`);
    }
    
    console.log('\nTesting popular endpoint...');
    const popularResponse = await axios.get(`${baseUrl}/popular/1`);
    console.log(`Popular mangas: ${popularResponse.data.mangas.length}`);
    console.log(`Current page: ${popularResponse.data.currentPage}`);
    
    console.log('\nTesting newest endpoint...');
    const newestResponse = await axios.get(`${baseUrl}/newest/1`);
    console.log(`Newest mangas: ${newestResponse.data.mangas.length}`);
    console.log(`Current page: ${newestResponse.data.currentPage}`);
    
    console.log('\nTesting completed endpoint...');
    const completedResponse = await axios.get(`${baseUrl}/completed/1`);
    console.log(`Completed mangas: ${completedResponse.data.mangas.length}`);
    console.log(`Current page: ${completedResponse.data.currentPage}`);
    
    console.log('\nTesting popular-now endpoint...');
    const popularNowResponse = await axios.get(`${baseUrl}/popular-now`);
    console.log(`Popular now mangas: ${popularNowResponse.data.mangas.length}`);
    console.log(`Count: ${popularNowResponse.data.count}`);
    
    console.log('\nAll tests passed successfully!');
  } catch (error) {
    console.error('Error testing API:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
    }
  }
}

// Run the tests
testAPI(); 