const { googleNewsMapper } = require('../mappers/googleNewsMapper');
const assert = require('assert');

describe('Google News Mapper', () => {
    it('should return back a flattened object and apiType', () => {
        const mockGoogleSource = {
            source: {
                id: 'bbc-news',
                name: 'BBC News'
            },
            author: "BBC News",
            title: "Tepco executives cleared over Fukushima disaster",
            description: "It was the only criminal case to arise out of the world's worst nuclear disaster since Chernobyl.",
            url: "http://www.bbc.co.uk/news/world-asia-49750180",
            urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/14F54/production/_96744858_gettyimages-803634122.jpg",
            publishedAt: "2019-09-19T04:39:39Z",
            content: "Image copyrightAFPImage caption\r\n Tsunehisa Katsumata (L), Ichiro Takekuro and Sakae Muto are found not guilty\r\nMore than eight years after the Fukushima nuclear disaster, a Japanese court has cleared three former executives of the firm operating the plant of… [+1718 chars]"
        }
        const mappedSource = googleNewsMapper(mockGoogleSource);

        assert.equal(mappedSource.sourceId, mockGoogleSource.source.id);
        assert.equal(mappedSource.sourceName, mockGoogleSource.source.name);
        assert.equal(mappedSource.apiType, 'google');
    });
});