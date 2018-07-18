//@flow
import GitCommit from '../_git_commit';

const getCodeVersion = (): string => GitCommit.versionHash;
export default getCodeVersion;
