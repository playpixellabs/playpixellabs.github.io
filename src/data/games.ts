export interface Game {
    title: string;
    category: string;
    image: string;
    slug: string;
    rating: number;
    color?: string;
}

export const games: Game[] = [
    {
        title: "Neon Runner",
        category: "Action",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
        slug: "neon-runner",
        rating: 4.8,
        color: "#00ffcc"
    },
    {
        title: "Space Shooter",
        category: "Arcade",
        image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=800&auto=format&fit=crop",
        slug: "space-shooter",
        rating: 4.6,
        color: "#60a5fa"
    },
    {
        title: "Snake Classic",
        category: "Arcade",
        image: "https://images.unsplash.com/photo-1628277613967-6ab58cf56736?q=80&w=800&auto=format&fit=crop",
        slug: "snake",
        rating: 4.2,
        color: "#4ade80"
    },
    {
        title: "Memory Match",
        category: "Puzzle",
        image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=800&auto=format&fit=crop",
        slug: "memory-match",
        rating: 4.5,
        color: "#f472b6"
    },
    {
        title: "2048",
        category: "Puzzle",
        image: "https://images.unsplash.com/photo-1612404730960-5c71579fca2c?q=80&w=800&auto=format&fit=crop",
        slug: "2048",
        rating: 4.7,
        color: "#fbbf24"
    },
    {
        title: "Tetris",
        category: "Arcade",
        image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=800&auto=format&fit=crop",
        slug: "tetris",
        rating: 4.9,
        color: "#a78bfa"
    },
    {
        title: "Chess",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=800&auto=format&fit=crop",
        slug: "chess",
        rating: 4.8,
        color: "#94a3b8"
    },
    {
        title: "Subway Surfers",
        category: "Action",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
        slug: "subway-surfers",
        rating: 4.7,
    },
    {
        title: "Candy Crush",
        category: "Puzzle",
        image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?q=80&w=800&auto=format&fit=crop",
        slug: "candy-crush",
        rating: 4.6,
    },
    {
        title: "Clash of Clans",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1640537024316-f38c35c60236?q=80&w=800&auto=format&fit=crop",
        slug: "clash-of-clans",
        rating: 4.8,
    },
    {
        title: "Minecraft",
        category: "Arcade",
        image: "https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?q=80&w=800&auto=format&fit=crop",
        slug: "minecraft",
        rating: 4.9,
    },
    {
        title: "Among Us",
        category: "Action",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
        slug: "among-us",
        rating: 4.4,
    },
    {
        title: "Roblox",
        category: "Action",
        image: "https://images.unsplash.com/photo-1574357278720-d65d4bb33405?q=80&w=800&auto=format&fit=crop",
        slug: "roblox",
        rating: 4.5,
    },
    {
        title: "8 Ball Pool",
        category: "Sports",
        image: "https://images.unsplash.com/photo-1533230489230-22d7650d99fb?q=80&w=800&auto=format&fit=crop",
        slug: "8-ball-pool",
        rating: 4.6,
    },
    {
        title: "Ludo King",
        category: "Board",
        image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=800&auto=format&fit=crop",
        slug: "ludo-king",
        rating: 4.3,
    },
    {
        title: "Hill Climb Racing",
        category: "Racing",
        image: "https://images.unsplash.com/photo-1522037576655-7a93ce0aacf0?q=80&w=800&auto=format&fit=crop",
        slug: "hill-climb",
        rating: 4.5,
    },
    {
        title: "Temple Run 2",
        category: "Action",
        image: "https://images.unsplash.com/photo-1517056037748-0c60956891eb?q=80&w=800&auto=format&fit=crop",
        slug: "temple-run-2",
        rating: 4.4,
    }
];
