//@flow
import GitCommit from '../_git_commit';

export const getCodeVersion = (): string => GitCommit.versionHash;
export const getReleaseDate = (): string => GitCommit.releaseDate;
