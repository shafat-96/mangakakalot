# MangaKakalot API

A RESTful API for scraping manga data from MangaKakalot.gg.

## Endpoints

### Search Manga
- `GET /api/manga/search/:query?/:page?`
- Search for manga by title
- Parameters:
  - query (optional): Search term (default: "attack on titan")
  - page (optional): Page number (default: 1)

### Get Manga Details
- `GET /api/manga/details/:id`
- Get detailed information about a specific manga

### Read Chapter
- `GET /api/manga/read/:mangaId?/:chapterId?`
- Get chapter images for reading

### Browse Manga
- `GET /api/manga/latest/:page?` - Get latest manga updates (from manga-list/latest-manga)
- `GET /api/manga/popular/:page?` - Get popular manga (from manga-list/hot-manga)
- `GET /api/manga/newest/:page?` - Get newest manga (from manga-list/new-manga)
- `GET /api/manga/completed/:page?` - Get completed manga (from manga-list/completed-manga)
- `GET /api/manga/popular-now` - Get popular now manga (from homepage carousel)
- `GET /api/manga/home` - Get complete homepage data (popular slider and latest updates)
- Parameters:
  - page (optional): Page number (default: 1)

## Response Format

### Manga List Response
```json
{
  "mangas": [
    {
      "id": "manga-id",
      "title": "Manga Title",
      "image": "cover-image-url",
      "latestChapter": "Chapter X",
      "views": 1234,
      "genres": ["Action", "Comedy", "Romance"]
    }
  ],
  "currentPage": 1,
  "hasNextPage": true,
  "totalPages": 100,
  "totalMangas": 5000
}
```

### Manga Details Response
```json
{
  "id": "manga-id",
  "title": "Manga Title",
  "altTitles": "Alternative titles",
  "image": "cover-image-url",
  "author": "Author Name",
  "status": "Ongoing/Completed",
  "genres": ["Action", "Comedy", "Romance"],
  "chapters": [
    {
      "id": "chapter-id",
      "name": "Chapter X",
      "date": "Release date"
    }
  ],
  "anilistId": 12345,
  "poster": "high-quality-poster-url",
  "banner": "banner-image-url"
}
```

### Chapter Images Response
```json
{
  "id": "chapter-id",
  "title": "Chapter Title",
  "mangaId": "manga-id",
  "mangaTitle": "Manga Title",
  "images": ["image-url-1", "image-url-2", "..."],
  "prevChapter": "previous-chapter-id",
  "nextChapter": "next-chapter-id",
  "allChapters": [
    {
      "id": "chapter-id",
      "name": "Chapter X"
    }
  ]
}
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

To test the API:
```bash
npm test
```

The API will be available at http://localhost:3000

## Features

- Scrapes manga data from MangaKakalot.gg
- Integrates with AniList API for high-quality cover images
- Provides endpoints for searching, browsing, and reading manga
- CORS enabled for cross-origin requests
- Caching headers for improved performance
- Proper headers including referer to avoid being blocked
- Pagination information including total pages and total manga count

## Deployment

This API is configured for deployment on Vercel. Simply push to your Vercel-connected repository to deploy. 