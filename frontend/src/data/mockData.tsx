export const players = [
    {
        id: 1,
        name: "Marcus Thorne",
        role: "Batter",
        battingStyle: "Right-hand bat",
        stats: { matches: 42, runs: 1450, average: 38.5, highScore: 112 },
    },
    {
        id: 2,
        name: "Zain Ali",
        role: "Bowler",
        bowlingStyle: "Right-arm fast",
        stats: { matches: 35, wickets: 78, economy: 4.2, bestBowling: "5/24" },
    },
    {
        id: 3,
        name: "David Chen",
        role: "All-rounder",
        battingStyle: "Left-hand bat",
        bowlingStyle: "Slow left-arm orthodox",
        stats: { matches: 50, runs: 980, wickets: 45, average: 28.4 },
    },
    {
        id: 4,
        name: "Liam O'Connor",
        role: "Wicket-keeper",
        battingStyle: "Right-hand bat",
        stats: { matches: 60, catches: 85, stumpings: 22, average: 25.1 },
    }
];

export const fixtures = [
    {
        id: 1,
        date: "2026-05-02",
        time: "14:00",
        opponent: "Royal Strikers CC",
        venue: "Home",
        format: "T20",
        status: "Upcoming"
    },
    {
        id: 2,
        date: "2026-04-25",
        time: "11:00",
        opponent: "Valley Spartans",
        venue: "Away",
        format: "40 Overs",
        status: "Won by 4 wickets"
    }
];