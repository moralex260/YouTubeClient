export interface SearchItem {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  };
  items: [
    {
      kind: string,
      etag: string,
      id: string,
      snippet: {
        publishedAt: string,
        channelId: string,
        title: string,
        description: string
      }
      thumbnails: {
        default: {
          url: string,
          width: number,
          height: number
        },
      }
    }
  ];
}
