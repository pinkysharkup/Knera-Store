export type JournalArticle = {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  content: string;
};

export const journalArticles: JournalArticle[] = [
  {
    id: "1",
    title: "Explore our custom made techniques",
    category: "Handmade",
    date: "18 May",
    image: "/images/post-img-2.jpg",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: "2",
    title: "Crochet learning",
    category: "Creative",
    date: "19 May",
    image: "/images/post-img-1.jpg",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus."
  },
  {
    id: "3",
    title: "Natural wool cloth",
    category: "Creative",
    date: "19 May",
    image: "/images/post-list-1-img-3-294x300.jpg",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
  }
];

export function getArticleById(id: string): JournalArticle | undefined {
  return journalArticles.find(article => article.id === id);
}
