export type Account = {
    username?: string;
    password?: string;
    id: string;
    permissions?: Map<string, boolean>;
    _links?: Map<string, string>;
};
export type Challenger = {
    id: string;
    event?: string;
    accountId?: string;
    displayName?: string;
    bingoBoard?: BingoBoard;
};
export type Leader = {
    id: string;
    event?: string;
    accountIds?: string[];
    leaderName?: string;
    badgeName?: string;
    bio?: string;
    tagline?: string;
    battleDifficulties?: BattleDifficulty[];
    battleFormats?: BattleFormat[];
    battleCode?: string;
    queueOpen?: boolean;
    twitchHandle?: string;
};
export type Battle = {
    id: number;
    event?: string;
    challengerId: string;
    leaderId: string;
    battleDifficulty: number;
    battleFormat: number;
    battleStatus: number;
    queuedUTC: number;
    recordedUTC?: number;
    battleCode: string;
};
export type Report = {
    id: number;
    event?: string;
    challengerId: string;
    leaderId: string;
    notes: string;
    reportedUTC: number;
};
export type Event = {
    name: string;
    year: number;
};
export type BingoSpace = {
    id: string;
    earned: boolean;
};
export type BingoBoard = BingoSpace[][];
export type BattleDifficulty = {
    id: number;
    name: string;
};
export type BattleFormat = {
    id: number;
    name: string;
};
export type MeetupTime = {
    location: string;
    startTimeUtc: string;
    durationInMinutes: number;
};
export type LeagueFormat = {
    badgesForElites: number;
    emblemsForChamp: number;
    badgesForChamp: number;
    emblemWeight: number;
};
export type Settings = {
    eventEndDateUtc: string;
    eventSupportsQueueState: boolean;
    leagueFormat: LeagueFormat;
    meetupTimes: MeetupTime[];
    _links: {
        trainerCard: string;
        rulesAsset: string;
        prizesAsset: string;
        scheduleAsset: string;
        mapAsset: string;
    };
};
