import { GitHubRepo } from './types';

export const getGithubRepos = async (username: string, limit = 6): Promise<GitHubRepo[]> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=${limit}`);
    
    if (!response.ok) {
      throw new Error(`GitHub API hatası: ${response.status}`);
    }
    
    const data = await response.json();
    return data as GitHubRepo[];
  } catch (error) {
    console.error('GitHub repolar alınırken hata:', error);
    return [];
  }
};

export const getGithubStars = async (username: string): Promise<number> => {
  try {
    const repos = await getGithubRepos(username, 100);
    const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
    return totalStars;
  } catch (error) {
    console.error('GitHub yıldızları alınırken hata:', error);
    return 0;
  }
};

export const getRepoLanguages = async (username: string, repoName: string): Promise<Record<string, number>> => {
  try {
    const response = await fetch(`https://api.github.com/repos/${username}/${repoName}/languages`);
    
    if (!response.ok) {
      throw new Error(`GitHub API languages hatası: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`${repoName} repo dilleri alınırken hata:`, error);
    return {};
  }
}; 