export type Permission = object;
export type User = {
    username?: string;
    password?: string;
    id: string;
    permissions?: Permission[];
    challengerId?: string;
    leaderId?: string;
};
export type BingoSpace = {
    id: string;
    earned: boolean;
};
export type BingoBoard = BingoSpace[][];
export type Challenger = {
    displayName: string;
    bingoBoard: BingoBoard;
} & User;
export type BattleDifficulty = {
    id: number;
    name: string;
};
export type BattleFormat = {
    id: number;
    name: string;
};
export type Leader = {
    leaderName: string;
    badgeName: string;
    bio?: string;
    tagline?: string;
    battleDifficulties?: number;
    battleDifficultiesList?: BattleDifficulty[];
    battleFormats?: number;
    battleFormatsList?: BattleFormat[];
    battleCode?: string;
    queueOpen?: boolean;
    twitchHandle?: string;
    queueOpenText?: string;
    queueCloseText?: string;
} & User;
export type Battle = {
    id: number;
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
    challengerId: string;
    leaderId: string;
    notes: string;
    reportedUTC: number;
};
