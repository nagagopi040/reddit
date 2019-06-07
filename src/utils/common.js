export const Common = {
    convertNumber: (num) => {
        let K = 1000,
            M = 1000000,
            B = 1000000000;
        if (num > B) return Number(num / B).toFixed(1) + "B"
        else if (num < B && num > M) return Number(num / M).toFixed(1) + "M"
        else if (num < M && num > K) return Number(num / K).toFixed(1) + "K"
        return num;
    },
    structureUrl: (url) => url.replace(/amp;/g, ""),
    subreddits: [{
            title: "Advice Animals",
            subreddit: "adviceanimals"
        },
        {
            title: "Alternative Art",
            subreddit: "alternativeart"
        },
        {
            title: "Aww",
            subreddit: "aww"
        },
        {
            title: "Cats",
            subreddit: "cats"
        },
        {
            title: "Gifs",
            subreddit: "gifs"
        },
        {
            title: "Hmmm",
            subreddit: "hmmm"
        },
        {
            title: "Images",
            subreddit: "images"
        },
        {
            title: "Photoshop Battles",
            subreddit: "photoshopbattles"
        },
        {
            title: "Pics",
            subreddit: "pics"
        }
    ]
}